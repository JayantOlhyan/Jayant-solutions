import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { logAdminAction } from "@/lib/auth/audit";
import { checkRateLimit, getClientIp, createRateLimitResponse } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. IP Rate Limiting (5 enrollment attempts per 15 minutes)
    const rateLimit = await checkRateLimit(`ip:${ip}:mfa_enroll`, 5, 900);
    if (!rateLimit.success) {
      return createRateLimitResponse(rateLimit.resetInSeconds);
    }

    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Admin session required for MFA enrollment." },
        { status: 401 }
      );
    }

    // 2. Enroll TOTP factor via Supabase Auth
    const { data, error } = await supabase.auth.mfa.enroll({
      factorType: "totp",
      friendlyName: "Jayant Systems Admin Authenticator",
      issuer: "Jayant Web & AI Systems",
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    // 3. Log audit event
    await logAdminAction({
      actorId: user.id,
      action: "MFA_ENROLL_INITIATED",
      targetEntity: "admin_users",
      targetId: user.id,
      metadata: {
        factorId: data.id,
        factorType: data.type,
      },
      ipAddress: ip,
      userAgent: request.headers.get("user-agent") || undefined,
    });

    return NextResponse.json({
      success: true,
      factorId: data.id,
      type: data.type,
      qrCode: data.totp.qr_code,
      secret: data.totp.secret,
      uri: data.totp.uri,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal MFA enrollment error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
