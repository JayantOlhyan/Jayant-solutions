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
  solution: string;
  result: string;
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
export const USP = "We help Indian businesses reduce manual work by up to 80% using automated workflows and custom software systems.";
export const MISSION = "Our mission is to help 10,000 Indian businesses adopt automated operational workflows.";
export const VISION = "To become India's most trusted partner for operational systems transformation.";

// Core Values
export const coreValues = [
  { name: "Ownership", desc: "We take full accountability for building solutions that work flawlessly." },
  { name: "Automation First", desc: "Leveraging smart tools to solve legacy operational and efficiency bottlenecks." },
  { name: "Speed", desc: "Deploying high-quality custom systems fast without dragging out timelines." },
  { name: "Transparency", desc: "Honest scopes, upfront pricing packages, and zero surprise hourly bills." },
  { name: "Business Outcomes", desc: "We align strictly to operational goals like lead conversion and time saved." },
  { name: "Continuous Support", desc: "Constantly auditing and updating systems to maintain high performance." },
  { name: "Quality First", desc: "No generic templates. Custom, robust platforms built for your specific workflow." }
];

// Why work with me parameters
export const whyWorkWithMe = [
  {
    title: "Direct communication with the developer",
    desc: "No sales teams or middlemen. You work directly with me from discovery to system launch."
  },
  {
    title: "Weekly progress updates",
    desc: "You will always know what has been completed, what is in progress, and what is scheduled next."
  },
  {
    title: "Fixed scope & transparent pricing",
    desc: "No hidden charges or unexpected hourly invoices. Every deliverable is agreed upon before we start coding."
  },
  {
    title: "Modern, scalable technology",
    desc: "We build systems that are lightweight, easy to maintain, and can grow alongside your business operational scale."
  },
  {
    title: "Long-term support support",
    desc: "I do not disappear after launching your system. Maintenance and support retainers are always available."
  }
];

// Project Risk Reversals
export const projectInclusions = [
  "Milestone-based payment schedules",
  "Full source code ownership after final payment",
  "Weekly live prototype demos",
  "Clear system setup documentation",
  "30 days post-launch technical support",
  "Automated secure database backups",
  "Transparent Slack/WhatsApp communication updates"
];

// Frequently Built Solutions
export const frequentlyBuilt = [
  "Lead Capture Websites",
  "AI Customer Support Chatbots",
  "CRM Admin Dashboards",
  "WhatsApp API Notification Automations",
  "Internal Operations Panels",
  "Appointment Scheduling Workflows",
  "Learning Management Platforms",
  "Internal Business Utility Tools"
];

// Packages
export const packages: Package[] = [
  {
    name: "AI Business Starter",
    price: "₹75k+",
    tagline: "Best for growing lead-capture & basic automation",
    features: [
      "Professional Website Layout to win more customers",
      "Interactive Customer Support Chatbot to handle enquiries",
      "Instant Lead Capture & alert routing system",
      "One-click WhatsApp direct chat shortcut setup",
      "Search Engine Optimization & fast page loading speeds",
      "30 days post-launch technical support"
    ]
  },
  {
    name: "Growth System",
    price: "₹2L+",
    tagline: "Best for scaling lead-generation & sales pipeline tracking",
    features: [
      "Complete multi-page custom business system",
      "WhatsApp Business API automations to alert you of new leads",
      "Connect All Your Business Tools (CRM, HubSpot, Zoho)",
      "Automated Lead Qualification and follow-up templates",
      "Internal Business Knowledge Base setup for your staff",
      "30 days post-launch priority support"
    ],
    isPopular: true
  },
  {
    name: "AI Sales Engine",
    price: "₹3L+",
    tagline: "High-performance operational engine to eliminate manual processes",
    features: [
      "Automated phone support agents and inbound booking hooks",
      "Custom Admin Dashboard to track business performance",
      "Internal Automated Assistants to handle routine operational tasks",
      "Automated email follow-up funnels to nurture warm leads",
      "Custom business analytics and metrics reporting panels",
      "Priority 24/7 post-launch system maintenance support"
    ]
  }
];

// Special Industry Packages
export const industryPackages = [
  {
    title: "Healthcare System Package",
    desc: "Automated booking assistant, offline medical triage form interface, and automated patient records sync.",
    price: "Custom Scope"
  },
  {
    title: "Education Portal Package",
    desc: "Lesson planners, automated parent portal notification triggers, and student attendance tracker dashboards.",
    price: "Custom Scope"
  },
  {
    title: "Restaurant Growth Package",
    desc: "Google Review automation, online booking workflows, WhatsApp ordering channels, and direct POS sync.",
    price: "Custom Scope"
  }
];

