import fs from "fs";
import path from "path";

const servicesDir = "/Users/jayantolhyan/Desktop/my projects/portfolio Website/portfolio for agency/src/app/services";

const serviceConfigs = {
  "ai-chatbot-development": {
    name: "AI Chatbot Development Services",
    description: "Build custom AI chatbots and conversational agents trained on your business data using Gemini, OpenAI, and Claude to automate support and lead triage.",
    serviceType: "AI Chatbot Development"
  },
  "ai-development": {
    name: "Custom AI & LLM Development Services",
    description: "Develop enterprise AI applications, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow agents engineered for business operations.",
    serviceType: "AI Development"
  },
  "api-development": {
    name: "REST & GraphQL API Development Services",
    description: "Build robust, secure, and documented REST and GraphQL backend APIs with FastAPI and Node.js to power web platforms, mobile apps, and third-party sync.",
    serviceType: "API Development"
  },
  "business-automation": {
    name: "Business Process & Workflow Automation Services",
    description: "Automate manual business processes, spreadsheet entries, and customer communications using WhatsApp API, custom webhook pipelines, and CRM integrations.",
    serviceType: "Business Automation"
  },
  "cloud-and-devops": {
    name: "Cloud Infrastructure & DevOps Engineering",
    description: "Architect secure, scalable cloud infrastructure on AWS and Google Cloud with Docker containerization, CI/CD automated deployments, and proactive monitoring.",
    serviceType: "Cloud & DevOps"
  },
  "custom-software-development": {
    name: "Custom Software & Dashboard Development Services",
    description: "Engineer scalable custom software, proprietary databases, and internal dashboards tailored to your operational workflows with zero subscription bloat.",
    serviceType: "Custom Software Development"
  },
  "maintenance": {
    name: "Software & Website Maintenance Retainer Services",
    description: "Ongoing maintenance plans including security patches, uptime monitoring, automated database backups, bug fixes, and continuous performance optimization.",
    serviceType: "Software Maintenance"
  },
  "mobile-app-development": {
    name: "Cross-Platform Mobile App Development Services",
    description: "Build native-performance iOS and Android mobile applications using Flutter with real-time database sync, push notifications, and offline capability.",
    serviceType: "Mobile App Development"
  },
  "mvp-development": {
    name: "Rapid Startup MVP Development Services",
    description: "Turn startup ideas into launch-ready Minimum Viable Products in 2 to 6 weeks with modern web frameworks, user authentication, and secure databases.",
    serviceType: "MVP Development"
  },
  "saas-development": {
    name: "SaaS Platform Architecture & Development Services",
    description: "Design and build multi-tenant SaaS applications with subscription billing integrations, role-based access control, analytics dashboards, and modular APIs.",
    serviceType: "SaaS Development"
  },
  "technology-consulting": {
    name: "Technology Consulting & Software Architecture",
    description: "Expert technical advisory for startups and businesses. We audit architectures, recommend modern tech stacks, and structure scalable engineering roadmaps.",
    serviceType: "Technology Consulting"
  },
  "ui-ux-design": {
    name: "UI/UX & Product Interface Design Services",
    description: "Design intuitive web and mobile user experiences with interactive wireframes, design systems, and responsive Figma prototypes built for conversion.",
    serviceType: "UI/UX Design"
  },
  "website-development": {
    name: "Modern Website Development & Next.js Design Services",
    description: "Fast, responsive, and SEO-optimized business websites built with Next.js and Tailwind CSS to convert visitors into qualified sales opportunities.",
    serviceType: "Website Development"
  }
};

let count = 0;
for (const [slug, cfg] of Object.entries(serviceConfigs)) {
  const pagePath = path.join(servicesDir, slug, "page.tsx");
  if (!fs.existsSync(pagePath)) {
    console.log("Page not found:", pagePath);
    continue;
  }
  let content = fs.readFileSync(pagePath, "utf8");

  // Add imports if not present
  if (!content.includes("JsonLd")) {
    content = content.replace(
      'import PageTransition from "@/components/PageTransition";',
      'import PageTransition from "@/components/PageTransition";\nimport JsonLd from "@/components/seo/JsonLd";\nimport { createServiceSchema } from "@/lib/seo/schema";'
    );
  }

  // Inject JsonLd inside return (<PageTransition> if not present
  if (!content.includes("createServiceSchema")) {
    const schemaSnippet = `\n      <JsonLd schema={createServiceSchema({\n        name: "${cfg.name}",\n        description: "${cfg.description}",\n        url: "/services/${slug}",\n        serviceType: "${cfg.serviceType}"\n      })} />`;
    content = content.replace("<PageTransition>", `<PageTransition>${schemaSnippet}`);
  }

  fs.writeFileSync(pagePath, content);
  count++;
  console.log(`Injected Service Schema in: /services/${slug}`);
}

console.log(`Successfully injected Service schema in ${count} service pages.`);
