import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const timestamp = new Date().toISOString();
  
  try {
    const supabaseConfigured = Boolean(
      env.NEXT_PUBLIC_SUPABASE_URL && 
      !env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")
    );

    let dbStatus = "Not Connected (Placeholder Environment)";
    
    if (supabaseConfigured) {
      const supabase = await createClient();
      const { error } = await supabase.from("_health_check").select("*").limit(1);
      // Even if table doesn't exist, getting 42P01 error code proves connection is valid
      if (!error || error.code === "42P01") {
        dbStatus = "Connected & Responsive";
      } else {
        dbStatus = `Connection Error: ${error.message}`;
      }
    }

    return NextResponse.json({
      status: "ok",
      timestamp,
      service: "Jayant Web & AI Systems Backend API",
      environment: process.env.NODE_ENV,
      supabase: {
        configured: supabaseConfigured,
        status: dbStatus,
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
