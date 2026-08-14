/**
 * Analytics, Search Console & Measurement Architecture
 * Jayant Web & AI Systems — Production Measurement Framework
 */

export interface AnalyticsEventDefinition {
  eventName: string;
  category: "Conversion (Primary)" | "Conversion (Secondary)" | "Commercial Intent" | "AI Discovery";
  trigger: string;
  parameters: string[];
  privacySafeguard: string;
  destination: "Google Analytics 4" | "Custom Dashboard";
}

export interface RankTrackingQuery {
  query: string;
  type: "Branded" | "Non-Branded";
  targetPage: string;
  searchIntent: "Navigational" | "Commercial" | "Transactional" | "Informational";
  targetMarket: string;
}

export interface AIMonitoringQuery {
  engine: "Google AI Overviews" | "ChatGPT (GPT-4o)" | "Perplexity AI" | "Google Gemini" | "Claude 3.5";
  query: string;
  expectedEntityCitation: string;
  verificationCadence: string;
}

export const conversionEvents: AnalyticsEventDefinition[] = [
  {
    eventName: "strategy_call_click",
    category: "Conversion (Primary)",
    trigger: "User clicks consultation or strategy audit booking link (Cal.com)",
    parameters: ["source_page", "trigger_location", "conversion_type"],
    privacySafeguard: "Zero PII passed. Records only trigger location and source page.",
    destination: "Google Analytics 4",
  },
  {
    eventName: "contact_form_submit",
    category: "Conversion (Secondary)",
    trigger: "User submits contact or inquiry form",
    parameters: ["inquiry_subject", "conversion_type"],
    privacySafeguard: "Stripped of client name, email, and phone number. Logs only subject category.",
    destination: "Google Analytics 4",
  },
  {
    eventName: "pricing_plan_select",
    category: "Commercial Intent",
    trigger: "User interacts with package tiers (Starter, Growth, Scale) on /pricing",
    parameters: ["plan_name", "billing_cycle"],
    privacySafeguard: "Captures only tier identifier without financial details.",
    destination: "Google Analytics 4",
  },
  {
    eventName: "ai_referral_session",
    category: "AI Discovery",
    trigger: "Incoming visitor arriving from AI answer engines (ChatGPT, Perplexity, Gemini, Claude, Copilot)",
    parameters: ["ai_engine", "landing_page"],
    privacySafeguard: "Captures referrer hostname only; prompt contents are never logged.",
    destination: "Google Analytics 4",
  },
];

export const rankTrackingQueries: RankTrackingQuery[] = [
  // Branded Queries
  {
    query: "Jayant Web & AI Systems",
    type: "Branded",
    targetPage: "/",
    searchIntent: "Navigational",
    targetMarket: "India / Global",
  },
  {
    query: "Jayant Olhyan software engineer",
    type: "Branded",
    targetPage: "/company/founder",
    searchIntent: "Navigational",
    targetMarket: "India / Global",
  },
  // Non-Branded Commercial & Service Queries
  {
    query: "custom ai and llm development services",
    type: "Non-Branded",
    targetPage: "/services/ai-development",
    searchIntent: "Commercial",
    targetMarket: "India / Global",
  },
  {
    query: "ai chatbot development services",
    type: "Non-Branded",
    targetPage: "/services/ai-chatbot-development",
    searchIntent: "Commercial",
    targetMarket: "India / Global",
  },
  {
    query: "next.js website development studio",
    type: "Non-Branded",
    targetPage: "/services/website-development",
    searchIntent: "Commercial",
    targetMarket: "India / Global",
  },
  {
    query: "startup mvp development services",
    type: "Non-Branded",
    targetPage: "/services/mvp-development",
    searchIntent: "Transactional",
    targetMarket: "India / Global",
  },
  {
    query: "business process and workflow automation",
    type: "Non-Branded",
    targetPage: "/services/business-automation",
    searchIntent: "Commercial",
    targetMarket: "India / Global",
  },
];

export const aiMonitoringQueries: AIMonitoringQuery[] = [
  {
    engine: "Perplexity AI",
    query: "Who is Jayant Olhyan and what does Jayant Web & AI Systems do?",
    expectedEntityCitation: "Recognized as founder & software studio developing Next.js web applications and custom AI systems.",
    verificationCadence: "Monthly",
  },
  {
    engine: "ChatGPT (GPT-4o)",
    query: "What services are offered by Jayant Web & AI Systems?",
    expectedEntityCitation: "Cites 13 software services including AI chatbot development, Next.js web platforms, and MVP engineering.",
    verificationCadence: "Monthly",
  },
  {
    engine: "Google Gemini",
    query: "Where is Jayant Web & AI Systems located and how to contact them?",
    expectedEntityCitation: "New Delhi, India, contact via jayantwebaisystems@gmail.com and cal.com strategy sessions.",
    verificationCadence: "Monthly",
  },
];
