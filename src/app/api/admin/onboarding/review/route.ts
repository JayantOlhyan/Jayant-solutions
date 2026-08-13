import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { z } from "zod";

const reviewSchema = z.object({
  onboarding_id: z.string().uuid("Invalid onboarding ID"),
  status: z.enum(["REVIEWED", "REVISION_REQUESTED"]),
  review_notes: z.string().max(2000).optional(),
}).strict();

export async function POST(request: Request) {
  try {
    // 1. Strict Server-Side Admin Guard
    const adminUser = await requireAdmin();
    const body = await request.json();
    const parsed = reviewSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { onboarding_id, status, review_notes } = parsed.data;
    const adminDb = createAdminClient();

    // 2. Update Onboarding Review Status
    const { data: onboarding, error: updateErr } = await adminDb
      .from("onboarding")
      .update({
        status,
        reviewer_id: adminUser.id,
        review_notes: review_notes || null,
        reviewed_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", onboarding_id)
      .select("*")
      .single();

    if (updateErr || !onboarding) {
      return NextResponse.json(
        { success: false, error: updateErr?.message || "Onboarding submission not found" },
        { status: 500 }
      );
    }

    // 3. Log Audit Event
    const auditAction = status === "REVISION_REQUESTED" 
      ? "ADMIN_ONBOARDING_REVISION_REQUESTED"
      : "ADMIN_ONBOARDING_REVIEWED";

    await adminDb.from("audit_events").insert({
      actor_type: "ADMIN",
      actor_id: adminUser.id,
      action: auditAction,
      target_entity: "onboarding",
      target_id: onboarding.id,
      metadata: { status, admin_email: adminUser.email, review_notes },
    });

    return NextResponse.json({
      success: true,
      onboarding,
      message: `Onboarding status updated to ${status}`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to review onboarding submission";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
