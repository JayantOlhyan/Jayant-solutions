import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateInvoicePDF } from "@/lib/pdf/invoice-generator";
import { storeInvoicePDF, getSignedInvoiceUrl } from "@/lib/pdf/invoice-storage";
import { sendTransactionalEmail } from "@/lib/notifications/email";
import { recordTermsAcceptance } from "@/lib/privacy/consent";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const signAgreementSchema = z
  .object({
    agreement_id: z.string().uuid("Invalid agreement ID"),
    token: z.string().min(10, "Proposal authorization token is required"),
    signature_text: z.string().min(3, "Full legal name signature required"),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. IP Rate Limit: 10 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${clientIp}:sign_agreement`, 10, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = signAgreementSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { agreement_id, token, signature_text } = parsed.data;

    // 2. Token Rate Limit: 10 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:sign_agreement`, 10, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. Fetch active agreement and proposal details with token check
    const { data: agreement, error: agreeErr } = await adminDb
      .from("agreements")
      .select("*, commercial_terms(*), proposals(*, clients(*))")
      .eq("id", agreement_id)
      .single();

    if (agreeErr || !agreement || agreement.proposals?.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to sign agreement" },
        { status: 403 }
      );
    }

    if (agreement.status === "SIGNED") {
      return NextResponse.json(
        { success: false, error: "Agreement is already signed." },
        { status: 422 }
      );
    }

    const userAgent = request.headers.get("user-agent") || "Browser";
    const signedAt = new Date().toISOString();

    // 4. Mark agreement SIGNED
    const { data: updatedAgreement, error: updateErr } = await adminDb
      .from("agreements")
      .update({
        status: "SIGNED",
        signature_text,
        signed_at: signedAt,
        signer_ip: clientIp,
        signer_user_agent: userAgent,
        updated_at: signedAt,
      })
      .eq("id", agreement.id)
      .select()
      .single();

    if (updateErr) throw updateErr;

    // 5. AUTOMATIC INVOICE GENERATION: Create DB invoice record
    const finalPrice = agreement.commercial_terms.final_agreed_price;
    const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

    const { data: invoice, error: invoiceErr } = await adminDb
      .from("invoices")
      .insert({
        agreement_id: agreement.id,
        subtotal: finalPrice,
        tax_amount: 0.00,
        total_amount: finalPrice,
        status: "ISSUED",
        due_date: dueDate,
      })
      .select()
      .single();

    if (invoiceErr) throw invoiceErr;

    // 6. GENERATE & STORE REAL INVOICE PDF DOCUMENT
    const pdfBuffer = await generateInvoicePDF({
      invoiceNumber: invoice.invoice_number,
      issueDate: invoice.created_at,
      dueDate: invoice.due_date || dueDate,
      clientName: agreement.proposals.clients.name,
      companyName: agreement.proposals.clients.company_name,
      clientEmail: agreement.proposals.clients.email,
      packageName: `v${agreement.commercial_terms.scope_version} Growth Scope`,
      scopeSummary: agreement.commercial_terms.scope_summary,
      subtotal: invoice.subtotal,
      taxAmount: invoice.tax_amount,
      totalAmount: invoice.total_amount,
      status: invoice.status,
    });

    // Upload PDF to private Supabase Storage
    const storagePath = await storeInvoicePDF(invoice.invoice_number, pdfBuffer);

    // Update invoice record with private storage path
    await adminDb
      .from("invoices")
      .update({ pdf_storage_path: storagePath })
      .eq("id", invoice.id);

    // Generate 15-minute signed URL for immediate viewing
    const signedDownloadUrl = await getSignedInvoiceUrl(storagePath, 900);

    // 7. Update proposal status to ACCEPTED
    await adminDb
      .from("proposals")
      .update({ status: "ACCEPTED", updated_at: signedAt })
      .eq("id", agreement.proposal_id);

    // 8. RECORD IMMUTABLE LEGAL CONSENT & TERMS VERSIONING (13.1, 13.9)
    try {
      await recordTermsAcceptance(
        agreement.proposals.clients.id,
        agreement.proposal_id,
        clientIp,
        request.headers.get("user-agent")
      );
    } catch (consentErr) {
      console.warn("⚠️ Warning: Failed to record consent log:", consentErr);
    }

    // 8. Write legal signature audit event
    await adminDb.from("audit_events").insert({
      actor_type: "CLIENT",
      action: "AGREEMENT_DIGITALLY_SIGNED",
      target_entity: "agreements",
      target_id: agreement.id,
      metadata: {
        proposal_id: agreement.proposal_id,
        signature_text,
        signed_at: signedAt,
        invoice_id: invoice.id,
        invoice_number: invoice.invoice_number,
        pdf_storage_path: storagePath,
        total_amount: invoice.total_amount,
      },
      ip_address: clientIp,
      user_agent: userAgent,
    });

    // 9. Dispatch INVOICE_ISSUED transactional notification
    await sendTransactionalEmail({
      recipientEmail: agreement.proposals.clients.email,
      templateKey: "INVOICE_ISSUED",
      subject: `[Invoice Issued] #${invoice.invoice_number} — Jayant Web & AI Systems`,
      payload: {
        invoiceNumber: invoice.invoice_number,
        totalAmount: invoice.total_amount.toLocaleString('en-IN'),
        downloadUrl: signedDownloadUrl,
      },
      idempotencyKey: `notif_invoice_issued_${invoice.id}`,
    });

    return NextResponse.json({
      success: true,
      message: "Agreement digitally signed, invoice created, and PDF document generated successfully.",
      agreement: updatedAgreement,
      invoice: {
        id: invoice.id,
        invoice_number: invoice.invoice_number,
        total_amount: invoice.total_amount,
        status: invoice.status,
        due_date: invoice.due_date,
        pdf_storage_path: storagePath,
        download_url: signedDownloadUrl,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to sign agreement";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
