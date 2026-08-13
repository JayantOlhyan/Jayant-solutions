import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export interface AdminUserSession {
  id: string;
  email: string;
  role: string;
  mfaVerified: boolean;
}

/**
 * Server-side authorization check enforcing admin privileges and MFA requirements (9A.5).
 * Throws error or returns session object if authorized.
 */
export async function requireAdmin(): Promise<AdminUserSession> {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Unauthorized: Admin authentication required.");
  }

  // 1. Resolve user role from user_metadata or admin_users table
  let role: string | null = user.user_metadata?.role || null;

  if (!role || (role !== "admin" && role !== "super_admin")) {
    const adminDb = createAdminClient();
    const { data: adminRecord } = await adminDb
      .from("admin_users")
      .select("id, email, role")
      .eq("id", user.id)
      .single();

    if (!adminRecord) {
      throw new Error("Forbidden: Account does not possess administrative privileges.");
    }
    role = adminRecord.role;
  }

  // 2. Check Multi-Factor Authentication (MFA / TOTP) Status (9A.5)
  const { data: aalData } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
  const { data: factorsData } = await supabase.auth.mfa.listFactors();
  const verifiedFactors = factorsData?.totp.filter((f) => f.status === "verified") || [];
  const hasEnrolledMfa = verifiedFactors.length > 0;
  const isAal2 = aalData?.currentLevel === "aal2";

  // If user has enrolled MFA factors, AAL2 is mandatory to access admin capabilities
  if (hasEnrolledMfa && !isAal2) {
    throw new Error("MFA_REQUIRED: Multi-Factor Authentication (AAL2) verification required.");
  }

  return {
    id: user.id,
    email: user.email || "",
    role: role || "admin",
    mfaVerified: isAal2,
  };
}
