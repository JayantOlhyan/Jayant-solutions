/**
 * JAYANT SYSTEMS — website master content.
 * Source: "Jayant Systems — Complete Website Content & Visual Framework" (Nov 2026).
 *
 * Rules (do not break):
 * - No invented clients, testimonials, ratings, statistics or guarantees.
 * - Offerings marked `confirmed: false` never reach the production build
 *   (see src/lib/capabilities.ts). Flip to `true` only when delivery and
 *   commercial terms are confirmed.
 * - Work references point at real, live projects only (`workItems`).
 */
import { DIVISION_MIN_CONFIRMED, SHOW_UNCONFIRMED } from "@/lib/capabilities";
import { caseStudies } from "@/data/content";

export const BRAND = {
  name: "JAYANT SYSTEMS",
  tagline: "You run the business. We handle the digital.",
  taglineA: "You run the business.",
  taglineB: "We handle the digital.",
  secondary: "The digital team behind your work.",
  philosophy: "One partner for your entire digital ecosystem.",
  positioning: "Founder-led digital technology and creative studio",
  founder: "Jayant Olhyan",
  verbs: ["Build", "Automate", "Create", "Grow"] as const,
  statement: "Websites. Software. AI. Automation. Design. Content. Growth.",
};

/* ------------------------------------------------------------------ */
/* Divisions                                                           */
/* ------------------------------------------------------------------ */

export type Offering = { name: string; detail: string; confirmed: boolean };

export type DivisionSlug =
  | "websites-ecommerce"
  | "custom-software"
  | "ai-automation"
  | "design-branding"
  | "video-content"
  | "seo-growth-support";

export type Division = {
  slug: DivisionSlug;
  num: string;
  name: string;
  short: string;
  verb: (typeof BRAND.verbs)[number];
  priority: "primary" | "supporting";
  headline: string;
  intro: string;
  tagline: string;
  oneLiner: string;
  promise: string;
  offerings: Offering[];
  subServices: string[];
  industries: string[];
  metaTitle: string;
  metaDescription: string;
};

const o = (name: string, detail: string, confirmed: boolean): Offering => ({ name, detail, confirmed });

