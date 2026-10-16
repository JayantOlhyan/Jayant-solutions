"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ExternalLink,
  Code2,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Layers,
  Terminal,
} from "lucide-react";

const VERIFIED_DELIVERIES = [
  {
    project: "Teacher Sathi",
    classification: "Client Engagement",
    domain: "Education Technology",
    problemAddressed:
      "Educators were managing lesson plans, classroom schedules, and teaching resources across disconnected binders and messaging apps.",
    whatWasBuilt:
      "A centralized web workspace for curriculum planning, resource organization, and student tracking built with Next.js, React, Node.js, and PostgreSQL.",
    verificationType: "Documented Case Study & Production Build",
    href: "/portfolio",
    isExternal: false,
  },
  {
    project: "Healthkinator",
    classification: "Deployed AI Application",
    domain: "Healthcare Triage",
    problemAddressed:
      "Users searching symptoms online encounter fragmented, unstructured medical articles without clear bilingual triage guidance.",
    whatWasBuilt:
      "An interactive bilingual (English/Hindi) AI symptom analysis platform engineered with Next.js, Python FastAPI, Google Gemini API, and PostgreSQL.",
    verificationType: "Live Deployment & Public GitHub Repository",
    href: "https://healthkinator-1.netlify.app",
    repoHref: "https://github.com/JayantOlhyan/healthkinator-1-",
    isExternal: true,
  },
  {
    project: "MSIT Portal Enhancement",
    classification: "Institutional Portal",
    domain: "Higher Education",
    problemAddressed:
      "Students and faculty faced slow navigation and scattered department information on legacy institutional web pages.",
    whatWasBuilt:
      "A modernized, mobile-responsive academic portal featuring structured department directories, announcements, and digital feedback routing.",
    verificationType: "Live Institutional Prototype",
    href: "https://msit-website.netlify.app",
    isExternal: true,
  },
  {
    project: "Sentinel AI",
    classification: "Cybersecurity Prototype",
    domain: "Threat & Phishing Detection",
    problemAddressed:
      "Organizations and individuals needed a rapid interface to inspect suspicious URLs, emails, and SMS messages for phishing indicators.",
    whatWasBuilt:
      "A real-time threat inspection web application combining heuristic checks and LLM analysis with clear risk-score explanations.",
    verificationType: "Live Deployment",
    href: "https://sentinel-ai-1.netlify.app",
    isExternal: true,
  },
  {
    project: "CivicSetu",
    classification: "Civic Tech Prototype",
    domain: "Public Grievance & Utilities",
    problemAddressed:
      "Citizens lacked a unified interface to log municipal infrastructure complaints and look up local emergency utilities.",
    whatWasBuilt:
      "A structured civic complaint portal with categorized issue reporting, status tracking, and local service directories.",
    verificationType: "Live Deployment",
    href: "https://civicsetu-1.netlify.app/",
    isExternal: true,
  },
];

const EVALUATION_CRITERIA = [
  {
    icon: <Terminal className="size-5 text-primary" />,
    title: "Inspect Live Deployments & Code",
    description:
      "Rather than asking you to trust anonymous quotes, we encourage prospective clients to test our deployed web applications, inspect page speed, and review public repositories directly.",
  },
  {
    icon: <FileCheck2 className="size-5 text-primary" />,
    title: "Written Scope Before Commitment",
    description:
      "Every engagement begins with a written specification defining exact page structures, database schemas, milestone deliverables, and fixed milestone pricing.",
  },
  {
    icon: <Layers className="size-5 text-primary" />,
    title: "Staging Links at Every Milestone",
    description:
      "You review working software on a live staging URL throughout development—never waiting months in the dark for a single reveal.",
  },
  {
    icon: <ShieldCheck className="size-5 text-primary" />,
    title: "Full Source Code & IP Handover",
    description:
      "Upon final milestone completion, all custom source code, repositories, and deployment configurations are transferred directly to your organization.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="hog-grid min-h-screen pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-10 md:pt-14 text-left">
        {/* Hero Header */}
        <section className="pb-14 md:pb-20 border-b border-border-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-card-bg border border-border-custom mb-6">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold">
                JAYANT SYSTEMS &bull; Proof of Execution
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-base leading-[1.08] mb-6">
              Verified Delivery Evidence Over{" "}
              <span className="text-primary">Fabricated Testimonials.</span>
            </h1>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8">
              Many agency websites display invented client quotes and unverifiable revenue percentages. At JAYANT SYSTEMS, we believe trust is earned through inspectable software, transparent project classification, and accountable engineering standards.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white px-6 py-3 text-sm font-display font-bold transition-colors shadow-xs"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-border-custom bg-card-bg hover:border-primary/40 px-5 py-3 text-sm font-display font-bold text-text-base transition-colors"
              >
                <span>Explore Full Work Archive</span>
              </Link>
            </div>
          </div>
        </section>

        {/* How to Evaluate JAYANT SYSTEMS */}
        <section className="py-16 border-b border-border-custom">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Due Diligence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight mb-3">
              How Prospective Clients Evaluate Our Work
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Four concrete ways we de-risk software and website engagements before and during development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EVALUATION_CRITERIA.map((item) => (
              <div
                key={item.title}
                className="hog-card p-6 sm:p-7 bg-card-bg border border-border-custom flex flex-col gap-3"
              >
                <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Project Deliveries Table / Cards */}
        <section className="py-16 border-b border-border-custom">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Shipped Systems &amp; Prototypes
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight mb-3">
              Inspectable Systems Built by JAYANT SYSTEMS
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Each system below clearly states its engagement classification, the operational problem addressed, and a direct link to inspect the work.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {VERIFIED_DELIVERIES.map((item) => (
              <div
                key={item.project}
                className="hog-card p-6 sm:p-8 bg-card-bg border border-border-custom flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      {item.classification}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 rounded bg-card-subtle border border-border-custom">
                      {item.domain}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="size-3" />
                      {item.verificationType}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-text-base">
                    {item.project}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-1">
                        Problem Addressed
                      </span>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {item.problemAddressed}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold block mb-1">
                        What Was Built
                      </span>
                      <p className="text-xs sm:text-sm text-text-base leading-relaxed">
                        {item.whatWasBuilt}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0">
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-mono font-semibold transition-colors"
                    >
                      <span>Inspect Live Build</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-mono font-semibold transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  )}

                  {item.repoHref && (
                    <a
                      href={item.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-border-custom bg-card-subtle hover:border-primary/40 text-xs font-mono font-semibold text-text-base transition-colors"
                    >
                      <Code2 className="size-3.5" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-16">
          <div className="rounded-2xl bg-[#0A0F1D] border border-slate-800 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF8A00] font-semibold block mb-2">
                Direct Technical Evaluation
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Want to Walkthrough Our Codebase or Discuss Your Requirements?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Schedule a discovery call or send a written brief. We will walk you through relevant system architectures and provide a clear written scope for your project.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white px-6 py-3.5 text-sm font-display font-bold transition-colors shrink-0"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
