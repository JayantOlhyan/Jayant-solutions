import { createAdminClient } from "@/lib/supabase/admin";

const INVOICES_BUCKET = "invoices";

/**
 * Stores generated PDF binary buffer in private Supabase Storage.
 * Returns the storage relative path (e.g., "invoices/INV-2026-1001.pdf").
 */
export async function storeInvoicePDF(
  invoiceNumber: string,
  pdfBuffer: Buffer
): Promise<string> {
  const adminDb = createAdminClient();
  const filePath = `private/${invoiceNumber}.pdf`;

  // 1. Ensure private bucket exists
  const { data: buckets } = await adminDb.storage.listBuckets();
  const bucketExists = buckets?.some((b) => b.name === INVOICES_BUCKET);

  if (!bucketExists) {
    await adminDb.storage.createBucket(INVOICES_BUCKET, {
      public: false, // PRIVATE BUCKET — NEVER EXPOSED PUBLICLY
      fileSizeLimit: 10485760, // 10MB limit
      allowedMimeTypes: ["application/pdf"],
    });
  }

  // 2. Upload PDF buffer with upsert to prevent duplication errors
  const { error: uploadError } = await adminDb.storage
    .from(INVOICES_BUCKET)
    .upload(filePath, pdfBuffer, {
      contentType: "application/pdf",
      upsert: true,
    });

  if (uploadError) {
    throw new Error(`Failed to store invoice PDF in private storage: ${uploadError.message}`);
  }

  return `${INVOICES_BUCKET}/${filePath}`;
}

/**
 * Generates a signed, time-limited URL for authorized PDF download.
 * Default expiration: 15 minutes (900 seconds).
 */
export async function getSignedInvoiceUrl(
  pdfStoragePath: string,
  expiresInSeconds = 900
): Promise<string> {
  const adminDb = createAdminClient();

  // Extract bucket and relative path
  const parts = pdfStoragePath.split("/");
  const bucketName = parts[0];
  const relativePath = parts.slice(1).join("/");

  const { data, error } = await adminDb.storage
    .from(bucketName)
    .createSignedUrl(relativePath, expiresInSeconds);

  if (error || !data?.signedUrl) {
    throw new Error(`Failed to generate signed URL for invoice PDF: ${error?.message || "Unknown error"}`);
  }

  return data.signedUrl;
}
