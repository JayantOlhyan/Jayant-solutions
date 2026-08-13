import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";

const ALLOWED_ACTOR_TYPES = ["ADMIN", "CLIENT", "SYSTEM"];
const ALLOWED_TARGET_ENTITIES = ["proposals", "agreements", "invoices", "payments", "onboarding", "bookings", "negotiations"];

export async function GET(request: Request) {
  try {
    // 1. Require Server-Side Admin Authorization
    await requireAdmin();
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    // Enforce max page size limit to prevent unbounded query memory pressure
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));

    const actorType = searchParams.get("actor_type");
    const action = searchParams.get("action");
    const targetEntity = searchParams.get("target_entity");

    const offset = (page - 1) * limit;
    const adminDb = createAdminClient();

    let query = adminDb
      .from("audit_events")
      .select("id, actor_type, actor_id, action, target_entity, target_id, metadata, created_at", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    // Validate and apply allowlisted filters
    if (actorType && ALLOWED_ACTOR_TYPES.includes(actorType)) {
      query = query.eq("actor_type", actorType);
    }
    if (action && typeof action === "string" && action.length <= 100) {
      query = query.eq("action", action);
    }
    if (targetEntity && ALLOWED_TARGET_ENTITIES.includes(targetEntity)) {
      query = query.eq("target_entity", targetEntity);
    }

    const { data: logs, count, error } = await query;

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      logs: logs || [],
      pagination: {
        page,
        limit,
        total_records: count || 0,
        total_pages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to query audit logs";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