// Case Studies matching Problem / Solution / Result parameters
export const caseStudies: CaseStudy[] = [
  {
    id: "healthkinator",
    title: "Offline Medical Triage & Diagnostics Engine",
    client: "Healthkinator",
    industry: "Healthcare",
    problem: "Rural healthcare clinics struggled with slow diagnostic workflows and bad record tracking due to unstable internet connectivity.",
    solution: "I built an offline-capable diagnostic form app that registers patient profiles locally and syncs back to databases automatically when back online.",
    result: "Increased clinic patient throughput by 40% and co-authored research paper with Dr. Pooja Khurana (MSIT).",
    tech: ["React Native", "FastAPI", "SQLite Sync"],
    image: "/projects/healthkinator.webp"
  },
  {
    id: "teachersathi",
    title: "Unified School Portal & Management Platform",
    client: "Teacher Sathi",
    industry: "Education",
    problem: "A local coaching center and school struggled with teachers spending hours manually tracking homework, grading, and schedules across scattered files.",
    solution: "I engineered a centralized web portal that simplifies grading, lesson building, and student attendance tracking into one login dashboard.",
    result: "Reduced daily administrative time for school staff by 70%, active in local coaching centers.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/teachersathi.webp"
  },
  {
    id: "civicsetu",
    title: "Digital Public Governance Interface",
    client: "CivicSetu",
    industry: "Government",
    problem: "Citizens faced long support queues and administrative delays when trying to track local development tasks and submit complaints.",
    solution: "I designed a simple public interface with interactive tracking maps and direct support ticket submissions.",
    result: "Boosted support ticket response rates by 30% and simplified public progress reporting.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/projects/civicsetu.webp"
  },
  {
    id: "farmiq",
    title: "Agricultural Smart Crop Diagnostics Engine",
    client: "FarmIQ",
    industry: "Agriculture",
    problem: "Local farming centers lacked quick diagnostic tools to detect plant diseases, leading to severe crop loss before treatment could start.",
    solution: "I built an agricultural smart scanner app that maps farm photos against crop disease datasets.",
    result: "Allowed farmers to identify crop leaf sickness in seconds on mobile with poor internet connection.",
    tech: ["Flutter", "FastAPI", "MongoDB"],
    image: "/projects/farmiq.webp"
  },
  {
    id: "sentinelai",
    title: "AI-Powered Surveillance & Security System",
    client: "Sentinel AI",
    industry: "AI / Security",
    problem: "Commercial warehouse properties needed automated threat alerts to secure large zones without hiring round-the-clock manual guard teams.",
    solution: "I built an automated video surveillance dashboard that detects visual security events and sends immediate alerts to warehouse owners.",
    result: "Offered automated security monitoring, demonstrating rapid threat detection in local security test runs.",
    tech: ["React", "Python", "OpenCV"],
    image: "/projects/sentinelai.webp"
  }
];

// Target Industries Detail
export const industriesList = [
  { name: "Healthcare", desc: "Clinics, diagnostics labs, automated booking systems." },
  { name: "Education", desc: "Schools, EdTech portals, coaching centers." },
  { name: "Real Estate", desc: "WhatsApp lead captures, automated scheduling, visual portfolios." },
  { name: "Restaurants", desc: "Google review automation, online booking systems, WhatsApp ordering." },
  { name: "Law Firms", desc: "Document lookup interfaces, automated calendars, contact forms." },
  { name: "Manufacturing", desc: "Admin dashboard order tracking, automated customer management." },
  { name: "Retail", desc: "E-commerce stores, WhatsApp customer alerts, checkout checkout funnels." }
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
    objections: ["Is the data secure?", "Will older staff find it complex?"],
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
    objections: ["Will it integrate with our existing POS?", "Is there support during weekend dinner rush hours??"],
    behavior: "Fast decision maker, focused on immediate ROI and reviews"
  }
];

// Services Breakdown
export const aiServices: ServiceDetail[] = [
  {
    title: "Automate Repetitive Business Tasks",
    description: "Build automated workflows and digital assistants that handle routine company tasks 24/7.",
    points: [
      "Custom company lookup assistants trained on your guide files",
      "Automated lead qualification and route tracking systems",
      "Intelligent messaging channels that embed directly on any website"
    ]
  },
  {
    title: "AI Voice Agents & Phone Assistants",
    description: "Automate call management to record bookings or follow up on incoming client requests.",
    points: [
      "Natural phone conversations with standard pacing",
      "Automatic transcription and customer database log updates",
      "Immediate appointment scheduler booking triggers"
    ]
  },
  {
    title: "WhatsApp & CRM Automations",
    description: "Capture and qualify leads on WhatsApp, syncing details directly to HubSpot or Zoho database pipelines.",
    points: [
      "Official Meta Cloud API platform connections",
      "Instant auto-responses, scheduling tools, and invoice triggers",
      "Automatic lead routing based on operational rules"
    ]
  }
];

export const webDevelopmentServices: ServiceDetail[] = [
  {
    title: "Business & Startup Websites",
    description: "Premium, responsive custom interfaces designed to showcase credibility and convert prospects.",
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

// Sales Funnel Steps (What Happens Next)
export const funnelSteps = [
  { stage: "1. Book Consultation", desc: "Select a slot on our booking scheduler below to request your session." },
  { stage: "2. Operations Audit Discussion", desc: "A brief conversation where we audit your current manual tasks and spreadsheets." },
  { stage: "3. Custom System Proposal", desc: "A transparent proposal outlining deliverables, timelines, and pricing before work starts." },
  { stage: "4. Development & Demos", desc: "We write the custom code and run weekly prototype demos so you track progress." },
  { stage: "5. Setup & System Launch", desc: "Rigorous testing, connecting your custom domains, training your staff, and launching live." }
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
export const processSteps = funnelSteps; // Backward compatibility
