import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { logger } from "@/lib/logger";

export async function GET() {
  const start = Date.now();
  const timestamp = new Date().toISOString();

  let dbHealthy = false;
  let dbLatencyMs = 0;
  let dbError: string | null = null;

  try {
    const dbStart = Date.now();
    const adminDb = createAdminClient();
    const { error } = await adminDb
      .from("admin_users")
      .select("id", { count: "exact", head: true });

    dbLatencyMs = Date.now() - dbStart;
    dbHealthy = !error;
    if (error) dbError = error.message;
  } catch (err: unknown) {
    dbHealthy = false;
    dbError = err instanceof Error ? err.message : "Database connection failed";
  }

  const totalDurationMs = Date.now() - start;
  const isHealthy = dbHealthy;
  const status = isHealthy ? "ok" : "degraded";
  const statusCode = isHealthy ? 200 : 503;

  const payload = {
    status,
    timestamp,
    service: "Jayant Web & AI Systems API",
    environment: process.env.NODE_ENV || "development",
    latency_ms: totalDurationMs,
    checks: {
      database: {
        status: dbHealthy ? "healthy" : "unhealthy",
        latency_ms: dbLatencyMs,
        ...(dbError ? { error: dbError } : {}),
      },
    },
  };

  logger.info(`Health check executed: ${status}`, {
    route: "/api/health",
    method: "GET",
    status: statusCode,
    durationMs: totalDurationMs,
  });

  return NextResponse.json(payload, { status: statusCode });
}