export const divisions: Division[] = [
  {
    slug: "websites-ecommerce",
    num: "01",
    name: "Website development & e-commerce",
    short: "Websites & e-commerce",
    verb: "Build",
    priority: "primary",
    headline: "Your digital first impression should be your strongest.",
    intro:
      "We design and develop modern, responsive websites that help businesses establish credibility, attract customers and generate enquiries.",
    tagline: "We don't just build websites. We build your digital presence.",
    oneLiner: "Not just a website. A system that works.",
    promise: "Business websites, redesigns, landing pages and online stores.",
    offerings: [
      o("Business websites", "Professional company websites", true),
      o("Website redesign", "Modernisation of outdated websites", true),
      o("Landing pages", "Campaign and lead-generation pages", true),
      o("E-commerce development", "Online stores and product catalogues", true),
      o("Educational websites", "School, college and institutional websites", true),
      o("Portfolio websites", "Personal and professional portfolios", true),
      o("CMS development", "Easily manageable website content", true),
      o("Website integrations", "Forms, payment gateways, booking systems and APIs", true),
      o("Website migration", "Moving websites between platforms", false),
      o("Responsive development", "Mobile, tablet and desktop compatibility", true),
      o("Website optimisation", "Speed, usability and performance improvements", true),
    ],
    subServices: ["website-development"],
    industries: ["local-businesses", "education", "retail-ecommerce", "restaurants-hospitality"],
    metaTitle: "Website Development & E-commerce",
    metaDescription:
      "Business websites, redesigns, landing pages, educational websites and online stores, built responsive, fast and easy to manage. Jayant Systems.",
  },
  {
    slug: "custom-software",
    num: "02",
    name: "Custom software & business systems",
    short: "Custom software",
    verb: "Build",
    priority: "primary",
    headline: "Your business shouldn't have to adjust to its software.",
    intro:
      "We build applications and internal systems around how your business actually operates, helping you replace fragmented tools and manual processes.",
    tagline: "Software built around your business. Not the other way around.",
    oneLiner: "We build the systems behind your success.",
    promise: "Web apps, dashboards, portals, SaaS products and MVPs.",
    offerings: [
      o("Custom web applications", "Business-specific applications", true),
      o("CRM development", "Customer and lead management", false),
      o("Admin dashboards", "Centralised business administration", true),
      o("Management systems", "Organisation-specific operational software", false),
      o("Customer portals", "Secure customer-facing platforms", true),
      o("Employee portals", "Internal staff and resource management", false),
      o("SaaS development", "Subscription-based software products", true),
      o("MVP development", "Functional early-stage product development", true),
      o("Inventory systems", "Product and stock management", false),
      o("Reporting dashboards", "Centralised business data and visualisation", true),
      o("Database development", "Structured data storage and management", false),
      o("API development", "Connections between software platforms", true),
      o("Authentication systems", "Login, permissions and access management", true),
      o("Legacy system modernisation", "Improvements to existing software", false),
    ],
    subServices: ["custom-software-development", "saas-development", "mvp-development", "api-development", "mobile-app-development"],
    industries: ["enterprises", "startups", "education", "healthcare"],
    metaTitle: "Custom Software & Business Systems",
    metaDescription:
      "Custom web applications, admin dashboards, customer portals, SaaS products and MVPs built around how your business actually works. Jayant Systems.",
  },
  {
    slug: "ai-automation",
    num: "03",
    name: "AI integrations & workflow automation",
    short: "AI & automation",
    verb: "Automate",
    priority: "primary",
    headline: "Stop spending human time on repetitive work.",
    intro:
      "We integrate artificial intelligence and automation into everyday business operations, helping teams reduce manual tasks and simplify existing workflows.",
    tagline: "Automate the repetitive. Focus on the meaningful.",
    oneLiner: "Technology that works for you.",
    promise: "AI assistants, workflow automation and connected tools.",
    offerings: [
      o("AI chatbots", "Website and customer-support assistants", true),
      o("Custom AI agents", "Task-specific AI systems", true),
      o("Workflow automation", "Automated repetitive business processes", true),
      o("WhatsApp automation", "Enquiries, notifications and approved messaging workflows", true),
      o("Email automation", "Follow-ups and notifications", true),
      o("Lead automation", "Lead collection, routing and tracking", true),
      o("CRM automation", "Connected customer-management workflows", true),
      o("Document automation", "Document generation and information extraction", false),
      o("AI knowledge assistants", "Assistants using approved company resources", true),
      o("AI content workflows", "Assisted content creation and repurposing", true),
      o("Reporting automation", "Automated reports and summaries", false),
      o("Third-party integrations", "Connecting existing software and tools", true),
      o("Business process analysis", "Identifying opportunities for automation", true),
      o("AI consulting", "Selecting suitable AI tools and systems", true),
    ],
    subServices: ["ai-development", "ai-chatbot-development", "business-automation", "technology-consulting"],
    industries: ["enterprises", "healthcare", "local-businesses", "education"],
    metaTitle: "AI Integrations & Workflow Automation",
    metaDescription:
      "AI chatbots, custom AI agents, WhatsApp, email and lead automation, and connected business tools that reduce repetitive work. Jayant Systems.",
  },
  {
    slug: "design-branding",
    num: "04",
    name: "UI/UX, design & branding",
    short: "Design & branding",
    verb: "Create",
    priority: "supporting",
    headline: "Good design is more than looking good.",
    intro:
      "We create consistent, purposeful visual experiences that communicate your brand clearly and make your digital products easier to use.",
    tagline: "Design that communicates. Experiences that connect.",
    oneLiner: "Create better. Work smarter. Grow digitally.",
    promise: "Interfaces, prototypes, design systems and brand identity.",
    offerings: [
      o("Logo design", "Brand marks and visual symbols", true),
      o("Brand identity", "Colours, typography and visual language", true),
      o("Brand guidelines", "Consistent brand usage documentation", false),
      o("UI design", "Website and application interfaces", true),
      o("UX design", "User journeys and usability improvements", true),
      o("Prototyping", "Interactive product design concepts", true),
      o("Social media design", "Posts, carousels and graphics", false),
      o("Marketing creatives", "Promotional designs and advertising assets", false),
      o("Business cards", "Professional visiting-card designs", false),
      o("Brochures and posters", "Business communication materials", false),
      o("Presentation design", "Corporate decks and pitch presentations", false),
      o("Design systems", "Reusable visual components", true),
      o("Rebranding", "Modernisation of existing brand identities", false),
    ],
    subServices: ["ui-ux-design"],
    industries: ["startups", "retail-ecommerce", "creators", "local-businesses"],
    metaTitle: "UI/UX, Design & Branding",
    metaDescription:
      "UI and UX design, prototypes, design systems, logos and brand identity that make your product easier to use and your brand clearer. Jayant Systems.",
  },
  {
    slug: "video-content",
    num: "05",
    name: "Video editing & content strategy",
    short: "Video & content",
    verb: "Create",
    priority: "supporting",
    headline: "Your business has a story. Make sure people hear it.",
    intro:
      "We help brands communicate through structured content strategies, professional video editing and consistent digital storytelling.",
    tagline: "Turn your expertise into content people actually want to consume.",
    oneLiner: "Good ideas deserve better execution.",
    promise: "Video editing, content plans and repurposing.",
    offerings: [
      o("Short-form video editing", "Instagram Reels, Shorts and promotional clips", false),
      o("Long-form video editing", "YouTube and business videos", false),
      o("Corporate video editing", "Company introductions and presentations", false),
      o("Motion graphics", "Animated visual elements", false),
      o("Subtitles and captions", "Accessible, engaging video captions", false),
      o("Content strategy", "Content direction and planning", false),
      o("Content calendars", "Structured publishing schedules", false),
      o("Scriptwriting", "Scripts for videos and promotional content", false),
      o("Social media creatives", "Platform-specific visual assets", false),
      o("Thumbnail design", "Video thumbnails and covers", false),
      o("Content repurposing", "Turning long-form content into shorter assets", false),
      o("AI-assisted content production", "Streamlined content creation workflows", false),
      o("Personal branding content", "Content for founders and professionals", false),
    ],
    subServices: [],
    industries: ["creators", "restaurants-hospitality", "retail-ecommerce", "startups"],
    metaTitle: "Video Editing & Content Strategy",
    metaDescription:
      "Short-form and long-form video editing, content strategy, calendars and repurposing for brands and founders. Jayant Systems.",
  },
  {
    slug: "seo-growth-support",
    num: "06",
    name: "SEO, digital growth & ongoing support",
    short: "SEO, growth & support",
    verb: "Grow",
    priority: "supporting",
    headline: "Building is only the beginning.",
    intro:
      "We help businesses maintain, improve and optimise their digital presence through search optimisation, analytics and ongoing technical support.",
    tagline: "Launch better. Stay optimised. Keep improving.",
    oneLiner: "Built for today. Designed for tomorrow.",
    promise: "SEO, analytics, performance and monthly support.",
    offerings: [
      o("Technical SEO", "Crawlability, indexing and website structure", true),
      o("On-page SEO", "Page titles, metadata and content structure", true),
      o("Local SEO", "Improving local search visibility", false),
      o("Google Business Profile support", "Profile setup and optimisation", false),
      o("SEO content strategy", "Search-oriented content planning", false),
      o("Website analytics", "Traffic and interaction tracking", true),
      o("Conversion tracking", "Measuring meaningful customer actions", false),
      o("Conversion optimisation", "Improving enquiry and conversion journeys", false),
      o("Performance optimisation", "Faster and more efficient websites", true),
      o("Website maintenance", "Updates, fixes and improvements", true),
      o("Security maintenance", "Agreed security reviews and updates", false),
      o("Hosting and deployment support", "Technical infrastructure management", true),
      o("Backup management", "Agreed backup and recovery processes", false),
      o("Monthly support retainers", "Ongoing digital and technical assistance", true),
    ],
    subServices: ["cloud-and-devops"],
    industries: ["local-businesses", "retail-ecommerce", "healthcare", "enterprises"],
    metaTitle: "SEO, Digital Growth & Ongoing Support",
    metaDescription:
      "Technical and on-page SEO, analytics, performance optimisation, hosting support and monthly maintenance after launch. Jayant Systems.",
  },
];

