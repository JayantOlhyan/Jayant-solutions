import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { createRazorpayRefund, fromPaise } from "@/lib/payments/razorpay";
import { logAdminAction } from "@/lib/auth/audit";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const refundSchema = z.object({
  payment_id: z.string().min(1, "Payment ID is required"),
  amount: z.number().positive("Refund amount must be positive").optional(),
  reason: z.string().min(5, "Refund reason must be at least 5 characters"),
});

export async function POST(request: Request) {
  try {
    const admin = await requireAdmin();
    const ip = getClientIp(request);

    // 1. IP Rate Limiting (10 refund requests per 15 minutes)
    const rateLimit = await checkRateLimit(`ip:${ip}:admin_refund`, 10, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = refundSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { payment_id, amount, reason } = parsed.data;
    const adminDb = createAdminClient();

    // 2. Fetch target payment record
    const { data: payment, error: payErr } = await adminDb
      .from("payments")
      .select("*, invoices(*, agreements(*, proposals(*, clients(*))))")
      .or(`id.eq.${payment_id},razorpay_payment_id.eq.${payment_id}`)
      .single();

    if (payErr || !payment) {
      return NextResponse.json(
        { success: false, error: "Payment record not found." },
        { status: 404 }
      );
    }

    if (payment.status !== "PAID" && payment.status !== "PARTIALLY_REFUNDED") {
      return NextResponse.json(
        { success: false, error: `Cannot refund payment with status: ${payment.status}` },
        { status: 400 }
      );
    }

    const refundAmount = amount || Number(payment.amount);
    if (refundAmount > Number(payment.amount)) {
      return NextResponse.json(
        { success: false, error: "Refund amount cannot exceed original payment amount." },
        { status: 400 }
      );
    }

    let rzpRefundId = `rfnd_mock_${Date.now()}`;
    let isMock = false;

    // 3. Dispatch to Razorpay Refund API if live payment ID exists
    if (payment.razorpay_payment_id && !payment.razorpay_payment_id.includes("mock") && !payment.razorpay_payment_id.includes("test")) {
      try {
        const rzpResponse = await createRazorpayRefund(
          payment.razorpay_payment_id,
          refundAmount,
          {
            reason,
            admin_id: admin.id,
            admin_email: admin.email,
            invoice_id: payment.invoice_id,
          }
        );
        rzpRefundId = rzpResponse.id;
      } catch (rzpErr: unknown) {
        const msg = rzpErr instanceof Error ? rzpErr.message : "Razorpay refund failed";
        return NextResponse.json(
          { success: false, error: `Payment Gateway Error: ${msg}` },
          { status: 502 }
        );
      }
    } else {
      isMock = true;
      console.log(`ℹ️ [SIMULATED REFUND] Processed refund for payment ${payment.id} (₹${refundAmount})`);
    }

    const isFullRefund = refundAmount >= Number(payment.amount);
    const newPaymentStatus = isFullRefund ? "REFUNDED" : "PARTIALLY_REFUNDED";

    // 4. Update payments table
    await adminDb
      .from("payments")
      .update({
        status: newPaymentStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", payment.id);

    // 5. Update invoice status
    if (isFullRefund && payment.invoice_id) {
      await adminDb
        .from("invoices")
        .update({
          status: "CANCELLED",
          updated_at: new Date().toISOString(),
        })
        .eq("id", payment.invoice_id);
    }

    // 6. Log audit event
    await logAdminAction({
      actorId: admin.id,
      action: "ADMIN_PAYMENT_REFUNDED",
      targetEntity: "payments",
      targetId: payment.id,
      metadata: {
        invoice_id: payment.invoice_id,
        refundAmount,
        originalAmount: payment.amount,
        isFullRefund,
        reason,
        rzpRefundId,
        isMock,
      },
      ipAddress: ip,
    });

    return NextResponse.json({
      success: true,
      message: isFullRefund
        ? "Full payment refund processed successfully."
        : "Partial refund processed successfully.",
      refund: {
        refundId: rzpRefundId,
        paymentId: payment.id,
        amountRefunded: refundAmount,
        status: newPaymentStatus,
        isMock,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal refund error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
