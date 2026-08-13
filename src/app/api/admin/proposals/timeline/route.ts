import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(request: Request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);
    const proposalId = searchParams.get("proposal_id");

    if (!proposalId) {
      return NextResponse.json(
        { success: false, error: "proposal_id query parameter is required" },
        { status: 400 }
      );
    }

    const adminDb = createAdminClient();

    // 1. Fetch Proposal Details & Linked Entities
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select(`
        *,
        clients(*),
        package_selections(*, packages(*)),
        negotiations(*),
        commercial_terms(*),
        agreements(*, invoices(*, payments(*))),
        bookings(*),
        onboarding(*)
      `)
      .eq("id", proposalId)
      .single();

    if (propErr || !proposal) {
      return NextResponse.json(
        { success: false, error: "Proposal not found" },
        { status: 404 }
      );
    }

    // 2. Fetch System & Client Audit Logs for Proposal
    const { data: auditEvents } = await adminDb
      .from("audit_events")
      .select("*")
      .or(`target_id.eq.${proposalId},metadata->>proposal_id.eq.${proposalId}`)
      .order("created_at", { ascending: true });

    return NextResponse.json({
      success: true,
      proposal,
      timeline: auditEvents || [],
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to load proposal activity timeline";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
