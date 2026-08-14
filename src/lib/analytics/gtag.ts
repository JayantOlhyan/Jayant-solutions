/**
 * Safe GA4 & Conversion Measurement Utility
 * Jayant Web & AI Systems — Privacy-Preserving Event Tracking
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Safely tracks a page view in GA4
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) return;

  // Sanitize URL to strip sensitive search query tokens
  const cleanUrl = url.split("?")[0];

  window.gtag("event", "page_view", {
    page_location: cleanUrl,
    page_title: title || document.title,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Sanitizes event parameters to ensure zero PII or credentials are leaked
 */
function sanitizeParams(params?: Record<string, unknown>): Record<string, unknown> {
  if (!params) return {};
  const forbiddenKeys = [
    "token",
    "secret",
    "password",
    "email",
    "phone",
    "proposal_id",
    "payment_id",
    "signature",
    "card",
    "mfa",
    "auth",
  ];

  const clean: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    if (forbiddenKeys.some((f) => key.toLowerCase().includes(f))) {
      continue; // Skip sensitive parameters
    }
    // Allow only safe primitive types
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      clean[key] = value;
    }
  }
  return clean;
}

/**
 * Generic sanitized event dispatcher
 */
export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) return;

  const sanitized = sanitizeParams(eventParams);
  window.gtag("event", eventName, {
    ...sanitized,
    send_to: GA_MEASUREMENT_ID,
  });
}

// ----------------------------------------------------
// Specific Business Conversion Event Helpers
// ----------------------------------------------------

/**
 * Primary Conversion: User clicks or schedules a strategy consultation call
 */
export function trackStrategyCallClick(sourcePage: string, triggerLocation: string) {
  trackEvent("strategy_call_click", {
    source_page: sourcePage,
    trigger_location: triggerLocation,
    conversion_type: "primary",
  });
}

/**
 * Secondary Conversion: Contact form submission
 */
export function trackContactFormSubmit(subject: string) {
  trackEvent("contact_form_submit", {
    inquiry_subject: subject,
    conversion_type: "secondary",
  });
}

/**
 * Commercial Funnel: Package / Pricing Tier selection
 */
export function trackPricingPlanSelect(planName: string, billingCycle: string) {
  trackEvent("pricing_plan_select", {
    plan_name: planName,
    billing_cycle: billingCycle,
  });
}

/**
 * AI Engine Traffic Identification Helper
 */
export function detectAndTrackAIRef() {
  if (typeof window === "undefined" || !document.referrer) return;

  try {
    const refUrl = new URL(document.referrer);
    const host = refUrl.hostname.toLowerCase();

    let aiSource = "";
    if (host.includes("chatgpt.com") || host.includes("openai.com")) aiSource = "ChatGPT";
    else if (host.includes("perplexity.ai")) aiSource = "Perplexity";
    else if (host.includes("gemini.google.com")) aiSource = "Gemini";
    else if (host.includes("claude.ai") || host.includes("anthropic.com")) aiSource = "Claude";
    else if (host.includes("copilot.microsoft.com")) aiSource = "Copilot";

    if (aiSource) {
      trackEvent("ai_referral_session", {
        ai_engine: aiSource,
        landing_page: window.location.pathname,
      });
    }
  } catch {
    // Ignore invalid referrer URLs
  }
}
