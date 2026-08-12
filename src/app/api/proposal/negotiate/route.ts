import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { z } from "zod";

const negotiationSchema = z.object({
  proposal_id: z.string().uuid("Invalid proposal ID"),
  requested_changes: z.string().min(10, "Please describe your requested changes in detail"),
  client_proposed_price: z.number().positive().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = negotiationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { proposal_id, requested_changes, client_proposed_price } = parsed.data;
    const adminDb = createAdminClient();

    // 1. Verify proposal exists
    const { data: proposal, error: propErr } = await adminDb
      .from("proposals")
      .select("id, status")
      .eq("id", proposal_id)
      .single();

    if (propErr || !proposal) {
      return NextResponse.json(
        { success: false, error: "Proposal not found" },
        { status: 404 }
      );
    }

    // 2. Lock check: If agreement already signed or sent, block negotiations
    const { data: activeAgreement } = await adminDb
      .from("agreements")
      .select("id, status")
      .eq("proposal_id", proposal_id)
      .in("status", ["SENT", "SIGNED"])
      .maybeSingle();

    if (activeAgreement) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Negotiation is locked because an agreement is currently ${activeAgreement.status.toLowerCase()}.` 
        },
        { status: 422 }
      );
    }

    // 3. Create negotiation request record (Client cannot finalize price)
    const { data: negotiation, error: negErr } = await adminDb
      .from("negotiations")
      .insert({
        proposal_id: proposal.id,
        requested_changes,
        client_proposed_price: client_proposed_price || null,
        status: "SUBMITTED",
      })
      .select()
      .single();

    if (negErr) throw negErr;

    // 4. Log audit event
    await adminDb.from("audit_events").insert({
      actor_type: "CLIENT",
      action: "NEGOTIATION_REQUESTED",
      target_entity: "negotiations",
      target_id: negotiation.id,
      metadata: {
        proposal_id: proposal.id,
        requested_changes,
        client_proposed_price,
      },
      ip_address: request.headers.get("x-forwarded-for") || undefined,
      user_agent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Negotiation request submitted successfully. Jayant will review and update your commercial terms.",
      negotiation: {
        id: negotiation.id,
        status: negotiation.status,
        requested_changes: negotiation.requested_changes,
        client_proposed_price: negotiation.client_proposed_price,
        created_at: negotiation.created_at,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to submit negotiation request";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
