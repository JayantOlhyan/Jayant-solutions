import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getRazorpayClient } from "@/lib/payments/razorpay";
import { z } from "zod";

const verifyPaymentSchema = z.object({
  invoice_id: z.string().uuid("Invalid invoice ID"),
  razorpay_payment_id: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = verifyPaymentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { invoice_id, razorpay_payment_id } = parsed.data;
    const adminDb = createAdminClient();

    // 1. Fetch invoice status directly from backend DB
    const { data: invoice, error: invoiceErr } = await adminDb
      .from("invoices")
      .select("*, payments(*)")
      .eq("id", invoice_id)
      .single();

    if (invoiceErr || !invoice) {
      return NextResponse.json(
        { success: false, error: "Invoice not found" },
        { status: 404 }
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

    // 2. If razorpay_payment_id is provided, verify directly with Razorpay API
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
