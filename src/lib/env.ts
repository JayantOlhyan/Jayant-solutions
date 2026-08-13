import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url({ message: "NEXT_PUBLIC_SUPABASE_URL must be a valid URL" }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(10, { message: "NEXT_PUBLIC_SUPABASE_ANON_KEY is required" }),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(10, { message: "SUPABASE_SERVICE_ROLE_KEY is required" }),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  RAZORPAY_WEBHOOK_SECRET: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().default("Jayant Web & AI Systems <notifications@jayantolhyan.in>"),
  ADMIN_EMAIL: z.string().email().default("jayantwebaisystems@gmail.com"),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
    RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM || "Jayant Web & AI Systems <notifications@jayantolhyan.in>",
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || "jayantwebaisystems@gmail.com",
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
