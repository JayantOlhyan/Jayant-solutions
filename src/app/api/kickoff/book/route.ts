import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const kickoffSchema = z
  .object({
    proposal_id: z.string().uuid("Invalid proposal ID"),
    token: z.string().min(10, "Proposal authorization token is required"),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. IP Rate Limit: 15 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${clientIp}:kickoff_book`, 15, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = kickoffSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { proposal_id, token } = parsed.data;

    // 2. Token Rate Limit: 15 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:kickoff_book`, 15, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. PROPOSAL TOKEN AUTHORIZATION: Verify proposal exists and token matches
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, token, clients(name, email)")
      .eq("id", proposal_id)
      .single();

    if (propErr || !proposal || proposal.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to kickoff scheduling" },
        { status: 403 }
      );
    }

    // 4. LIFECYCLE GATES: Require Signed Agreement & Verified Invoice Payment
    const { data: agreement, error: agreeErr } = await adminDb
      .from("agreements")
      .select("status, invoices(status)")
      .eq("proposal_id", proposal_id)
      .eq("status", "SIGNED")
      .maybeSingle();

    if (agreeErr || !agreement) {
      return NextResponse.json(
        { success: false, error: "Kickoff scheduling is locked. Signed agreement not found." },
        { status: 402 }
      );
    }

    const invoice = Array.isArray(agreement.invoices) ? agreement.invoices[0] : agreement.invoices;

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

    const clientObj = Array.isArray(proposal.clients) ? proposal.clients[0] : proposal.clients;
    const clientEmail = clientObj?.email || "";
    const clientName = clientObj?.name || "";

    // 5. Return authenticated Cal.com booking link
    const calBookingUrl = `https://cal.com/jayant-web-and-ai-systems/strategy-call?email=${encodeURIComponent(clientEmail)}&name=${encodeURIComponent(clientName)}`;

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