/* ------------------------------------------------------------------ */
/* Gate helpers                                                        */
/* ------------------------------------------------------------------ */

export const visibleOfferings = (d: Division) => d.offerings.filter((x) => x.confirmed || SHOW_UNCONFIRMED);
export const confirmedCount = (d: Division) => d.offerings.filter((x) => x.confirmed).length;
export const divisionIsLive = (d: Division) => SHOW_UNCONFIRMED || confirmedCount(d) >= DIVISION_MIN_CONFIRMED;
export const liveDivisions = () => divisions.filter(divisionIsLive);
export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug);
export const divisionHref = (slug: string) => `/services/${slug}`;

/* ------------------------------------------------------------------ */
/* Section 03 — problems → solutions                                   */
/* ------------------------------------------------------------------ */

export type Solution = { problem: string; help: string; division: DivisionSlug; href?: string; home?: boolean };

export const solutions: Solution[] = [
  { problem: "My business doesn't have a website.", help: "Establish a professional digital presence.", division: "websites-ecommerce", href: "/services/website-development", home: true },
  { problem: "My website looks outdated.", help: "Redesign it for modern customers.", division: "websites-ecommerce", href: "/services/website-development" },
  { problem: "Customers cannot find my business online.", help: "Improve website SEO and search visibility.", division: "seo-growth-support" },
  { problem: "I want to sell products online.", help: "Build an e-commerce platform.", division: "websites-ecommerce", href: "/services/website-development" },
  { problem: "I manage everything using Excel.", help: "Build a centralised management system.", division: "custom-software", href: "/services/custom-software-development", home: true },
  { problem: "My employees repeat the same tasks every day.", help: "Automate repetitive workflows.", division: "ai-automation", href: "/services/business-automation", home: true },
  { problem: "I receive enquiries but struggle to manage them.", help: "Implement lead management and automated follow-ups.", division: "ai-automation", href: "/services/business-automation" },
  { problem: "I want to use AI but don't know how.", help: "Identify and implement practical AI solutions.", division: "ai-automation", href: "/services/ai-development", home: true },
  { problem: "My business doesn't look professional online.", help: "Establish a consistent visual identity.", division: "design-branding", href: "/services/ui-ux-design" },
  { problem: "I don't have time to create content.", help: "Plan, edit and repurpose content.", division: "video-content" },
  { problem: "I have an idea for a startup.", help: "Design and develop an MVP.", division: "custom-software", href: "/services/mvp-development", home: true },
  { problem: "My website requires regular updates.", help: "Provide ongoing technical maintenance.", division: "seo-growth-support", href: "/pricing/maintenance-plans" },
  { problem: "I use too many disconnected tools.", help: "Connect and integrate existing systems.", division: "ai-automation", href: "/services/api-development", home: true },
  { problem: "I don't want to manage multiple digital vendors.", help: "Provide a coordinated digital delivery partner.", division: "custom-software", href: "/pricing" },
];

