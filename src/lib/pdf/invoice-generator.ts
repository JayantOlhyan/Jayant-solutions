import PDFDocument from "pdfkit";

export interface InvoicePDFParams {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  clientName: string;
  companyName?: string | null;
  clientEmail: string;
  clientGstin?: string | null;
  clientState?: string | null;
  packageName: string;
  scopeSummary: string;
  subtotal: number;
  taxAmount: number;
  totalAmount: number;
  status: string;
  sacCode?: string;
}

/**
 * Generates a GST-compliant, luxury-styled PDF invoice Buffer for Jayant Web & AI Systems (6B.2).
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
      const sacCode = params.sacCode || "998313"; // SAC: Information Technology & Digital Consulting

      // 1. Header & Brand Block
      doc
        .fillColor(primaryColor)
        .fontSize(20)
        .font("Helvetica-Bold")
        .text("JAYANT WEB & AI SYSTEMS", 50, 45);

      doc
        .fillColor(textMuted)
        .fontSize(8.5)
        .font("Helvetica")
        .text("High-Performance Web Architecture, AI Engineering & Growth Systems", 50, 70)
        .text("Registered Office: New Delhi - 110001, India | State Code: 07 (Delhi)", 50, 82)
        .text("Email: hello@jayantolhyan.in | Web: https://jayant-systems.online", 50, 94);

      // Invoice Document Title (Right Aligned)
      doc
        .fillColor(accentColor)
        .fontSize(16)
        .font("Helvetica-Bold")
        .text("COMMERCIAL INVOICE", 360, 45, { align: "right" });

      doc
        .fillColor(textMuted)
        .fontSize(7.5)
        .font("Helvetica-Oblique")
        .text("(Prepared for CA Review)", 360, 62, { align: "right" });

      doc
        .fillColor(primaryColor)
        .fontSize(9.5)
        .font("Helvetica-Bold")
        .text(`# ${params.invoiceNumber}`, 360, 74, { align: "right" });

      const statusColor = params.status.toUpperCase() === "PAID" ? "#10B981" : accentColor;
      doc
        .fillColor(statusColor)
        .fontSize(8.5)
        .font("Helvetica-Bold")
        .text(`STATUS: ${params.status.toUpperCase()}`, 360, 88, { align: "right" });

      // Horizontal Divider
      doc.moveTo(50, 110).lineTo(545, 110).strokeColor(borderColor).lineWidth(1).stroke();

      // 2. Billed To & GST Meta Block
      const detailsTop = 122;

      // Billed To Column
      doc
        .fillColor(accentColor)
        .fontSize(8.5)
        .font("Helvetica-Bold")
        .text("BILLED TO / RECIPIENT:", 50, detailsTop);

      doc
        .fillColor(primaryColor)
        .fontSize(10.5)
        .font("Helvetica-Bold")
        .text(params.clientName, 50, detailsTop + 14);

      let clientOffset = detailsTop + 28;
      if (params.companyName) {
        doc
          .fillColor(textMuted)
          .fontSize(8.5)
          .font("Helvetica")
          .text(params.companyName, 50, clientOffset);
        clientOffset += 12;
      }

      doc
        .fillColor(textMuted)
        .fontSize(8.5)
        .font("Helvetica")
        .text(`Email: ${params.clientEmail}`, 50, clientOffset);

      if (params.clientGstin) {
        clientOffset += 12;
        doc
          .fillColor(textMuted)
          .fontSize(8.5)
          .font("Helvetica")
          .text(`Client GSTIN: ${params.clientGstin}`, 50, clientOffset);
      }

      // Invoice & GST Details Column (Right Side)
      doc
        .fillColor(accentColor)
        .fontSize(8.5)
        .font("Helvetica-Bold")
        .text("GST & SUPPLY DETAILS:", 340, detailsTop);

      doc
        .fillColor(textMuted)
        .fontSize(8.5)
        .font("Helvetica")
        .text(`Invoice Date: ${new Date(params.issueDate).toLocaleDateString("en-IN")}`, 340, detailsTop + 14)
        .text(`Due Date: ${new Date(params.dueDate).toLocaleDateString("en-IN")}`, 340, detailsTop + 26)
        .text(`Place of Supply: ${params.clientState || "Delhi (07)"}`, 340, detailsTop + 38)
        .text(`Reverse Charge Applicable: No`, 340, detailsTop + 50);

      // 3. Line Items & SAC Table
      const tableTop = 205;

      // Table Header Row
      doc
        .rect(50, tableTop, 495, 22)
        .fill("#F8FAFC");

      doc
        .fillColor(primaryColor)
        .fontSize(8)
        .font("Helvetica-Bold")
        .text("SERVICES DESCRIPTION", 60, tableTop + 7)
        .text("SAC CODE", 290, tableTop + 7)
        .text("TAXABLE VALUE", 370, tableTop + 7, { align: "right" })
        .text("TOTAL (INR)", 470, tableTop + 7, { align: "right" });

      // Item Row
      const itemTop = tableTop + 30;

      doc
        .fillColor(primaryColor)
        .fontSize(9.5)
        .font("Helvetica-Bold")
        .text(`${params.packageName} Engagement`, 60, itemTop);

      doc
        .fillColor(textMuted)
        .fontSize(8)
        .font("Helvetica")
        .text(params.scopeSummary, 60, itemTop + 14, { width: 220 });

      // SAC Code Column
      doc
        .fillColor(primaryColor)
        .fontSize(8.5)
        .font("Helvetica-Bold")
        .text(sacCode, 290, itemTop);

      // Taxable Value
      doc
        .fillColor(primaryColor)
        .fontSize(9)
        .font("Helvetica")
        .text(`₹${params.subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 370, itemTop, { align: "right" });

      // Total Line Item
      doc
        .fillColor(primaryColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text(`₹${params.subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 470, itemTop, { align: "right" });

      // Table Bottom Border
      const tableBottom = itemTop + 55;
      doc.moveTo(50, tableBottom).lineTo(545, tableBottom).strokeColor(borderColor).lineWidth(1).stroke();

      // 4. Totals & Tax Breakdown Block
      const totalsTop = tableBottom + 12;

      doc
        .fillColor(textMuted)
        .fontSize(8.5)
        .font("Helvetica")
        .text("Taxable Subtotal:", 340, totalsTop, { align: "left" });

      doc
        .fillColor(primaryColor)
        .fontSize(8.5)
        .font("Helvetica-Bold")
        .text(`₹${params.subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 470, totalsTop, { align: "right" });

      if (params.taxAmount > 0) {
        // CGST + SGST (9% + 9%) or IGST (18%)
        const halfTax = params.taxAmount / 2;
        doc
          .fillColor(textMuted)
          .fontSize(8)
          .font("Helvetica")
          .text("CGST (9.0%):", 340, totalsTop + 14)
          .text("SGST (9.0%):", 340, totalsTop + 26);

        doc
          .fillColor(primaryColor)
          .fontSize(8)
          .font("Helvetica")
          .text(`₹${halfTax.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 470, totalsTop + 14, { align: "right" })
          .text(`₹${halfTax.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 470, totalsTop + 26, { align: "right" });
      } else {
        doc
          .fillColor(textMuted)
          .fontSize(8)
          .font("Helvetica")
          .text("Integrated Tax (IGST / Exemption):", 340, totalsTop + 14);

        doc
          .fillColor(textMuted)
          .fontSize(8)
          .font("Helvetica")
          .text("₹0.00 (Pro-forma)", 470, totalsTop + 14, { align: "right" });
      }

      // Total Due Box
      const totalBoxTop = totalsTop + (params.taxAmount > 0 ? 42 : 30);
      doc
        .rect(330, totalBoxTop, 215, 26)
        .fill(primaryColor);

      doc
        .fillColor("#FFFFFF")
        .fontSize(9.5)
        .font("Helvetica-Bold")
        .text("TOTAL INVOICE VALUE:", 340, totalBoxTop + 8);

      doc
        .fillColor(accentColor)
        .fontSize(10.5)
        .font("Helvetica-Bold")
        .text(`₹${params.totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 465, totalBoxTop + 7, { align: "right" });

      // 5. Payment Details & Authorized Signatory Block
      const footerTop = totalBoxTop + 45;

      // Left Box: Payment Terms & Razorpay Instructions
      doc
        .fillColor(accentColor)
        .fontSize(8.5)
        .font("Helvetica-Bold")
        .text("PAYMENT INSTRUCTIONS & COMPLIANCE:", 50, footerTop);

      doc
        .fillColor(textMuted)
        .fontSize(8)
        .font("Helvetica")
        .text("1. Remit payment via official Razorpay payment link (UPI, Net Banking, or Credit/Debit Cards).", 50, footerTop + 14)
        .text("2. Payments are settled in Indian Rupees (INR). Retain this invoice for input tax credit records.", 50, footerTop + 25)
        .text("3. Electronic bank verification automatically unlocks strategy kickoff scheduling.", 50, footerTop + 36);

      // Right Box: Authorized Signatory
      const signTop = footerTop;
      doc
        .rect(340, signTop, 205, 60)
        .strokeColor(borderColor)
        .lineWidth(0.5)
        .stroke();

      doc
        .fillColor(primaryColor)
        .fontSize(7.5)
        .font("Helvetica-Bold")
        .text("FOR JAYANT WEB & AI SYSTEMS", 350, signTop + 8, { align: "center", width: 185 });

      doc
        .fillColor(accentColor)
        .fontSize(9)
        .font("Helvetica-Bold")
        .text("Jayant Olhyan", 350, signTop + 28, { align: "center", width: 185 });

      doc
        .fillColor(textMuted)
        .fontSize(7)
        .font("Helvetica")
        .text("Authorized Signatory (Digital Signature)", 350, signTop + 42, { align: "center", width: 185 });

      // 6. Bottom Legal Footer
      doc
        .moveTo(50, 755)
        .lineTo(545, 755)
        .strokeColor(borderColor)
        .lineWidth(0.5)
        .stroke();

      doc
        .fillColor(textMuted)
        .fontSize(7)
        .font("Helvetica-Oblique")
        .text("Commercial invoice & scope memorandum prepared for professional Chartered Accountant review and formal GST return filing.", 50, 764, { align: "center" });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
