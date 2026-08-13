import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;

const SENSITIVE_KEYS = [
  "password",
  "token",
  "signature_text",
  "service_role_key",
  "key_secret",
  "webhook_secret",
  "resend_api_key",
  "authorization",
  "cookie",
  "credit_card",
  "x-razorpay-signature",
  "x-cal-signature-256",
];

function scrubObject(obj: any): any {
  if (!obj || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(scrubObject);

  const scrubbed: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    const lowerKey = key.toLowerCase();
    if (SENSITIVE_KEYS.some((k) => lowerKey.includes(k))) {
      scrubbed[key] = "[SCRUBBED_SENSITIVE_DATA]";
    } else if (typeof value === "object") {
      scrubbed[key] = scrubObject(value);
    } else {
      scrubbed[key] = value;
    }
  }
  return scrubbed;
}

Sentry.init({
  dsn: SENTRY_DSN,
  environment: process.env.NODE_ENV || "development",
  enabled: process.env.NODE_ENV === "production" || !!SENTRY_DSN,
  tracesSampleRate: 0.1,
  debug: false,
  beforeSend(event) {
    if (event.request) {
      if (event.request.headers) {
        event.request.headers = scrubObject(event.request.headers);
      }
      if (event.request.cookies) {
        event.request.cookies = scrubObject(event.request.cookies);
      }
      if (event.request.data) {
        event.request.data = scrubObject(event.request.data);
      }
    }
    if (event.extra) {
      event.extra = scrubObject(event.extra);
    }
    return event;
  },
});
