import { NextResponse } from "next/server";
import { recordDeliveryEvent, verifyResendWebhookSignature } from "@/lib/notifications/delivery";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate Limiting (60 requests per minute)
    const rateLimit = await checkRateLimit(`ip:${ip}:resend_webhook`, 60, 60);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const rawBody = await request.text();

    // 2. Cryptographic Signature Verification
    const isVerified = verifyResendWebhookSignature(rawBody, request.headers);
    if (!isVerified) {
      // In local dev without secret, warn but fail closed in production
      if (process.env.NODE_ENV === "production" || process.env.RESEND_WEBHOOK_SECRET) {
        return NextResponse.json(
          { success: false, error: "Unauthorized: Invalid webhook signature." },
          { status: 401 }
        );
      }
      console.warn("⚠️ Resend webhook signature verification skipped in development without RESEND_WEBHOOK_SECRET.");
    }

    let payload: Record<string, unknown>;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    // 3. Extract event properties
    const eventTypeRaw = String(payload.type || "");
    const data = (payload.data as Record<string, unknown>) || {};
    
    // Normalize Resend event types: email.delivered -> delivered, email.bounced -> bounced, etc.
    const normalizedType = eventTypeRaw.replace(/^email\./, "");
    const validTypes = ["sent", "delivered", "delivery_delayed", "bounced", "complained", "opened", "clicked"];

    if (!validTypes.includes(normalizedType)) {
      return NextResponse.json({
        success: true,
        message: `Ignored unhandled event type: ${eventTypeRaw}`,
      });
    }

    const providerEventId = String(payload.id || data.id || `${eventTypeRaw}_${Date.now()}`);
    const providerEmailId = String(data.email_id || data.id || "");
    
    // Recipient can be array or string
    let recipientEmail = "";
    if (Array.isArray(data.to) && data.to.length > 0) {
      recipientEmail = String(data.to[0]);
    } else if (typeof data.to === "string") {
      recipientEmail = data.to;
    } else if (typeof data.recipient === "string") {
      recipientEmail = data.recipient;
    }

    if (!recipientEmail) {
      return NextResponse.json({
        success: true,
        message: "No recipient found in event payload.",
      });
    }

    // 4. Record event, update notification status, and handle suppression
    const result = await recordDeliveryEvent({
      providerEventId,
      eventType: normalizedType as "sent" | "delivered" | "delivery_delayed" | "bounced" | "complained" | "opened" | "clicked",
      recipientEmail,
      provider: "RESEND",
      providerEmailId: providerEmailId || undefined,
      payload,
    });

    return NextResponse.json({
      success: true,
      processed: true,
      duplicate: result.duplicate || false,
      event: eventTypeRaw,
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal webhook processing error";
    console.error("❌ Resend webhook error:", msg);
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}
