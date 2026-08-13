import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin-guard";
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  try {
    await requireAdmin();

    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { success: false, error: "Test exception route disabled in production mode" },
        { status: 403 }
      );
    }

    const testError = new Error("Deliberate Sentry Error Capture Test — OBS-02");
    Sentry.captureException(testError);

    return NextResponse.json({
      success: true,
      message: "Deliberate test exception captured and sent to Sentry.",
      captured: true,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    const status = message.includes("Forbidden") ? 403 : message.includes("Unauthorized") ? 401 : 500;
    return NextResponse.json(
      { success: false, error: message },
      { status }
    );
  }
}
