import { randomUUID } from "crypto";

export type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR";

export interface LogContext {
  requestId?: string;
  route?: string;
  method?: string;
  status?: number;
  durationMs?: number;
  actorId?: string;
  error?: string | Error;
  [key: string]: unknown;
}

export interface StructuredLogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  request_id?: string;
  route?: string;
  method?: string;
  status?: number;
  duration_ms?: number;
  environment: string;
  metadata?: Record<string, unknown>;
}

// Sensitive fields that MUST be redacted recursively (11A.5)
const SENSITIVE_KEYS = new Set([
  "password",
  "password_hash",
  "password_confirmation",
  "token",
  "bearer_token",
  "authorization",
  "cookie",
  "set-cookie",
  "secret",
  "service_role_key",
  "supabase_service_role_key",
  "razorpay_key_secret",
  "razorpay_webhook_secret",
  "resend_api_key",
  "resend_webhook_secret",
  "cal_webhook_secret",
  "sentry_auth_token",
  "mfa_secret",
  "totp_secret",
  "card",
  "card_number",
  "cvv",
  "pan",
]);

/**
 * Recursively redacts sensitive credentials, tokens, and secrets from log payloads (11A.5).
 */
export function redactSensitiveData(data: unknown, depth = 0): unknown {
  if (depth > 6 || data === null || data === undefined) return data;

  if (typeof data === "string") {
    // Redact Bearer tokens and whsec_ secrets in raw strings
    return data
      .replace(/Bearer\s+[A-Za-z0-9\-_.]+/gi, "Bearer [REDACTED]")
      .replace(/whsec_[A-Za-z0-9+/=]+/gi, "whsec_[REDACTED]")
      .replace(/rzp_(test|live)_[A-Za-z0-9]+/gi, "rzp_$1_[REDACTED]");
  }

  if (Array.isArray(data)) {
    return data.map((item) => redactSensitiveData(item, depth + 1));
  }

  if (typeof data === "object") {
    if (data instanceof Error) {
      return {
        name: data.name,
        message: data.message,
        stack: process.env.NODE_ENV === "development" ? data.stack : undefined,
      };
    }

    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      const lowerKey = key.toLowerCase();
      if (SENSITIVE_KEYS.has(lowerKey) || lowerKey.includes("secret") || lowerKey.includes("password")) {
        sanitized[key] = "[REDACTED]";
      } else {
        sanitized[key] = redactSensitiveData(value, depth + 1);
      }
    }
    return sanitized;
  }

  return data;
}

/**
 * Extracts or generates a trusted Request ID (11A.3).
 */
export function getRequestId(request?: Request | Headers | null): string {
  if (!request) return `req_${randomUUID()}`;

  let headerVal: string | null = null;
  if ("headers" in request) {
    headerVal = request.headers.get("x-request-id") || request.headers.get("x-correlation-id");
  } else if (typeof request.get === "function") {
    headerVal = request.get("x-request-id") || request.get("x-correlation-id");
  }

  if (headerVal && /^[A-Za-z0-9\-_]{8,64}$/.test(headerVal)) {
    return headerVal;
  }

  return `req_${randomUUID()}`;
}

const LOG_LEVEL_SEVERITY: Record<LogLevel, number> = {
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
};

function shouldLog(level: LogLevel): boolean {
  const currentEnv = process.env.NODE_ENV;
  const minLevel = currentEnv === "production" ? "INFO" : "DEBUG";
  return LOG_LEVEL_SEVERITY[level] >= LOG_LEVEL_SEVERITY[minLevel];
}

function outputLog(level: LogLevel, message: string, context: LogContext = {}) {
  if (!shouldLog(level)) return;

  const { requestId, route, method, status, durationMs, ...rest } = context;

  const entry: StructuredLogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    request_id: requestId,
    route,
    method,
    status,
    duration_ms: durationMs,
    environment: process.env.NODE_ENV || "development",
    metadata: Object.keys(rest).length > 0 ? (redactSensitiveData(rest) as Record<string, unknown>) : undefined,
  };

  const jsonString = JSON.stringify(entry);

  switch (level) {
    case "ERROR":
      console.error(jsonString);
      break;
    case "WARN":
      console.warn(jsonString);
      break;
    case "DEBUG":
      console.debug(jsonString);
      break;
    case "INFO":
    default:
      console.log(jsonString);
      break;
  }
}

/**
 * Structured JSON Logger for Serverless/Next.js Environments (11A.1, 11A.2, 11A.3, 11A.5)
 */
export const logger = {
  debug: (message: string, context?: LogContext) => outputLog("DEBUG", message, context),
  info: (message: string, context?: LogContext) => outputLog("INFO", message, context),
  warn: (message: string, context?: LogContext) => outputLog("WARN", message, context),
  error: (message: string, context?: LogContext) => outputLog("ERROR", message, context),
};
