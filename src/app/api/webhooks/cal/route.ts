import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendTransactionalEmail } from "@/lib/notifications/email";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. Webhook Rate Limit: 100 requests per 1 minute per IP
    const rateLimit = await checkRateLimit(`ip:${clientIp}:cal_webhook`, 100, 60);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const rawBody = await request.text();
    const signature = request.headers.get("x-cal-signature-256") || request.headers.get("X-Cal-Signature-256");
    const webhookSecret = process.env.CAL_WEBHOOK_SECRET;

    // 2. Webhook Signature Verification (HMAC SHA256)
    if (webhookSecret) {
      if (!signature) {
        console.error("❌ Missing Cal.com Webhook Signature Header");
        return NextResponse.json(
          { success: false, error: "Missing Cal.com webhook signature header" },
          { status: 400 }
        );
      }

      const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(rawBody)
        .digest("hex");

      if (expectedSignature !== signature) {
        console.error("❌ Invalid Cal.com Webhook Signature");
        return NextResponse.json(
          { success: false, error: "Invalid Cal.com webhook signature" },
          { status: 400 }
        );
      }
    }

    const payload = JSON.parse(rawBody);
    const triggerEvent = payload.triggerEvent || payload.event;
    const bookingData = payload.payload || payload;

    const calBookingId = String(bookingData.bookingId || bookingData.id || `cal_${Date.now()}`);
    const eventTime = bookingData.startTime || new Date().toISOString();
    const meetingUrl = bookingData.location || bookingData.videoCallUrl || null;
    const attendeeEmail = bookingData.attendees?.[0]?.email || bookingData.email;

    const adminDb = createAdminClient();

    // 3. Find proposal by client email
    const { data: client } = await adminDb
      .from("clients")
      .select("id, proposals(id)")
      .eq("email", attendeeEmail)
      .maybeSingle();

    const proposalId = client?.proposals?.[0]?.id || null;

    // 4. Process Webhook Event with Idempotency Protection
    if (triggerEvent === "BOOKING_CREATED") {
      if (proposalId) {
        await adminDb.from("bookings").upsert(
          {
            proposal_id: proposalId,
            cal_booking_id: calBookingId,
            event_title: bookingData.title || "Project Kickoff & Strategy Session",
            event_time: eventTime,
            duration_minutes: bookingData.duration || 60,
            meeting_url: meetingUrl,
            status: "BOOKED",
            updated_at: new Date().toISOString(),
          },
          { onConflict: "cal_booking_id" }
        );
      }

      const adminEmail = process.env.ADMIN_EMAIL || "jayantwebaisystems@gmail.com";
      await sendTransactionalEmail({
        recipientEmail: adminEmail,
        templateKey: "KICKOFF_BOOKED",
        subject: `[Kickoff Booked] Strategy Session with ${attendeeEmail}`,
        payload: {
          clientEmail: attendeeEmail,
          eventTime: new Date(eventTime).toLocaleString("en-IN"),
          meetingUrl: meetingUrl || "Cal.com Video Room",
        },
        idempotencyKey: `cal_notif_${calBookingId}`,
      });
    } else if (triggerEvent === "BOOKING_RESCHEDULED") {
      await adminDb
        .from("bookings")
        .update({
          event_time: eventTime,
          meeting_url: meetingUrl,
          status: "RESCHEDULED",
          updated_at: new Date().toISOString(),
        })
        .eq("cal_booking_id", calBookingId);
    } else if (triggerEvent === "BOOKING_CANCELLED") {
      await adminDb
        .from("bookings")
        .update({
          status: "CANCELLED",
          updated_at: new Date().toISOString(),
        })
        .eq("cal_booking_id", calBookingId);
    }

    return NextResponse.json({
      success: true,
      message: "Cal.com webhook processed successfully",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Cal.com webhook processing error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
