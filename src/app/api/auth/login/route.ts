import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { logAdminAction } from "@/lib/auth/audit";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: Request) {
  try {
    // 1. Strict Brute Force Protection (5 attempts per 15 minutes per IP)
    const ip = getClientIp(request);
    const rateLimit = await checkRateLimit(`ip:${ip}:auth_login`, 5, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 401 }
      );
    }

    // Log admin authentication audit event
    await logAdminAction({
      actorId: data.user.id,
      action: "ADMIN_LOGIN_SUCCESS",
      targetEntity: "admin_users",
      targetId: data.user.id,
      metadata: { email: data.user.email },
      ipAddress: ip,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
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
