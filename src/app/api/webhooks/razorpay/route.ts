import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-razorpay-signature");
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // 1. Webhook Signature Verification
    if (webhookSecret && signature) {
      const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(rawBody)
        .digest("hex");

      if (expectedSignature !== signature) {
        console.error("❌ Invalid Razorpay Webhook Signature");
        return NextResponse.json(
          { success: false, error: "Invalid webhook signature" },
          { status: 400 }
        );
      }
    }

    const payload = JSON.parse(rawBody);
    const eventType = payload.event;
    const eventId = payload.event_id || payload.payload?.payment?.entity?.id || payload.payload?.payment_link?.entity?.id || `evt_${Date.now()}`;

    const adminDb = createAdminClient();

    // 2. Webhook Idempotency Check: Log raw event; if duplicate event_id exists, exit early
    const { error: eventErr } = await adminDb
      .from("payment_events")
      .insert({
        event_id: eventId,
        event_type: eventType,
        raw_payload: payload,
        processed: false,
      });

    if (eventErr && eventErr.code === "23505") {
      // Duplicate event_id caught by unique constraint
      console.log(`ℹ️ Duplicate webhook event received (${eventId}). Skipping.`);
      return NextResponse.json({ success: true, message: "Duplicate webhook event acknowledged" });
    }

    // Extract payment link / payment details from payload
    const paymentLinkEntity = payload.payload?.payment_link?.entity;
    const paymentEntity = payload.payload?.payment?.entity;

    const rzpLinkId = paymentLinkEntity?.id || paymentEntity?.notes?.razorpay_link_id;
    const rzpPaymentId = paymentEntity?.id;
    const invoiceId = paymentEntity?.notes?.invoice_id || paymentLinkEntity?.notes?.invoice_id;

    // 3. Process Events
    if (eventType === "payment_link.paid" || eventType === "payment.captured") {
      // Update Payment status to PAID
      if (rzpLinkId) {
        await adminDb
          .from("payments")
          .update({
            status: "PAID",
            razorpay_payment_id: rzpPaymentId || null,
            updated_at: new Date().toISOString(),
          })
          .eq("razorpay_link_id", rzpLinkId);
      }

      // Update Invoice status to PAID
      if (invoiceId) {
        await adminDb
          .from("invoices")
          .update({
            status: "PAID",
            paid_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", invoiceId);
      }

      // Mark payment_event processed
      await adminDb
        .from("payment_events")
        .update({ processed: true, processed_at: new Date().toISOString() })
        .eq("event_id", eventId);

      // Audit Log
      await adminDb.from("audit_events").insert({
        actor_type: "SYSTEM",
        action: "PAYMENT_VERIFIED_VIA_WEBHOOK",
        target_entity: "invoices",
        target_id: invoiceId || null,
        metadata: {
          event_type: eventType,
          razorpay_payment_id: rzpPaymentId,
          razorpay_link_id: rzpLinkId,
        },
      });
    } else if (eventType === "payment_link.expired") {
      if (rzpLinkId) {
        await adminDb
          .from("payments")
          .update({ status: "EXPIRED", updated_at: new Date().toISOString() })
          .eq("razorpay_link_id", rzpLinkId);
      }
    } else if (eventType === "payment.failed") {
      if (rzpLinkId) {
        await adminDb
          .from("payments")
          .update({ status: "FAILED", updated_at: new Date().toISOString() })
          .eq("razorpay_link_id", rzpLinkId);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Webhook event processed successfully",
      event: eventType,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Webhook processing error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
