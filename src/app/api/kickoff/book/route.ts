import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { z } from "zod";

const kickoffSchema = z.object({
  proposal_id: z.string().uuid("Invalid proposal ID"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = kickoffSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { proposal_id } = parsed.data;
    const adminDb = createAdminClient();

    // 1. Fetch proposal and linked invoice status
    const { data: agreement, error: agreeErr } = await adminDb
      .from("agreements")
      .select("*, invoices(*), proposals(*, clients(*))")
      .eq("proposal_id", proposal_id)
      .eq("status", "SIGNED")
      .single();

    if (agreeErr || !agreement || !agreement.invoices) {
      return NextResponse.json(
        { success: false, error: "Payment verification required. Signed contract and valid invoice not found." },
        { status: 402 }
      );
    }

    const invoice = Array.isArray(agreement.invoices) ? agreement.invoices[0] : agreement.invoices;

    // 2. STRICT PAYMENT GUARD: Never unlock kickoff scheduling unless DB status === PAID
    if (!invoice || invoice.status !== "PAID") {
      return NextResponse.json(
        { 
          success: false, 
          error: "Kickoff scheduling remains locked because invoice payment has not been verified.",
          invoice_status: invoice?.status || "UNPAID",
        },
        { status: 402 }
      );
    }

    // 3. Return authenticated Cal.com booking link
    const calBookingUrl = `https://cal.com/jayant-web-and-ai-systems/strategy-call?email=${encodeURIComponent(agreement.proposals.clients.email)}&name=${encodeURIComponent(agreement.proposals.clients.name)}`;

    return NextResponse.json({
      success: true,
      unlocked: true,
      booking_url: calBookingUrl,
      message: "Kickoff strategy session scheduling unlocked.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to access kickoff scheduling";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
