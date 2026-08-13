import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getRazorpayClient } from "@/lib/payments/razorpay";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const verifyPaymentSchema = z
  .object({
    invoice_id: z.string().uuid("Invalid invoice ID"),
    token: z.string().min(10, "Proposal authorization token is required"),
    razorpay_payment_id: z.string().optional(),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. IP Rate limit: 15 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${clientIp}:verify_payment`, 15, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = verifyPaymentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { invoice_id, token, razorpay_payment_id } = parsed.data;

    // 2. Token Rate limit: 15 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:verify_payment`, 15, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. Fetch invoice status directly from backend DB with token authorization
    const { data: invoice, error: invoiceErr } = await adminDb
      .from("invoices")
      .select("*, agreements(*, proposals(*))")
      .eq("id", invoice_id)
      .single();

    if (invoiceErr || !invoice || invoice.agreements?.proposals?.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to payment verification" },
        { status: 403 }
      );
    }

    // If database already confirms invoice is PAID, return verification immediately
    if (invoice.status === "PAID") {
      return NextResponse.json({
        success: true,
        verified: true,
        invoice_number: invoice.invoice_number,
        paid_at: invoice.paid_at,
        message: "Payment verified by backend database",
      });
    }

    // 4. If razorpay_payment_id is provided, verify directly with Razorpay API
    if (razorpay_payment_id) {
      try {
        const razorpay = getRazorpayClient();
        const paymentData = await razorpay.payments.fetch(razorpay_payment_id);

        if (paymentData.status === "captured" || paymentData.status === "authorized") {
          const now = new Date().toISOString();

          // Update Invoice to PAID
          await adminDb
            .from("invoices")
            .update({ status: "PAID", paid_at: now, updated_at: now })
            .eq("id", invoice.id);

          // Update Payment status to PAID
          await adminDb
            .from("payments")
            .update({ status: "PAID", razorpay_payment_id, updated_at: now })
            .eq("invoice_id", invoice.id);

          // Audit log
          await adminDb.from("audit_events").insert({
            actor_type: "SYSTEM",
            action: "PAYMENT_VERIFIED_VIA_DIRECT_LOOKUP",
            target_entity: "invoices",
            target_id: invoice.id,
            metadata: { razorpay_payment_id },
          });

          return NextResponse.json({
            success: true,
            verified: true,
            invoice_number: invoice.invoice_number,
            paid_at: now,
            message: "Payment verified directly via Razorpay API",
          });
        }
      } catch (rzpErr) {
        console.warn("Direct Razorpay lookup error or missing keys:", rzpErr);
      }
    }

    return NextResponse.json({
      success: true,
      verified: false,
      invoice_number: invoice.invoice_number,
      message: "Payment is pending verification. Scheduling remains locked.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Payment verification failed";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
