import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const proposalId = searchParams.get("proposal_id");
    const token = searchParams.get("token");

    if (!proposalId || !token) {
      return NextResponse.json(
        { success: false, error: "Both proposal_id and token query parameters are required for authorization" },
        { status: 401 }
      );
    }

    const adminDb = createAdminClient();

    // 1. Authorization Check: Proposal must exist and token must match
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

    // 2. Fetch Onboarding Status & Stored Responses
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
