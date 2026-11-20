import type { DivisionSlug } from "@/data/framework";

/**
 * The 12 existing /services/<slug> pages, rebuilt on one template.
 * URLs are unchanged. Copy is limited to what Jayant Systems actually
 * delivers; work references are real, live projects only.
 */
export type SubService = {
  slug: string;
  division: DivisionSlug;
  name: string;
  h1: string;
  lead: string;
  includes: { name: string; detail: string }[];
  fits: string[];
  work: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const subServices: SubService[] = [
  {
    slug: "website-development",
    division: "websites-ecommerce",
    name: "Website development",
    h1: "Websites that earn trust and bring in enquiries.",
    lead: "Business websites, redesigns and landing pages built responsive, fast and easy for your team to update.",
    includes: [
      { name: "Business websites", detail: "Clear pages for what you do, who it's for and how to get in touch." },
      { name: "Website redesign", detail: "A modern rebuild of an outdated site, keeping what already works." },
      { name: "Landing pages", detail: "Focused pages for a campaign, an offer or a launch." },
      { name: "E-commerce", detail: "Online stores with product catalogues and payment gateways." },
      { name: "CMS setup", detail: "Edit text, images and posts without calling a developer." },
      { name: "Integrations", detail: "Forms, booking, payments and the tools you already use." },
    ],
    fits: ["You don't have a website yet", "Your current site looks outdated or is slow on phones", "You need a page for a campaign or launch"],
    work: ["msitwebsite", "khelclan", "portfolio-v2"],
    faqs: [
      { q: "Do you build on WordPress or custom code?", a: "Both are possible. We recommend the option that fits how your team will update the site; most of our builds use Next.js with a CMS where needed." },
      { q: "Will the site work on phones?", a: "Yes. Every page is designed and tested for mobile, tablet and desktop before handover." },
      { q: "Can you redesign my existing site?", a: "Yes. We review what you have, keep what works and rebuild the rest." },
    ],
    metaTitle: "Website Development",
    metaDescription: "Business websites, redesigns, landing pages and e-commerce stores, built responsive, fast and easy to update. Jayant Systems.",
  },
  {
    slug: "custom-software-development",
    division: "custom-software",
    name: "Custom software development",
    h1: "Software that fits how your business works.",
    lead: "Web applications, dashboards and portals that replace spreadsheets, scattered tools and manual hand-offs.",
    includes: [
      { name: "Custom web applications", detail: "Built around your data, roles and daily workflow." },
      { name: "Admin dashboards", detail: "One place to see and manage what's happening." },
      { name: "Customer portals", detail: "Secure areas where customers check status, files or orders." },
      { name: "Reporting dashboards", detail: "Live numbers from the systems you already use." },
      { name: "Authentication and roles", detail: "Logins, permissions and access for every user type." },
      { name: "Integrations", detail: "Connections to payments, email, WhatsApp and third-party APIs." },
    ],
    fits: ["You manage the business in Excel or Google Sheets", "Off-the-shelf software forces you into its workflow", "Data lives in several tools that don't talk to each other"],
    work: ["teachersathi", "civicsetu", "healthkinator"],
    faqs: [
      { q: "How do you price custom software?", a: "After a scoping call we write down the requirements and give a defined quotation. Hosting and third-party costs are listed separately." },
      { q: "Can it grow with us?", a: "We start with what you need now and structure the code so new modules can be added later." },
    ],
    metaTitle: "Custom Software Development",
    metaDescription: "Custom web applications, admin dashboards, customer portals and integrations built around how your business works. Jayant Systems.",
  },
  {
    slug: "saas-development",
    division: "custom-software",
    name: "SaaS development",
    h1: "Subscription software, from first version to paying users.",
    lead: "We plan, design and build SaaS products with accounts, billing and the admin tools you need to run them.",
    includes: [
      { name: "Product planning", detail: "Define the core workflow and what the first version must do." },
      { name: "Accounts and roles", detail: "Sign-up, login, teams and permissions." },
      { name: "Subscription billing", detail: "Payment gateway integration for plans and renewals." },
      { name: "Admin panel", detail: "Manage users, content and usage behind the scenes." },
      { name: "AI features", detail: "Where they help the product's core job." },
      { name: "Deployment", detail: "Hosting, monitoring and release setup." },
    ],
    fits: ["You're turning a service or idea into a product", "You need billing and accounts done properly", "You want to launch and learn from real users"],
    work: ["teachersathi", "healthkinator"],
    faqs: [
      { q: "Do you build the whole product?", a: "Yes: planning, design, development and deployment. We can also work alongside an existing team." },
      { q: "Who owns the code?", a: "Ownership, source-code access and licences are defined in the project agreement before work begins." },
    ],
    metaTitle: "SaaS Development",
    metaDescription: "SaaS product development: accounts, subscription billing, admin panels, AI features and deployment. Jayant Systems.",
  },
  {
    slug: "mvp-development",
    division: "custom-software",
    name: "MVP development",
    h1: "Turn an idea into a product people can use.",
    lead: "We scope the smallest version that tests your idea with real users, then design and build it.",
    includes: [
      { name: "Scoping workshop", detail: "Agree what the MVP must prove and what can wait." },
      { name: "UI/UX design", detail: "Screens and flows for the core journey." },
      { name: "Development", detail: "A working web product, not a clickable mock-up." },
      { name: "Launch", detail: "Deployment, analytics and a handover document." },
      { name: "Iteration", detail: "Improvements based on what users actually do." },
    ],
    fits: ["You have an idea and no technical co-founder", "You need something to show users or investors", "You want to learn fast without overbuilding"],
    work: ["farmiq", "sentinelai", "civicsetu"],
    faqs: [
      { q: "How long does an MVP take?", a: "It depends on scope. We agree a delivery schedule before work begins and share progress throughout." },
      { q: "What happens after launch?", a: "We can keep improving it with you under a monthly partnership, or hand it over with documentation." },
    ],
    metaTitle: "MVP Development for Startups",
    metaDescription: "MVP development for founders: scoping, UI/UX design, development and launch of a working first product. Jayant Systems.",
  },
  {
    slug: "api-development",
    division: "custom-software",
    name: "API development & integration",
    h1: "Connect the tools your business already uses.",
    lead: "APIs and integrations that move data between your website, apps, payment gateway, CRM and messaging tools.",
    includes: [
      { name: "REST APIs", detail: "Well-documented endpoints for your apps and partners." },
      { name: "Payment gateways", detail: "Checkout and payment status integrations." },
      { name: "Webhooks", detail: "Events that trigger actions across your tools." },
      { name: "Third-party integrations", detail: "CRMs, email, WhatsApp and other platforms." },
      { name: "Validation and error handling", detail: "Clear failures instead of silent data loss." },
    ],
    fits: ["The same data is typed into several systems", "You need a payment gateway or CRM connected", "Partners need access to your data"],
    work: ["teachersathi", "civicsetu"],
    faqs: [
      { q: "Can you work with our existing software?", a: "Usually yes, if it exposes an API or export. We check this in the discovery call." },
    ],
    metaTitle: "API Development & Integration",
    metaDescription: "REST APIs, payment gateway, CRM, email and WhatsApp integrations that connect your existing tools. Jayant Systems.",
  },
  {
    slug: "mobile-app-development",
    division: "custom-software",
    name: "Mobile app development",
    h1: "Mobile experiences for your customers and teams.",
    lead: "Mobile-first web apps and cross-platform applications, scoped around what your users need on the move.",
    includes: [
      { name: "Mobile-first web apps", detail: "Installable web apps that work on any phone." },
      { name: "Cross-platform apps", detail: "One codebase for Android and iOS where an app store presence is needed." },
      { name: "Backend and APIs", detail: "Accounts, data and integrations behind the app." },
      { name: "Release support", detail: "Testing on real devices before launch." },
    ],
    fits: ["Your users mainly reach you on phones", "Staff need a tool in the field", "You need notifications or offline access"],
    work: ["healthkinator", "khelclan"],
    faqs: [
      { q: "Do I need an app or a mobile website?", a: "Many businesses only need a fast mobile web app. We recommend a store app only when it adds something real, like notifications or offline use." },
    ],
    metaTitle: "Mobile App Development",
    metaDescription: "Mobile-first web apps and cross-platform applications for customers and teams. Jayant Systems.",
  },
  {
    slug: "ai-development",
    division: "ai-automation",
    name: "AI development",
    h1: "Practical AI for real business work.",
    lead: "AI features, agents and assistants built on the model that suits the job, connected to your data and tools.",
    includes: [
      { name: "Custom AI agents", detail: "Task-specific systems that draft, classify or answer." },
      { name: "AI knowledge assistants", detail: "Answers from your approved documents only." },
      { name: "AI content workflows", detail: "Assisted creation and repurposing of material." },
      { name: "AI in your product", detail: "Features added to an existing app or website." },
      { name: "Model selection", detail: "Choosing between providers on cost, quality and privacy." },
    ],
    fits: ["You want to use AI but don't know where it fits", "Staff spend hours on drafting or sorting", "You need answers from your own documents"],
    work: ["teachersathi", "healthkinator", "sentinelai", "farmiq"],
    faqs: [
      { q: "Is our data safe with AI?", a: "We design what data the model can see, which provider is used and how it's stored, and agree it with you before building." },
      { q: "Which AI models do you use?", a: "Whichever suits the task: commercial APIs or open-source models. We explain the trade-offs." },
    ],
    metaTitle: "AI Development",
    metaDescription: "Custom AI agents, knowledge assistants and AI features connected to your data and tools. Jayant Systems.",
  },
  {
    slug: "ai-chatbot-development",
    division: "ai-automation",
    name: "AI chatbot development",
    h1: "Assistants that answer the questions you get every day.",
    lead: "Website and WhatsApp assistants trained on your approved content, with a clear hand-off to a person.",
    includes: [
      { name: "Website assistants", detail: "Answer common questions and capture enquiries." },
      { name: "WhatsApp assistants", detail: "Built on the WhatsApp Business API with approved templates." },
      { name: "Knowledge base", detail: "Responses grounded in your documents and FAQs." },
      { name: "Human hand-off", detail: "Routes anything it can't answer to your team." },
      { name: "Conversation logs", detail: "See what customers ask and improve answers over time." },
    ],
    fits: ["Your team answers the same questions all day", "Enquiries arrive outside working hours", "You want to qualify leads before a call"],
    work: ["healthkinator"],
    faqs: [
      { q: "Will it make things up?", a: "We restrict it to your approved content and make it hand off when it isn't sure. We test it on your real questions before launch." },
      { q: "Does it work on WhatsApp?", a: "Yes, through the WhatsApp Business API, using message templates approved by Meta." },
    ],
    metaTitle: "AI Chatbot Development",
    metaDescription: "Website and WhatsApp AI assistants trained on your approved content, with human hand-off. Jayant Systems.",
  },
  {
    slug: "business-automation",
    division: "ai-automation",
    name: "Business automation",
    h1: "Less manual work. More meaningful work.",
    lead: "We find the repetitive steps in your workflow and automate them: enquiries, follow-ups, notifications and data entry.",
    includes: [
      { name: "Workflow automation", detail: "Repetitive steps handled by software, end to end." },
      { name: "Lead automation", detail: "Capture, route and track every enquiry." },
      { name: "Email and WhatsApp follow-ups", detail: "Timely messages without anyone remembering to send them." },
      { name: "CRM automation", detail: "Records updated automatically from forms and conversations." },
      { name: "Process review", detail: "We map the workflow first and automate only what pays off." },
    ],
    fits: ["Enquiries slip through the cracks", "The same data is copied between tools", "Follow-ups depend on someone remembering"],
    work: ["teachersathi"],
    faqs: [
      { q: "Which tools do you use?", a: "Your existing tools where possible, connected through their APIs or platforms like n8n. We avoid adding tools you don't need." },
      { q: "What if a step fails?", a: "We add checks and alerts so failures are visible and can be retried." },
    ],
    metaTitle: "Business Process Automation",
    metaDescription: "Workflow, lead, email, WhatsApp and CRM automation that removes repetitive manual work. Jayant Systems.",
  },
  {
    slug: "technology-consulting",
    division: "ai-automation",
    name: "Technology consulting",
    h1: "Get clear advice before you invest.",
    lead: "Audits, AI strategy and technical planning for teams deciding what to build, buy or fix.",
    includes: [
      { name: "Technical audits", detail: "A plain-language review of your website or software." },
      { name: "AI strategy", detail: "Where AI fits your workflow, and where it doesn't." },
      { name: "Workflow analysis", detail: "Map the process and find what to automate first." },
      { name: "Technical planning", detail: "Architecture, tools and a phased plan with costs." },
    ],
    fits: ["You're choosing between vendors or tools", "A project has stalled and you need a second opinion", "You want an AI plan before spending on it"],
    work: [],
    faqs: [
      { q: "Do we have to hire you to build it afterwards?", a: "No. The plan is yours to use with any team." },
    ],
    metaTitle: "Technology & AI Consulting",
    metaDescription: "Technical audits, AI strategy, workflow analysis and technical planning before you invest. Jayant Systems.",
  },
  {
    slug: "ui-ux-design",
    division: "design-branding",
    name: "UI/UX design",
    h1: "Interfaces people understand the first time.",
    lead: "User journeys, interface design, prototypes and design systems for websites and applications.",
    includes: [
      { name: "UX design", detail: "User journeys and usability improvements." },
      { name: "UI design", detail: "Website and application interfaces." },
      { name: "Prototyping", detail: "Clickable flows to test before building." },
      { name: "Design systems", detail: "Reusable components that keep the product consistent." },
      { name: "Brand identity", detail: "Logo, colours and typography to match." },
    ],
    fits: ["Users get stuck or drop off", "The product looks inconsistent from screen to screen", "You want to test an idea before development"],
    work: ["msitwebsite", "teachersathi", "portfolio-v2"],
    faqs: [
      { q: "Do you design in Figma?", a: "Yes, and we hand over organised files and components your developers can follow." },
    ],
    metaTitle: "UI/UX Design",
    metaDescription: "UX journeys, UI design, prototypes and design systems for websites and apps. Jayant Systems.",
  },
  {
    slug: "cloud-and-devops",
    division: "seo-growth-support",
    name: "Cloud & DevOps",
    h1: "Hosting and deployment that stay out of your way.",
    lead: "Hosting setup, deployment pipelines, monitoring and backups agreed with you, so releases are routine.",
    includes: [
      { name: "Hosting setup", detail: "The right platform for your traffic and budget." },
      { name: "Deployment pipelines", detail: "Tested, repeatable releases." },
      { name: "Monitoring and alerts", detail: "Automated checks that tell us when something breaks." },
      { name: "Performance tuning", detail: "Faster pages and lower hosting costs." },
      { name: "Handover", detail: "Credentials and documentation that stay with you." },
    ],
    fits: ["Deployments are manual and risky", "Your site is slow or hosting costs keep rising", "Nobody knows where the credentials are"],
    work: ["teachersathi"],
    faqs: [
      { q: "What support hours do you offer?", a: "Automated monitoring runs continuously. Response times for people are set in your support plan, so you know exactly what to expect." },
      { q: "Who pays for hosting?", a: "Hosting is billed to your account where possible and listed separately from our fees." },
    ],
    metaTitle: "Cloud Hosting & DevOps",
    metaDescription: "Hosting setup, deployment pipelines, monitoring, performance tuning and documented handover. Jayant Systems.",
  },
];

export const getSubService = (slug: string) => subServices.find((s) => s.slug === slug);
export const subServicesFor = (division: string) => subServices.filter((s) => s.division === division);
