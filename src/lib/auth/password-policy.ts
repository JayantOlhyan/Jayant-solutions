import { z } from "zod";

/**
 * Authoritative Password Strength Policy (Checklist Item 1B.2)
 * Requirements:
 * - Minimum 8 characters
 * - Maximum 128 characters
 * - At least 1 number (0-9)
 * - At least 1 special character / symbol
 */
export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(128, "Password cannot exceed 128 characters")
  .regex(/[0-9]/, "Password must contain at least one number (0-9)")
  .regex(
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~` ]/,
    "Password must contain at least one special character or symbol"
  );

export interface PasswordValidationResult {
  valid: boolean;
  errors: string[];
  rules: {
    minLength: boolean;
    hasNumber: boolean;
    hasSpecial: boolean;
  };
}

/**
 * Validates password strength in real-time or server-side.
 */
export function validatePasswordStrength(password: string): PasswordValidationResult {
  const minLength = (password || "").length >= 8;
  const hasNumber = /[0-9]/.test(password || "");
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~` ]/.test(password || "");

  const errors: string[] = [];
  if (!minLength) errors.push("Must be at least 8 characters long");
  if (!hasNumber) errors.push("Must contain at least one number (0-9)");
  if (!hasSpecial) errors.push("Must contain at least one special character");

  return {
    valid: minLength && hasNumber && hasSpecial,
    errors,
    rules: {
      minLength,
      hasNumber,
      hasSpecial,
    },
  };
}
