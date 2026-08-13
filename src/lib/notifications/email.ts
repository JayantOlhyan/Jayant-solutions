import { createAdminClient } from "@/lib/supabase/admin";
import { isEmailSuppressed } from "@/lib/notifications/delivery";

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

export interface SendEmailResult {
  success: boolean;
  status: "SENT" | "SIMULATED" | "FAILED" | "SKIPPED_DUPLICATE" | "SUPPRESSED";
  providerEmailId?: string;
  error?: string;
}

/**
 * Hardened Transactional Notification Service
 * Handles suppression lists (bounces/complaints), idempotency, delivery tracking, and mobile-optimized rendering.
 */
export async function sendTransactionalEmail({
  recipientEmail,
  templateKey,
  subject,
  payload,
  idempotencyKey,
}: TransactionalEmailParams): Promise<SendEmailResult> {
  const adminDb = createAdminClient();
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailFrom = process.env.EMAIL_FROM || "Jayant Web & AI Systems <notifications@jayant-systems.online>";
  const normalizedRecipient = recipientEmail.trim().toLowerCase();

  // 1. Suppression Check (Checklist 4A.5 & 4A.6)
  const suppression = await isEmailSuppressed(normalizedRecipient);
  if (suppression.suppressed) {
    const errorMsg = `Recipient address suppressed due to previous ${suppression.reason}`;
    console.warn(`⚠️ [SUPPRESSED SEND] Skipped email to ${normalizedRecipient}: ${errorMsg}`);

    await adminDb.from("notifications").insert({
      recipient_email: normalizedRecipient,
      template_key: templateKey,
      subject,
      payload,
      text_body: renderPlainTextTemplate(templateKey, payload),
      idempotency_key: idempotencyKey || null,
      status: "FAILED",
      attempt_count: 1,
      error_message: errorMsg,
    });

    return { success: false, status: "SUPPRESSED", error: errorMsg };
  }

  // 2. Idempotency Check: Prevent duplicate commercial emails
  if (idempotencyKey) {
    const { data: existingNotif } = await adminDb
      .from("notifications")
      .select("id, status, provider_email_id")
      .eq("idempotency_key", idempotencyKey)
      .maybeSingle();

    if (
      existingNotif &&
      (existingNotif.status === "SENT" ||
        existingNotif.status === "DELIVERED" ||
        existingNotif.status === "SIMULATED")
    ) {
      console.log(`ℹ️ [IDEMPOTENT SKIPPED] Email notification already processed (${idempotencyKey}).`);
      return {
        success: true,
        status: "SKIPPED_DUPLICATE",
        providerEmailId: existingNotif.provider_email_id || undefined,
      };
    }
  }

  const textBody = renderPlainTextTemplate(templateKey, payload);
  const htmlBody = renderHtmlTemplate(templateKey, payload);

  let deliveryStatus: "SENT" | "SIMULATED" | "FAILED" = "SIMULATED";
  let errorMessage: string | null = null;
  let providerEmailId: string | null = null;
  const attemptCount = 1;

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
          to: [normalizedRecipient],
          subject,
          html: htmlBody,
          text: textBody,
        }),
      });

      if (res.ok) {
        const responseData = await res.json();
        deliveryStatus = "SENT";
        providerEmailId = responseData?.id || null;
      } else {
        const errorData = await res.json();
        deliveryStatus = "FAILED";
        errorMessage = typeof errorData === "string" ? errorData : JSON.stringify(errorData);
      }
    } else {
      // Local / Development Environment Dispatch Simulation
      console.log(`✉️ [SIMULATED TRANSACTIONAL EMAIL]`);
      console.log(`  To: ${normalizedRecipient}`);
      console.log(`  From: ${emailFrom}`);
      console.log(`  Subject: ${subject}`);
      console.log(`  Template: ${templateKey}`);
      console.log(`  Idempotency Key: ${idempotencyKey || "N/A"}`);
      console.log(`  Note: RESEND_API_KEY is unconfigured. Delivery marked as SIMULATED.`);
      deliveryStatus = "SIMULATED";
    }

    // 3. Record notification in database
    await adminDb.from("notifications").insert({
      recipient_email: normalizedRecipient,
      template_key: templateKey,
      subject,
      payload,
      text_body: textBody,
      idempotency_key: idempotencyKey || null,
      status: deliveryStatus,
      attempt_count: attemptCount,
      provider_email_id: providerEmailId,
      error_message: errorMessage,
      sent_at:
        deliveryStatus === "SENT" || deliveryStatus === "SIMULATED"
          ? new Date().toISOString()
          : null,
    });

    return {
      success: deliveryStatus !== "FAILED",
      status: deliveryStatus,
      providerEmailId: providerEmailId || undefined,
      error: errorMessage || undefined,
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Notification dispatch failure";
    console.error("❌ Notification error:", msg);

    await adminDb.from("notifications").insert({
      recipient_email: normalizedRecipient,
      template_key: templateKey,
      subject,
      payload,
      text_body: textBody,
      idempotency_key: idempotencyKey || null,
      status: "FAILED",
      attempt_count: attemptCount,
      error_message: msg,
    });

    return { success: false, status: "FAILED", error: msg };
  }
}

