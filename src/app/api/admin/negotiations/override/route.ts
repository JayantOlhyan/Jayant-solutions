import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";
import { z } from "zod";

const adminOverrideSchema = z.object({
  proposal_id: z.string().uuid("Invalid proposal ID"),
  negotiation_id: z.string().uuid().optional(),
  final_agreed_price: z.number().positive("Final price must be positive"),
  scope_summary: z.string().min(5, "Scope summary required"),
  action: z.enum(["APPROVE", "OVERRIDE", "REJECT"]),
  admin_notes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // 1. Authorize admin strictly server-side
    const admin = await requireAdmin();
    const body = await request.json();
    const parsed = adminOverrideSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const {
      proposal_id,
      negotiation_id,
      final_agreed_price,
      scope_summary,
      action,
      admin_notes,
    } = parsed.data;

    const adminDb = createAdminClient();

    // 2. Fetch existing scope version count for this proposal
    const { data: existingTerms } = await adminDb
      .from("commercial_terms")
      .select("scope_version")
      .eq("proposal_id", proposal_id)
      .order("scope_version", { ascending: false })
      .limit(1)
      .maybeSingle();

    const nextScopeVersion = (existingTerms?.scope_version || 0) + 1;

    // 3. Handle action logic
    if (action === "REJECT") {
      if (negotiation_id) {
        await adminDb
          .from("negotiations")
          .update({
            status: "REJECTED",
            admin_notes: admin_notes || "Negotiation request declined by admin.",
            updated_at: new Date().toISOString(),
          })
          .eq("id", negotiation_id);
      }

      await logAdminAction({
        actorId: admin.id,
        action: "NEGOTIATION_REJECTED",
        targetEntity: "negotiations",
        targetId: negotiation_id,
        metadata: { proposal_id, admin_notes },
      });

      return NextResponse.json({
        success: true,
        message: "Negotiation request rejected",
      });
    }

    // Update negotiation status if linked
    if (negotiation_id) {
      await adminDb
        .from("negotiations")
        .update({
          status: "APPROVED",
          admin_notes: admin_notes || `Approved by ${admin.email}`,
          updated_at: new Date().toISOString(),
        })
        .eq("id", negotiation_id);
    }

    // 4. Create authoritative Commercial Terms record
    const { data: commercialTerms, error: termsErr } = await adminDb
      .from("commercial_terms")
      .insert({
        proposal_id,
        negotiation_id: negotiation_id || null,
        final_agreed_price,
        scope_version: nextScopeVersion,
        scope_summary,
        approved_by: admin.id,
        approved_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (termsErr) throw termsErr;

    // 5. Log audit trail
    await logAdminAction({
      actorId: admin.id,
      action: action === "APPROVE" ? "COMMERCIAL_TERMS_APPROVED" : "COMMERCIAL_TERMS_OVERRIDDEN",
      targetEntity: "commercial_terms",
      targetId: commercialTerms.id,
      metadata: {
        proposal_id,
        final_agreed_price,
        scope_version: nextScopeVersion,
        scope_summary,
        approved_by_email: admin.email,
      },
      ipAddress: request.headers.get("x-forwarded-for") || undefined,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Commercial terms finalized successfully",
      commercialTerms,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to override commercial terms";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
