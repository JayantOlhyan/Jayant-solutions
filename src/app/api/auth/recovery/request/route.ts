import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { logAdminAction } from "@/lib/auth/audit";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const requestSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate Limiting (3 requests per 15 minutes per IP)
    const ipLimit = await checkRateLimit(`ip:${ip}:recovery_request`, 3, 900);
    if (!ipLimit.success) {
      return createRateLimitResponse(ipLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const normalizedEmail = parsed.data.email.trim().toLowerCase();

    // 2. Email-based rate limiting (3 requests per 15 minutes per target email)
    const emailLimit = await checkRateLimit(`recovery:email:${normalizedEmail}`, 3, 900);
    if (!emailLimit.success) {
      return createRateLimitResponse(emailLimit.resetInSeconds);
    }

    const supabase = await createClient();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://jayant-systems.online";
    const redirectTo = `${appUrl}/admin/reset-password`;

    // 3. Initiate Supabase Auth recovery token dispatch
    const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, {
      redirectTo,
    });

    if (error) {
      console.warn("Supabase resetPasswordForEmail warning:", error.message);
    }

    // 4. Log audit event
    await logAdminAction({
      actorId: "anonymous",
      action: "ADMIN_PASSWORD_RECOVERY_REQUESTED",
      targetEntity: "admin_users",
      metadata: {
        emailMasked: normalizedEmail.replace(/(.{2})(.*)(?=@)/, (_match, start, mid) => start + "*".repeat(mid.length)),
      },
      ipAddress: ip,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    // 5. Always return generic success to prevent email enumeration
    return NextResponse.json({
      success: true,
      message: "If an administrative account exists for this email, a secure password recovery link has been dispatched.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal recovery error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
