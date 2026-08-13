import { createHmac } from "crypto";
import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";

export interface DeliveryEventParams {
  providerEventId: string;
  eventType: "sent" | "delivered" | "delivery_delayed" | "bounced" | "complained" | "opened" | "clicked";
  recipientEmail: string;
  provider?: string;
  providerEmailId?: string;
  payload?: Record<string, unknown>;
}

export interface SuppressionCheckResult {
  suppressed: boolean;
  reason?: "BOUNCE" | "COMPLAINT" | "MANUAL";
  suppressedAt?: string;
}

/**
 * Checks whether an email address is currently suppressed from receiving notifications.
 */
export async function isEmailSuppressed(email: string): Promise<SuppressionCheckResult> {
  const normalized = email.trim().toLowerCase();
  try {
    const adminDb = createAdminClient();
    const { data } = await adminDb
      .from("email_suppressions")
      .select("reason, created_at")
      .eq("email", normalized)
      .maybeSingle();

    if (data) {
      return {
        suppressed: true,
        reason: data.reason as SuppressionCheckResult["reason"],
        suppressedAt: data.created_at,
      };
    }
    return { suppressed: false };
  } catch (error) {
    console.warn("⚠️ Failed to check email suppression status:", error);
    return { suppressed: false };
  }
}

/**
 * Adds an email address to the suppression list due to hard bounce, complaint, or manual action.
 */
export async function recordEmailSuppression(
  email: string,
  reason: "BOUNCE" | "COMPLAINT" | "MANUAL",
  sourceEventId?: string,
  metadata: Record<string, unknown> = {}
): Promise<void> {
  const normalized = email.trim().toLowerCase();
  try {
    const adminDb = createAdminClient();
    await adminDb.from("email_suppressions").upsert(
      {
        email: normalized,
        reason,
        source_event_id: sourceEventId || null,
        metadata,
        created_at: new Date().toISOString(),
      },
      { onConflict: "email" }
    );

    await logAdminAction({
      actorId: "system",
      action: `EMAIL_SUPPRESSION_${reason}`,
      targetEntity: "email_suppressions",
      metadata: {
        emailMasked: normalized.replace(/(.{2})(.*)(?=@)/, (_match, start, mid) => start + "*".repeat(mid.length)),
        reason,
        sourceEventId,
      },
    });
  } catch (error) {
    console.error("❌ Failed to record email suppression:", error);
  }
}

/**
 * Records an email delivery event in the persistent log and updates notification status.
 * Idempotent: duplicates on provider_event_id are safely ignored.
 */
export async function recordDeliveryEvent(params: DeliveryEventParams): Promise<{ success: boolean; duplicate?: boolean }> {
  const { providerEventId, eventType, recipientEmail, provider = "RESEND", providerEmailId, payload = {} } = params;
  const adminDb = createAdminClient();

  try {
    // 1. Check for existing event ID (Idempotency)
    const { data: existing } = await adminDb
      .from("email_delivery_events")
      .select("id")
      .eq("provider_event_id", providerEventId)
      .maybeSingle();

    if (existing) {
      return { success: true, duplicate: true };
    }

    // 2. Find matching notification record if providerEmailId is present
    let notificationId: string | null = null;
    if (providerEmailId) {
      const { data: notif } = await adminDb
        .from("notifications")
        .select("id")
        .eq("provider_email_id", providerEmailId)
        .maybeSingle();
      if (notif) {
        notificationId = notif.id;
      }
    }

    // 3. Insert delivery event
    await adminDb.from("email_delivery_events").insert({
      notification_id: notificationId,
      provider_event_id: providerEventId,
      event_type: eventType,
      recipient_email: recipientEmail.trim().toLowerCase(),
      provider,
      provider_email_id: providerEmailId || null,
      payload,
    });

    // 4. Update notification state machine if matched
    if (notificationId) {
      let targetStatus: string | null = null;
      if (eventType === "delivered") targetStatus = "DELIVERED";
      else if (eventType === "bounced") targetStatus = "BOUNCED";
      else if (eventType === "complained") targetStatus = "COMPLAINED";

      if (targetStatus) {
        await adminDb
          .from("notifications")
          .update({ status: targetStatus, updated_at: new Date().toISOString() })
          .eq("id", notificationId);
      }
    }

    // 5. Handle automatic suppression for hard bounce or complaint
    if (eventType === "bounced") {
      await recordEmailSuppression(recipientEmail, "BOUNCE", providerEventId, payload);
    } else if (eventType === "complained") {
      await recordEmailSuppression(recipientEmail, "COMPLAINT", providerEventId, payload);
    }

    return { success: true };
  } catch (error) {
    console.error("❌ Failed to process delivery event:", error);
    return { success: false };
  }
}

/**
 * Cryptographically verifies Resend/Svix webhook signatures.
 */
export function verifyResendWebhookSignature(
  rawBody: string,
  headers: Headers,
  secret?: string
): boolean {
  const webhookSecret = secret || process.env.RESEND_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.warn("⚠️ RESEND_WEBHOOK_SECRET not configured. Rejecting unauthenticated webhook.");
    return false;
  }

  const svixId = headers.get("svix-id");
  const svixTimestamp = headers.get("svix-timestamp");
  const svixSignature = headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return false;
  }

  // 1. Replay prevention: verify timestamp within 5 minutes (300 seconds)
  const timestampNum = parseInt(svixTimestamp, 10);
  if (isNaN(timestampNum)) return false;
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestampNum) > 300) {
    console.warn("⚠️ Webhook timestamp outside allowed 5-minute tolerance window.");
    return false;
  }

  // 2. Format signed payload
  const signedPayload = `${svixId}.${svixTimestamp}.${rawBody}`;

  // 3. Format key from secret (handle whsec_ prefix if present)
  let key: Buffer;
  if (webhookSecret.startsWith("whsec_")) {
    key = Buffer.from(webhookSecret.slice(6), "base64");
  } else {
    key = Buffer.from(webhookSecret, "utf-8");
  }

  // 4. Compute HMAC SHA-256
  const computedSignature = createHmac("sha256", key).update(signedPayload).digest("base64");

  // 5. Compare with provided signatures (format: "v1,signature v1,othersig...")
  const passedSignatures = svixSignature.split(" ");
  for (const versionedSig of passedSignatures) {
    const parts = versionedSig.split(",");
    if (parts.length === 2 && parts[0] === "v1") {
      const sig = parts[1];
      if (sig === computedSignature) {
        return true;
      }
    }
  }

  return false;
}
