import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";

export async function GET() {
  try {
    const adminSession = await requireAdmin();
    return NextResponse.json({
      success: true,
      message: "Admin authorization verified",
      admin: adminSession,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    return NextResponse.json(
      { success: false, error: message },
      { status: 403 }
    );
  }
}
