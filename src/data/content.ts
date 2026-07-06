export interface Package {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  problem: string;
  built: string;
  outcome: string;
  tech: string[];
  image: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  points: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CustomerPersona {
  industry: string;
  ownerType: string;
  painPoints: string[];
  budget: string;
  decisionMaker: string;
  goals: string[];
  objections: string[];
  behavior: string;
}

export interface ClientJourneyDay {
  day: string;
  title: string;
  description: string;
}

// Positioning
export const USP = "We help Indian businesses reduce manual work by up to 80% using AI automation and modern software.";
export const MISSION = "Our mission is to help 10,000 Indian businesses adopt AI and automation.";
export const VISION = "To become India's most trusted AI transformation company.";

// Core Values
export const coreValues = [
  { name: "Ownership", desc: "We take full accountability for building solutions that work flawlessly." },
  { name: "Innovation", desc: "Leveraging cutting-edge AI agents and LLMs to solve ancient efficiency bottlenecks." },
  { name: "Speed", desc: "Deploying high-quality software fast without dragging out timelines." },
  { name: "Transparency", desc: "Honest scopes, upfront pricing packages, and zero surprise hourly billing." },
  { name: "Customer Obsession", desc: "We align strictly to business outcomes, not aesthetic vanities." },
  { name: "Continuous Learning", desc: "Constantly testing new LLMs, vector search, and web technologies." },
  { name: "Quality First", desc: "No templates or quick copies. Custom, robust code built for scale." }
];

// Packages
export const packages: Package[] = [
  {
    name: "AI Business Starter",
    price: "₹75k+",
    tagline: "Best for Landing Pages & Initial Automation setups",
    features: [
      "Custom business website / landing page",
      "Interactive AI Chatbot trained on your knowledge base",
      "Essential lead capture form integration",
      "Basic WhatsApp click-to-chat setup",
      "SEO setup & fast page speeds",
      "30 days support"
    ]
  },
  {
    name: "Growth System",
    price: "₹2L+",
    tagline: "Best for scaling lead-generation & CRM pipelines",
    features: [
      "Full multi-page custom business website",
      "WhatsApp Business API automations",
      "CRM workflows (HubSpot, Zoho, or Salesforce)",
      "Automated lead qualification scripts",
      "Internal knowledge base wiki setup",
      "30 days support"
    ],
    isPopular: true
  },
  {
    name: "AI Sales Engine",
    price: "₹3L+",
    tagline: "High-performance operational engine",
    features: [
      "Custom AI Voice Agent / AI Customer Support integration",
      "Advanced custom dashboards & database",
      "Internal AI assistants & custom GPT utilities",
      "Automated email follow-up funnels",
      "Analytics & key performance indicators tracking",
      "Priority 24/7 post-launch support"
    ]
  }
];

// Special Industry Packages
export const industryPackages = [
  {
    title: "Healthcare AI Package",
    desc: "AI booking assistant, offline medical triage UI, and automatic clinic resource tracking.",
    price: "Custom Scope"
  },
  {
    title: "Education AI Package",
    desc: "Lesson planners, automated parent portal alerts, and student attendance tracker dashboards.",
    price: "Custom Scope"
  },
  {
    title: "Restaurant Growth Package",
    desc: "Automated booking, automated Google review prompts, WhatsApp CRM, and online orders sync.",
    price: "Custom Scope"
  }
];

// Detailed Case Studies
export const caseStudies: CaseStudy[] = [
  {
    id: "healthkinator",
    title: "Offline Medical Triage & Diagnostics Engine",
    client: "Healthkinator",
    industry: "Healthcare",
    problem: "Rural healthcare centers required rapid offline diagnostic support without stable internet connectivity.",
    built: "Designed an offline-capable AI triage engine with mobile diagnostic forms and automatic sync backends.",
    outcome: "+40% patient throughput, packaged into research paper co-authored with Dr. Pooja Khurana (MSIT).",
    tech: ["React Native", "FastAPI", "SQLite", "TensorFlow Lite"],
    image: "/projects/healthkinator.webp"
  },
  {
    id: "teachersathi",
    title: "Unified School Portal & Management Platform",
    client: "Teacher Sathi",
    industry: "Education",
    problem: "Teachers and administration were burdened by fragmented tools for lesson plans, scheduling, and student tracking.",
    built: "Created a comprehensive web dashboard connecting grading, attendance, and custom lesson-builder modules.",
    outcome: "-70% manual administration work, active in local coaching and learning centers.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/teachersathi.webp"
  },
  {
    id: "civicsetu",
    title: "Digital Public Governance Interface",
    client: "CivicSetu",
    industry: "Government",
    problem: "Citizens faced massive lag when trying to check local municipal progress updates or request utilities support.",
    built: "Engineered a lightning-fast static public interface with localized forums and dashboard tracking.",
    outcome: "+30% support ticket response rate, hostable on high-availability edge nodes.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/projects/civicsetu.webp"
  },
  {
    id: "farmiq",
    title: "Agricultural Smart Crop Diagnostics Engine",
    client: "FarmIQ",
    industry: "Agriculture",
    problem: "Farmers lacked instantaneous guidance on pest damage and crop decay, leading to high seasonal losses.",
    built: "Built a mobile smart crop diagnostic scanner matching local farm photos with remote crop databases.",
    outcome: "Helped farm centers identify leaf sickness in seconds under poor connectivity limits.",
    tech: ["Flutter", "FastAPI", "MongoDB"],
    image: "/projects/farmiq.webp"
  },
  {
    id: "sentinelai",
    title: "AI-Powered Surveillance & Security System",
    client: "Sentinel AI",
    industry: "AI / Security",
    problem: "Commercial properties needed real-time threat categorization from existing cameras without hiring large manual teams.",
    built: "Built a customized computer vision dashboard with custom trigger-events, alerts, and live video analytics feed.",
    outcome: "Provided automated security analysis, demonstrating rapid frame detection in hackathon testing.",
    tech: ["React", "Python", "OpenCV", "FastAPI", "WebSockets"],
    image: "/projects/sentinelai.webp"
  }
];

// Target Industries Detail
export const industriesList = [
  { name: "Healthcare", desc: "Clinics, diagnostics labs, offline triage assistants." },
  { name: "Education", desc: "Schools, EdTech portals, coaching centers." },
  { name: "Real Estate", desc: "WhatsApp lead captures, automatic scheduling, 3D portfolios." },
  { name: "Restaurants", desc: "Google review automation, online booking systems, WhatsApp ordering." },
  { name: "Law Firms", desc: "AI document discovery engines, internal knowledge bases, booking." },
  { name: "Manufacturing", desc: "Dashboard operations tracking, supplier CRM automation." },
  { name: "Retail", desc: "E-commerce apps, WhatsApp marketing alerts, checkout funnels." }
];

// Customer Personas
export const customerPersonas: CustomerPersona[] = [
  {
    industry: "Healthcare",
    ownerType: "Clinic Directors / Diagnostic Lab Owners",
    painPoints: ["Losing bookings due to busy phone lines", "Staff spending hours manual-confirming appointments", "Offline/remote connectivity challenges"],
    budget: "₹1.5L - ₹3L",
    decisionMaker: "Owner / Chief Physician",
    goals: ["Increase patient bookings", "Free up front-desk staff time", "Offer rapid digital services"],
    objections: ["Is the data HIPAA compliant?", "Will older doctors find it complex?"],
    behavior: "Referred by fellow physicians, values stability over flashy visuals"
  },
  {
    industry: "Schools & Education",
    ownerType: "Coaching Center Proprietors / School Directors",
    painPoints: ["Scattered lesson materials", "Manual attendance reporting", "Delayed fee alerts to parents"],
    budget: "₹1L - ₹2.5L",
    decisionMaker: "Director / Principal",
    goals: ["Centralized teacher portal", "Professional student monitoring dashboard", "Automated WhatsApp parent alerts"],
    objections: ["Can parents use it easily on mobile?", "Will it run on low-end school computers?"],
    behavior: "Values software longevity, wants training for school admins"
  },
  {
    industry: "Restaurants & Hospitality",
    ownerType: "Multi-branch Restaurant Owners",
    painPoints: ["Losing direct online orders to Swiggy/Zomato commissions", "No Google Reviews growth", "Slow table booking process"],
    budget: "₹80k - ₹1.5L",
    decisionMaker: "Owner / General Manager",
    goals: ["Direct booking & WhatsApp orders", "Automatic Google review prompt trigger after payments", "Reduced manual ordering work"],
    objections: ["Will it integrate with our existing POS?", "Is there support during weekend dinner rush hours?"],
    behavior: "Fast decision maker, focused on immediate ROI and reviews"
  }
];

// Services Breakdown
export const aiServices: ServiceDetail[] = [
  {
    title: "AI Chatbots & Support Bots",
    description: "Build 24/7 intelligent agents that speak with your clients using context-specific company rules.",
    points: [
      "Custom LLM training on business PDFs and sites",
      "Dynamic lead pre-qualification questions",
      "Interactive chat interface easily embedded on any page"
    ]
  },
  {
    title: "AI Voice Agents",
    description: "Automate outbound and inbound phone support to register bookings or follow up on client inquiries.",
    points: [
      "Natural conversational pacing & local voice accents",
      "Automatic transcription and CRM entry",
      "Instant scheduling booking hooks"
    ]
  },
  {
    title: "WhatsApp & CRM Automation",
    description: "Convert traffic directly via WhatsApp alerts connected to HubSpot, Zoho, or custom Google Sheets.",
    points: [
      "Official Meta Cloud API integrations",
      "Instant reply prompts & payment reminders",
      "Lead routing based on geographical parameters"
    ]
  }
];

export const webDevelopmentServices: ServiceDetail[] = [
  {
    title: "Business & Startup Websites",
    description: "Premium, responsive custom interfaces designed to showcase credibility and book prospects.",
    points: [
      "Bespoke designs built with Next.js",
      "SEO architecture yielding high Google page speeds",
      "Highly strategic copy built to sell"
    ]
  },
  {
    title: "SaaS Dashboards & E-commerce",
    description: "Full-stack apps, portal trackers, metrics panels, and clean checkout carts.",
    points: [
      "Database setups using PostgreSQL/Supabase",
      "Secure custom client logins & dashboard views",
      "Robust checkout routes"
    ]
  }
];

// Sales Funnel Steps
export const funnelSteps = [
  { stage: "Cold Outreach / Ads", desc: "Targeted LinkedIn connections & inbound B2B marketing pages." },
  { stage: "Lead Magnet / Value Demo", desc: "Interactive calculators or problem solvers demonstrating immediate automation value." },
  { stage: "Discovery Call", desc: "30-minute strategic consult checking operational bottlenecks." },
  { stage: "Custom Proposal", desc: "Detailed breakdown of features, outcomes, and clear project pricing." },
  { stage: "Prototype Demo", desc: "Interactive mockup showing the proposed interface design." },
  { stage: "Launch & Retention", desc: "System hand-off, staff training, and monthly retainer support options." }
];

// Client Journey Stepper Schedule
export const clientJourneyDays: ClientJourneyDay[] = [
  { day: "Day 1 - 3", title: "Discovery & Alignment", description: "Mapping core offers, scoping dependencies, and setting project KPIs." },
  { day: "Day 4 - 7", title: "Strategic Proposal & Sign-off", description: "Reviewing the deliverables blueprint, signing agreements, and setting up workspace communication." },
  { day: "Day 8 - 12", title: "Interactive Wireframes", description: "Designing typography, layout flow, and high-fidelity mockups for desktop and mobile." },
  { day: "Day 13 - 22", title: "Development & Integrations", description: "Writing pure components, database structures, CRM hooks, and AI model weights." },
  { day: "Day 23 - 26", title: "Testing & Access Audits", description: "Running Lighthouse audits, viewport checks, and simulated user flows." },
  { day: "Day 27 - 30", title: "Launch & Training", description: "Pushing production code to live servers, linking domains, and training your staff." },
  { day: "Day 30+", title: "Retainer Support", description: "Weekly review checks, security updates, and performance optimizations." }
];

// FAQ
export const faqItems: FAQItem[] = [
  {
    question: "How long does a website take to launch?",
    answer: "A standard landing page or high-converting site takes 2 to 4 weeks. Custom database apps or deep AI chatbot engines take 3 to 6 weeks."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, every custom project includes 30 Days of Free Maintenance support. For ongoing updates, we offer monthly retainer packages."
  },
  {
    question: "Can you automate WhatsApp or SMS notifications?",
    answer: "Yes, we integrate with Meta Cloud API and Twilio to trigger automatic invoice notifications, lead booking updates, and review prompts."
  },
  {
    question: "How is AI context managed for custom chatbots?",
    answer: "We train bots using Retrieval-Augmented Generation (RAG) directly on your company's PDFs, guidelines, and pricing charts so they don't hallucinate."
  },
  {
    question: "Do you build custom dashboard platforms?",
    answer: "Yes, we specialize in high-performance React/Next.js client portals, operational dashboards, and database pipelines using PostgreSQL/Supabase."
  }
];
