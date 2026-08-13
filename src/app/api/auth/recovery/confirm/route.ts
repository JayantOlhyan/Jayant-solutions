import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { passwordSchema } from "@/lib/auth/password-policy";
import { logAdminAction } from "@/lib/auth/audit";
import { clearAccountLockout } from "@/lib/auth/lockout";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const confirmSchema = z.object({
  password: passwordSchema,
});

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate Limiting (5 confirmation attempts per 15 minutes)
    const ipLimit = await checkRateLimit(`ip:${ip}:recovery_confirm`, 5, 900);
    if (!ipLimit.success) {
      return createRateLimitResponse(ipLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = confirmSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues.map((i) => i.message).join(". "),
        },
        { status: 400 }
      );
    }

    const { password } = parsed.data;
    const supabase = await createClient();

    // Verify recovery session exists
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid or expired recovery session. Please request a new recovery link.",
        },
        { status: 401 }
      );
    }

    // 2. Update user's password using Supabase Auth
    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      return NextResponse.json(
        { success: false, error: updateError.message },
        { status: 400 }
      );
    }

    // 3. Clear any active account lockout on successful password reset
    if (user.email) {
      await clearAccountLockout(user.email);
    }

    // 4. Log audit event
    await logAdminAction({
      actorId: user.id,
      action: "ADMIN_PASSWORD_RECOVERY_COMPLETED",
      targetEntity: "admin_users",
      targetId: user.id,
      metadata: {
        emailMasked: user.email?.replace(/(.{2})(.*)(?=@)/, (_match, start, mid) => start + "*".repeat(mid.length)),
      },
      ipAddress: ip,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Password has been securely reset. You may now log in with your new credentials.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal password reset error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
