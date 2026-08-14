import fs from "fs";
import path from "path";

const servicesDir = "/Users/jayantolhyan/Desktop/my projects/portfolio Website/portfolio for agency/src/app/services";

const serviceConfigs = {
  "ai-chatbot-development": {
    title: "AI Chatbot & Assistant Development | Jayant Web & AI",
    desc: "Build custom AI chatbots and conversational agents trained on your company data using Gemini, OpenAI, and Claude to automate customer support and lead triage.",
    name: "AI Chatbot Development Services",
    schemaDesc: "Build custom AI chatbots and conversational agents trained on your company data using Gemini, OpenAI, and Claude to automate support and lead triage.",
    serviceType: "AI Chatbot Development"
  },
  "ai-development": {
    title: "Custom AI Development & LLM Solutions | Jayant Systems",
    desc: "Develop enterprise AI applications, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow agents engineered for business operations.",
    name: "Custom AI & LLM Development Services",
    schemaDesc: "Develop enterprise AI applications, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow agents engineered for business operations.",
    serviceType: "AI Development"
  },
  "api-development": {
    title: "REST & GraphQL API Development Services | Jayant Systems",
    desc: "Build robust, secure, and documented REST and GraphQL backend APIs with FastAPI and Node.js to power web platforms, mobile apps, and third-party sync.",
    name: "REST & GraphQL API Development Services",
    schemaDesc: "Build robust, secure, and documented REST and GraphQL backend APIs with FastAPI and Node.js to power web platforms, mobile apps, and third-party sync.",
    serviceType: "API Development"
  },
  "business-automation": {
    title: "Business Process & Workflow Automation | Jayant Systems",
    desc: "Automate manual business processes, spreadsheet entries, and customer communications using WhatsApp API, custom webhook pipelines, and CRM integrations.",
    name: "Business Process & Workflow Automation Services",
    schemaDesc: "Automate manual business processes, spreadsheet entries, and customer communications using WhatsApp API, custom webhook pipelines, and CRM integrations.",
    serviceType: "Business Automation"
  },
  "cloud-and-devops": {
    title: "Cloud Infrastructure & DevOps Engineering | Jayant Systems",
    desc: "Architect secure, scalable cloud infrastructure on AWS and Google Cloud with Docker containerization, CI/CD automated deployments, and proactive monitoring.",
    name: "Cloud Infrastructure & DevOps Engineering",
    schemaDesc: "Architect secure, scalable cloud infrastructure on AWS and Google Cloud with Docker containerization, CI/CD automated deployments, and proactive monitoring.",
    serviceType: "Cloud & DevOps"
  },
  "custom-software-development": {
    title: "Custom Software & Dashboard Development | Jayant Systems",
    desc: "Engineer scalable custom software, proprietary databases, and internal dashboards tailored to your operational workflows with zero subscription bloat.",
    name: "Custom Software & Dashboard Development Services",
    schemaDesc: "Engineer scalable custom software, proprietary databases, and internal dashboards tailored to your operational workflows with zero subscription bloat.",
    serviceType: "Custom Software Development"
  },
  "maintenance": {
    title: "Software & Website Maintenance Retainers | Jayant Systems",
    desc: "Ongoing maintenance plans including security patches, uptime monitoring, automated database backups, bug fixes, and continuous performance optimization.",
    name: "Software & Website Maintenance Retainer Services",
    schemaDesc: "Ongoing maintenance plans including security patches, uptime monitoring, automated database backups, bug fixes, and continuous performance optimization.",
    serviceType: "Software Maintenance"
  },
  "mobile-app-development": {
    title: "Cross-Platform Mobile App Development | Jayant Systems",
    desc: "Build native-performance iOS and Android mobile applications using Flutter with real-time database sync, push notifications, and offline capability.",
    name: "Cross-Platform Mobile App Development Services",
    schemaDesc: "Build native-performance iOS and Android mobile applications using Flutter with real-time database sync, push notifications, and offline capability.",
    serviceType: "Mobile App Development"
  },
  "mvp-development": {
    title: "Rapid Startup MVP Development Services | Jayant Systems",
    desc: "Turn startup ideas into launch-ready Minimum Viable Products in 2 to 6 weeks with modern web frameworks, user authentication, and secure databases.",
    name: "Rapid Startup MVP Development Services",
    schemaDesc: "Turn startup ideas into launch-ready Minimum Viable Products in 2 to 6 weeks with modern web frameworks, user authentication, and secure databases.",
    serviceType: "MVP Development"
  },
  "saas-development": {
    title: "SaaS Platform Architecture & Development | Jayant Systems",
    desc: "Design and build multi-tenant SaaS applications with subscription billing integrations, role-based access control, analytics dashboards, and modular APIs.",
    name: "SaaS Platform Architecture & Development Services",
    schemaDesc: "Design and build multi-tenant SaaS applications with subscription billing integrations, role-based access control, analytics dashboards, and modular APIs.",
    serviceType: "SaaS Development"
  },
  "technology-consulting": {
    title: "Technology Consulting & Software Architecture | Jayant",
    desc: "Expert technical advisory for startups and businesses. We audit architectures, recommend modern tech stacks, and structure scalable engineering roadmaps.",
    name: "Technology Consulting & Software Architecture",
    schemaDesc: "Expert technical advisory for startups and businesses. We audit architectures, recommend modern tech stacks, and structure scalable engineering roadmaps.",
    serviceType: "Technology Consulting"
  },
  "ui-ux-design": {
    title: "UI/UX & Product Interface Design | Jayant Web & AI",
    desc: "Design intuitive web and mobile user experiences with interactive wireframes, design systems, and responsive Figma prototypes built for conversion.",
    name: "UI/UX & Product Interface Design Services",
    schemaDesc: "Design intuitive web and mobile user experiences with interactive wireframes, design systems, and responsive Figma prototypes built for conversion.",
    serviceType: "UI/UX Design"
  },
  "website-development": {
    title: "Modern Website Development & Next.js Design | Jayant",
    desc: "Fast, responsive, and SEO-optimized business websites built with Next.js and Tailwind CSS to convert visitors into qualified sales opportunities.",
    name: "Modern Website Development & Next.js Design Services",
    schemaDesc: "Fast, responsive, and SEO-optimized business websites built with Next.js and Tailwind CSS to convert visitors into qualified sales opportunities.",
    serviceType: "Website Development"
  }
};

for (const [slug, cfg] of Object.entries(serviceConfigs)) {
  const layoutPath = path.join(servicesDir, slug, "layout.tsx");
  const code = `import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "${cfg.title}",
  description: "${cfg.desc}",
  alternates: {
    canonical: "/services/${slug}",
    languages: {
      "en-IN": "/services/${slug}",
      "hi-IN": "/hi/services/${slug}",
    },
  },
  openGraph: {
    title: "${cfg.title}",
    description: "${cfg.desc}",
    url: "https://jayant-systems.online/services/${slug}",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${cfg.title}",
    description: "${cfg.desc}",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={createServiceSchema({
        name: "${cfg.name}",
        description: "${cfg.schemaDesc}",
        url: "/services/${slug}",
        serviceType: "${cfg.serviceType}"
      })} />
      {children}
    </>
  );
}
`;
  fs.writeFileSync(layoutPath, code);
  console.log(`Cleanly regenerated layout: /services/${slug}/layout.tsx`);
}
