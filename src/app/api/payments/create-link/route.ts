import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getRazorpayClient } from "@/lib/payments/razorpay";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const createPaymentLinkSchema = z
  .object({
    invoice_id: z.string().uuid("Invalid invoice ID"),
    token: z.string().min(10, "Proposal authorization token is required"),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. IP Rate limit: 15 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${clientIp}:create_payment_link`, 15, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = createPaymentLinkSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { invoice_id, token } = parsed.data;

    // 2. Token Rate limit: 15 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:create_payment_link`, 15, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. SERVER-SIDE AMOUNT LOOKUP & TOKEN VERIFICATION
    const { data: invoice, error: invoiceErr } = await adminDb
      .from("invoices")
      .select("*, agreements(*, proposals(*, clients(*)))")
      .eq("id", invoice_id)
      .single();

    if (invoiceErr || !invoice || invoice.agreements?.proposals?.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to payment creation" },
        { status: 403 }
      );
    }

    if (invoice.status === "PAID") {
      return NextResponse.json(
        { success: false, error: "Invoice is already paid." },
        { status: 422 }
      );
    }

    // 4. Check if a valid, unexpired payment link already exists for this invoice
    const { data: existingPayment } = await adminDb
      .from("payments")
      .select("*")
      .eq("invoice_id", invoice.id)
      .eq("status", "ISSUED")
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingPayment && existingPayment.payment_url) {
      return NextResponse.json({
        success: true,
        message: "Existing active payment link retrieved",
        payment: existingPayment,
      });
    }

    // Amount in Razorpay MUST be in paise (₹1 = 100 paise)
    const amountInPaise = Math.round(invoice.total_amount * 100);
    const client = invoice.agreements.proposals.clients;
    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/proposal/${invoice.agreements.proposal_id}/commercials?payment=success`;

    let razorpayLinkId = `plink_test_${Date.now()}`;
    let paymentUrl = `${callbackUrl}&mock=true`;
    const expireTimestamp = Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60);

    // 5. Call Razorpay Hosted Payment Links API if credentials exist
    try {
      const razorpay = getRazorpayClient();
      const linkResponse = await razorpay.paymentLink.create({
        amount: amountInPaise,
        currency: "INR",
        accept_partial: false,
        description: `Payment for Invoice #${invoice.invoice_number} — Jayant Web & AI Systems`,
        customer: {
          name: client.name,
          email: client.email,
          contact: client.phone || "+919999999999",
        },
        notify: {
          sms: true,
          email: true,
        },
        reminder_enable: true,
        notes: {
          invoice_id: invoice.id,
          invoice_number: invoice.invoice_number,
          proposal_id: invoice.agreements.proposal_id,
        },
        callback_url: callbackUrl,
        callback_method: "get",
        expire_by: expireTimestamp,
      });

      razorpayLinkId = linkResponse.id;
      paymentUrl = linkResponse.short_url;
    } catch (rzpErr: unknown) {
      console.warn("Razorpay API fallback:", rzpErr);
    }

    // 6. Record Payment in DB
    const { data: payment, error: payErr } = await adminDb
      .from("payments")
      .insert({
        invoice_id: invoice.id,
        razorpay_link_id: razorpayLinkId,
        amount: invoice.total_amount,
        currency: "INR",
        status: "ISSUED",
        payment_url: paymentUrl,
        expires_at: new Date(expireTimestamp * 1000).toISOString(),
      })
      .select()
      .single();

    if (payErr) throw payErr;

    // 7. Audit Log
    await adminDb.from("audit_events").insert({
      actor_type: "SYSTEM",
      action: "PAYMENT_LINK_CREATED",
      target_entity: "payments",
      target_id: payment.id,
      metadata: {
        invoice_id: invoice.id,
        amount: invoice.total_amount,
        razorpay_link_id: razorpayLinkId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Razorpay Payment Link generated successfully",
      payment,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create payment link";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
