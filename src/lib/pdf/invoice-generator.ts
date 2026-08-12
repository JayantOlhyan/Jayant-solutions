import PDFDocument from "pdfkit";

export interface InvoicePDFParams {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  clientName: string;
  companyName?: string | null;
  clientEmail: string;
  packageName: string;
  scopeSummary: string;
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  status: string;
}

/**
 * Generates a clean, professional PDF invoice Buffer for Jayant Web & AI Systems.
 */
export async function generateInvoicePDF(params: InvoicePDFParams): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: "A4" });
      const buffers: Buffer[] = [];

      doc.on("data", (chunk) => buffers.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(buffers)));
      doc.on("error", (err) => reject(err));

      // Brand Color Palette
      const primaryColor = "#080C16"; // Dark slate
      const accentColor = "#C5A880";  // Warm gold
      const textMuted = "#505A6E";
      const borderColor = "#E2E8F0";

      // 1. Header & Brand Block
      doc
        .fillColor(primaryColor)
        .fontSize(22)
        .font("Helvetica-Bold")
        .text("JAYANT WEB & AI SYSTEMS", 50, 50);

      doc
        .fillColor(textMuted)
        .fontSize(9)
        .font("Helvetica")
        .text("High-Converting Digital Growth & AI Systems Practice", 50, 78)
        .text("New Delhi, India | Email: hello@jayantolhyan.in | Web: jayantolhyan.in", 50, 92);

      // Invoice Document Title (Right Aligned)
      doc
        .fillColor(accentColor)
        .fontSize(20)
        .font("Helvetica-Bold")
        .text("INVOICE", 400, 50, { align: "right" });

      doc
        .fillColor(primaryColor)
        .fontSize(10)
        .font("Helvetica-Bold")
        .text(`# ${params.invoiceNumber}`, 400, 75, { align: "right" });

      doc
        .fillColor(textMuted)
        .fontSize(9)
        .font("Helvetica")
        .text(`Status: ${params.status.toUpperCase()}`, 400, 90, { align: "right" });

      // Horizontal Divider
      doc.moveTo(50, 115).lineTo(545, 115).strokeColor(borderColor).lineWidth(1).stroke();

      // 2. Billed To & Dates Block
      const detailsTop = 130;

      // Billed To Column
      doc
        .fillColor(accentColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("BILLED TO:", 50, detailsTop);

      doc
        .fillColor(primaryColor)
        .fontSize(11)
        .font("Helvetica-Bold")
        .text(params.clientName, 50, detailsTop + 15);

      if (params.companyName) {
        doc
          .fillColor(textMuted)
          .fontSize(9)
          .font("Helvetica")
          .text(params.companyName, 50, detailsTop + 30);
      }

      doc
        .fillColor(textMuted)
        .fontSize(9)
        .font("Helvetica")
        .text(params.clientEmail, 50, detailsTop + (params.companyName ? 43 : 30));

      // Invoice Dates Column (Right side)
      doc
        .fillColor(accentColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("INVOICE DETAILS:", 350, detailsTop);

      doc
        .fillColor(textMuted)
        .fontSize(9)
        .font("Helvetica")
        .text(`Invoice Date: ${new Date(params.issueDate).toLocaleDateString('en-IN')}`, 350, detailsTop + 15)
        .text(`Due Date: ${new Date(params.dueDate).toLocaleDateString('en-IN')}`, 350, detailsTop + 30)
        .text(`Engagement Period: 90 Days`, 350, detailsTop + 45);

      // 3. Line Items Table
      const tableTop = 210;

      // Table Header Row
      doc
        .rect(50, tableTop, 495, 24)
        .fill("#F8FAFC");

      doc
        .fillColor(primaryColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("DESCRIPTION / ENGAGEMENT SCOPE", 60, tableTop + 7)
        .text("AMOUNT (INR)", 430, tableTop + 7, { align: "right" });

      // Item Row
      const itemTop = tableTop + 34;

      doc
        .fillColor(primaryColor)
        .fontSize(10)
        .font("Helvetica-Bold")
        .text(`${params.packageName} Package`, 60, itemTop);

      doc
        .fillColor(textMuted)
        .fontSize(8.5)
        .font("Helvetica")
        .text(params.scopeSummary, 60, itemTop + 16, { width: 340 });

      doc
        .fillColor(primaryColor)
        .fontSize(10)
        .font("Helvetica-Bold")
        .text(`₹${params.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 430, itemTop, { align: "right" });

      // Table Bottom Border
      const tableBottom = itemTop + 60;
      doc.moveTo(50, tableBottom).lineTo(545, tableBottom).strokeColor(borderColor).lineWidth(1).stroke();

      // 4. Totals & Tax Disclaimer Block
      const totalsTop = tableBottom + 15;

      doc
        .fillColor(textMuted)
        .fontSize(9)
        .font("Helvetica")
        .text("Subtotal:", 350, totalsTop, { align: "left" });

      doc
        .fillColor(primaryColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text(`₹${params.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 430, totalsTop, { align: "right" });

      // Explicit Tax Treatment Notice (Does not invent GSTIN)
      doc
        .fillColor(textMuted)
        .fontSize(9)
        .font("Helvetica")
        .text("Tax Treatment:", 350, totalsTop + 18, { align: "left" });

      doc
        .fillColor(textMuted)
        .fontSize(8)
        .font("Helvetica-Oblique")
        .text("PENDING TAX CONFIG / PRO-FORMA", 430, totalsTop + 18, { align: "right" });

      // Total Line
      doc
        .rect(340, totalsTop + 36, 205, 28)
        .fill(primaryColor);

      doc
        .fillColor("#FFFFFF")
        .fontSize(11)
        .font("Helvetica-Bold")
        .text("TOTAL DUE:", 350, totalsTop + 44);

      doc
        .fillColor(accentColor)
        .fontSize(12)
        .font("Helvetica-Bold")
        .text(`₹${params.totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 430, totalsTop + 43, { align: "right" });

      // 5. Payment Instructions & Footer
      const footerTop = totalsTop + 90;

      doc
        .fillColor(accentColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("PAYMENT INSTRUCTIONS & TERMS:", 50, footerTop);

      doc
        .fillColor(textMuted)
        .fontSize(8.5)
        .font("Helvetica")
        .text("1. Payment can be completed securely online via Razorpay payment link or bank transfer.", 50, footerTop + 15)
        .text("2. Please remit payment on or before the due date to unlock kickoff session scheduling.", 50, footerTop + 28)
        .text("3. Tax breakdown will be finalized upon CA review if applicable.", 50, footerTop + 41);

      // Footer line
      doc
        .moveTo(50, 750)
        .lineTo(545, 750)
        .strokeColor(borderColor)
        .lineWidth(0.5)
        .stroke();

      doc
        .fillColor(textMuted)
        .fontSize(8)
        .font("Helvetica")
        .text("Jayant Web & AI Systems — Computer-Generated Formal Commercial Invoice", 50, 760, { align: "center" });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
