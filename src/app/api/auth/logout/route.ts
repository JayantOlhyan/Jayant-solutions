import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST() {
  try {
    const supabase = await createClient();
    await supabase.auth.signOut();

    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Logout error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
