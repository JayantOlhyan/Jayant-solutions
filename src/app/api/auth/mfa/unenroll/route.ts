import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { logAdminAction } from "@/lib/auth/audit";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const unenrollSchema = z.object({
  factorId: z.string().min(1, "Factor ID is required"),
});

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate Limiting
    const rateLimit = await checkRateLimit(`ip:${ip}:mfa_unenroll`, 5, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = unenrollSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues.map((i) => i.message).join(". ") },
        { status: 400 }
      );
    }

    const { factorId } = parsed.data;
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Admin session required." },
        { status: 401 }
      );
    }

    // 2. Check assurance level: Must have AAL2 session to unenroll factors
    const { data: aalData } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (aalData?.currentLevel !== "aal2") {
      return NextResponse.json(
        { success: false, error: "Forbidden: Verified Multi-Factor Authentication session (AAL2) required to modify MFA settings." },
        { status: 403 }
      );
    }

    // 3. Super-admin policy: Super admins cannot remove their last MFA factor
    const isSuperAdmin = user.user_metadata?.role === "super_admin";
    if (isSuperAdmin) {
      const { data: factorsData } = await supabase.auth.mfa.listFactors();
      const verifiedCount = factorsData?.totp.filter((f) => f.status === "verified").length || 0;
      if (verifiedCount <= 1) {
        return NextResponse.json(
          {
            success: false,
            error: "Security Policy Violation: Super Admin accounts must maintain at least one active MFA factor.",
          },
          { status: 400 }
        );
      }
    }

    // 4. Unenroll factor with Supabase Auth
    const { error } = await supabase.auth.mfa.unenroll({
      factorId,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    // 5. Log audit event
    await logAdminAction({
      actorId: user.id,
      action: "MFA_FACTOR_REMOVED",
      targetEntity: "admin_users",
      targetId: user.id,
      metadata: { factorId },
      ipAddress: ip,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "MFA factor has been securely removed.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal error removing MFA factor";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
