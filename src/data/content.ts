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
export const USP = "I help businesses generate more leads, automate operations, and scale with custom websites, AI systems, and business software.";
export const MISSION = "my mission is to help 10,000 Indian businesses adopt automated operational workflows.";
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
    desc: "I build systems that are lightweight, easy to maintain, and can grow alongside your business operational scale."
  },
  {
    title: "Long-term support",
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
    name: "Starter",
    price: "₹40,000",
    tagline: "High-converting responsive design, SEO setup, performance optimization, contact form integration, CMS setup.",
    features: [
      "High-converting responsive design",
      "SEO setup & search visibility",
      "Speed & performance optimization",
      "Contact / lead form integration",
      "CMS setup for content management"
    ],
    timeline: "2–4 Weeks",
    addons: ["Content Writing", "Branding & Logo Design"],
    idealFor: "Landing Pages & Small Business Websites"
  },
  {
    name: "Growth",
    price: "₹90,000",
    tagline: "Custom web application/dashboard, CRM integration, lead qualification workflows, automated email follow-ups, analytics setup.",
    features: [
      "Custom web application / dashboard",
      "CRM pipeline integration",
      "Lead qualification workflows",
      "Automated email follow-ups",
      "Analytics setup & dashboard"
    ],
    timeline: "2–4 Weeks",
    addons: ["WhatsApp API Integration", "AI Chatbot Integration"],
    isPopular: true,
    idealFor: "Full Business Websites, Dashboards, CRM & Workflow Automation"
  },
  {
    name: "Scale",
    price: "₹2,00,000",
    tagline: "End-to-end custom business software, AI chatbot integration, WhatsApp automation, multi-platform CRM workflows, custom dashboards.",
    features: [
      "End-to-end custom business software",
      "AI chatbot (trained on company data)",
      "WhatsApp automation workflows",
      "Multi-platform CRM syncing",
      "Custom dashboards",
      "Priority ongoing support"
    ],
    timeline: "2–6 Weeks",
    addons: ["On-site Training", "Extended Support SLA"],
    featured: true,
    idealFor: "Complete AI Business System"
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
    title: "Teacher Sathi — AI Lesson Plans for Teachers",
    client: "Own Startup",
    industry: "Education Technology",
    problem: "Teachers require a centralized platform to manage educational workflows, lesson plans, and resources instead of managing scattered physical or text files.",
    beforeState: "Teachers manually tracked classroom updates, lesson calendars, and student assignments using physical binders and split messaging groups.",
    solution: "Built an AI platform that turns NCERT chapters (Class 6–10) into bilingual lesson plans, slide decks and worksheets for teachers.",
    afterState: "Teachers organize schedules, structure digital lesson resources, and track student portal details from a unified dashboard.",
    result: "Provides teachers with a streamlined digital workspace and reduces daily prep overhead.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: "/projects/teachersathi.webp",
    features: ["Lesson Planning", "Resource Library", "Dashboard", "User Management", "Responsive UI"],
    duration: "5 Weeks",
    liveWebsite: "https://teacher-sathi.online",
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
    id: "thirtyminute",
    title: "30 Minute — Learn It, Then Pitch It",
    client: "Own Product",
    industry: "Education Technology",
    problem: "Learners rarely practise explaining an unfamiliar technical topic quickly and clearly.",
    beforeState: "Practice meant picking random topics and timing yourself with no structure or record.",
    solution: "Built a focused workspace: one unfamiliar subject, thirty minutes to research, five minutes to explain, drawn from 170+ real technical challenges.",
    afterState: "Users get a timed research-then-pitch loop with a ready bank of challenges.",
    result: "A live learning and content-creation tool for practising technical communication.",
    tech: ["Next.js", "React", "TypeScript", "Recharts"],
    image: "/projects/thirtyminute.webp",
    features: ["170+ Technical Challenges", "Timed Research Sessions", "5-minute Pitch Mode", "Progress Charts"],
    liveWebsite: "https://pitch-scroll.netlify.app",
    githubLink: "https://github.com/JayantOlhyan/pitch-scroll",
  },
  {
    id: "jayantdiaries",
    title: "The Jayant Diaries — Travel Archive",
    client: "Own Project",
    industry: "Personal Media",
    problem: "Travel memories were scattered across photos, videos, journals and maps with no single story.",
    beforeState: "Trips lived in camera rolls and notes apps, hard to revisit or share as a journey.",
    solution: "Built a personal travel archive that turns photos, videos, journals and places into structured, map-based journeys.",
    afterState: "Each trip becomes a browsable journey with places on a map and memories in order.",
    result: "A live, cinematic archive backed by a real database and maps.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Leaflet"],
    image: "/projects/jayantdiaries.webp",
    features: ["Map-based Journeys", "Photo & Video Archive", "Journals", "Supabase Backend"],
    liveWebsite: "https://the-jayant-diaries.netlify.app",
    githubLink: "https://github.com/JayantOlhyan/The-Jayant-Diaries",
  },
  {
    id: "wdsbughunt",
    title: "WDS Bug Hunt — Student QA Platform",
    client: "Web Development Society, MSIT",
    industry: "Education",
    problem: "A college website needed systematic testing, and student contributors needed credit for the issues they found.",
    beforeState: "Bugs were reported informally, with no shared list and no recognition for contributors.",
    solution: "Built a student-powered website QA platform where contributors find and report issues and get recognised for them.",
    afterState: "Issues are reported in one place and contributors are credited for their finds.",
    result: "A live QA and recognition platform for the society's bug-hunt event.",
    tech: ["Next.js", "React", "TypeScript"],
    image: "/projects/wdsbughunt.webp",
    features: ["Bug Reporting", "Contributor Recognition", "Event Landing Page"],
    liveWebsite: "https://wds-bug-hunt.netlify.app",
    githubLink: "https://github.com/JayantOlhyan/WDS-Bug-Hunt",
  },
  {
    id: "feeshisab",
    title: "Fees Hisab — Tuition Fee Manager",
    client: "Own Product",
    industry: "Education",
    problem: "Independent tutors track monthly fees for many students and lose track of who has paid.",
    beforeState: "Fees were tracked in notebooks or chat messages, with due dates easy to miss.",
    solution: "Built a simple tuition fee manager for individual teachers: students, monthly fees, due dates and payment history.",
    afterState: "A teacher sees each month's collections and pending fees on one dashboard.",
    result: "A live, mobile-friendly tool — \"Har Fee. Har Student. Pure Hisab.\"",
    tech: ["Next.js", "React", "TypeScript", "Framer Motion"],
    image: "/projects/feeshisab.webp",
    features: ["Student Records", "Monthly Fee Tracking", "Due Dates", "Payment History", "Reports"],
    liveWebsite: "https://fees-hisab.netlify.app",
    githubLink: "https://github.com/JayantOlhyan/Fees-Hisab",
  },
  {
    id: "truthlens",
    title: "TruthLens — AI Fact-Checking",
    client: "Own Product",
    industry: "Media & Trust",
    problem: "Fake news, deepfake images and AI-generated misinformation are hard for ordinary readers to spot.",
    beforeState: "Checking a claim meant searching several sources by hand with no clear verdict.",
    solution: "Built an AI verification platform that analyses text and images with Google Gemini and returns a Trust Score with recommendations.",
    afterState: "Users paste a claim or upload an image and get a scored, explained assessment.",
    result: "A live AI fact-checking front end with a separate analysis backend.",
    tech: ["React", "Vite", "Google Gemini", "Redis", "Framer Motion"],
    image: "/projects/truthlens.webp",
    features: ["Text Analysis", "Image Forensics", "Trust Score", "Recommendations"],
    liveWebsite: "https://truthlens.vercel.app",
    githubLink: "https://github.com/JayantOlhyan/Truth-Lens-",
  },
  {
    id: "yaperz",
    title: "Yaperz — Streetwear E-commerce Store",
    client: "Clothing brand (client)",
    industry: "Fashion & Retail",
    problem: "A new streetwear label needed its own online store instead of selling only through social media DMs.",
    beforeState: "Orders and product questions were handled one by one in messages, with no catalogue customers could browse.",
    solution: "Built a branded e-commerce storefront with a product catalogue, product pages and a database-backed inventory.",
    afterState: "Customers browse the full collection and product details on a fast, mobile-first store.",
    result: "The brand has a live storefront it can share and grow, separate from social channels.",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    image: "/projects/yaperz.webp",
    features: ["Product Catalogue", "Product Pages", "Mobile-first Design", "Database-backed Inventory"],
    liveWebsite: "https://yaperz.netlify.app",
    githubLink: "https://github.com/JayantOlhyan/Yaperz",
  },
  {
    id: "feminyacademy",
    title: "Feminy Academy — Online Beauty Courses",
    client: "Beauty educator (client)",
    industry: "Education",
    problem: "A beauty educator wanted to teach her courses online instead of only in person.",
    beforeState: "Students could only learn in physical classes, and course details were shared by phone and social media.",
    solution: "Built a branded course website that presents the academy, its courses and the founder, with clear enquiry paths.",
    afterState: "Students discover the courses online and reach the academy directly.",
    result: "The academy runs on its own domain with a professional online presence.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/feminy.webp",
    features: ["Course Catalogue", "Founder Profile", "Enquiry Flow", "Mobile-first Design"],
    liveWebsite: "https://feminy.academy",
  },
  {
    id: "jatbhawan",
    title: "Jat Bhawan Najafgarh — Community Hall Website",
    client: "Community organisation (client)",
    industry: "Community & Non-profit",
    problem: "A community hall in Najafgarh needed one place for donations, members and hall bookings.",
    beforeState: "Donations, donor records and hall bookings were handled offline and by word of mouth.",
    solution: "Built a Hindi-first website with online donations, a public donor list, the executive committee and hall booking for weddings and events.",
    afterState: "Members donate online, see the donor list and book the hall from their phones.",
    result: "A live, Hindi-language community website on its own .in domain.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/jatbhawan.webp",
    features: ["Online Donations", "Donor List", "Hall Booking", "Hindi-first Content"],
    liveWebsite: "https://jat-samaj-najafgarh.in",
  },
  {
    id: "himaniclinic",
    title: "Dr. Himani Kundoo — Gynaecology Clinic Website",
    client: "Doctor's clinic (client)",
    industry: "Healthcare",
    problem: "An obstetrician and fetal-medicine specialist in Gurugram needed a site patients could trust and book from.",
    beforeState: "Patients found the doctor through referrals only, with no page explaining her services or how to book.",
    solution: "Built a clinic website covering pregnancy care, high-risk pregnancy, fertility and gynaecology, with consultation booking.",
    afterState: "Patients read about each service and book a consultation online.",
    result: "The clinic has a credible, search-friendly website for new patients.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/himaniclinic.webp",
    features: ["Service Pages", "Consultation Booking", "Doctor Profile", "Local SEO"],
    liveWebsite: "https://himani-malhan-clinic.netlify.app",
  },
  {
    id: "arhamestate",
    title: "Arham Estate — Luxury Real Estate Website",
    client: "Real estate firm (client)",
    industry: "Real Estate",
    problem: "A Kolkata real estate advisory firm needed a premium site to present high-end properties.",
    beforeState: "Listings were shared as brochures and messages, with no single place to browse projects.",
    solution: "Built a premium property website presenting residential, commercial and boutique projects with RERA details.",
    afterState: "Buyers browse curated projects and contact the firm from one site.",
    result: "A polished online showroom that matches the firm's luxury positioning.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/arhamestate.webp",
    features: ["Property Showcase", "Project Pages", "RERA Details", "Enquiry Forms"],
    liveWebsite: "https://arham-estate.netlify.app",
  },
  {
    id: "gatesathi",
    title: "GateSathi — Digital Visitor Register for Schools",
    client: "Own product",
    industry: "Education",
    problem: "Government schools track visitors in paper registers that are hard to search and easy to skip.",
    beforeState: "Every visitor entry was written by hand, with no quick way to check who came in or picked up a child.",
    solution: "Built a free, Hindi-first digital visitor register for government schools.",
    afterState: "Gate staff log every entry digitally and look up records in seconds.",
    result: "A live, free tool built for school child safety.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/gatesathi.webp",
    features: ["Digital Visitor Log", "Child Pick-up Records", "Hindi Interface", "Free to Use"],
    liveWebsite: "https://gate-sathi.netlify.app",
  },
  {
    id: "threattrace",
    title: "ThreatTrace AI — Email Threat Forensics",
    client: "Own product",
    industry: "Cybersecurity",
    problem: "Security teams spend hours working out whether a suspicious email is a real threat.",
    beforeState: "Analysts checked headers, links and sending servers by hand, one tool at a time.",
    solution: "Built an AI platform that detects suspicious email, explains the evidence, traces the sending infrastructure and writes a forensic report.",
    afterState: "Analysts get detection, tracing and a report from one guided flow.",
    result: "A live interactive product tour showing the full investigation flow.",
    tech: ["React", "TypeScript", "AI/LLM", "Tailwind CSS"],
    image: "/projects/threattrace.webp",
    features: ["Phishing Detection", "Infrastructure Tracing", "Activity Correlation", "Forensic Reports"],
    liveWebsite: "https://threat-trace-ai.netlify.app",
  },
  {
    id: "foodbridge",
    title: "FoodBridge — Surplus Food to NGOs",
    client: "Own product",
    industry: "Social Impact",
    problem: "Events throw away good surplus food while nearby NGOs need it.",
    beforeState: "Hand-offs depended on personal contacts and came too late for the food to be safe.",
    solution: "Built a platform that matches event surplus with nearby NGOs, checking food safety and pickup feasibility.",
    afterState: "Organisers list surplus and get matched with an NGO that can collect in time.",
    result: "A live matching platform for reducing food waste.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/foodbridge.webp",
    features: ["Surplus Listing", "NGO Matching", "Safety Checks", "Pickup Feasibility"],
    liveWebsite: "https://food-bridge-01.netlify.app",
  },
  {
    id: "khelclan",
    title: "KhelClan — Sports Community Platform",
    client: "Own Project",
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
    liveWebsite: "https://khelclan.online",
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
    client: "Hackathon Winner · Elite Hack 1.0",
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
    liveWebsite: "https://farm-iq.netlify.app",
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
    desc: "I start by understanding your business, goals, target audience, technical requirements, and project scope. Together we define a clear roadmap and success metrics.",
    timeline: "1–3 Days",
    deliverables: ["Requirements Document", "Project Scope", "Timeline Estimate", "Technical Consultation", "Proposal"],
    icon: "🔍"
  },
  {
    step: "02",
    name: "Planning & UI/UX Design",
    desc: "I translate ideas into user-friendly experiences by creating wireframes, user flows, and high-fidelity designs that align with your brand and business objectives.",
    timeline: "3–7 Days",
    deliverables: ["Wireframes", "User Flow", "UI/UX Design", "Interactive Prototype", "Design Approval"],
    icon: "🎨"
  },
  {
    step: "03",
    name: "Development & Integration",
    desc: "I develop the frontend, backend, databases, APIs, AI features, and third-party integrations using modern technologies and best engineering practices.",
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
    desc: "After final approval, I deploy your application to a secure production environment, configure domains, SSL, analytics, and monitoring for a successful launch.",
    timeline: "1–2 Days",
    deliverables: ["Live Website/Application", "Cloud Deployment", "SSL Configuration", "Analytics Setup", "Production Environment"],
    icon: "🚀"
  },
  {
    step: "06",
    name: "Support & Growth",
    desc: "I continue supporting your product after launch with maintenance, updates, monitoring, performance improvements, feature enhancements, and technical guidance.",
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
    question: "How much does a project cost?",
    answer: "Every project is unique, so pricing depends on the scope, complexity, features, and timeline. My website packages start at ₹40,000, while custom software and AI systems start at ₹90,000. After understanding your requirements, I provide a detailed proposal with transparent pricing and no hidden charges."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Timelines vary depending on the project. A business website generally takes 2–4 weeks, while custom software or AI systems typically take 2–6 weeks. Before development begins, you'll receive a project roadmap with clear milestones and delivery dates."
  },
  {
    question: "Do you provide support after the project is launched?",
    answer: "Yes. I offer post-launch support to ensure your application continues to run smoothly. This includes bug fixes, security updates, technical assistance, performance monitoring, and optional maintenance plans for ongoing improvements and new features."
  },
  {
    question: "Can you handle hosting and deployment?",
    answer: "Absolutely. I can deploy your project to cloud platforms such as Vercel, Netlify, AWS, Google Cloud, or other providers based on your requirements. I also assist with domain setup, SSL certificates, email configuration, backups, and production monitoring."
  },
  {
    question: "Can you integrate Artificial Intelligence into my business?",
    answer: "Yes. I specialize in AI-powered solutions including chatbots, AI assistants, document processing, workflow automation, recommendation systems, computer vision, and custom AI applications using modern large language models and machine learning technologies."
  },
  {
    question: "Who owns the source code and intellectual property?",
    answer: "Once the project is completed and the agreed payment has been received, ownership of the custom-developed source code and project assets is transferred to you, unless a different licensing arrangement has been agreed upon in writing. Any third-party libraries remain subject to their respective licenses."
  },
  {
    question: "What payment methods do you accept?",
    answer: "I typically work with milestone-based payments. A common structure is 40% upfront, 30% after the development milestone, and 30% before final deployment. I support bank transfers, UPI, and other agreed payment methods."
  },
  {
    question: "Do you offer website and software maintenance?",
    answer: "Yes. I provide flexible maintenance plans that include security updates, server monitoring, backups, feature enhancements, performance optimization, bug fixes, and technical support. Clients can choose monthly or annual maintenance packages."
  },
  {
    question: "How do you ensure project security?",
    answer: "Security is built into every project. I follow industry best practices including HTTPS, secure authentication, encrypted data transmission, role-based access control, input validation, regular dependency updates, secure API development, and cloud security standards."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes. Every website and application I build is fully responsive and optimized for desktops, tablets, and smartphones to provide a consistent user experience across all devices."
  },
  {
    question: "Can you redesign my existing website or software?",
    answer: "Yes. I can modernize existing websites, migrate legacy systems, improve UI/UX, optimize performance, add new features, and integrate AI or automation without rebuilding everything from scratch if it's technically feasible."
  },
  {
    question: "Do you sign NDAs and keep project information confidential?",
    answer: "Yes. I respect client confidentiality and am happy to sign Non-Disclosure Agreements (NDAs) before discussing or starting your project. All project information is handled securely and shared only with authorized collaborators."
  },
  {
    question: "Can you integrate third-party APIs and business tools?",
    answer: "Absolutely. I integrate payment gateways, CRM systems, ERP platforms, WhatsApp Business, email services, Google Workspace, cloud storage, analytics tools, and many other third-party APIs to streamline your workflows."
  },
  {
    question: "What technologies do you work with?",
    answer: "My primary stack includes Next.js, React, TypeScript, Node.js, Python, FastAPI, Flutter, PostgreSQL, MongoDB, Firebase, Supabase, Docker, AWS, Google Cloud, OpenAI, Google Gemini, Anthropic Claude, and LangChain. I select technologies based on your project's requirements rather than using a one-size-fits-all approach."
  },
  {
    question: "How do I get started?",
    answer: "Simply contact me through my website, email, or LinkedIn with your project idea. I'll schedule a discovery call to understand your goals, recommend the best technical approach, provide a detailed proposal, and begin development once the scope and timeline are approved."
  }
];
export const processSteps = funnelSteps; // Backward compatibility
