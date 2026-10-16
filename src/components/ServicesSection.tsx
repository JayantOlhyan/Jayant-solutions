"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  LayoutDashboard,
  Cpu,
  Workflow,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
  icon: React.ReactNode;
  businessProblem: string;
  whatWeDeliver: string[];
  whatClientReceives: string[];
  stackUsed: string[];
  detailHref: string;
  nextStepText: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "website-design-dev",
    number: "01",
    title: "Website Design and Development",
    shortLabel: "Websites & Conversion",
    icon: <Globe className="size-5" />,
    businessProblem:
      "Potential clients visit your website but leave without inquiring because the messaging is unclear, pages load slowly on mobile, or the design looks like a generic template that fails to build trust.",
    whatWeDeliver: [
      "Custom positioning-led page architecture and conversion copy structure",
      "Responsive frontend engineering in Next.js, React, and Tailwind CSS",
      "Technical SEO setup, structured schema markup, and OpenGraph metadata",
      "Direct lead capture forms, calendar booking, and WhatsApp routing",
    ],
    whatClientReceives: [
      "A fast, mobile-responsive production website deployed on your custom domain",
      "Clean, maintainable source code repository with full ownership transfer",
      "Analytics and conversion tracking configured for incoming inquiries",
    ],
    stackUsed: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    detailHref: "/services/website-development",
    nextStepText: "Share your current website URL or project brief for a structure review.",
  },
  {
    id: "custom-web-apps",
    number: "02",
    title: "Custom Software and Web Applications",
    shortLabel: "Portals, SaaS & Dashboards",
    icon: <LayoutDashboard className="size-5" />,
    businessProblem:
      "Your operations outgrow spreadsheets and off-the-shelf tools, forcing staff or customers to juggle disconnected links, manual status tracking, and clunky interfaces.",
    whatWeDeliver: [
      "Role-based client portals, educator workspaces, and internal admin dashboards",
      "Relational database architecture with secure authentication and permissions",
      "REST API endpoints and third-party payment or service integrations",
      "Real-time state updates, reporting tables, and exportable records",
    ],
    whatClientReceives: [
      "A production web application tailored to your exact operational workflow",
      "Secure database schema (PostgreSQL / Supabase / Firebase) with automated backups",
      "Admin documentation and 30 days of post-launch technical support",
    ],
    stackUsed: ["Next.js", "Node.js", "PostgreSQL", "Supabase", "Firebase"],
    detailHref: "/services/custom-software-development",
    nextStepText: "Outline your user roles and core workflow to scope an application blueprint.",
  },
  {
    id: "ai-applications",
    number: "03",
    title: "AI-Powered Applications",
    shortLabel: "LLM Systems & Triage",
    icon: <Cpu className="size-5" />,
    businessProblem:
      "Customers wait hours for answers to standard questions, or your team spends excessive time manually reading, triaging, and classifying incoming documents, messages, or data.",
    whatWeDeliver: [
      "Custom LLM-powered assistants and domain-specific triage interfaces",
      "Retrieval-Augmented Generation (RAG) pipelines grounded in your company documentation",
      "FastAPI Python microservices exposing reliable AI inference endpoints",
      "Guardrails, structured JSON outputs, and fallback handling for accuracy",
    ],
    whatClientReceives: [
      "A deployed AI feature or standalone application integrated with your existing stack",
      "Transparent API usage configuration under your own provider accounts",
      "Tested prompt pipelines and evaluation criteria for consistent responses",
    ],
    stackUsed: ["Python", "FastAPI", "Google Gemini", "OpenAI", "LangChain", "PostgreSQL"],
    detailHref: "/services/ai-development",
    nextStepText: "Tell us what data or customer interaction you want to power with AI.",
  },
  {
    id: "workflow-automation",
    number: "04",
    title: "Business Process Automation",
    shortLabel: "Operations & CRM Sync",
    icon: <Workflow className="size-5" />,
    businessProblem:
      "Staff waste hours every week copying lead details between forms, spreadsheets, CRM tables, email threads, and WhatsApp messages—leading to delayed follow-ups and human error.",
    whatWeDeliver: [
      "Automated lead capture-to-CRM pipelines and instant notification triggers",
      "WhatsApp Business API and transactional email follow-up sequences",
      "Custom webhook bridges connecting forms, calendars, and billing systems",
      "Scheduled background jobs for reporting and data synchronization",
    ],
    whatClientReceives: [
      "End-to-end automated workflows running reliably without manual copy-pasting",
      "Error logging and alert notifications so no incoming lead is dropped",
      "Walkthrough documentation for your team to monitor daily operations",
    ],
    stackUsed: ["n8n", "Node.js", "Python", "REST Webhooks", "WhatsApp API"],
    detailHref: "/services/business-automation",
    nextStepText: "Walk us through the repetitive manual steps your team performs each day.",
  },
  {
    id: "product-engineering",
    number: "05",
    title: "Digital Product Engineering",
    shortLabel: "MVP Builds & System Modernization",
    icon: <RefreshCw className="size-5" />,
    businessProblem:
      "You need to take a new software product from concept to a working MVP, or modernize a slow legacy platform that no longer reflects the quality of your business.",
    whatWeDeliver: [
      "End-to-end MVP architecture, UI/UX engineering, and database design",
      "Comprehensive audit and rebuild of slow or outdated web platforms",
      "Clean navigation restructuring, accessibility compliance, and Core Web Vitals optimization",
      "Migration from fragile templates to a typed, maintainable production codebase",
    ],
    whatClientReceives: [
      "A production-ready digital product or modernized platform deployed on cloud infrastructure",
      "Preserved URL redirects, SEO metadata, and working analytics integrations",
      "A documented, extensible codebase ready for future product iterations",
    ],
    stackUsed: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
    detailHref: "/services/saas-development",
    nextStepText: "Share your product concept or existing platform URL for an engineering assessment.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeService = SERVICE_CATEGORIES[activeIndex];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-24 border-b border-border-custom"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Section 03 &bull; Capabilities
            </span>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold text-text-base tracking-tight mb-3"
            >
              Capabilities Built Around Business Outcomes
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              JAYANT SYSTEMS focuses on five core engineering capabilities where well-architected software directly improves client credibility, operational speed, and conversion.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:underline self-start md:self-auto"
          >
            <span>View full services directory</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Interactive Split Diagnostic Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 5 Service Selector Rails */}
          <div
            className="lg:col-span-5 flex flex-col gap-2.5"
            role="tablist"
            aria-label="Service categories"
          >
            {SERVICE_CATEGORIES.map((service, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`service-panel-${service.id}`}
                  id={`service-tab-${service.id}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? "bg-[#0A0F1D] text-white border-slate-800 shadow-md"
                      : "bg-card-bg text-text-base border-border-custom hover:border-primary/40 hover:bg-card-subtle/60"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                        isSelected
                          ? "bg-primary text-white"
                          : "bg-card-subtle text-text-muted border border-border-custom"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <span
                        className={`font-display text-sm sm:text-base font-bold block leading-snug ${
                          isSelected ? "text-white" : "text-text-base"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`font-mono text-[11px] block mt-0.5 ${
                          isSelected ? "text-slate-400" : "text-text-muted"
                        }`}
                      >
                        {service.shortLabel}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`size-4 shrink-0 transition-transform ${
                      isSelected ? "text-[#FF8A00] translate-x-0.5" : "text-text-muted"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed 4-Part Outcome Specification */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeService.id}
              id={`service-panel-${activeService.id}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService.id}`}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="hog-card p-6 sm:p-8 bg-card-bg border border-border-custom text-left flex flex-col gap-6"
            >
              {/* Top Title & Stack Badges */}
              <div className="pb-5 border-b border-border-custom flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                    {activeService.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold block">
                      Service Specification {activeService.number}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-text-base">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {activeService.stackUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-card-subtle border border-border-custom font-mono text-[10px] text-text-muted font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 1. The Business Problem It Addresses */}
              <div className="p-4 rounded-lg bg-card-subtle/80 border border-border-custom">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-1.5">
                  1. The Business Problem Addressed
                </span>
                <p className="text-sm text-text-base leading-relaxed">
                  {activeService.businessProblem}
                </p>
              </div>

              {/* 2. What We Deliver & 3. What You Receive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold block mb-3">
                    2. What the Agency Delivers
                  </span>
                  <ul className="space-y-2.5">
                    {activeService.whatWeDeliver.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-[13px] text-text-muted leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-3">
                    3. What the Client Receives
                  </span>
                  <ul className="space-y-2.5">
                    {activeService.whatClientReceives.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-[13px] text-text-base leading-relaxed"
                      >
                        <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 4. Next Step to Discuss Requirement */}
              <div className="pt-5 border-t border-border-custom flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-0.5">
                    4. Next Step
                  </span>
                  <p className="text-xs text-text-muted">
                    {activeService.nextStepText}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={activeService.detailHref}
                    className="px-3.5 py-2 rounded-lg border border-border-custom hover:border-primary/40 text-xs font-mono font-semibold text-text-base transition-colors"
                  >
                    Service Details
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-display font-bold transition-colors shadow-2xs"
                  >
                    <span>Discuss Requirement</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
