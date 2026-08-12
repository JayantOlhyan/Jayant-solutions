import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateInvoicePDF } from "@/lib/pdf/invoice-generator";
import { storeInvoicePDF, getSignedInvoiceUrl } from "@/lib/pdf/invoice-storage";
import { z } from "zod";

const signAgreementSchema = z.object({
  agreement_id: z.string().uuid("Invalid agreement ID"),
  signature_text: z.string().min(3, "Full legal name signature required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = signAgreementSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { agreement_id, signature_text } = parsed.data;
    const adminDb = createAdminClient();

    // 1. Fetch active agreement and proposal details
    const { data: agreement, error: agreeErr } = await adminDb
      .from("agreements")
      .select("*, commercial_terms(*), proposals(*, clients(*))")
      .eq("id", agreement_id)
      .single();

    if (agreeErr || !agreement) {
      return NextResponse.json(
        { success: false, error: "Agreement not found" },
        { status: 404 }
      );
    }

    if (agreement.status === "SIGNED") {
      return NextResponse.json(
        { success: false, error: "Agreement is already signed." },
        { status: 422 }
      );
    }

    const clientIp = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "Browser";
    const signedAt = new Date().toISOString();

    // 2. Mark agreement SIGNED
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

    // 3. AUTOMATIC INVOICE GENERATION: Create DB invoice record
    const finalPrice = agreement.commercial_terms.final_agreed_price;
    const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

    const { data: invoice, error: invoiceErr } = await adminDb
      .from("invoices")
      .insert({
        agreement_id: agreement.id,
        subtotal: finalPrice,
        tax_amount: 0.00, // Tax handling flagged for CA review (Phase 15)
        total_amount: finalPrice,
        status: "ISSUED",
        due_date: dueDate,
      })
      .select()
      .single();

    if (invoiceErr) throw invoiceErr;

    // 4. GENERATE & STORE REAL INVOICE PDF DOCUMENT
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

    // 5. Update proposal status to ACCEPTED
    await adminDb
      .from("proposals")
      .update({ status: "ACCEPTED", updated_at: signedAt })
      .eq("id", agreement.proposal_id);

    // 6. Write legal signature audit event
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
