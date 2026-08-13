import { NextResponse } from "next/server";
import { getPublicEnv } from "@/lib/env";

export async function GET() {
  const timestamp = new Date().toISOString();
  const publicEnv = getPublicEnv();
  
  try {
    const supabaseConfigured = Boolean(
      publicEnv.NEXT_PUBLIC_SUPABASE_URL && 
      !publicEnv.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")
    );

    return NextResponse.json({
      status: "ok",
      timestamp,
      service: "Jayant Web & AI Systems Backend API",
      environment: process.env.NODE_ENV,
      supabase: {
        configured: supabaseConfigured,
        url: publicEnv.NEXT_PUBLIC_SUPABASE_URL || "Not Configured",
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown server error";
    return NextResponse.json(
      { status: "error", timestamp, error: message },
      { status: 500 }
    );
  }
}
