import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";

export async function GET(request: Request) {
  try {
    const clientIp = getClientIp(request);

    // 1. IP Rate Limit: 30 attempts per 15 minutes
    const ipRateLimit = await checkRateLimit(`ip:${clientIp}:onboarding_status`, 30, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const { searchParams } = new URL(request.url);
    const proposalId = searchParams.get("proposal_id");
    const token = searchParams.get("token");

    if (!proposalId || !token) {
      return NextResponse.json(
        { success: false, error: "Both proposal_id and token query parameters are required for authorization" },
        { status: 401 }
      );
    }

    // 2. Token Rate Limit: 30 attempts per 15 minutes per token
    const tokenRateLimit = await checkRateLimit(`token:${token}:onboarding_status`, 30, 900);
    if (!tokenRateLimit.success) {
      return createRateLimitResponse(tokenRateLimit.resetInSeconds);
    }

    const adminDb = createAdminClient();

    // 3. Authorization Check: Proposal must exist and token must match
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, token")
      .eq("id", proposalId)
      .single();

    if (propErr || !proposal || proposal.token !== token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized access to proposal onboarding" },
        { status: 403 }
      );
    }

    // 4. Fetch Onboarding Status & Stored Responses
    const { data: onboarding, error } = await adminDb
      .from("onboarding")
      .select("*")
      .eq("proposal_id", proposalId)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      onboarding: onboarding || {
        proposal_id: proposalId,
        status: "NOT_STARTED",
        responses: {},
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch onboarding status";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
