import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export interface AdminUserSession {
  id: string;
  email: string;
  role: "admin" | "super_admin";
  mfaVerified: boolean;
}

export class AdminAuthError extends Error {
  public code: "UNAUTHORIZED" | "FORBIDDEN" | "MFA_REQUIRED";
  public status: number;

  constructor(code: "UNAUTHORIZED" | "FORBIDDEN" | "MFA_REQUIRED", message: string, status: number = 403) {
    super(message);
    this.name = "AdminAuthError";
    this.code = code;
    this.status = status;
  }
}

/**
 * Server-side authorization check enforcing general admin privileges (9A.3, 9A.5).
 */
export async function requireAdmin(): Promise<AdminUserSession> {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new AdminAuthError("UNAUTHORIZED", "Admin authentication required.", 401);
  }

  // 1. Resolve user role from admin_users table (ground truth) or metadata
  const adminDb = createAdminClient();
  const { data: adminRecord } = await adminDb
    .from("admin_users")
    .select("id, email, role")
    .eq("id", user.id)
    .maybeSingle();

  const role = (adminRecord?.role || user.user_metadata?.role) as "admin" | "super_admin" | undefined;

  if (!role || (role !== "admin" && role !== "super_admin")) {
    throw new AdminAuthError("FORBIDDEN", "Account does not possess administrative privileges.", 403);
  }

  // 2. Check Multi-Factor Authentication (MFA / TOTP) Status (9A.5)
  const { data: aalData } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
  const { data: factorsData } = await supabase.auth.mfa.listFactors();
  const verifiedFactors = factorsData?.totp.filter((f) => f.status === "verified") || [];
  const hasEnrolledMfa = verifiedFactors.length > 0;
  const isAal2 = aalData?.currentLevel === "aal2";

  // If user has enrolled MFA factors, AAL2 is mandatory
  if (hasEnrolledMfa && !isAal2) {
    throw new AdminAuthError("MFA_REQUIRED", "Multi-Factor Authentication (AAL2) verification required.", 403);
  }

  return {
    id: user.id,
    email: user.email || "",
    role,
    mfaVerified: isAal2,
  };
}

/**
 * Strict Super-Admin authorization check with mandatory MFA enforcement (9A.3, 9A.5).
 * Required for role assignments, sensitive system overrides, and security-critical operations.
 */
export async function requireSuperAdmin(): Promise<AdminUserSession> {
  const session = await requireAdmin();

  if (session.role !== "super_admin") {
    throw new AdminAuthError(
      "FORBIDDEN",
      "Operation restricted: Super-Administrator privileges required.",
      403
    );
  }

  // Super-Admins must strictly have verified MFA (AAL2)
  if (!session.mfaVerified) {
    const supabase = await createClient();
    const { data: factorsData } = await supabase.auth.mfa.listFactors();
    const verifiedFactors = factorsData?.totp.filter((f) => f.status === "verified") || [];

    if (verifiedFactors.length === 0) {
      throw new AdminAuthError(
        "MFA_REQUIRED",
        "Super-Administrator accounts are strictly required to enroll and verify Multi-Factor Authentication (TOTP).",
        403
      );
    }

    throw new AdminAuthError(
      "MFA_REQUIRED",
      "Super-Administrator session must be authenticated with Multi-Factor Authentication (AAL2).",
      403
    );
  }

  return session;
}
