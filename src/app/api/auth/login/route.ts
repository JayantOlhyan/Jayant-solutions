import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { logAdminAction } from "@/lib/auth/audit";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { checkAccountLockout, recordFailedLoginAttempt, clearAccountLockout } from "@/lib/auth/lockout";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const userAgent = request.headers.get("user-agent") || undefined;

    // 1. Strict IP-Level Brute Force Protection (5 attempts per 15 minutes per IP)
    const ipRateLimit = await checkRateLimit(`ip:${ip}:auth_login`, 5, 900);
    if (!ipRateLimit.success) {
      return createRateLimitResponse(ipRateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues.map((i) => i.message).join(". ") },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const normalizedEmail = email.trim().toLowerCase();

    // 2. Account-Level Lockout Check (Checklist Item 1B.5)
    const lockoutStatus = await checkAccountLockout(normalizedEmail);
    if (lockoutStatus.isLocked) {
      const minutesRemaining = Math.max(1, Math.ceil(lockoutStatus.remainingSeconds / 60));
      return NextResponse.json(
        {
          success: false,
          error: `Account is temporarily locked due to multiple failed login attempts. Please try again in ${minutesRemaining} minute(s) or reset your password.`,
          isLocked: true,
          retryAfterSeconds: lockoutStatus.remainingSeconds,
        },
        {
          status: 423, // 423 Locked
          headers: {
            "Retry-After": String(lockoutStatus.remainingSeconds),
          },
        }
      );
    }

    const supabase = await createClient();

    // 3. Authenticate with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    if (error) {
      // 4. Record failed attempt and trigger lockout if threshold is exceeded
      const failureResult = await recordFailedLoginAttempt(normalizedEmail, ip, userAgent);

      if (failureResult.isLocked) {
        const minutesRemaining = Math.max(1, Math.ceil(failureResult.remainingSeconds / 60));
        return NextResponse.json(
          {
            success: false,
            error: `Maximum login attempts exceeded. Account is locked for ${minutesRemaining} minutes.`,
            isLocked: true,
            retryAfterSeconds: failureResult.remainingSeconds,
          },
          {
            status: 423,
            headers: {
              "Retry-After": String(failureResult.remainingSeconds),
            },
          }
        );
      }

      return NextResponse.json(
        { success: false, error: "Invalid credentials. Please check your email and password." },
        { status: 401 }
      );
    }

    // 5. Authentication successful — Clear account lockout counter
    await clearAccountLockout(normalizedEmail);

    // 6. Check MFA (TOTP) Requirement (Checklist Item 9A.5)
    const { data: factorsData } = await supabase.auth.mfa.listFactors();
    const verifiedFactors = factorsData?.totp.filter((f) => f.status === "verified") || [];
    const isSuperAdmin = data.user.user_metadata?.role === "super_admin";

    if (verifiedFactors.length > 0) {
      // MFA is enabled on this account — prompt for TOTP code (Step 2)
      await logAdminAction({
        actorId: data.user.id,
        action: "ADMIN_LOGIN_MFA_CHALLENGE_PROMPTED",
        targetEntity: "admin_users",
        targetId: data.user.id,
        metadata: { factorId: verifiedFactors[0].id },
        ipAddress: ip,
        userAgent,
      });

      return NextResponse.json({
        success: true,
        mfaRequired: true,
        factorId: verifiedFactors[0].id,
        user: {
          id: data.user.id,
          email: data.user.email,
        },
      });
    }

    // Log standard admin login success event
    await logAdminAction({
      actorId: data.user.id,
      action: "ADMIN_LOGIN_SUCCESS",
      targetEntity: "admin_users",
      targetId: data.user.id,
      metadata: { email: data.user.email, isSuperAdmin },
      ipAddress: ip,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      mfaRequired: false,
      user: {
        id: data.user.id,
        email: data.user.email,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal authentication error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
