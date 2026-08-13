import { NextResponse } from "next/server";

export type ApiErrorCode =
  | "INVALID_INPUT"
  | "UNAUTHORIZED"
  | "MFA_REQUIRED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "PAYMENT_REQUIRED"
  | "INTERNAL_ERROR";

export interface ApiErrorPayload {
  code: ApiErrorCode;
  message: string;
  details?: Record<string, unknown> | unknown[];
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiErrorPayload;
  message?: string;
}

/**
 * Standardized Success Response Generator (Checklist 8A.3, 8A.8)
 */
export function apiSuccess<T>(data?: T, message?: string, status: number = 200) {
  const payload: ApiResponse<T> = {
    success: true,
    ...(data !== undefined ? { data } : {}),
    ...(message ? { message } : {}),
  };
  return NextResponse.json(payload, { status });
}

/**
 * Standardized Error Response Generator (Checklist 8A.3)
 * Enforces consistent JSON error structure across all API endpoints:
 * {
 *   "success": false,
 *   "error": {
 *     "code": "INVALID_INPUT",
 *     "message": "Human readable message",
 *     "details": {}
 *   }
 * }
 */
export function apiError(
  code: ApiErrorCode,
  message: string,
  status: number = 400,
  details?: Record<string, unknown> | unknown[]
) {
  const payload: ApiResponse = {
    success: false,
    error: {
      code,
      message,
      ...(details ? { details } : {}),
    },
  };
  return NextResponse.json(payload, { status });
}

// Convenient Semantic Error Helpers
export const badRequest = (message: string, details?: Record<string, unknown> | unknown[]) =>
  apiError("INVALID_INPUT", message, 400, details);

export const unauthorized = (message: string = "Authentication required.") =>
  apiError("UNAUTHORIZED", message, 401);

export const mfaRequired = (message: string = "Multi-Factor Authentication (AAL2) required.") =>
  apiError("MFA_REQUIRED", message, 403);

export const forbidden = (message: string = "Insufficient administrative privileges.") =>
  apiError("FORBIDDEN", message, 403);

export const notFound = (message: string = "Requested resource not found.") =>
  apiError("NOT_FOUND", message, 404);

export const conflict = (message: string) =>
  apiError("CONFLICT", message, 409);

export const rateLimited = (resetInSeconds: number, message: string = "Too many requests. Please try again later.") =>
  apiError("RATE_LIMITED", message, 429, { retryAfterSeconds: resetInSeconds });

export const internalError = (message: string = "An unexpected internal server error occurred.") =>
  apiError("INTERNAL_ERROR", message, 500);
