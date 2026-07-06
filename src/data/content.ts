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
  problem: string;
  built: string;
  outcome: string;
  tech: string[];
  image: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// 1. Confirmed Packages Structure (₹ pricing anchors)
export const packages: Package[] = [
  {
    name: "Starter",
    price: "₹40,000",
    tagline: "Best for Landing Pages & Small Businesses",
    features: [
      "High-converting landing page design",
      "Mobile-responsive development",
      "Basic SEO & speed optimization",
      "Contact form & email integration",
      "30 days post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "₹90,000",
    tagline: "Best for Full Business Websites & CRM Integration",
    features: [
      "Multi-page responsive website",
      "Content Management System (CMS) setup",
      "Basic lead qualification workflow",
      "CRM integration (HubSpot, Zoho, etc.)",
      "Automated email follow-up sequences",
      "30 days post-launch support",
    ],
    isPopular: true,
  },
  {
    name: "Scale",
    price: "₹2,00,000",
    tagline: "Complete AI & Custom Automation System",
    features: [
      "Custom web application or dashboard",
      "AI chatbot trained on company data",
      "WhatsApp Business API automation",
      "Multi-platform CRM & lead routing workflows",
      "Analytics & custom tracking dashboard",
      "30 days priority support + maintenance plans",
    ],
  },
];

// 2. Confirmed Case Studies (Real shipped work and outcomes)
export const caseStudies: CaseStudy[] = [
  {
    id: "healthkinator",
    title: "Offline Medical Triage & Diagnostics Engine",
    client: "Healthkinator",
    problem: "Rural healthcare centers required rapid offline diagnostic support without stable internet connectivity.",
    built: "Designed an offline-capable AI triage engine with mobile diagnostic forms and automatic sync backends.",
    outcome: "Successfully deployed and packaged into a research paper co-authored with Dr. Pooja Khurana (MSIT).",
    tech: ["React Native", "FastAPI", "SQLite", "TensorFlow Lite"],
    image: "/projects/healthkinator.webp",
  },
  {
    id: "teachersathi",
    title: "Unified School Portal & Management Platform",
    client: "Teacher Sathi",
    problem: "Teachers and administration were burdened by fragmented tools for lesson plans, scheduling, and student tracking.",
    built: "Created a comprehensive web dashboard connecting grading, attendance, and custom lesson-builder modules.",
    outcome: "Reduced daily administrative time for school staff, active in local coaching and learning centers.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/teachersathi.webp",
  },
  {
    id: "sentinelai",
    title: "AI-Powered Surveillance & Security System",
    client: "Sentinel AI",
    problem: "Commercial properties needed real-time threat categorization from existing cameras without hiring large manual teams.",
    built: "Built a customized computer vision dashboard with custom trigger-events, alerts, and live video analytics feed.",
    outcome: "Provided automated security analysis, demonstrating rapid frame detection in hackathon testing environments.",
    tech: ["React", "Python", "OpenCV", "FastAPI", "WebSockets"],
    image: "/projects/sentinelai.webp",
  },
  {
    id: "msitwebsite",
    title: "Performance Rebuild of College Web Hub",
    client: "MSIT (Rebuild Concept)",
    problem: "The official college website was slow, non-responsive, and difficult for students to fetch resources from.",
    built: "Engineered a lightning-fast static rebuild with optimal asset loading, clean navigation, and resource downloads.",
    outcome: "Achieved 98+ PageSpeed score, hostable on high-availability Netlify edge nodes.",
    tech: ["Vite", "React", "Tailwind CSS", "Netlify"],
    image: "/projects/msit.webp",
  },
];

// 3. Other Projects Gallery
export const otherProjects: Project[] = [
  {
    title: "FarmIQ",
    description: "Agricultural smart diagnostics app connecting local farmers directly with crop analysis engines.",
    tech: ["Flutter", "FastAPI", "MongoDB"],
  },
  {
    title: "CivicSetu",
    description: "Digital public interface built for civic governance tracking and community forum management.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Gravitas",
    description: "Creative hackathon development portal designed for rapid event coordination and evaluation.",
    tech: ["React", "CSS Modules", "Firebase"],
  },
];

// 4. Confirmed Outcome-Oriented Services
export const services: Service[] = [
  {
    title: "Business Websites",
    description: "Generate more leads and close deals with a modern, lightning-fast website optimized for conversion.",
    iconName: "Globe",
  },
  {
    title: "AI Automation",
    description: "Automate repetitive tasks, sync CRM data, and deploy smart bots that operate 24/7.",
    iconName: "Cpu",
  },
  {
    title: "Custom Software",
    description: "Build tailored client portals, operational dashboards, and internal business tools designed for your workflow.",
    iconName: "Terminal",
  },
  {
    title: "Growth Systems",
    description: "Connect your landing page, WhatsApp, CRM, and auto-email follow-ups into one streamlined client pipeline.",
    iconName: "TrendingUp",
  },
];

// 5. Target Industries
export const targetIndustries = [
  "Education (EdTech, Coaching Centres)",
  "Healthcare (Clinics, Diagnostic Labs)",
  "Professional Services (Consulting, Financial, Legal)",
];

// 6. Confirmed Stepper Process Timeline
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "A 30-minute consultation call to map out your core business goals, target audience, and scope parameters.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "I structure your site's information architecture and flow map, aligning pages and automation features to maximize leads.",
  },
  {
    number: "03",
    title: "Design",
    description: "We build wireframes and high-fidelity mockups of your UI, refining the typography, layout, and visual spacing.",
  },
  {
    number: "04",
    title: "Development",
    description: "I implement clean, typed components in Next.js, integrating your CRM, chatbots, and APIs.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality checks for speed, responsive breaks across mobile/desktop, and WCAG AA accessibility audits.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy the website live on lightning-fast edge nodes (Vercel/Netlify), hooking up domain, tracking, and SSL.",
  },
  {
    number: "07",
    title: "Support",
    description: "30 days of free post-launch support. Ongoing maintenance plans are available to keep systems running.",
  },
];

// 7. Confirmed FAQ Answers
export const faqItems: FAQItem[] = [
  {
    question: "How long does a project typically take?",
    answer: "A high-converting business website takes 2–4 weeks. AI automation systems and custom software take 2–6 weeks depending on scale and integrations.",
  },
  {
    question: "Do you offer support after the project launches?",
    answer: "Yes. Every build includes 30 Days of Free Technical Support to fix bugs or make quick adjustments. I also offer monthly support and system maintenance plans.",
  },
  {
    question: "Can you automate WhatsApp for my business?",
    answer: "Yes, I integrate WhatsApp Business API workflows to automatically alert you of new leads, send confirmation messages, or qualify prospects via interactive bots.",
  },
  {
    question: "Do you work with businesses outside New Delhi?",
    answer: "Absolutely. I work remotely with clients across India and internationally, using Slack, WhatsApp, and Zoom/Meet for all updates.",
  },
  {
    question: "What is required from me to start?",
    answer: "We start with a kickoff call. You'll need to share your core offers, existing branding (if any), and access to any third-party tools (CRM, domain registrar) you want connected.",
  },
];
