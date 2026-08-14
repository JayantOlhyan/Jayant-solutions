/**
 * Content Calendar & Strategy Architecture
 * Maps pages to topics, target keywords, search intent, audience, and supporting hubs.
 */

export interface PageContentPlan {
  pageUrl: string;
  pageTitle: string;
  topic: string;
  primaryKeyword: string;
  searchIntent: "Informational" | "Commercial" | "Transactional" | "Navigational";
  targetAudience: string;
  supportingContent: string[];
  status: "Published" | "Scheduled" | "Needs Review";
  updateCadence: string;
}

export interface TopicCluster {
  pillar: string;
  pillarUrl: string;
  targetAudience: string;
  primaryQuery: string;
  searchIntent: "Informational" | "Commercial" | "Transactional";
  supportingServices: Array<{ name: string; url: string }>;
  blogArticles: Array<{ title: string; slug: string }>;
  caseStudies: Array<{ name: string; id: string }>;
  updateCadence: string;
}

export const contentCalendar: PageContentPlan[] = [
  {
    pageUrl: "/",
    pageTitle: "Custom AI & Web Development | Jayant Web & AI Systems",
    topic: "Full-Stack AI & Software Engineering Studio",
    primaryKeyword: "custom ai & web development",
    searchIntent: "Commercial",
    targetAudience: "Startups, business founders, and operational leaders",
    supportingContent: ["/services", "/pricing", "/portfolio", "/about", "/contact"],
    status: "Published",
    updateCadence: "Monthly review",
  },
  {
    pageUrl: "/services/ai-chatbot-development",
    pageTitle: "AI Chatbot & Assistant Development | Jayant Web & AI",
    topic: "Custom Enterprise AI Chatbots & RAG Agents",
    primaryKeyword: "ai chatbot development services",
    searchIntent: "Commercial",
    targetAudience: "Customer support managers, sales teams, and operations heads",
    supportingContent: ["/blog/ai-solutions", "/portfolio", "/pricing", "/contact"],
    status: "Published",
    updateCadence: "Bi-monthly review of LLM APIs & Vector DB frameworks",
  },
  {
    pageUrl: "/services/ai-development",
    pageTitle: "Custom AI Development & LLM Solutions | Jayant Systems",
    topic: "Enterprise AI & Autonomous Agents",
    primaryKeyword: "custom ai and llm development",
    searchIntent: "Commercial",
    targetAudience: "Enterprises and tech founders building generative AI products",
    supportingContent: ["/services/ai-chatbot-development", "/services/technology-consulting", "/portfolio"],
    status: "Published",
    updateCadence: "Bi-monthly review",
  },
  {
    pageUrl: "/services/website-development",
    pageTitle: "Modern Website Development & Next.js Design | Jayant",
    topic: "Next.js High-Performance Web Development",
    primaryKeyword: "next.js website development",
    searchIntent: "Commercial",
    targetAudience: "Business owners seeking high-converting, SEO-first websites",
    supportingContent: ["/blog/modern-web-development", "/services/custom-software-development", "/pricing"],
    status: "Published",
    updateCadence: "Monthly review of Core Web Vitals & Next.js versions",
  },
  {
    pageUrl: "/services/mvp-development",
    pageTitle: "Rapid Startup MVP Development Services | Jayant Systems",
    topic: "Startup Minimum Viable Product Engineering",
    primaryKeyword: "startup mvp development services",
    searchIntent: "Transactional",
    targetAudience: "Early-stage founders validating ideas in 2 to 6 weeks",
    supportingContent: ["/promo/build-startup-mvp", "/blog/custom-software", "/pricing"],
    status: "Published",
    updateCadence: "Quarterly review of startup tech stacks",
  },
  {
    pageUrl: "/services/business-automation",
    pageTitle: "Business Process & Workflow Automation | Jayant Systems",
    topic: "Workflow Automations & WhatsApp Integrations",
    primaryKeyword: "business process and workflow automation",
    searchIntent: "Commercial",
    targetAudience: "Operations leaders eliminating repetitive manual spreadsheets and tasks",
    supportingContent: ["/blog/automation", "/services/api-development", "/portfolio"],
    status: "Published",
    updateCadence: "Monthly review of API standards",
  },
  {
    pageUrl: "/pricing",
    pageTitle: "Transparent Fixed-Price Packages | Jayant Web & AI",
    topic: "Commercial Packages & Deliverables Comparison",
    primaryKeyword: "transparent pricing packages",
    searchIntent: "Commercial",
    targetAudience: "Prospective clients evaluating project budgets and timelines",
    supportingContent: ["/contact", "/process", "/services"],
    status: "Published",
    updateCadence: "Quarterly pricing & deliverable calibration",
  },
  {
    pageUrl: "/process",
    pageTitle: "Our 6-Step Development Process | Jayant Web & AI",
    topic: "Agile Project Delivery Lifecycle",
    primaryKeyword: "software development process",
    searchIntent: "Informational",
    targetAudience: "Prospective clients evaluating communication and engineering workflow",
    supportingContent: ["/about", "/contact", "/pricing"],
    status: "Published",
    updateCadence: "Bi-annual process methodology audit",
  },
  {
    pageUrl: "/about",
    pageTitle: "About Jayant Olhyan & Engineering Studio | Jayant",
    topic: "Founder Background & Studio Philosophy",
    primaryKeyword: "jayant web & ai systems",
    searchIntent: "Navigational",
    targetAudience: "Clients vetting team credentials and technical background",
    supportingContent: ["/company/founder", "/portfolio", "/contact"],
    status: "Published",
    updateCadence: "Quarterly milestone updates",
  },
  {
    pageUrl: "/contact",
    pageTitle: "Contact & Consultation Booking | Jayant Web & AI",
    topic: "Project Inquiries & Consultation Scheduling",
    primaryKeyword: "hire software developer",
    searchIntent: "Transactional",
    targetAudience: "Ready-to-buy clients seeking project scoping proposals",
    supportingContent: ["/pricing", "/services"],
    status: "Published",
    updateCadence: "Monthly contact channel verification",
  },
];

