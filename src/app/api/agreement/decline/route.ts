import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const declineAgreementSchema = z
  .object({
    agreement_id: z.string().uuid("Invalid agreement ID"),
    token: z.string().min(10, "Proposal authorization token is required"),
    declined_reason: z.string().min(5, "Please provide a reason for declining"),
  })
  .strict();

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. IP Rate limit: 10 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${clientIp}:decline_agreement`, 10, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = declineAgreementSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { agreement_id, token, declined_reason } = parsed.data;

    // 2. Token Rate Limit: 10 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:decline_agreement`, 10, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. Fetch agreement and verify token matching
    const { data: agreement, error: agreeErr } = await adminDb
      .from("agreements")
      .select("*, proposals(*)")
      .eq("id", agreement_id)
      .single();

    if (agreeErr || !agreement || agreement.proposals?.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to agreement" },
        { status: 403 }
      );
    }

    const { data: updatedAgreement, error: updateErr } = await adminDb
      .from("agreements")
      .update({
        status: "DECLINED",
        declined_reason,
        updated_at: new Date().toISOString(),
      })
      .eq("id", agreement.id)
      .select()
      .single();

    if (updateErr) throw updateErr;

    await adminDb.from("audit_events").insert({
      actor_type: "CLIENT",
      action: "AGREEMENT_DECLINED",
      target_entity: "agreements",
      target_id: agreement.id,
      metadata: { proposal_id: agreement.proposal_id, declined_reason },
      ip_address: clientIp,
      user_agent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Agreement marked as declined.",
      agreement: updatedAgreement,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to decline agreement";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
