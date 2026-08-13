import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetInSeconds: number;
}

/**
 * BEST-EFFORT IN-MEMORY FALLBACK STORE
 * Used exclusively as a temporary fallback if database connectivity is unavailable.
 * Note: Does not provide cross-instance global guarantees across serverless functions.
 */
const inMemoryBestEffortStore = new Map<string, { count: number; resetAt: number }>();

/**
 * Extracts client IP safely from Netlify/Proxy headers.
 */
export function getClientIp(request: Request): string {
  const headers = request.headers;
  const nfIp = headers.get("x-nf-client-connection-ip");
  if (nfIp) return nfIp.trim();

  const xForwardedFor = headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  return "127.0.0.1";
}

/**
 * Serverless-compatible DB-backed atomic sliding window rate limiter.
 * Invokes PostgreSQL stored procedure 'check_and_increment_rate_limit' to guarantee
 * 100% atomic increment-and-check operations without read-modify-write race conditions.
 */
export async function checkRateLimit(
  key: string,
  maxRequests: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const now = Date.now();

  try {
    const adminDb = createAdminClient();

    // 1. Invoke atomic PostgreSQL RPC procedure
    const { data, error } = await adminDb.rpc("check_and_increment_rate_limit", {
      p_key: key,
      p_window_seconds: windowSeconds,
    });

    if (error) {
      throw error;
    }

    const row = Array.isArray(data) ? data[0] : data;
    const currentCount = row?.current_count || 1;
    const resetAtTime = new Date(row?.reset_at || now + windowSeconds * 1000).getTime();
    const resetInSeconds = Math.max(1, Math.ceil((resetAtTime - now) / 1000));

    if (currentCount > maxRequests) {
      return {
        success: false,
        limit: maxRequests,
        remaining: 0,
        resetInSeconds,
      };
    }

    return {
      success: true,
      limit: maxRequests,
      remaining: Math.max(0, maxRequests - currentCount),
      resetInSeconds,
    };
  } catch (error) {
    console.warn(`⚠️ DB rate limit fallback triggered for key [${key}]:`, error);
    // BEST-EFFORT IN-MEMORY FALLBACK (Does not replace global DB authority)
    const entry = inMemoryBestEffortStore.get(key);
    if (entry && entry.resetAt > now) {
      const resetInSeconds = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));
      if (entry.count >= maxRequests) {
        return { success: false, limit: maxRequests, remaining: 0, resetInSeconds };
      }
      entry.count += 1;
      return { success: true, limit: maxRequests, remaining: maxRequests - entry.count, resetInSeconds };
    }

    const resetAt = now + windowSeconds * 1000;
    inMemoryBestEffortStore.set(key, { count: 1, resetAt });
    return { success: true, limit: maxRequests, remaining: maxRequests - 1, resetInSeconds: windowSeconds };
  }
}

/**
 * Atomically clears a rate limit or lockout key (e.g., upon successful login).
 */
export async function resetRateLimit(key: string): Promise<void> {
  try {
    const adminDb = createAdminClient();
    await adminDb.rpc("reset_rate_limit", { p_key: key });
  } catch (error) {
    console.warn(`⚠️ DB reset rate limit fallback triggered for key [${key}]:`, error);
  } finally {
    inMemoryBestEffortStore.delete(key);
  }
}

/**
 * Helper to generate HTTP 429 Too Many Requests response with safe Retry-After header and Cache-Control: no-store.
 */
export function createRateLimitResponse(resetInSeconds: number): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: "Too many requests. Please try again later.",
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(resetInSeconds),
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