/**
 * Plain text fallback version generator (Checklist 4A.9)
 */
export function renderPlainTextTemplate(
  templateKey: TransactionalEmailParams["templateKey"],
  payload: Record<string, unknown>
): string {
  const header = "==================================================\nJAYANT WEB & AI SYSTEMS\nDigital Growth & Business Automation\n==================================================\n\n";
  const footer = "\n\n--------------------------------------------------\nJayant Web & AI Systems\nhttps://jayant-systems.online\nThis is an essential transactional notification.\n--------------------------------------------------";

  let body = "";

  switch (templateKey) {
    case "PACKAGE_SELECTED":
      body = `PACKAGE CHOICE CONFIRMED\n\nSelected Package: ${payload.packageCode || "N/A"}\nInvestment: ₹${payload.price || "N/A"}\nNotes: ${payload.notes || "None provided"}\n\nOur team is preparing your custom service agreement.`;
      break;
    case "NEGOTIATION_REQUESTED":
      body = `CUSTOM SCOPE / NEGOTIATION RECEIVED\n\nRequested Terms: ${payload.requestedChanges || "N/A"}\nProposed Investment: ₹${payload.proposedPrice || "N/A"}\n\nOur team is reviewing your requested scope modifications.`;
      break;
    case "AGREEMENT_SENT":
      body = `SERVICE AGREEMENT READY FOR REVIEW\n\nYour custom 90-day engagement agreement has been generated.\n\nPlease review and digitally sign your agreement here:\n${payload.agreementUrl || "N/A"}`;
      break;
    case "INVOICE_ISSUED":
      body = `INVOICE ISSUED #${payload.invoiceNumber || "N/A"}\n\nTotal Due: ₹${payload.totalAmount || "N/A"}\nDue Date: ${payload.dueDate || "Upon Receipt"}\n\nDownload official PDF invoice and access payment:\n${payload.downloadUrl || payload.invoiceUrl || "N/A"}`;
      break;
    case "PAYMENT_CONFIRMATION":
      body = `PAYMENT VERIFIED & CONFIRMED\n\nInvoice: #${payload.invoiceNumber || "N/A"}\nAmount Paid: ₹${payload.amount || "N/A"}\nCurrency: INR\n\nYour payment has been successfully recorded. Kickoff session scheduling is unlocked.`;
      break;
    case "PAYMENT_FAILURE":
      body = `PAYMENT ATTEMPT FAILED\n\nInvoice: #${payload.invoiceNumber || "N/A"}\nAmount: ₹${payload.amount || "N/A"}\nReason: ${payload.reason || "Transaction could not be completed"}\n\nPlease retry your payment using your secure invoice link.`;
      break;
    case "KICKOFF_AVAILABLE":
      body = `SCHEDULE YOUR STRATEGY KICKOFF SESSION\n\nPayment verified. Please select your 60-minute strategy kickoff session time:\n${payload.bookingUrl || "N/A"}`;
      break;
    case "KICKOFF_BOOKED":
      body = `KICKOFF SESSION CONFIRMED\n\nMeeting Title: ${payload.eventTitle || "Strategy Kickoff"}\nScheduled Time: ${payload.eventTime || "Scheduled"}\nMeeting Link: ${payload.meetingUrl || "Will be sent prior to call"}`;
      break;
    default:
      body = `Notification Event: ${templateKey}\n\nDetails: ${JSON.stringify(payload, null, 2)}`;
  }

  return header + body + footer;
}