export const visibleSolutions = () =>
  solutions.filter((s) => {
    const d = getDivision(s.division);
    return d ? divisionIsLive(d) : false;
  });

/* ------------------------------------------------------------------ */
/* Real work                                                           */
/* ------------------------------------------------------------------ */

export type WorkItem = {
  id: string;
  name: string;
  kind: string;
  line: string;
  image: string;
  href: string;
  divisions: DivisionSlug[];
  industries: string[];
};

const workMeta: Omit<WorkItem, "name" | "image" | "href">[] = [
  { id: "teachersathi", kind: "Own startup · SaaS", line: "AI lesson plans, slides and worksheets from any NCERT chapter.", divisions: ["custom-software", "ai-automation"], industries: ["education", "startups"] },
  { id: "healthkinator", kind: "Own product · Conference talk", line: "AI symptom checker in English and Hindi.", divisions: ["ai-automation", "custom-software"], industries: ["healthcare"] },
  { id: "msitwebsite", kind: "College website rebuild", line: "A modern, responsive portal for an engineering college.", divisions: ["websites-ecommerce", "design-branding"], industries: ["education"] },
  { id: "farmiq", kind: "Hackathon winner", line: "Crop and weather guidance for farmers in 11 languages.", divisions: ["ai-automation"], industries: ["startups"] },
  { id: "sentinelai", kind: "Hackathon build", line: "Real-time scam detection for SMS, email and links.", divisions: ["ai-automation"], industries: ["startups", "enterprises"] },
  { id: "khelclan", kind: "Own project", line: "Home of an offline sports community in Delhi NCR.", divisions: ["websites-ecommerce"], industries: ["local-businesses", "creators"] },
  { id: "civicsetu", kind: "Hackathon build", line: "Grievance platform for citizens, authorities and NGOs.", divisions: ["custom-software"], industries: ["enterprises"] },
  { id: "portfolio-v2", kind: "Personal brand site", line: "A responsive portfolio with a modern interface.", divisions: ["websites-ecommerce", "design-branding"], industries: ["creators"] },
];

export const workItems: WorkItem[] = workMeta
  .map((m) => {
    const cs = caseStudies.find((c) => c.id === m.id);
    if (!cs || !cs.liveWebsite) return null;
    return { ...m, name: cs.title.split(" — ")[0], image: cs.image, href: cs.liveWebsite };
  })
  .filter((x): x is WorkItem => x !== null);

