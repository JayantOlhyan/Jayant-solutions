import { createHash } from "crypto";
import { checkRateLimit, resetRateLimit } from "@/lib/rate-limit";
import { logAdminAction } from "@/lib/auth/audit";

export const LOCKOUT_CONFIG = {
  MAX_FAILED_ATTEMPTS: 5,
  LOCKOUT_WINDOW_SECONDS: 900, // 15 minutes
};

/**
 * Creates a deterministic, safe hash for email to prevent PII exposure in rate_limits keys.
 */
export function getAccountLockoutKey(email: string): string {
  const normalized = email.trim().toLowerCase();
  const hash = createHash("sha256").update(normalized).digest("hex");
  return `lockout:account:${hash}`;
}

export interface AccountLockoutStatus {
  isLocked: boolean;
  remainingSeconds: number;
  attemptsCount: number;
}

/**
 * Checks whether an account is currently locked out without incrementing the failure counter.
 */
export async function checkAccountLockout(email: string): Promise<AccountLockoutStatus> {
  const key = getAccountLockoutKey(email);
  // Check against a max of 0 so we just read the current state without side effects if possible,
  // or use standard check with max allowed attempts.
  const result = await checkRateLimit(key, LOCKOUT_CONFIG.MAX_FAILED_ATTEMPTS, LOCKOUT_CONFIG.LOCKOUT_WINDOW_SECONDS);

  // If remaining is 0 and success is false, it means threshold is exceeded and lockout is active
  if (!result.success) {
    return {
      isLocked: true,
      remainingSeconds: result.resetInSeconds,
      attemptsCount: result.limit,
    };
  }

  return {
    isLocked: false,
    remainingSeconds: result.resetInSeconds,
    attemptsCount: result.limit - result.remaining,
  };
}

/**
 * Records a failed authentication attempt against an account.
 * If threshold is reached, logs an ADMIN_ACCOUNT_LOCKED audit event.
 */
export async function recordFailedLoginAttempt(
  email: string,
  ipAddress: string,
  userAgent?: string
): Promise<AccountLockoutStatus> {
  const key = getAccountLockoutKey(email);
  const result = await checkRateLimit(key, LOCKOUT_CONFIG.MAX_FAILED_ATTEMPTS, LOCKOUT_CONFIG.LOCKOUT_WINDOW_SECONDS);

  const attemptsCount = result.limit - result.remaining;
  const isLocked = !result.success;

  // Log failed login audit event
  await logAdminAction({
    actorId: "anonymous",
    action: "ADMIN_LOGIN_FAILED",
    targetEntity: "admin_users",
    metadata: {
      emailMasked: email.replace(/(.{2})(.*)(?=@)/, (_match, start, mid) => start + "*".repeat(mid.length)),
      attemptsCount,
      isLocked,
    },
    ipAddress,
    userAgent,
  });

  if (isLocked) {
    // Log account locked audit event
    await logAdminAction({
      actorId: "system",
      action: "ADMIN_ACCOUNT_LOCKED",
      targetEntity: "admin_users",
      metadata: {
        emailMasked: email.replace(/(.{2})(.*)(?=@)/, (_match, start, mid) => start + "*".repeat(mid.length)),
        lockoutDurationSeconds: result.resetInSeconds,
      },
      ipAddress,
      userAgent,
    });
  }

  return {
    isLocked,
    remainingSeconds: result.resetInSeconds,
    attemptsCount,
  };
}

/**
 * Clears the failed attempt count on successful authentication.
 */
export async function clearAccountLockout(email: string): Promise<void> {
  const key = getAccountLockoutKey(email);
  await resetRateLimit(key);
}
