import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { z } from "zod";

const declineAgreementSchema = z.object({
  agreement_id: z.string().uuid("Invalid agreement ID"),
  declined_reason: z.string().min(5, "Please provide a reason for declining"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = declineAgreementSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { agreement_id, declined_reason } = parsed.data;
    const adminDb = createAdminClient();

    const { data: agreement, error: agreeErr } = await adminDb
      .from("agreements")
      .select("*")
      .eq("id", agreement_id)
      .single();

    if (agreeErr || !agreement) {
      return NextResponse.json(
        { success: false, error: "Agreement not found" },
        { status: 404 }
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
      ip_address: request.headers.get("x-forwarded-for") || undefined,
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
