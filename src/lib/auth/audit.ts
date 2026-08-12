import { createAdminClient } from "@/lib/supabase/admin";

export interface LogAdminActionParams {
  actorId: string;
  action: string;
  targetEntity: string;
  targetId?: string;
  metadata?: Record<string, unknown>;
  ipAddress?: string;
  userAgent?: string;
}

/**
 * Log administrative and security events into audit_events table.
 */
export async function logAdminAction({
  actorId,
  action,
  targetEntity,
  targetId,
  metadata = {},
  ipAddress,
  userAgent,
}: LogAdminActionParams) {
  try {
    const adminDb = createAdminClient();
    await adminDb.from("audit_events").insert({
      actor_type: "ADMIN",
      actor_id: actorId,
      action,
      target_entity: targetEntity,
      target_id: targetId || null,
      metadata,
      ip_address: ipAddress || null,
      user_agent: userAgent || null,
    });
  } catch (error) {
    console.error("Failed to log audit event:", error);
  }
}
