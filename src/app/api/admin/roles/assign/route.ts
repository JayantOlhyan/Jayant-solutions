import { requireSuperAdmin, AdminAuthError } from "@/lib/auth/admin-guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/auth/audit";
import { apiSuccess, badRequest, notFound, forbidden, internalError, mfaRequired, unauthorized } from "@/lib/api-response";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const assignRoleSchema = z.object({
  target_user_id: z.string().uuid("Invalid target user UUID"),
  new_role: z.enum(["admin", "super_admin"]),
  reason: z.string().min(5, "Role modification reason must be at least 5 characters"),
});

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate Limiting (10 role assignment attempts per 15 minutes)
    const rateLimit = await checkRateLimit(`ip:${ip}:admin_role_assign`, 10, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    // 2. Strict Super-Admin & MFA Authorization Guard (9A.3, 9A.5)
    let admin;
    try {
      admin = await requireSuperAdmin();
    } catch (authErr: unknown) {
      if (authErr instanceof AdminAuthError) {
        if (authErr.code === "UNAUTHORIZED") return unauthorized(authErr.message);
        if (authErr.code === "MFA_REQUIRED") return mfaRequired(authErr.message);
        return forbidden(authErr.message);
      }
      return unauthorized();
    }

    const body = await request.json();
    const parsed = assignRoleSchema.safeParse(body);

    if (!parsed.success) {
      return badRequest("Invalid role assignment payload", parsed.error.flatten().fieldErrors);
    }

    const { target_user_id, new_role, reason } = parsed.data;
    const adminDb = createAdminClient();

    // 3. Look up target admin record
    const { data: targetAdmin, error: fetchErr } = await adminDb
      .from("admin_users")
      .select("id, email, role")
      .eq("id", target_user_id)
      .maybeSingle();

    if (fetchErr || !targetAdmin) {
      return notFound("Target administrative user not found.");
    }

    const oldRole = targetAdmin.role;

    if (oldRole === new_role) {
      return badRequest(`Target user already has the '${new_role}' role.`);
    }

    // 4. Protection: Prevent demoting the last remaining super_admin
    if (oldRole === "super_admin" && new_role !== "super_admin") {
      const { count } = await adminDb
        .from("admin_users")
        .select("*", { count: "exact", head: true })
        .eq("role", "super_admin");

      if ((count || 0) <= 1) {
        return badRequest("Cannot demote the sole remaining Super-Administrator in the system.");
      }
    }

    // 5. Update admin_users table role
    const { error: updateErr } = await adminDb
      .from("admin_users")
      .update({
        role: new_role,
        updated_at: new Date().toISOString(),
      })
      .eq("id", target_user_id);

    if (updateErr) {
      throw updateErr;
    }

    // 6. Sync Supabase Auth user metadata
    try {
      await adminDb.auth.admin.updateUserById(target_user_id, {
        user_metadata: { role: new_role },
      });
    } catch (syncErr) {
      console.warn("⚠️ Warning: Failed to sync auth user_metadata for role change:", syncErr);
    }

    // 7. Record Role Assignment Audit Log (9A.4)
    await logAdminAction({
      actorId: admin.id,
      action: "ROLE_ASSIGNED",
      targetEntity: "admin_users",
      targetId: target_user_id,
      metadata: {
        actorEmail: admin.email,
        targetEmail: targetAdmin.email,
        oldRole,
        newRole: new_role,
        reason,
      },
      ipAddress: ip,
    });

    return apiSuccess({
      userId: target_user_id,
      email: targetAdmin.email,
      oldRole,
      newRole: new_role,
      updatedAt: new Date().toISOString(),
    }, `Role successfully updated to '${new_role}'.`);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal role assignment failure";
    return internalError(msg);
  }
}
