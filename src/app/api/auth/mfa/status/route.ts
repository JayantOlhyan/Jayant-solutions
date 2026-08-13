import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: Admin session required." },
        { status: 401 }
      );
    }

    const { data: factorsData, error: factorsError } = await supabase.auth.mfa.listFactors();
    if (factorsError) {
      return NextResponse.json(
        { success: false, error: factorsError.message },
        { status: 500 }
      );
    }

    const { data: aalData, error: aalError } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if (aalError) {
      return NextResponse.json(
        { success: false, error: aalError.message },
        { status: 500 }
      );
    }

    const verifiedFactors = factorsData.totp.filter((f) => f.status === "verified");
    const isMfaEnrolled = verifiedFactors.length > 0;
    const isSuperAdmin = user.user_metadata?.role === "super_admin";

    return NextResponse.json({
      success: true,
      data: {
        userId: user.id,
        email: user.email,
        isMfaEnrolled,
        isSuperAdmin,
        currentAal: aalData.currentLevel,
        nextAal: aalData.nextLevel,
        factors: verifiedFactors.map((f) => ({
          id: f.id,
          friendlyName: f.friendly_name || "Authenticator App",
          createdAt: f.created_at,
          updatedAt: f.updated_at,
        })),
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to retrieve MFA status";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
