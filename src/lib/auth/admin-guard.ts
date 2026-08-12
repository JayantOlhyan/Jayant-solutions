import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export interface AdminUserSession {
  id: string;
  email: string;
  role: string;
}

/**
 * Server-side authorization check enforcing admin privileges.
 * Throws error or returns session object if authorized.
 */
export async function requireAdmin(): Promise<AdminUserSession> {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized: Admin authentication required.");
  }

  // Check user metadata role or database admin_users table
  const userRole = user.user_metadata?.role;
  
  if (userRole === "admin" || userRole === "super_admin") {
    return {
      id: user.id,
      email: user.email || "",
      role: userRole,
    };
  }

  // Query database admin_users using privileged admin client
  const adminDb = createAdminClient();
  const { data: adminRecord } = await adminDb
    .from("admin_users")
    .select("id, email, role")
    .eq("id", user.id)
    .single();

  if (!adminRecord) {
    throw new Error("Forbidden: Account does not possess administrative privileges.");
  }

  return {
    id: adminRecord.id,
    email: adminRecord.email,
    role: adminRecord.role,
  };
}
