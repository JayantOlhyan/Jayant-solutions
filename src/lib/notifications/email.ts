import { createAdminClient } from "@/lib/supabase/admin";

export interface TransactionalEmailParams {
  recipientEmail: string;
  templateKey:
    | "PACKAGE_SELECTED"
    | "NEGOTIATION_REQUESTED"
    | "AGREEMENT_SENT"
    | "INVOICE_ISSUED"
    | "PAYMENT_CONFIRMATION"
    | "PAYMENT_FAILURE"
    | "KICKOFF_AVAILABLE"
    | "KICKOFF_BOOKED";
  subject: string;
  payload: Record<string, unknown>;
  idempotencyKey?: string;
}

/**
 * Hardened Transactional Notification Service
 * Handles idempotency, retry tracking, simulation vs live delivery, and recipient routing.
 */
export async function sendTransactionalEmail({
  recipientEmail,
  templateKey,
  subject,
  payload,
  idempotencyKey,
}: TransactionalEmailParams): Promise<{ success: boolean; status: "SENT" | "SIMULATED" | "FAILED" | "SKIPPED_DUPLICATE" }> {
  const adminDb = createAdminClient();
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailFrom = process.env.EMAIL_FROM || "Jayant Web & AI Systems <notifications@jayant-systems.online>";

  // 1. Idempotency Check: Prevent duplicate commercial emails
  if (idempotencyKey) {
    const { data: existingNotif } = await adminDb
      .from("notifications")
      .select("id, status")
      .eq("idempotency_key", idempotencyKey)
      .maybeSingle();

    if (existingNotif && (existingNotif.status === "SENT" || existingNotif.status === "SIMULATED")) {
      console.log(`ℹ️ [IDEMPOTENT SKIPPED] Email notification already processed (${idempotencyKey}).`);
      return { success: true, status: "SKIPPED_DUPLICATE" };
    }
  }

  const textBody = renderPlainTextTemplate(templateKey, payload);
  const htmlBody = renderHtmlTemplate(templateKey, payload);

  let deliveryStatus: "SENT" | "SIMULATED" | "FAILED" = "SIMULATED";
  let errorMessage: string | null = null;
  let attemptCount = 1;

  try {
    if (resendApiKey && !resendApiKey.includes("placeholder") && !resendApiKey.includes("re_123456789")) {
      // Live Resend API Dispatch
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: emailFrom,
          to: [recipientEmail],
          subject,
          html: htmlBody,
          text: textBody,
        }),
      });

      if (res.ok) {
        deliveryStatus = "SENT";
      } else {
        const errorData = await res.json();
        deliveryStatus = "FAILED";
        errorMessage = JSON.stringify(errorData);
      }
    } else {
      // Local / Development Environment Dispatch Simulation
      console.log(`✉️ [SIMULATED TRANSACTIONAL EMAIL]`);
      console.log(`  To: ${recipientEmail}`);
      console.log(`  From: ${emailFrom}`);
      console.log(`  Subject: ${subject}`);
      console.log(`  Template: ${templateKey}`);
      console.log(`  Idempotency Key: ${idempotencyKey || 'N/A'}`);
      console.log(`  Note: RESEND_API_KEY is not configured. Delivery marked as SIMULATED.`);
      deliveryStatus = "SIMULATED";
    }

    // Record notification in database
    await adminDb.from("notifications").insert({
      recipient_email: recipientEmail,
      template_key: templateKey,
      subject,
      payload,
      text_body: textBody,
      idempotency_key: idempotencyKey || null,
      status: deliveryStatus,
      attempt_count: attemptCount,
      error_message: errorMessage,
      sent_at: (deliveryStatus === "SENT" || deliveryStatus === "SIMULATED") ? new Date().toISOString() : null,
    });

    return { success: deliveryStatus !== "FAILED", status: deliveryStatus };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Notification dispatch failure";
    console.error("❌ Notification error:", msg);

    await adminDb.from("notifications").insert({
      recipient_email: recipientEmail,
      template_key: templateKey,
      subject,
      payload,
      text_body: textBody,
      idempotency_key: idempotencyKey || null,
      status: "FAILED",
      attempt_count: attemptCount,
      error_message: msg,
    });

    return { success: false, status: "FAILED" };
  }
}

/**
 * Plain text fallback version generator
 */