export const workFor = (opts: { division?: string; industry?: string; ids?: string[] }) =>
  workItems.filter(
    (w) =>
      (!opts.ids || opts.ids.includes(w.id)) &&
      (!opts.division || w.divisions.includes(opts.division as DivisionSlug)) &&
      (!opts.industry || w.industries.includes(opts.industry)),
  );

/* ------------------------------------------------------------------ */
/* Section 04 — industries                                             */
/* ------------------------------------------------------------------ */

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  headline: string;
  lead: string;
  problems: { problem: string; help: string; division: DivisionSlug }[];
  builds: { name: string; division: DivisionSlug }[];
  metaDescription: string;
};

export const industries: Industry[] = [
  {
    slug: "education",
    name: "Schools & colleges",
    summary: "Institutional websites, admission enquiries and management systems.",
    headline: "Digital systems for schools, colleges and education teams.",
    lead: "Institutions run on information: admissions, notices, timetables and parent communication. We build the websites and tools that keep that information clear and up to date.",
    problems: [
      { problem: "Our website is outdated and hard to update.", help: "A modern institutional website with a simple way to publish notices.", division: "websites-ecommerce" },
      { problem: "Admission enquiries arrive on calls, forms and WhatsApp.", help: "One enquiry form and an automated follow-up flow.", division: "ai-automation" },
      { problem: "Teachers spend hours preparing material.", help: "AI tools built around your curriculum.", division: "ai-automation" },
    ],
    builds: [
      { name: "Institutional websites", division: "websites-ecommerce" },
      { name: "Admission enquiry flows", division: "ai-automation" },
      { name: "Student and staff portals", division: "custom-software" },
      { name: "AI teaching assistants", division: "ai-automation" },
    ],
    metaDescription: "Websites, admission enquiry flows, portals and AI tools for schools and colleges. Built by the team behind Teacher Sathi. Jayant Systems.",
  },
  {
    slug: "healthcare",
    name: "Healthcare & clinics",
    summary: "Professional websites, appointment booking and patient enquiry workflows.",
    headline: "Websites and workflows for clinics and healthcare teams.",
    lead: "Patients judge a clinic online before they call. We build clear, trustworthy websites and the booking and enquiry workflows behind them.",
    problems: [
      { problem: "Patients can't find our timings or book easily.", help: "A clear clinic website with online appointment booking.", division: "websites-ecommerce" },
      { problem: "Reception spends the day answering the same questions.", help: "An assistant that answers common questions and routes the rest.", division: "ai-automation" },
      { problem: "Enquiries and reminders are handled manually.", help: "Automated confirmations and reminders on WhatsApp or email.", division: "ai-automation" },
    ],
    builds: [
      { name: "Clinic websites", division: "websites-ecommerce" },
      { name: "Appointment booking", division: "websites-ecommerce" },
      { name: "Patient enquiry workflows", division: "ai-automation" },
      { name: "Admin dashboards", division: "custom-software" },
    ],
    metaDescription: "Clinic websites, appointment booking and patient enquiry workflows for healthcare teams. Jayant Systems.",
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants & hospitality",
    summary: "Websites, digital menus, reservations and enquiry handling.",
    headline: "Digital menus, websites and reservations for hospitality.",
    lead: "Guests look up your menu, photos and timings before they visit. We make that information easy to find and easy to act on.",
    problems: [
      { problem: "Our menu lives in a PDF nobody can read on a phone.", help: "A fast, mobile-first digital menu you can update yourself.", division: "websites-ecommerce" },
      { problem: "Bookings come in over calls and DMs.", help: "Online reservations with automatic confirmations.", division: "ai-automation" },
      { problem: "We post irregularly on social media.", help: "A content plan and edited short-form video.", division: "video-content" },
    ],
    builds: [
      { name: "Restaurant websites", division: "websites-ecommerce" },
      { name: "Digital menus", division: "websites-ecommerce" },
      { name: "Reservation flows", division: "ai-automation" },
      { name: "Short-form content", division: "video-content" },
    ],
    metaDescription: "Restaurant and hospitality websites, digital menus and reservation flows. Jayant Systems.",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & e-commerce brands",
    summary: "Online stores, product management, branding and marketing assets.",
    headline: "Online stores and systems for retail and D2C brands.",
    lead: "Selling online is more than a storefront: catalogues, orders, payments and repeat customers. We build the store and the tools around it.",
    problems: [
      { problem: "We want to sell products online.", help: "An e-commerce store with payments and a manageable catalogue.", division: "websites-ecommerce" },
      { problem: "Order updates are sent by hand.", help: "Automated order and delivery notifications.", division: "ai-automation" },
      { problem: "Our brand looks different everywhere.", help: "A consistent visual identity across store and social.", division: "design-branding" },
    ],
    builds: [
      { name: "E-commerce stores", division: "websites-ecommerce" },
      { name: "Payment integrations", division: "websites-ecommerce" },
      { name: "Order notifications", division: "ai-automation" },
      { name: "Brand identity", division: "design-branding" },
    ],
    metaDescription: "E-commerce stores, payment integrations, order automation and brand identity for retail brands. Jayant Systems.",
  },
  {
    slug: "startups",
    name: "Startups & founders",
    summary: "MVP development, product design, software and technical execution.",
    headline: "From idea to a working product.",
    lead: "Founders need to test an idea with real users before raising or scaling. We plan, design and build MVPs that do one job well, then improve them with you.",
    problems: [
      { problem: "I have an idea but no technical co-founder.", help: "Product planning and an MVP scoped to what you need to learn first.", division: "custom-software" },
      { problem: "I want AI in my product but don't know where it fits.", help: "A practical AI feature built on a model that suits the job.", division: "ai-automation" },
      { problem: "My product works but looks unfinished.", help: "UI/UX design and a reusable design system.", division: "design-branding" },
    ],
    builds: [
      { name: "MVPs", division: "custom-software" },
      { name: "SaaS products", division: "custom-software" },
      { name: "AI features", division: "ai-automation" },
      { name: "Product design", division: "design-branding" },
    ],
    metaDescription: "MVP development, SaaS products, AI features and product design for startups and founders. Jayant Systems.",
  },
  {
    slug: "local-businesses",
    name: "Local businesses",
    summary: "Websites, search visibility, enquiry handling and automation.",
    headline: "A professional online presence for local businesses.",
    lead: "Most local customers search before they call. We help them find you, trust you and get in touch, then help you handle the enquiries.",
    problems: [
      { problem: "My business doesn't have a website.", help: "A professional website that shows what you do and how to reach you.", division: "websites-ecommerce" },
      { problem: "Customers can't find us on Google.", help: "Technical and on-page SEO for your website.", division: "seo-growth-support" },
      { problem: "Enquiries get lost on WhatsApp.", help: "An enquiry flow that captures and follows up automatically.", division: "ai-automation" },
    ],
    builds: [
      { name: "Business websites", division: "websites-ecommerce" },
      { name: "Search visibility", division: "seo-growth-support" },
      { name: "WhatsApp enquiry flows", division: "ai-automation" },
      { name: "Monthly support", division: "seo-growth-support" },
    ],
    metaDescription: "Websites, search visibility, WhatsApp enquiry flows and monthly support for local businesses. Jayant Systems.",
  },
  {
    slug: "enterprises",
    name: "Enterprises & organisations",
    summary: "Internal software, automation, dashboards and integrations.",
    headline: "Internal software and automation for organisations.",
    lead: "Larger teams lose time between disconnected tools and manual hand-offs. We build internal systems and integrations around how your organisation already works.",
    problems: [
      { problem: "Teams work across spreadsheets and disconnected tools.", help: "A centralised internal system with role-based access.", division: "custom-software" },
      { problem: "Reports take days to put together.", help: "Dashboards that pull data from the systems you already use.", division: "custom-software" },
      { problem: "We want to adopt AI without risking our data.", help: "Assistants that work only from approved company resources.", division: "ai-automation" },
    ],
    builds: [
      { name: "Internal tools and portals", division: "custom-software" },
      { name: "Reporting dashboards", division: "custom-software" },
      { name: "System integrations", division: "ai-automation" },
      { name: "AI knowledge assistants", division: "ai-automation" },
    ],
    metaDescription: "Internal software, dashboards, integrations and AI assistants for organisations. Jayant Systems.",
  },
  {
    slug: "creators",
    name: "Creators & professionals",
    summary: "Personal websites, portfolios and personal branding.",
    headline: "Personal brands, portfolios and content for professionals.",
    lead: "Your work should be easy to find and easy to understand. We build portfolios and personal websites, and help you publish consistently.",
    problems: [
      { problem: "I need a professional portfolio.", help: "A personal website that presents your work clearly.", division: "websites-ecommerce" },
      { problem: "My visual identity is inconsistent.", help: "A simple personal brand: logo, colours and type.", division: "design-branding" },
      { problem: "I don't have time to edit my videos.", help: "Editing and repurposing for Reels, Shorts and YouTube.", division: "video-content" },
    ],
    builds: [
      { name: "Portfolio websites", division: "websites-ecommerce" },
      { name: "Personal branding", division: "design-branding" },
      { name: "Video editing", division: "video-content" },
      { name: "Content strategy", division: "video-content" },
    ],
    metaDescription: "Portfolio websites, personal branding and content for creators and professionals. Jayant Systems.",
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const industryHref = (slug: string) => `/industries/${slug}`;
const live = (div: DivisionSlug) => {
  const d = getDivision(div);
  return d ? divisionIsLive(d) : false;
};
export const industryProblems = (i: Industry) => i.problems.filter((p) => live(p.division));
export const industryBuilds = (i: Industry) => i.builds.filter((b) => live(b.division));
export const industryDivisions = (i: Industry) =>
  Array.from(new Set(i.builds.map((b) => b.division))).map((s) => getDivision(s)!).filter(divisionIsLive);

/* ------------------------------------------------------------------ */
/* Sections 05–09, 11, 12, 14                                          */
/* ------------------------------------------------------------------ */

export const approach = [
  { verb: "Build", line: "Websites, applications and software that form the foundation of your digital business.", divisions: ["websites-ecommerce", "custom-software"] as DivisionSlug[] },
  { verb: "Automate", line: "Intelligent systems that connect your tools and reduce repetitive work.", divisions: ["ai-automation"] as DivisionSlug[] },
  { verb: "Create", line: "Design, branding and content that communicate the value of your business.", divisions: ["design-branding", "video-content"] as DivisionSlug[] },
  { verb: "Grow", line: "Continuous optimisation, maintenance and digital improvements.", divisions: ["seo-growth-support"] as DivisionSlug[] },
];

export const processSteps = [
  { n: "01", name: "Discover", line: "Understand your business, customers, current systems, challenges and goals." },
  { n: "02", name: "Define", line: "Agree on the requirements, deliverables, budget, timeline and responsibilities." },
  { n: "03", name: "Design", line: "Plan the experience, technical architecture and visual direction." },
  { n: "04", name: "Build", line: "Develop the agreed solution and share progress throughout the project." },
  { n: "05", name: "Verify", line: "Test functionality, usability, responsiveness and agreed acceptance criteria." },
  { n: "06", name: "Launch", line: "Deploy the solution, provide documentation and complete the handover." },
  { n: "07", name: "Support & improve", line: "Maintain and improve the solution through an agreed support arrangement." },
];
export const processTagline = "Clear process. Transparent execution. No unnecessary complexity.";

export const commitments = [
  { name: "Transparent pricing", line: "Know what you're paying for before development begins.", home: true },
  { name: "Defined scope", line: "Every project starts with clearly agreed deliverables.", home: true },
  { name: "Direct communication", line: "Work directly with the people responsible for your project.", home: true },
  { name: "Regular progress updates", line: "Stay informed throughout the development process." },
  { name: "Quality checks", line: "Agreed deliverables are tested before handover.", home: true },
  { name: "Client ownership", line: "Ownership and access rights are clearly defined before work begins.", home: true },
  { name: "Documented handover", line: "Receive the agreed files, credentials and documentation." },
  { name: "Practical solutions", line: "We recommend what your business needs, not unnecessary features." },
  { name: "Confidentiality", line: "Your business information is handled according to agreed confidentiality terms." },
  { name: "Ongoing support", line: "Continued assistance is available under agreed support plans." },
  { name: "Cost transparency", line: "Hosting, subscriptions and third-party expenses are disclosed separately." },
  { name: "Founder-led execution", line: "Direct founder involvement and accountability.", home: true },
];

export const engagementModels = [
  {
    name: "Project-based development",
    line: "For businesses with a specific requirement, defined scope and agreed project timeline.",
    includes: ["Websites", "Applications", "Branding", "Automation"],
    from: "From ₹40,000",
    href: "/contact/request-a-quote",
  },
  {
    name: "Monthly digital partnership",
    line: "Ongoing assistance for businesses that require regular digital improvements and content.",
    includes: ["Maintenance", "SEO", "Content", "Technical support"],
    from: "From ₹2,999 / month",
    href: "/pricing/maintenance-plans",
  },
  {
    name: "Startup & MVP partnership",
    line: "For founders looking to turn an idea into a working digital product.",
    includes: ["Product planning", "UI/UX", "Development", "Deployment"],
    from: "Quoted after a scoping call",
    href: "/services/mvp-development",
  },
  {
    name: "Technology consulting",
    line: "For organisations that need guidance before investing in new software or digital systems.",
    includes: ["Audits", "AI strategy", "Technical planning", "Workflow analysis"],
    from: "Quoted after a scoping call",
    href: "/services/technology-consulting",
  },
  {
    name: "End-to-end digital partnership",
    line: "A coordinated engagement covering multiple digital requirements through one partner.",
    includes: ["Web", "Software", "Automation", "Creative", "Growth"],
    from: "Quoted after a scoping call",
    href: "/pricing/enterprise-plans",
  },
];

export const headlines = {
  philosophy: ["Your business.", "Our digital responsibility."],
  development: ["From idea to interface.", "From interface to impact."],
  automation: ["Less manual work.", "More meaningful work."],
  partnership: ["Multiple digital needs.", "One reliable partner."],
  creative: ["Good ideas deserve", "better execution."],
  growth: ["Built for today.", "Designed for tomorrow."],
  simplicity: ["Technology should simplify your business.", "Not complicate it."],
  final: ["Tell us what your business needs.", "We'll figure out the digital side."],
};

export const faqs = [
  { q: "Do you only build websites?", a: "No. Jayant Systems works across website development, custom software, AI automation, design and branding, digital optimisation and technical support.", home: true },
  { q: "Can you improve my existing website instead of building a new one?", a: "Yes. We can review your existing website and recommend targeted improvements or a complete redesign, depending on your requirements.", home: true },
  { q: "Can you automate my existing business processes?", a: "Yes. We assess your current workflows and identify suitable opportunities for automation and software integration.", home: true },
  { q: "Do you work with small businesses?", a: "Yes. Our services can be scoped around the needs and budgets of small businesses, startups, institutions and larger organisations." },
  { q: "How much does a project cost?", a: "Pricing depends on project complexity, requirements, integrations and timelines. We provide a defined quotation after understanding your requirements.", home: true },
  { q: "How long does a project take?", a: "The timeline is determined by the project's scope and complexity. An agreed delivery schedule is established before work begins.", home: true },
  { q: "Will I own my website or software?", a: "Ownership, source-code access, licences and third-party dependencies are defined in the project agreement before work begins.", home: true },
  { q: "Do you provide support after launch?", a: "Yes. Ongoing maintenance and support can be arranged according to your requirements and the agreed service plan." },
  { q: "Can you manage multiple aspects of my digital presence?", a: "Yes. Our engagement models can combine development, automation, design and ongoing support through a single coordinated partnership." },
];

/** Merged into /faq after the framework answers. No prices, timelines or guarantees here. */
export const extraFaqs = [
  { q: "How do payments work?", a: "Payments are milestone-based and set out in the project agreement. We accept bank transfer, UPI and other agreed methods." },
  { q: "Do you sign NDAs?", a: "Yes. We're happy to sign a non-disclosure agreement before you share project details." },
  { q: "Can you handle hosting and deployment?", a: "Yes. We deploy to platforms such as Vercel, Netlify, AWS or Google Cloud, and help with domains, SSL and email setup. Hosting costs are billed separately and disclosed upfront." },
  { q: "Will my website work on phones?", a: "Yes. Every website and application is designed and tested for mobile, tablet and desktop before handover." },
  { q: "Which technologies do you use?", a: "Mostly Next.js, React, TypeScript, Node.js, Python and FastAPI, with PostgreSQL, MongoDB or Supabase, and AI models from providers such as OpenAI, Google and Anthropic. We choose what suits the project rather than forcing one stack." },
  { q: "How do you handle security?", a: "We follow standard practice: HTTPS, secure authentication, role-based access, input validation and regular dependency updates. Any ongoing security work is agreed in a support plan." },
  { q: "How do we get started?", a: "Book a 15-minute call or send a project brief. We'll understand your goals, recommend an approach and send a written proposal with scope, timeline and cost before any work begins." },
];

export const finalCta = {
  title: ["You don't need to figure out the technology.", "That's what we're here for."],
  body: "Whether you're starting from scratch, improving an existing business or looking for smarter ways to work, tell us what you need. We'll help you define the right digital solution.",
  primary: "Let's talk. Let's build.",
};
