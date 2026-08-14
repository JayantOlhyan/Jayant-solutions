/**
 * Off-Page SEO, Authority & AI Entity Architecture
 * Jayant Web & AI Systems — Digital PR, Citations & Entity Strategy
 */

export interface ExternalEntityProfile {
  platform: string;
  category: "Social" | "Developer Community" | "B2B Directory" | "Video / Media";
  canonicalUrl: string;
  entityName: string;
  associatedOwner: string;
  verificationStatus: "Active" | "Claimed / Pending" | "Target";
  citationRelevance: string;
}

export interface LinkableAsset {
  assetTitle: string;
  pageUrl: string;
  assetType: "Technical Deep-Dive" | "Case Study" | "Open Source Project" | "Framework Guide";
  targetAudience: string;
  linkValueProposition: string;
  outreachAngle: string;
}

export interface DigitalPRTarget {
  publicationOrCommunity: string;
  platformType: "Developer Forum" | "Tech Publication" | "Startup Community" | "Podcast / Interview";
  topicRelevance: string;
  outreachType: "Technical Guest Contribution" | "Expert Commentary" | "Open-Source Showcase";
  status: "Target" | "Planned" | "In Progress";
}

export const socialEntityProfiles: ExternalEntityProfile[] = [
  {
    platform: "GitHub",
    category: "Developer Community",
    canonicalUrl: "https://github.com/JayantOlhyan",
    entityName: "JayantOlhyan",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Active",
    citationRelevance: "Primary code repository showcasing open-source Next.js and AI architectures.",
  },
  {
    platform: "LinkedIn (Company)",
    category: "Social",
    canonicalUrl: "https://linkedin.com/company/jayant-systems",
    entityName: "Jayant Web & AI Systems",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Active",
    citationRelevance: "Official company organization page for B2B industry authority and hiring.",
  },
  {
    platform: "LinkedIn (Founder)",
    category: "Social",
    canonicalUrl: "https://linkedin.com/in/jayantolhyan",
    entityName: "Jayant Olhyan",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Active",
    citationRelevance: "Founder executive profile linking engineering credentials (B.Tech CSE, MSIT Delhi).",
  },
  {
    platform: "Twitter / X (Company)",
    category: "Social",
    canonicalUrl: "https://x.com/JayantSystems",
    entityName: "Jayant Systems",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Active",
    citationRelevance: "Company brand updates, product releases, and technical changelogs.",
  },
  {
    platform: "YouTube",
    category: "Video / Media",
    canonicalUrl: "https://www.youtube.com/@JayantWebAISystems",
    entityName: "Jayant Web & AI Systems",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Active",
    citationRelevance: "Video demonstrations of custom AI applications and development breakdowns.",
  },
  {
    platform: "Google Business Profile",
    category: "B2B Directory",
    canonicalUrl: "https://business.google.com/",
    entityName: "Jayant Web & AI Systems",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Claimed / Pending",
    citationRelevance: "Service-Area Business entity verification for regional and national search.",
  },
  {
    platform: "Clutch.co",
    category: "B2B Directory",
    canonicalUrl: "https://clutch.co/",
    entityName: "Jayant Web & AI Systems",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Target",
    citationRelevance: "Verified B2B client reviews and agency rating validation.",
  },
  {
    platform: "Crunchbase",
    category: "B2B Directory",
    canonicalUrl: "https://crunchbase.com/",
    entityName: "Jayant Web & AI Systems",
    associatedOwner: "Jayant Olhyan",
    verificationStatus: "Target",
    citationRelevance: "Global tech startup and software studio entity knowledge graph node.",
  },
];

export const linkableAssets: LinkableAsset[] = [
  {
    assetTitle: "Building Intelligent AI Chatbots for Enterprise Data",
    pageUrl: "/blog/ai-solutions",
    assetType: "Technical Deep-Dive",
    targetAudience: "Software engineers, CTOs, and AI practitioners",
    linkValueProposition: "Actionable breakdown of enterprise RAG pipelines, chunking strategies, and vector search tradeoffs.",
    outreachAngle: "Reference guide for engineering blogs discussing enterprise LLM deployments.",
  },
  {
    assetTitle: "Building Modern High-Performance Web Applications",
    pageUrl: "/blog/modern-web-development",
    assetType: "Technical Deep-Dive",
    targetAudience: "Frontend architects and web development teams",
    linkValueProposition: "Complete guide to Next.js App Router performance, Server Components, and sub-1s Core Web Vitals.",
    outreachAngle: "Cited resource in web performance articles and frontend newsletters.",
  },
  {
    assetTitle: "Healthkinator: Clinical AI Triage Case Study",
    pageUrl: "/portfolio",
    assetType: "Case Study",
    targetAudience: "HealthTech founders and AI healthcare researchers",
    linkValueProposition: "Real-world diagnostic triage multi-agent architecture reducing intake wait time by 80%.",
    outreachAngle: "Real-world AI case study feature for HealthTech publications.",
  },
];

export const digitalPRTargets: DigitalPRTarget[] = [
  {
    publicationOrCommunity: "Dev.to & Hashnode Developer Networks",
    platformType: "Developer Forum",
    topicRelevance: "Full-stack Next.js and FastAPI engineering best practices",
    outreachType: "Technical Guest Contribution",
    status: "Planned",
  },
  {
    publicationOrCommunity: "Reddit (r/nextjs, r/webdev, r/LocallLaMA)",
    platformType: "Developer Forum",
    topicRelevance: "Solving production caching and local vector store challenges",
    outreachType: "Open-Source Showcase",
    status: "Planned",
  },
  {
    publicationOrCommunity: "Indian Startup & SaaS Tech Publications",
    platformType: "Tech Publication",
    topicRelevance: "AI transformation workflows for growing businesses",
    outreachType: "Expert Commentary",
    status: "Target",
  },
];
