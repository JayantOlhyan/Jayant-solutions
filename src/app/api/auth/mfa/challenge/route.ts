import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { logAdminAction } from "@/lib/auth/audit";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const challengeSchema = z.object({
  factorId: z.string().min(1, "Factor ID is required"),
  code: z.string().length(6, "Verification code must be 6 digits").regex(/^\d+$/, "Code must contain only digits"),
});

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate Limiting (5 verification attempts per 15 minutes)
    const rateLimit = await checkRateLimit(`ip:${ip}:mfa_challenge`, 5, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = challengeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues.map((i) => i.message).join(". ") },
        { status: 400 }
      );
    }

    const { factorId, code } = parsed.data;
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { success: false, error: "Session expired or invalid. Please sign in again." },
        { status: 401 }
      );
    }

    // 2. Challenge and verify TOTP code with Supabase Auth
    const { error } = await supabase.auth.mfa.challengeAndVerify({
      factorId,
      code,
    });

    if (error) {
      // Log failed MFA challenge attempt
      await logAdminAction({
        actorId: user.id,
        action: "MFA_VERIFY_FAILURE",
        targetEntity: "admin_users",
        targetId: user.id,
        metadata: { factorId, error: error.message },
        ipAddress: ip,
        userAgent: request.headers.get("user-agent") || undefined,
      });

      return NextResponse.json(
        { success: false, error: "Invalid authenticator code. Please check your 6-digit TOTP code." },
        { status: 401 }
      );
    }

    // 3. Log successful MFA challenge completion
    await logAdminAction({
      actorId: user.id,
      action: "MFA_VERIFY_SUCCESS",
      targetEntity: "admin_users",
      targetId: user.id,
      metadata: { factorId },
      ipAddress: ip,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Multi-Factor Authentication verified successfully.",
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal MFA challenge error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
