"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Plus } from "lucide-react";

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortLabel: string;
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
    shortLabel: "Websites & Conversion Architecture",
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
    nextStepText:
      "Share your current website URL or project brief for a structure review.",
  },
  {
    id: "custom-web-apps",
    number: "02",
    title: "Custom Software and Web Applications",
    shortLabel: "Portals, SaaS & Operational Dashboards",
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
    nextStepText:
      "Outline your user roles and core workflow to scope an application blueprint.",
  },
  {
    id: "ai-applications",
    number: "03",
    title: "AI-Powered Applications",
    shortLabel: "LLM Systems, RAG & Intelligent Triage",
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
    stackUsed: [
      "Python",
      "FastAPI",
      "Google Gemini",
      "OpenAI",
      "LangChain",
      "PostgreSQL",
    ],
    detailHref: "/services/ai-development",
    nextStepText:
      "Tell us what data or customer interaction you want to power with AI.",
  },
  {
    id: "workflow-automation",
    number: "04",
    title: "Business Process Automation",
    shortLabel: "Operations, Webhooks & CRM Sync",
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
    nextStepText:
      "Walk us through the repetitive manual steps your team performs each day.",
  },
  {
    id: "product-engineering",
    number: "05",
    title: "Digital Product Engineering",
    shortLabel: "MVP Builds & Legacy Modernization",
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
    nextStepText:
      "Share your product concept or existing platform URL for an engineering assessment.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-32 border-b border-border-custom"
    >
      <div className="w-full text-left">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border-custom">
          <div className="lg:col-span-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-3">
              03 / Capabilities &amp; Services
            </span>
            <h2
              id="services-heading"
              className="metalab-subheadline text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-text-base"
            >
              Capabilities organized around business outcomes.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4 lg:text-right">
            <p className="text-sm text-text-muted leading-relaxed">
              Five core engineering disciplines where clean architecture directly improves credibility, operational speed, and customer conversion.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-text-base hover:text-primary transition-colors group"
            >
              <span>Full Services Directory</span>
              <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Metalab-Inspired Full-Width Typographic Service Index Rows */}
        <div className="divide-y divide-border-custom">
          {SERVICE_CATEGORIES.map((service, idx) => {
            const isExpanded = activeIndex === idx;
            return (
              <div key={service.id} className="group">
                {/* Interactive Typographic Row Trigger */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-expanded={isExpanded}
                  aria-controls={`service-detail-${service.id}`}
                  id={`service-trigger-${service.id}`}
                  className="w-full py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                        isExpanded ? "text-primary" : "text-text-muted"
                      }`}
                    >
                      /{service.number}
                    </span>
                    <div>
                      <h3
                        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight transition-colors ${
                          isExpanded
                            ? "text-primary"
                            : "text-text-base group-hover:text-primary"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <span className="font-mono text-xs text-text-muted block mt-1">
                        {service.shortLabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 pl-9 md:pl-0">
                    <div className="hidden xl:flex items-center gap-1.5">
                      {service.stackUsed.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-card-subtle border border-border-custom font-mono text-[11px] text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span
                      className={`size-10 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                        isExpanded
                          ? "bg-primary border-primary text-white rotate-45"
                          : "border-border-custom text-text-base group-hover:border-primary group-hover:text-primary"
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </div>
                </button>

                {/* Expandable 12-Column Editorial Specification Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`service-detail-${service.id}`}
                      role="region"
                      aria-labelledby={`service-trigger-${service.id}`}
                      initial={
                        shouldReduceMotion ? false : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 pl-0 sm:pl-12 lg:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Column 1: Business Problem Addressed (4 cols) */}
                        <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0A0E17] text-white border border-slate-800">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF8A00] font-bold block mb-2">
                            01 / The Business Problem Addressed
                          </span>
                          <p className="text-sm text-slate-200 leading-relaxed mb-6">
                            {service.businessProblem}
                          </p>
                          <div className="pt-4 border-t border-white/10">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
                              Technologies Used
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {service.stackUsed.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-slate-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Column 2: What We Deliver (4 cols) */}
                        <div className="lg:col-span-4 border-t border-border-custom pt-4 lg:border-t-0 lg:pt-0">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold block mb-3">
                            02 / What JAYANT SYSTEMS Delivers
                          </span>
                          <ul className="space-y-3">
                            {service.whatWeDeliver.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-text-muted leading-relaxed"
                              >
                                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: What Client Receives + Direct Action (4 cols) */}
                        <div className="lg:col-span-4 border-t border-border-custom pt-4 lg:border-t-0 lg:pt-0 flex flex-col justify-between gap-6">
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-text-base font-bold block mb-3">
                              03 / What Your Organization Receives
                            </span>
                            <ul className="space-y-3">
                              {service.whatClientReceives.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-sm text-text-base leading-relaxed"
                                >
                                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t border-border-custom flex flex-wrap items-center gap-3">
                            <Link
                              href="#contact"
                              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-5 py-2.5 text-xs font-display font-bold transition-colors"
                            >
                              <span>Discuss This Capability</span>
                              <ArrowRight className="size-3.5" />
                            </Link>
                            <Link
                              href={service.detailHref}
                              className="inline-flex items-center gap-1.5 rounded-full border border-border-custom hover:border-primary px-4 py-2.5 text-xs font-mono font-semibold text-text-base transition-colors"
                            >
                              <span>Specification Page</span>
                              <ArrowUpRight className="size-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
