import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url({ message: "NEXT_PUBLIC_SUPABASE_URL must be a valid URL" }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10, { message: "NEXT_PUBLIC_SUPABASE_ANON_KEY is required" }),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(10, { message: "SUPABASE_SERVICE_ROLE_KEY is required" }),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  });

  if (!parsed.success) {
    console.error("❌ Environment validation error:", parsed.error.flatten().fieldErrors);
    // In production, throw explicitly to halt invalid deployments
    if (process.env.NODE_ENV === "production") {
      throw new Error("Invalid environment variables configuration.");
    }
  }

  return (parsed.success ? parsed.data : process.env) as Env;
}

export const env = validateEnv();
