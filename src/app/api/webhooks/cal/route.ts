import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendTransactionalEmail } from "@/lib/notifications/email";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const triggerEvent = payload.triggerEvent || payload.event;
    const bookingData = payload.payload || payload;

    const adminDb = createAdminClient();

    const calBookingId = String(bookingData.bookingId || bookingData.id || `cal_${Date.now()}`);
    const eventTime = bookingData.startTime || new Date().toISOString();
    const meetingUrl = bookingData.location || bookingData.videoCallUrl || null;
    const attendeeEmail = bookingData.attendees?.[0]?.email || bookingData.email;

    // Find proposal by client email
    const { data: client } = await adminDb
      .from("clients")
      .select("id, proposals(id)")
      .eq("email", attendeeEmail)
      .maybeSingle();

    const proposalId = client?.proposals?.[0]?.id || null;

    if (triggerEvent === "BOOKING_CREATED") {
      if (proposalId) {
        await adminDb.from("bookings").upsert({
          proposal_id: proposalId,
          cal_booking_id: calBookingId,
          event_title: bookingData.title || "Project Kickoff & Strategy Session",
          event_time: eventTime,
          duration_minutes: bookingData.duration || 60,
          meeting_url: meetingUrl,
          status: "BOOKED",
          updated_at: new Date().toISOString(),
        });
      }

      // Dispatch notification
      const adminEmail = process.env.ADMIN_EMAIL || "jayantwebaisystems@gmail.com";
      await sendTransactionalEmail({
        recipientEmail: adminEmail,
        templateKey: "KICKOFF_BOOKED",
        subject: `[Kickoff Booked] Strategy Session with ${attendeeEmail}`,
        payload: {
          clientEmail: attendeeEmail,
          eventTime: new Date(eventTime).toLocaleString('en-IN'),
          meetingUrl: meetingUrl || "Cal.com Video Room",
        },
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