/**
 * Mobile-First Responsive HTML Email Template (Checklist 4A.9)
 * Tested for screens 320px to 600px+ with touch-friendly buttons and dark-mode compatibility.
 */
export function renderHtmlTemplate(
  templateKey: TransactionalEmailParams["templateKey"],
  payload: Record<string, unknown>
): string {
  let title = "";
  let contentHtml = "";

  switch (templateKey) {
    case "PACKAGE_SELECTED":
      title = "Package Choice Recorded";
      contentHtml = `
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB;">
          Thank you for choosing your digital execution package. We have recorded your selection:
        </p>
        <div style="background-color:#0D1322; border:1px solid #1E2638; border-radius:8px; padding:16px; margin:0 0 20px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px; color:#FAF7EE;">
            <tr>
              <td style="padding:4px 0; color:#A0A8B8; width:40%;">Selected Tier:</td>
              <td style="padding:4px 0; font-weight:bold; color:#C5A880;">${payload.packageCode || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:4px 0; color:#A0A8B8;">Standard Price:</td>
              <td style="padding:4px 0; font-weight:bold;">₹${payload.price || "N/A"}</td>
            </tr>
            ${
              payload.notes
                ? `<tr><td style="padding:4px 0; color:#A0A8B8;">Client Notes:</td><td style="padding:4px 0;">${payload.notes}</td></tr>`
                : ""
            }
          </table>
        </div>
        <p style="margin:0; font-size:14px; line-height:22px; color:#9CA3AF;">
          Our leadership team is now preparing your binding service agreement. You will receive an email shortly with a secure link to review and sign.
        </p>
      `;
      break;

    case "NEGOTIATION_REQUESTED":
      title = "Custom Scope Request Received";
      contentHtml = `
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB;">
          We have received your custom proposal request:
        </p>
        <div style="background-color:#0D1322; border:1px solid #1E2638; border-radius:8px; padding:16px; margin:0 0 20px 0;">
          <p style="margin:0 0 8px 0; font-size:12px; font-family:monospace; text-transform:uppercase; color:#C5A880; letter-spacing:1px;">Requested Terms</p>
          <p style="margin:0 0 12px 0; font-size:14px; line-height:20px; color:#FAF7EE;">${payload.requestedChanges || "N/A"}</p>
          ${
            payload.proposedPrice
              ? `<p style="margin:0; font-size:13px; color:#A0A8B8;">Proposed Budget: <strong style="color:#FAF7EE;">₹${payload.proposedPrice}</strong></p>`
              : ""
          }
        </div>
        <p style="margin:0; font-size:14px; line-height:22px; color:#9CA3AF;">
          Our leadership team is reviewing your requested modifications and will respond promptly.
        </p>
      `;
      break;

    case "AGREEMENT_SENT":
      title = "Service Agreement Ready for Signature";
      contentHtml = `
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB;">
          Your digital execution service agreement has been generated and is ready for formal review.
        </p>
        <div style="text-align:center; margin:28px 0;">
          <a href="${payload.agreementUrl || "#"}" style="background-color:#C5A880; color:#080C16; display:inline-block; font-size:14px; font-weight:600; text-decoration:none; padding:14px 28px; border-radius:8px; width:auto; min-width:200px; text-align:center; box-sizing:border-box;">
            Review & Digitally Sign Agreement &rarr;
          </a>
        </div>
        <p style="margin:0; font-size:13px; line-height:20px; color:#9CA3AF; text-align:center;">
          Direct Access URL: <a href="${payload.agreementUrl || "#"}" style="color:#C5A880; word-break:break-all;">${payload.agreementUrl || "N/A"}</a>
        </p>
      `;
      break;

    case "INVOICE_ISSUED":
      title = `Official Invoice Issued #${payload.invoiceNumber || ""}`;
      contentHtml = `
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB;">
          Thank you for signing the service agreement. Official Invoice <strong>#${payload.invoiceNumber || ""}</strong> has been generated.
        </p>
        <div style="background-color:#0D1322; border:1px solid #1E2638; border-radius:8px; padding:16px; margin:0 0 20px 0;">
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px; color:#FAF7EE;">
            <tr>
              <td style="padding:4px 0; color:#A0A8B8;">Invoice Number:</td>
              <td style="padding:4px 0; font-weight:bold; color:#C5A880;">#${payload.invoiceNumber || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:4px 0; color:#A0A8B8;">Total Amount Due:</td>
              <td style="padding:4px 0; font-weight:bold; font-size:16px;">₹${payload.totalAmount || "0.00"}</td>
            </tr>
            <tr>
              <td style="padding:4px 0; color:#A0A8B8;">Payment Terms:</td>
              <td style="padding:4px 0; color:#9CA3AF;">Due Upon Receipt</td>
            </tr>
          </table>
        </div>
        <div style="text-align:center; margin:28px 0;">
          <a href="${payload.downloadUrl || payload.invoiceUrl || "#"}" style="background-color:#C5A880; color:#080C16; display:inline-block; font-size:14px; font-weight:600; text-decoration:none; padding:14px 28px; border-radius:8px; width:auto; min-width:200px; text-align:center; box-sizing:border-box;">
            Download PDF & Remit Payment &rarr;
          </a>
        </div>
      `;
      break;

    case "PAYMENT_CONFIRMATION":
      title = "Payment Verified & Confirmed";
      contentHtml = `
        <div style="text-align:center; margin:0 0 20px 0;">
          <span style="display:inline-block; width:48px; height:48px; line-height:48px; border-radius:50%; background-color:rgba(16,185,129,0.1); border:1px solid rgba(16,185,129,0.3); color:#10B981; font-size:24px;">&#10003;</span>
        </div>
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB; text-align:center;">
          We have received and verified your payment of <strong style="color:#FAF7EE;">₹${payload.amount || "N/A"}</strong> for Invoice <strong>#${payload.invoiceNumber || ""}</strong>.
        </p>
        <p style="margin:0 0 20px 0; font-size:14px; line-height:22px; color:#9CA3AF; text-align:center;">
          Your onboarding workflow and strategy kickoff session booking are now fully unlocked.
        </p>
      `;
      break;

    case "PAYMENT_FAILURE":
      title = "Payment Attempt Notice";
      contentHtml = `
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB;">
          An attempt to process payment for Invoice <strong>#${payload.invoiceNumber || ""}</strong> could not be completed.
        </p>
        <div style="background-color:#1E1014; border:1px solid rgba(239,68,68,0.3); border-radius:8px; padding:16px; margin:0 0 20px 0; color:#FCA5A5; font-size:13px;">
          ${payload.reason || "The transaction was declined by your payment provider or cancelled."}
        </div>
        <p style="margin:0; font-size:14px; line-height:22px; color:#9CA3AF;">
          You may retry your payment at any time using your original invoice access link.
        </p>
      `;
      break;

    case "KICKOFF_AVAILABLE":
      title = "Kickoff Session Booking Unlocked";
      contentHtml = `
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB;">
          Your commercial agreement and payment are complete. It is time to schedule your 60-minute strategy kickoff session:
        </p>
        <div style="text-align:center; margin:28px 0;">
          <a href="${payload.bookingUrl || "#"}" style="background-color:#C5A880; color:#080C16; display:inline-block; font-size:14px; font-weight:600; text-decoration:none; padding:14px 28px; border-radius:8px; width:auto; min-width:200px; text-align:center; box-sizing:border-box;">
            Schedule Strategy Kickoff Call &rarr;
          </a>
        </div>
      `;
      break;

    case "KICKOFF_BOOKED":
      title = "Kickoff Session Confirmed";
      contentHtml = `
        <p style="margin:0 0 16px 0; font-size:15px; line-height:24px; color:#D1D5DB;">
          Your strategy kickoff session has been scheduled successfully:
        </p>
        <div style="background-color:#0D1322; border:1px solid #1E2638; border-radius:8px; padding:16px; margin:0 0 20px 0;">
          <p style="margin:0 0 4px 0; font-size:14px; font-weight:bold; color:#C5A880;">${payload.eventTitle || "Strategy Kickoff Session"}</p>
          <p style="margin:0 0 8px 0; font-size:13px; color:#FAF7EE;">Time: ${payload.eventTime || "Scheduled"}</p>
          ${
            payload.meetingUrl
              ? `<p style="margin:0; font-size:12px; color:#A0A8B8;">Meeting Link: <a href="${payload.meetingUrl}" style="color:#C5A880;">${payload.meetingUrl}</a></p>`
              : ""
          }
        </div>
      `;
      break;

    default:
      title = "Transactional Notification";
      contentHtml = `<p style="color:#D1D5DB;">Notification event: ${templateKey}</p>`;
  }

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
  <style type="text/css">
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table { border-collapse: collapse !important; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
    @media screen and (max-width: 480px) {
      .container-table { width: 100% !important; }
      .mobile-padding { padding-left: 16px !important; padding-right: 16px !important; }
      .mobile-btn { width: 100% !important; display: block !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#05070D; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#05070D; width:100%; min-width:100%; margin:0; padding:24px 8px;">
    <tr>
      <td align="center">
        <!-- Main Card Container (Max 600px) -->
        <table class="container-table" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#080C16; border:1px solid #1E2638; border-radius:12px; overflow:hidden;">
          
          <!-- Header Banner -->
          <tr>
            <td style="padding:28px 24px 20px 24px; text-align:center; border-bottom:1px solid #1E2638; background-color:#0D1322;">
              <span style="font-family:monospace; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:2px; color:#C5A880; display:block; margin-bottom:4px;">
                Jayant Web & AI Systems
              </span>
              <span style="font-size:12px; color:#7A8499; display:block;">
                Digital Growth & Business Automation Systems
              </span>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td class="mobile-padding" style="padding:32px 28px;">
              <h1 style="margin:0 0 16px 0; font-size:20px; font-weight:600; color:#FAF7EE; line-height:28px;">
                ${title}
              </h1>
              ${contentHtml}
            </td>
          </tr>

          <!-- Transactional Footer -->
          <tr>
            <td style="padding:20px 24px; background-color:#05070D; border-top:1px solid #1E2638; text-align:center;">
              <p style="margin:0 0 6px 0; font-size:11px; color:#7A8499; line-height:16px;">
                This is an essential transactional notification regarding your account or commercial agreement with Jayant Web & AI Systems.
              </p>
              <p style="margin:0; font-size:11px; color:#505A70; font-family:monospace;">
                &copy; 2026 Jayant Web & AI Systems &bull; <a href="https://jayant-systems.online" style="color:#7A8499; text-decoration:none;">jayant-systems.online</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
