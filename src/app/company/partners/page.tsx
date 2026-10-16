"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  Database,
  Globe,
  Workflow,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const TECHNOLOGY_ECOSYSTEM = [
  {
    category: "Frontend & Web Platforms",
    icon: <Globe className="size-5 text-primary" />,
    tools: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    rationale:
      "Selected for fast server-rendered performance, strong Core Web Vitals, clean component modularity, and long-term maintainability.",
  },
  {
    category: "Backend & Applied AI",
    icon: <Cpu className="size-5 text-primary" />,
    tools: ["Python", "FastAPI", "Node.js", "Google Gemini API", "OpenAI API", "LangChain"],
    rationale:
      "Used to build structured AI triage pipelines, Retrieval-Augmented Generation (RAG) workflows, and typed REST APIs with strict validation.",
  },
  {
    category: "Databases & Cloud Infrastructure",
    icon: <Database className="size-5 text-primary" />,
    tools: ["PostgreSQL", "Supabase", "Firebase", "Docker", "Vercel", "AWS / GCP"],
    rationale:
      "Provides reliable relational data integrity, role-based authentication, automated backups, and reproducible container deployments.",
  },
  {
    category: "Workflow & CRM Automation",
    icon: <Workflow className="size-5 text-primary" />,
    tools: ["n8n", "REST Webhooks", "WhatsApp Business API", "Cal.com", "Transactional Email"],
    rationale:
      "Connects lead capture, scheduling, and internal operations without brittle manual spreadsheet copying.",
  },
];

const COLLABORATION_MODELS = [
  {
    title: "White-Label & Overflow Engineering for Agencies",
    description:
      "Design studios, marketing agencies, and consultancies partner with JAYANT SYSTEMS when they need reliable Next.js frontend execution, custom backend portals, or AI workflow implementation under clear milestone schedules.",
    points: [
      "Clean, documented repositories following your team's conventions",
      "Strict confidentiality and NDA compliance where required",
      "Direct technical communication with founder Jayant Olhyan",
    ],
  },
  {
    title: "Specialist Network for Multi-Disciplinary Builds",
    description:
      "When a client engagement requires specialized industrial design, domain compliance auditing, or dedicated mobile engineering, we coordinate vetted independent specialists while maintaining single-point technical accountability.",
    points: [
      "Single accountable engineering lead from discovery to deployment",
      "Transparent disclosure of project contributors",
      "Unified quality assurance and code review standards",
    ],
  },
];

export default function PartnersPage() {
  return (
    <div className="hog-grid min-h-screen pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-10 md:pt-14 text-left">
        {/* Hero Section */}
        <section className="pb-14 md:pb-20 border-b border-border-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-card-bg border border-border-custom mb-6">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold">
                JAYANT SYSTEMS &bull; Technology Ecosystem &amp; Collaboration
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-base leading-[1.08] mb-6">
              Production Infrastructure &amp;{" "}
              <span className="text-primary">Technical Collaboration.</span>
            </h1>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8">
              JAYANT SYSTEMS builds on proven open-source frameworks and cloud platforms, and collaborates with design studios, consultancies, and domain specialists to deliver reliable digital systems.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white px-6 py-3 text-sm font-display font-bold transition-colors shadow-xs"
              >
                <span>Discuss a Partnership or Project</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/resources/technologies-we-use"
                className="inline-flex items-center gap-2 rounded-lg border border-border-custom bg-card-bg hover:border-primary/40 px-5 py-3 text-sm font-display font-bold text-text-base transition-colors"
              >
                <span>Inspect Full Stack Specifications</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Platforms & Infrastructure */}
        <section className="py-16 border-b border-border-custom">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Technology Stack
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight mb-3">
              Platforms &amp; Frameworks We Build With
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              We select technologies based on stability, documentation quality, and long-term maintainability for client teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECHNOLOGY_ECOSYSTEM.map((group) => (
              <div
                key={group.category}
                className="hog-card p-6 sm:p-8 bg-card-bg border border-border-custom flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      {group.icon}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-text-base">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {group.rationale}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-custom flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded bg-card-subtle border border-border-custom font-mono text-[11px] text-text-base font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Agency & Specialist Collaboration */}
        <section className="py-16 border-b border-border-custom">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Collaboration Models
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight mb-3">
              How We Partner With Studios &amp; Specialists
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Clear working arrangements for agency technical partnerships and specialized engineering collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {COLLABORATION_MODELS.map((model) => (
              <div
                key={model.title}
                className="hog-card p-6 sm:p-8 bg-card-bg border border-border-custom flex flex-col gap-5"
              >
                <div className="flex items-center gap-2.5 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                  <Users className="size-4" />
                  <span>Partnership Structure</span>
                </div>
                <h3 className="font-display text-xl font-extrabold text-text-base">
                  {model.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {model.description}
                </p>
                <ul className="space-y-2.5 pt-2 border-t border-border-custom">
                  {model.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-xs sm:text-sm text-text-base"
                    >
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="pt-16">
          <div className="rounded-2xl bg-[#0A0F1D] border border-slate-800 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#FF8A00] font-mono text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="size-4" />
                <span>Direct Engineering Partnership</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Looking for a Technical Partner on an Upcoming Build?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Reach out with your project scope or partnership inquiry. We will review your requirements and respond directly within 24 hours.
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
