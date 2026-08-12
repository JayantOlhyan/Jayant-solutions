import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { generateInvoicePDF } from "@/lib/pdf/invoice-generator";
import { storeInvoicePDF, getSignedInvoiceUrl } from "@/lib/pdf/invoice-storage";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const adminDb = createAdminClient();

    // 1. Fetch invoice with associated agreement, commercial terms, and client details
    const { data: invoice, error: invoiceErr } = await adminDb
      .from("invoices")
      .select("*, agreements(*, commercial_terms(*), proposals(*, clients(*)))")
      .eq("id", id)
      .single();

    if (invoiceErr || !invoice) {
      return NextResponse.json(
        { success: false, error: "Invoice not found" },
        { status: 404 }
      );
    }

    let storagePath = invoice.pdf_storage_path;

    // 2. If PDF was not generated or path is missing, generate and upload it on demand
    if (!storagePath) {
      const pdfBuffer = await generateInvoicePDF({
        invoiceNumber: invoice.invoice_number,
        issueDate: invoice.created_at,
        dueDate: invoice.due_date || new Date().toISOString(),
        clientName: invoice.agreements.proposals.clients.name,
        companyName: invoice.agreements.proposals.clients.company_name,
        clientEmail: invoice.agreements.proposals.clients.email,
        packageName: `v${invoice.agreements.commercial_terms.scope_version} Growth Scope`,
        scopeSummary: invoice.agreements.commercial_terms.scope_summary,
        subtotal: invoice.subtotal,
        taxAmount: invoice.tax_amount,
        totalAmount: invoice.total_amount,
        status: invoice.status,
      });

      storagePath = await storeInvoicePDF(invoice.invoice_number, pdfBuffer);

      await adminDb
        .from("invoices")
        .update({ pdf_storage_path: storagePath })
        .eq("id", invoice.id);
    }

    // 3. Generate signed, time-limited URL (valid for 15 minutes / 900s)
    const signedDownloadUrl = await getSignedInvoiceUrl(storagePath, 900);

    return NextResponse.json({
      success: true,
      invoice_number: invoice.invoice_number,
      pdf_storage_path: storagePath,
      download_url: signedDownloadUrl,
      expires_in_seconds: 900,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to retrieve invoice document";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