function renderPlainTextTemplate(
  templateKey: TransactionalEmailParams["templateKey"],
  payload: Record<string, unknown>
): string {
  switch (templateKey) {
    case "PACKAGE_SELECTED":
      return `JAYANT WEB & AI SYSTEMS - PACKAGE SELECTED\n\nPackage: ${payload.packageCode} (${payload.price})\nNotes: ${payload.notes || "None"}\n`;
    case "NEGOTIATION_REQUESTED":
      return `JAYANT WEB & AI SYSTEMS - NEGOTIATION REQUEST\n\nRequested Changes: ${payload.requestedChanges}\nProposed Price: ₹${payload.proposedPrice || "N/A"}\n`;
    case "AGREEMENT_SENT":
      return `JAYANT WEB & AI SYSTEMS - SERVICE AGREEMENT READY\n\nYour service agreement is ready for review. Access link: ${payload.agreementUrl}\n`;
    case "INVOICE_ISSUED":
      return `JAYANT WEB & AI SYSTEMS - INVOICE ISSUED #${payload.invoiceNumber}\n\nInvoice Amount: ₹${payload.totalAmount}\nDownload link: ${payload.downloadUrl}\n`;
    case "PAYMENT_CONFIRMATION":
      return `JAYANT WEB & AI SYSTEMS - PAYMENT CONFIRMED\n\nInvoice #${payload.invoiceNumber} paid: ₹${payload.amount}\n`;
    case "KICKOFF_AVAILABLE":
      return `JAYANT WEB & AI SYSTEMS - KICKOFF SESSION UNLOCKED\n\nPayment verified. Schedule your kickoff session: ${payload.bookingUrl}\n`;
    default:
      return `JAYANT WEB & AI SYSTEMS - ${templateKey}\n\nPayload: ${JSON.stringify(payload)}\n`;
  }
}

/**
 * Render responsive HTML email template
 */
function renderHtmlTemplate(
  templateKey: TransactionalEmailParams["templateKey"],
  payload: Record<string, unknown>
): string {
  const brandHeader = `
    <div style="background-color:#080C16; padding:24px; text-align:center; font-family:sans-serif;">
      <h1 style="color:#C5A880; margin:0; font-size:20px; font-weight:bold;">JAYANT WEB & AI SYSTEMS</h1>
      <p style="color:#A0A8B8; margin:4px 0 0 0; font-size:12px;">Digital Growth & Business Automation</p>
    </div>
  `;

  let content = "";

  switch (templateKey) {
    case "PACKAGE_SELECTED":
      content = `
        <h2 style="color:#080C16;">Package Choice Recorded</h2>
        <p>A client has selected the <strong>${payload.packageCode}</strong> package (${payload.price}).</p>
        <p><strong>Notes:</strong> ${payload.notes || "None provided"}</p>
      `;
      break;
    case "NEGOTIATION_REQUESTED":
      content = `
        <h2 style="color:#080C16;">Custom Scope / Negotiation Request</h2>
        <p>A client has requested custom scope terms.</p>
        <p><strong>Requested Changes:</strong> ${payload.requestedChanges}</p>
        <p><strong>Proposed Price:</strong> ₹${payload.proposedPrice || "N/A"}</p>
      `;
      break;
    case "AGREEMENT_SENT":
      content = `
        <h2 style="color:#080C16;">Your Service Agreement is Ready for Review</h2>
        <p>Jayant has generated your custom 90-day engagement service agreement.</p>
        <p><a href="${payload.agreementUrl}" style="background:#C5A880; color:#080C16; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:bold; display:inline-block;">Review & Digitally Sign Agreement</a></p>
      `;
      break;
    case "INVOICE_ISSUED":
      content = `
        <h2 style="color:#080C16;">Invoice Issued: #${payload.invoiceNumber}</h2>
        <p>Thank you for signing the service agreement. Invoice <strong>#${payload.invoiceNumber}</strong> for ₹${payload.totalAmount} has been issued.</p>
        <p><a href="${payload.downloadUrl}" style="background:#080C16; color:#FAF7EE; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:bold; display:inline-block;">Download Official PDF Invoice</a></p>
      `;
      break;
    case "PAYMENT_CONFIRMATION":
      content = `
        <h2 style="color:#080C16;">Payment Confirmed</h2>
        <p>Payment of ₹${payload.amount} for Invoice #${payload.invoiceNumber} has been verified successfully.</p>
        <p>Your kickoff session scheduling is now unlocked.</p>
      `;
      break;
    case "KICKOFF_AVAILABLE":
      content = `
        <h2 style="color:#080C16;">Schedule Your Strategy Kickoff Session</h2>
        <p>Your payment has been verified. Please select your 60-minute strategy kickoff session time on Cal.com:</p>
        <p><a href="${payload.bookingUrl}" style="background:#C5A880; color:#080C16; padding:12px 20px; border-radius:8px; text-decoration:none; font-weight:bold; display:inline-block;">Book Kickoff Session on Cal.com</a></p>
      `;
      break;
    default:
      content = `<p>Notification event: ${templateKey}</p>`;
  }

  return `
    <div style="background-color:#F8FAFC; padding:20px; font-family:sans-serif; color:#080C16;">
      <div style="max-width:600px; margin:0 auto; background:#FFFFFF; border-radius:12px; overflow:hidden; border:1px solid #E2E8F0;">
        ${brandHeader}
        <div style="padding:32px;">
          ${content}
        </div>
        <div style="background:#080C16; color:#7A8499; padding:16px; text-align:center; font-size:11px;">
          © 2026 Jayant Web & AI Systems. All rights reserved.
        </div>
      </div>
    </div>
  `;
}
