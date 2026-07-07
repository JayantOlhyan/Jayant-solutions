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
  beforeState: string;
  solution: string;
  afterState: string;
  result: string;
  tech: string[];
  image: string;
  features?: string[];
  duration?: string;
  liveWebsite?: string;
  githubLink?: string;
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
export const USP = "We help businesses generate more leads, automate operations, and scale with custom websites, AI systems, and business software.";
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

export interface Package {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  timeline: string;
  addons: string[];
  isPopular?: boolean;
  featured?: boolean;
  idealFor: string;
}

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

// Recommended Add-ons
export const recommendedAddons = [
  "🤖 AI Chatbot Integration",
  "📱 Android & iOS Mobile App",
  "💳 Payment Gateway Integration",
  "📊 Analytics Dashboard",
  "📧 Email Automation",
  "💬 WhatsApp Business API",
  "🌐 Multi-language Support",
  "🔐 Advanced Security & Penetration Testing",
  "☁️ Cloud Hosting & DevOps",
  "🚀 SEO Optimization",
  "📝 Content Writing",
  "🎨 Branding & Logo Design",
  "📈 Digital Marketing Setup",
  "🔄 Annual Maintenance Contract (AMC)",
  "🛠️ Ongoing Support & Feature Development"
];
export const packages: Package[] = [
  {
    name: "Starter Launch",
    price: "₹15,000",
    tagline: "Best for individuals, freelancers, and small businesses",
    features: ["5-page responsive website", "Contact form", "SEO basics", "Mobile optimization", "SSL setup", "Deployment"],
    timeline: "1–2 Weeks",
    addons: ["Logo Design", "Copywriting", "Blog Setup", "Business Email", "Domain & Hosting"],
    isPopular: true,
    idealFor: "Freelancers, small local businesses"
  },
  {
    name: "Business Growth",
    price: "₹35,000",
    tagline: "Best for SMEs and growing companies",
    features: ["Custom business website", "CMS (Content Management)", "Blog setup", "Advanced SEO", "Analytics integrations", "Lead forms", "Speed optimization"],
    timeline: "2–4 Weeks",
    addons: ["Booking System", "CRM Integration", "WhatsApp Chat", "Multi-language Support"],
    idealFor: "Established companies looking to generate leads"
  },
  {
    name: "Startup MVP",
    price: "₹80,000",
    tagline: "Best for startups validating an idea",
    features: ["Web app setup", "User authentication", "Admin dashboard", "Database setup", "APIs integration", "Cloud deployment", "User management"],
    timeline: "4–8 Weeks",
    addons: ["Mobile App", "Payment Gateway", "Notifications", "AI Features", "Investor Pitch Deck"],
    idealFor: "Founders launching their first software product"
  },
  {
    name: "AI Automation Suite",
    price: "₹1,20,000",
    tagline: "Best for businesses looking to automate workflows",
    features: ["AI chatbot", "Workflow automation", "API integrations", "CRM sync", "Document processing", "Analytics dashboard"],
    timeline: "3–6 Weeks",
    addons: ["Voice AI", "WhatsApp Bot", "Email Automation", "OCR", "Custom AI Agent"],
    featured: true,
    idealFor: "Teams wasting hours on manual spreadsheets and admin work"
  },
  {
    name: "Enterprise Digital Transformation",
    price: "₹3,00,000",
    tagline: "Best for large organizations and enterprises",
    features: ["Custom software system", "Scalable architecture", "Role-Based Access Control (RBAC)", "Cloud infrastructure setup", "Monitoring & Alerts", "System integrations", "Documentation"],
    timeline: "8–16 Weeks",
    addons: ["Dedicated Team", "SLA Support", "Security Audit", "On-site Deployment", "Training Sessions"],
    idealFor: "Large teams seeking high-performance private infrastructure"
  },
  {
    name: "Innovation Partnership",
    price: "₹1,50,000/mo",
    tagline: "Best for organizations needing continuous product development",
    features: ["Dedicated development team", "UI/UX updates", "AI consulting", "Product roadmap planning", "Monthly updates", "Maintenance", "Priority support"],
    timeline: "Monthly Retainer",
    addons: ["CTO-as-a-Service", "DevOps", "AI R&D", "24x7 Monitoring", "Dedicated Project Manager"],
    idealFor: "Businesses requiring ongoing technical upgrades"
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
    title: "Healthkinator — Interactive AI Symptom checker",
    client: "Personal Project / Hackathon",
    industry: "Healthcare • AI",
    problem: "People often struggle to identify possible health conditions from symptoms and don't know when medical attention is necessary.",
    beforeState: "Users manually searched vague symptom keywords online, leading to anxiety, confusion, or delayed visits to medical professionals.",
    solution: "Developed an AI-powered symptom checker that analyzes user-reported symptoms and provides possible health insights using machine learning and LLM technologies.",
    afterState: "Users get preliminary guidance and symptom insights instantly through an interactive interface in English or Hindi.",
    result: "Improved symptom awareness and fast AI-assisted preliminary guidance.",
    tech: ["Next.js", "React", "Python", "FastAPI", "Google Gemini API", "Tailwind CSS", "PostgreSQL"],
    image: "/projects/healthkinator.webp",
    features: ["AI Symptom Analysis", "Disease Prediction", "Interactive Chat Interface", "Medical Knowledge Base", "Responsive Dashboard", "User Authentication"],
    duration: "6 Weeks",
    liveWebsite: "https://healthkinator-1.netlify.app",
    githubLink: "https://github.com/JayantOlhyan/healthkinator-1-"
  },
  {
    id: "msitwebsite",
    title: "MSIT Website Enhancement",
    client: "Academic Project",
    industry: "Education",
    problem: "Students needed a modern interface with streamlined navigation and integrated feedback collection.",
    beforeState: "Students navigated through complex, scattered links and had no structured feedback channels for facility issues.",
    solution: "Designed and developed a modern college portal with responsive design and integrated feedback management.",
    afterState: "Students access faculty directories, events, and submit campus feedback seamlessly on a mobile-friendly web layout.",
    result: "Better student experience, modernized UI, and improved information accessibility.",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    image: "/projects/msitwebsite.webp",
    features: ["Responsive Design", "Feedback System", "Event Management", "Department Pages", "Faculty Directory", "Contact Forms"],
    duration: "4 Weeks",
    liveWebsite: "https://msit-website.netlify.app"
  },
  {
    id: "flowforge",
    title: "FlowForge — No-Code Business Workflow Builder",
    client: "Product Concept",
    industry: "Business Automation",
    problem: "Businesses spend significant time on repetitive manual workflows across scattered apps and databases.",
    beforeState: "Staff manually copied data between CRM platforms, email sheets, and tracking files, leading to human errors and wasted hours.",
    solution: "Designed a no-code automation platform that connects apps and automates workflows with AI assistance.",
    afterState: "Teams drag and drop application nodes, sync live APIs, and schedule tasks automatically with simple AI prompt builders.",
    result: "Significantly reduced manual operations and improved work productivity.",
    tech: ["React", "Node.js", "FastAPI", "PostgreSQL", "Docker", "OpenAI API"],
    image: "/projects/flowforge.webp",
    features: ["Drag-and-Drop Workflow Builder", "AI Automation", "API Integrations", "Scheduling", "Notifications", "Analytics"],
    duration: "5 Weeks"
  },
  {
    id: "rakshatap",
    title: "RakshaTap — Emergency Response Platform",
    client: "Product Concept / Personal Project",
    industry: "Women's Safety",
    problem: "Emergency assistance can be delayed when users are unable to quickly share their location or contact trusted individuals.",
    beforeState: "Users in distress had to unlock their phones, type messages, or call contacts manually, losing critical reaction seconds.",
    solution: "A mobile-first safety platform that enables rapid SOS alerts, live location sharing, and emergency assistance features.",
    afterState: "Users trigger immediate location broadcasts and contact alerts with one tap or voice activation command.",
    result: "Faster emergency communication and improved user confidence with live Maps integrations.",
    tech: ["Flutter", "Firebase", "Google Maps", "FastAPI", "Node.js"],
    image: "/projects/rakshatap.webp",
    features: ["One-Tap SOS", "Live Location Sharing", "Emergency Contacts", "Nearby Police Stations", "Voice Activation", "Incident Reporting", "Safety Alerts"],
    duration: "5 Weeks"
  },
  {
    id: "sentinelai",
    title: "Sentinel AI — AI-Powered Scam Detection in Real Time",
    client: "Hackathon Project",
    industry: "Cybersecurity • AI",
    problem: "Users struggle to identify phishing messages, email scams, and fraudulent online URLs in real time.",
    beforeState: "People manually verified suspicious links or messages, leading to a high rate of successful identity theft and financial fraud.",
    solution: "Created an AI-powered scam detection platform that analyzes messages, emails, and URLs for fraud indicators.",
    afterState: "Users receive instantaneous risk assessment scores, SMS warnings, and actionable security recommendations.",
    result: "Increased user safety awareness and faster fraud detection capabilities.",
    tech: ["Next.js", "FastAPI", "Gemini API", "Tailwind CSS", "PostgreSQL"],
    image: "/projects/sentinelai.webp",
    features: ["Scam Detection", "URL Analysis", "AI Risk Score", "Email Scanner", "SMS Detection", "Security Recommendations"],
    duration: "2 Days",
    liveWebsite: "https://sentinel-ai-1.netlify.app",
  },
  {
    id: "teachersathi",
    title: "Teacher Sathi — Digital Workspace for Teachers",
    client: "Client Project",
    industry: "Education Technology",
    problem: "Teachers require a centralized platform to manage educational workflows, lesson plans, and resources instead of managing scattered physical or text files.",
    beforeState: "Teachers manually tracked classroom updates, lesson calendars, and student assignments using physical binders and split messaging groups.",
    solution: "Developed a web platform for lesson planning, resource management, and classroom organization.",
    afterState: "Teachers organize schedules, structure digital lesson resources, and track student portal details from a unified dashboard.",
    result: "Provides teachers with a streamlined digital workspace and reduces daily prep overhead.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: "/projects/teachersathi.webp",
    features: ["Lesson Planning", "Resource Library", "Dashboard", "User Management", "Responsive UI"],
    duration: "5 Weeks",
  },
  {
    id: "weact",
    title: "WeAct — Civic Collaboration Portal",
    client: "Internal Product",
    industry: "CivicTech",
    problem: "Community initiatives often lack a centralized platform for scheduling, event tracking, and local collaboration.",
    beforeState: "Volunteers and civic organizations managed tracking operations on split messenger channels and disjointed sheets.",
    solution: "Built a platform to connect volunteers, organizations, and community projects.",
    afterState: "Organizations create community project threads, manage volunteers, and track events on a unified portal interface.",
    result: "Demonstrates high-performance civic engagement workflows and collaboration statistics.",
    tech: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    image: "/projects/weact.webp",
    features: ["Volunteer Registration", "Community Dashboard", "Event Management", "Project Tracking"],
    duration: "4 Weeks",
  },
  {
    id: "yaperz",
    title: "Yaperz — Scalable Business SaaS Platform",
    client: "Startup Project",
    industry: "Business SaaS",
    problem: "Businesses need a centralized platform to manage operations and track customer metrics efficiently.",
    beforeState: "Staff operated separate, siloed tools to manage client logs, tracking metrics, and monthly report outputs.",
    solution: "Built a scalable SaaS platform for business management.",
    afterState: "SaaS administrators view unified analytical graphs, access secure CRM tables, and download operational reports instantly.",
    result: "Demonstrates SaaS product development expertise and clean database tracking.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/yaperz.webp",
    features: ["Dashboard", "CRM", "User Management", "Analytics", "Reports"],
    duration: "5 Weeks",
  },
  {
    id: "khelclan",
    title: "KhelClan — Sports Management Platform",
    client: "Startup Project",
    industry: "Sports Technology",
    problem: "Sports communities lack structured, unified tools to coordinate matches, organize teams, and track local competitions.",
    beforeState: "Tournament brackets were designed on random templates, match timings were coordinated manually via text, and team scores were tracked on physical boards.",
    solution: "Developed a sports management platform for players and organizers.",
    afterState: "Organizers launch live brackets, automate match schedules, and players update custom profiles and registration info directly online.",
    result: "Demonstrates sports-tech platform development and scheduling workflows.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/khelclan.webp",
    features: ["Tournament Management", "Match Scheduling", "Team Registration", "Player Profiles"],
    duration: "6 Weeks",
  },
  {
    id: "civicsetu",
    title: "CivicSetu — Unified Civic & Grievance Platform",
    client: "Hackathon Project",
    industry: "Government Technology",
    problem: "Citizens often struggle to access government utility services and report local complaints efficiently.",
    beforeState: "Citizens had to stand in long physical lines at municipal offices and track issues manually using physical request receipts.",
    solution: "Created a unified platform for civic services and grievance management.",
    afterState: "Citizens register complaints, check utility directories, and monitor ticket status pipelines automatically online.",
    result: "Illustrates digital public service modernization and complaint flow tracking.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/civicsetu.webp",
    features: ["Complaint Management", "Service Directory", "Application Tracking", "Notifications"],
    duration: "5 Weeks",
    liveWebsite: "https://civicsetu-1.netlify.app/"
  },
  {
    id: "farmiq",
    title: "FarmIQ — AI Crop Insights Platform",
    client: "Internal Product",
    industry: "Agriculture Technology",
    problem: "Farmers need data-driven, precise insights regarding soil and environments to maximize crop productivity.",
    beforeState: "Farmers relied on manual weather guesses and static templates, leading to crop loss during unexpected dry spells.",
    solution: "Built an AI-powered agricultural platform that delivers recommendations using farm data and environmental information.",
    afterState: "Farmers monitor plant logs, receive custom weather reports, and receive precise AI crop diagnostics recommendations.",
    result: "Demonstrates AI applications in precision agriculture and environment tracking.",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini API"],
    image: "/projects/farmiq.webp",
    features: ["Crop Monitoring", "AI Recommendations", "Weather Integration", "Farm Analytics"],
    duration: "6 Weeks",
  },
  {
    id: "gravitas",
    title: "Gravitas — Modern Productivity Platform",
    client: "Internal Product",
    industry: "Productivity",
    problem: "Professionals require streamlined, clutter-free tools to organize daily workflows and collaborate in real time.",
    beforeState: "Teams used multiple scattered planners, chat channels, and calendar links, leading to missed updates and alignment delays.",
    solution: "Created a modern productivity platform with project and task management capabilities.",
    afterState: "Professionals manage tasks, collaborate in channel spaces, view analytic reports, and coordinate calendar timelines in one application.",
    result: "Showcases high-performance productivity SaaS development and clean user flows.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/gravitas.webp",
    features: ["Task Management", "Team Collaboration", "Dashboard", "Analytics", "Calendar"],
    duration: "4 Weeks",
  },
  {
    id: "portfolio-v2",
    title: "Jayant Portfolio v2",
    client: "Personal Brand",
    industry: "Portfolio Website",
    problem: "Needed a professional, interactive portfolio to showcase engineering projects, client proof, and technical skills.",
    beforeState: "Relying on generic static resume links and document sheets to present engineering credibility.",
    solution: "Designed and developed a personal portfolio with a modern interface and responsive layout.",
    afterState: "Visitors explore interactive project models, view code repositories, and book sessions seamlessly on all devices.",
    result: "Strengthens personal branding and professional visibility.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/portfoliov2.webp",
    features: ["About Section", "Project Showcase", "Skills List", "Contact Form", "Responsive Design"],
    duration: "2 Weeks",
    liveWebsite: "https://jayant-olhyan-portfolio-2.netlify.app/",
  },
  {
    id: "portfolio-v1",
    title: "Jayant Portfolio v1",
    client: "Personal Brand",
    industry: "Portfolio Website",
    problem: "Required an initial online portfolio to present engineering projects, credentials, and experience.",
    beforeState: "No online portfolio presence, relying solely on standard offline PDF resumes.",
    solution: "Built a responsive portfolio website with project listings and contact information.",
    afterState: "Recruiters and clients view simple project listings, download resumes, and contact via email form modules.",
    result: "Established an initial online visibility presence.",
    tech: ["React", "Tailwind CSS"],
    image: "/projects/portfoliov1.webp",
    features: ["Portfolio", "Projects", "Resume View", "Contact Form"],
    duration: "1 Week",
    liveWebsite: "https://jayant-portfolio-1.netlify.app/",
    githubLink: "https://github.com/JayantOlhyan"
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
export interface AgencyService {
  title: string;
  description: string;
  deliverables: string[];
  benefits: string;
  tech: string[];
  timeline: string;
  price: string;
}

export const agencyServices: AgencyService[] = [
  {
    title: "AI Solutions Development",
    description: "Custom AI applications powered by modern LLMs and machine learning models.",
    deliverables: ["AI Chatbots", "RAG Systems", "AI Agents", "Vision AI", "Recommendation Systems", "Custom AI APIs"],
    benefits: "Automate work, improve customer support, gain business insights, reduce operational costs",
    tech: ["OpenAI", "Google Gemini", "Anthropic Claude", "Python", "FastAPI", "LangChain", "LlamaIndex", "Vector Databases"],
    timeline: "3–8 Weeks",
    price: "₹75,000"
  },
  {
    title: "Custom Web Development",
    description: "Modern, responsive, and high-performance websites and web applications tailored to your business.",
    deliverables: ["Company Websites", "SaaS Platforms", "Admin Dashboards", "Landing Pages", "Portals", "CMS Integration"],
    benefits: "Better user experience, faster performance, SEO-ready, scalable architecture",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "Firebase"],
    timeline: "2–6 Weeks",
    price: "₹35,000"
  },
  {
    title: "Business Automation",
    description: "Streamline repetitive tasks with intelligent workflow automation and system integrations.",
    deliverables: ["CRM Automation", "Email Automation", "WhatsApp Bots", "API Integrations", "Workflow Automation", "Internal Tools"],
    benefits: "Save time, reduce manual work, increase productivity, eliminate repetitive tasks",
    tech: ["n8n", "Make", "Zapier", "Python", "Node.js", "REST APIs", "Google Workspace APIs"],
    timeline: "1–4 Weeks",
    price: "₹25,000"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications with a smooth, native-like user experience.",
    deliverables: ["Android Apps", "iOS Apps", "Customer Apps", "Internal Business Apps", "API Integration", "Push Notifications"],
    benefits: "Reach mobile users, improve engagement, increase accessibility",
    tech: ["Flutter", "React Native", "Firebase", "Node.js", "Supabase", "REST APIs"],
    timeline: "4–10 Weeks",
    price: "₹80,000"
  },
  {
    title: "Cloud & Backend Engineering",
    description: "Build secure, scalable infrastructure and backend systems for modern applications.",
    deliverables: ["REST APIs", "Authentication", "Databases", "Cloud Deployment", "CI/CD Pipelines", "Monitoring"],
    benefits: "Reliable performance, scalability, secure infrastructure, faster deployments",
    tech: ["AWS", "Google Cloud", "Docker", "Kubernetes", "FastAPI", "Express.js", "PostgreSQL", "Redis"],
    timeline: "2–6 Weeks",
    price: "₹50,000"
  },
  {
    title: "UI/UX & Product Design",
    description: "Design intuitive digital experiences that balance aesthetics with usability.",
    deliverables: ["Wireframes", "UI Design", "Design Systems", "Interactive Prototypes", "User Flows", "Developer Handoff"],
    benefits: "Better user satisfaction, stronger brand perception, improved conversion rates",
    tech: ["Figma", "Adobe Illustrator", "Canva", "Framer", "Material Design", "Tailwind UI"],
    timeline: "1–3 Weeks",
    price: "₹20,000"
  }
];

export interface DevProcessStep {
  step: string;
  name: string;
  desc: string;
  timeline: string;
  deliverables: string[];
  icon: string;
}

export const devProcessSteps: DevProcessStep[] = [
  {
    step: "01",
    name: "Discovery & Strategy",
    desc: "We begin by understanding your business, goals, target audience, technical requirements, and project scope. Through collaborative discussions, we define a clear roadmap and success metrics.",
    timeline: "1–3 Days",
    deliverables: ["Requirements Document", "Project Scope", "Timeline Estimate", "Technical Consultation", "Proposal"],
    icon: "🔍"
  },
  {
    step: "02",
    name: "Planning & UI/UX Design",
    desc: "We translate ideas into user-friendly experiences by creating wireframes, user flows, and high-fidelity designs that align with your brand and business objectives.",
    timeline: "3–7 Days",
    deliverables: ["Wireframes", "User Flow", "UI/UX Design", "Interactive Prototype", "Design Approval"],
    icon: "🎨"
  },
  {
    step: "03",
    name: "Development & Integration",
    desc: "Our team develops the frontend, backend, databases, APIs, AI features, and third-party integrations using modern technologies and best engineering practices.",
    timeline: "2–8 Weeks",
    deliverables: ["Responsive Application", "Backend APIs", "Database", "AI Integrations", "Authentication", "Admin Dashboard"],
    icon: "💻"
  },
  {
    step: "04",
    name: "Testing & Quality Assurance",
    desc: "Every feature undergoes comprehensive testing to ensure security, performance, responsiveness, compatibility, and reliability before deployment.",
    timeline: "3–5 Days",
    deliverables: ["Bug Fixes", "Performance Optimization", "Security Checks", "Cross-Browser Testing", "QA Report"],
    icon: "🧪"
  },
  {
    step: "05",
    name: "Deployment & Launch",
    desc: "After final approval, we deploy your application to a secure production environment, configure domains, SSL, analytics, and monitoring for a successful launch.",
    timeline: "1–2 Days",
    deliverables: ["Live Website/Application", "Cloud Deployment", "SSL Configuration", "Analytics Setup", "Production Environment"],
    icon: "🚀"
  },
  {
    step: "06",
    name: "Support & Growth",
    desc: "We continue supporting your product after launch with maintenance, updates, monitoring, performance improvements, feature enhancements, and technical guidance.",
    timeline: "Ongoing",
    deliverables: ["Technical Support", "Maintenance", "Performance Monitoring", "Feature Updates", "Monthly Reports"],
    icon: "🤝"
  }
];

// Backward compatibility layers
export const funnelSteps = [
  { stage: "1. Discovery & Strategy", desc: "Collaborative scoping to map out requirements." },
  { stage: "2. UI/UX Design", desc: "Interactive wireframes and layout assets approval." },
  { stage: "3. Development", desc: "Building frontend, APIs, and AI integrations." },
  { stage: "4. Testing & QA", desc: "Rigorous responsive, security, and performance audits." },
  { stage: "5. Launch", desc: "Secure production hosting deployment and domain mapping." }
];

export const clientJourneyDays: ClientJourneyDay[] = [
  { day: "01", title: "Discovery & Strategy", description: "🔍 Requirements document, roadmap scoping." },
  { day: "02", title: "Planning & Design", description: "🎨 Wireframes, interactive layout prototypes." },
  { day: "03", title: "Development", description: "💻 Responsive components, databases, and APIs." },
  { day: "04", title: "Testing & QA", description: "🧪 Cross-browser testing and performance optimization." },
  { day: "05", title: "Deployment & Launch", description: "🚀 Domain DNS routing, SSL certificates setup." },
  { day: "06", title: "Support & Retainers", description: "🤝 Ongoing maintenance updates and monitoring." }
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
