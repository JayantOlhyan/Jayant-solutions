import { z } from "zod";

/**
 * PUBLIC ENVIRONMENT CONFIGURATION
 * Safe for build-time evaluation and client/server rendering.
 */
const publicEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default("https://jayant-systems.online"),
  EMAIL_FROM: z.string().default("Jayant Web & AI Systems <notifications@jayant-systems.online>"),
  ADMIN_EMAIL: z.string().email().default("jayantwebaisystems@gmail.com"),
});

export type PublicEnv = z.infer<typeof publicEnvSchema>;

/**
 * Returns public environment configuration.
 * Never contains secret keys and is safe to call during build-time static evaluation.
 */
export function getPublicEnv(): PublicEnv {
  const parsed = publicEnvSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://jayant-systems.online",
    EMAIL_FROM: process.env.EMAIL_FROM || "Jayant Web & AI Systems <notifications@jayant-systems.online>",
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || "jayantwebaisystems@gmail.com",
  });

  if (!parsed.success) {
    console.warn("⚠️ Public environment validation warning:", parsed.error.flatten().fieldErrors);
    return {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "https://jayant-systems.online",
      EMAIL_FROM: process.env.EMAIL_FROM || "Jayant Web & AI Systems <notifications@jayant-systems.online>",
      ADMIN_EMAIL: process.env.ADMIN_EMAIL || "jayantwebaisystems@gmail.com",
    };
  }

  return parsed.data;
}

/**
 * SERVER-ONLY ENVIRONMENT CONFIGURATION
 * Must NOT be evaluated at module load time or during static build evaluation.
 * Validated lazily at runtime inside server route handlers or functions.
 */
const serverEnvSchema = z.object({
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(10, "SUPABASE_SERVICE_ROLE_KEY is required for server admin operations"),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  RAZORPAY_WEBHOOK_SECRET: z.string().optional(),
  CAL_WEBHOOK_SECRET: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  RESEND_WEBHOOK_SECRET: z.string().optional(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

/**
 * Lazily evaluates server-only secrets at runtime when called by server handlers.
 * Throws a clear error if required server secrets are missing when executed.
 */
export function getServerEnv(): ServerEnv {
  if (typeof window !== "undefined") {
    throw new Error("Security Error: getServerEnv() cannot be called on the client side.");
  }

  const parsed = serverEnvSchema.safeParse({
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,
    CAL_WEBHOOK_SECRET: process.env.CAL_WEBHOOK_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_WEBHOOK_SECRET: process.env.RESEND_WEBHOOK_SECRET,
  });

  if (!parsed.success) {
    const errorDetails = parsed.error.flatten().fieldErrors;
    console.error("❌ Server environment validation error:", errorDetails);
    throw new Error(`Missing or invalid server secret configuration: ${JSON.stringify(errorDetails)}`);
  }

  return parsed.data;
}

/**
 * Helper: Lazy runtime getter for Supabase Service Role Key
 */
export function getServiceRoleKey(): string {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY environment variable is missing on the server.");
  }
  return serviceKey;
}