export const topicClusters: TopicCluster[] = [
  {
    pillar: "Custom AI & LLM Systems",
    pillarUrl: "/services/ai-development",
    targetAudience: "Enterprises, startups, and operational leaders needing private AI agents",
    primaryQuery: "custom ai and llm development",
    searchIntent: "Commercial",
    supportingServices: [
      { name: "AI Chatbot Development", url: "/services/ai-chatbot-development" },
      { name: "Technology Consulting", url: "/services/technology-consulting" },
    ],
    blogArticles: [
      { title: "Building Intelligent AI Chatbots for Enterprise Data", slug: "ai-solutions" },
    ],
    caseStudies: [
      { name: "Healthkinator (Clinical AI Triage)", id: "healthkinator" },
      { name: "Sentinel AI (Real-Time Scam Detection)", id: "sentinelai" },
    ],
    updateCadence: "Bi-monthly review of LLM APIs & Vector DB frameworks",
  },
  {
    pillar: "Modern Web Engineering",
    pillarUrl: "/services/website-development",
    targetAudience: "Businesses seeking high-performance Next.js websites and conversion platforms",
    primaryQuery: "next.js website development",
    searchIntent: "Commercial",
    supportingServices: [
      { name: "Custom Software Development", url: "/services/custom-software-development" },
      { name: "UI/UX Design", url: "/services/ui-ux-design" },
    ],
    blogArticles: [
      { title: "Building Modern High-Performance Web Applications", slug: "modern-web-development" },
    ],
    caseStudies: [
      { name: "WeAct (Volunteer Platform & Dispatch Portal)", id: "weact" },
    ],
    updateCadence: "Monthly review of Core Web Vitals & Next.js versions",
  },
  {
    pillar: "Startup MVP Engineering",
    pillarUrl: "/services/mvp-development",
    targetAudience: "Early-stage founders validating market demand in 2 to 6 weeks",
    primaryQuery: "startup mvp development services",
    searchIntent: "Transactional",
    supportingServices: [
      { name: "SaaS Platform Development", url: "/services/saas-development" },
      { name: "Mobile App Development", url: "/services/mobile-app-development" },
    ],
    blogArticles: [
      { title: "Rapid Custom Software Prototyping for Startups", slug: "custom-software" },
    ],
    caseStudies: [
      { name: "Teacher Sathi (Pedagogical Voice Assistant)", id: "teachersathi" },
    ],
    updateCadence: "Quarterly review of startup tech stacks & pricing",
  },
  {
    pillar: "Business Process Automation",
    pillarUrl: "/services/business-automation",
    targetAudience: "Operations managers and scaling businesses eliminating manual workflows",
    primaryQuery: "business process and workflow automation",
    searchIntent: "Commercial",
    supportingServices: [
      { name: "API Development & Integration", url: "/services/api-development" },
      { name: "Software Maintenance", url: "/services/maintenance" },
    ],
    blogArticles: [
      { title: "Automating Manual Operations with Webhooks & WhatsApp", slug: "automation" },
    ],
    caseStudies: [
      { name: "FarmIQ (Agricultural Automation & Diagnostics)", id: "farmiq" },
    ],
    updateCadence: "Monthly review of API rate limits & webhook standards",
  },
];
