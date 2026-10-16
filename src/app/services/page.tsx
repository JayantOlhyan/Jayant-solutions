"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Process from "@/components/Process";
import CallToAction from "@/components/CallToAction";

export default function ServicesPage() {
  const fullServices = [
    {
      index: "01",
      title: "AI Development",
      category: "LLM Systems & Agentic Workflows",
      description:
        "Custom AI solutions, LLM integrations, RAG pipelines, and intelligent automations engineered to solve real operational bottlenecks.",
      href: "/services/ai-development",
    },
    {
      index: "02",
      title: "Custom Software Development",
      category: "Portals, Dashboards & Operations",
      description:
        "Scalable, secure, and maintainable web applications tailored to your organization's exact data models and workflows.",
      href: "/services/custom-software-development",
    },
    {
      index: "03",
      title: "Website Development",
      category: "Conversion & Brand Architecture",
      description:
        "Fast, mobile-responsive, SEO-structured websites built in Next.js and React to convert visitors into qualified inquiries.",
      href: "/services/website-development",
    },
    {
      index: "04",
      title: "Mobile App Development",
      category: "iOS & Android Experiences",
      description:
        "Cross-platform mobile applications engineered for responsive performance, offline resilience, and clean user workflows.",
      href: "/services/mobile-app-development",
    },
    {
      index: "05",
      title: "Business Automation",
      category: "CRM, WhatsApp & Webhook Sync",
      description:
        "End-to-end automated pipelines that connect forms, databases, email, and messaging tools to eliminate manual data entry.",
      href: "/services/business-automation",
    },
    {
      index: "06",
      title: "Cloud & DevOps",
      category: "Deployment & Infrastructure",
      description:
        "Cloud architecture, Docker containerization, automated CI/CD pipelines, and production monitoring.",
      href: "/services/cloud-and-devops",
    },
    {
      index: "07",
      title: "UI/UX Design",
      category: "Interface Systems & Prototyping",
      description:
        "Clear, accessible product interfaces and design systems focused on user comprehension and conversion clarity.",
      href: "/services/ui-ux-design",
    },
    {
      index: "08",
      title: "API Development & Integration",
      category: "REST & Webhook Architecture",
      description:
        "Reliable backend APIs, payment gateway integrations, and third-party data bridges with strict schema validation.",
      href: "/services/api-development",
    },
    {
      index: "09",
      title: "AI Chatbot Development",
      category: "24/7 Triage & Support Assistants",
      description:
        "Domain-grounded conversational assistants and lead qualification bots deployed across Web and WhatsApp.",
      href: "/services/ai-chatbot-development",
    },
    {
      index: "10",
      title: "SaaS Development",
      category: "Multi-Tenant Platforms",
      description:
        "End-to-end subscription software engineering with authentication, role permissions, billing, and database partitioning.",
      href: "/services/saas-development",
    },
    {
      index: "11",
      title: "MVP Development",
      category: "Rapid Product Validation",
      description:
        "Focused engineering sprints to take new software concepts from specification to a working, deployable product.",
      href: "/services/mvp-development",
    },
    {
      index: "12",
      title: "Technology Consulting",
      category: "Architecture & Codebase Audits",
      description:
        "Technical assessments, system architecture blueprints, stack selection, and engineering roadmap consultations.",
      href: "/services/technology-consulting",
    },
  ];

  const commitments = [
    "Direct founder communication from scoping to launch",
    "Written specification and milestone-based delivery",
    "Clean, typed production code (Next.js, TypeScript, Python)",
    "100% source code and repository ownership transfer",
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-24 pt-10 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-20 md:gap-28">
          {/* Editorial Services Hero */}
          <section className="pt-8 border-b border-border-custom pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-4">
                  JAYANT SYSTEMS &bull; CAPABILITIES DIRECTORY
                </span>
                <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-base">
                  Engineering capabilities built to{" "}
                  <span className="text-primary">solve business problems.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start gap-6">
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  We combine frontend craft, full-stack software engineering, and practical AI integration to help businesses modernize operations and ship reliable digital products.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-display font-bold transition-all"
                  >
                    <span>Book a Discovery Call</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-card-bg hover:border-primary px-6 py-3 text-xs font-display font-bold text-text-base transition-all"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 4-Column Hairline Commitments Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border-custom">
              {commitments.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-text-base leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 12-Service Editorial Index Ledger */}
          <section aria-labelledby="all-capabilities-heading">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-border-custom">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-2">
                  Complete Service Index (01 &mdash; 12)
                </span>
                <h2
                  id="all-capabilities-heading"
                  className="metalab-subheadline text-3xl sm:text-5xl font-extrabold text-text-base"
                >
                  Scope &amp; Specializations
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-text-base hover:text-primary transition-colors"
              >
                <span>Inspect Shipped Work</span>
                <ArrowUpRight className="size-4 text-primary" />
              </Link>
            </div>

            <div className="divide-y divide-border-custom border-b border-border-custom">
              {fullServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  aria-label={`Learn more about ${service.title} services`}
                  className="py-7 sm:py-9 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center group transition-colors"
                >
                  <div className="lg:col-span-5 flex items-baseline gap-4">
                    <span className="font-mono text-xs sm:text-sm font-bold text-primary">
                      /{service.index}
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-text-base group-hover:text-primary transition-colors tracking-tight">
                        {service.title}
                      </h3>
                      <span className="font-mono text-[11px] text-text-muted block mt-0.5">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-2 flex items-center lg:justify-end">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-text-base group-hover:text-primary transition-colors">
                      <span>Specification</span>
                      <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Shared Process Component */}
          <Process />

          {/* Shared Dark Editorial CTA */}
          <CallToAction />
        </main>
      </div>
    </PageTransition>
  );
}
