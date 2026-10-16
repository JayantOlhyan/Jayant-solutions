"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  FileCheck2,
  Cpu,
  ShieldCheck,
  Scale,
  Code2,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const CORE_PRINCIPLES = [
  {
    number: "01",
    icon: <MessageSquare className="size-5 text-primary" />,
    title: "Founder-Led Communication",
    description:
      "You communicate directly with Jayant Olhyan—the engineer architecting and building your system. Nothing is lost in translation between sales reps, account managers, and rotating subcontractors.",
  },
  {
    number: "02",
    icon: <FileCheck2 className="size-5 text-primary" />,
    title: "Clear Requirements and Deliverables",
    description:
      "Before any code is written, we document the exact page architecture, functional workflows, database models, milestone checkpoints, and agreed pricing in a written scope.",
  },
  {
    number: "03",
    icon: <Cpu className="size-5 text-primary" />,
    title: "Thoughtful Technical Choices",
    description:
      "We choose proven, maintainable technologies (Next.js, React, TypeScript, Python FastAPI, PostgreSQL) suited to your operational requirements rather than chasing unnecessary complexity.",
  },
  {
    number: "04",
    icon: <ShieldCheck className="size-5 text-primary" />,
    title: "Rigorous Quality Assurance",
    description:
      "Every deliverable is tested on a live staging environment across desktop and mobile viewports, verifying form validation, API error states, accessibility, and page performance.",
  },
  {
    number: "05",
    icon: <Scale className="size-5 text-primary" />,
    title: "Honest Discussions About Trade-Offs",
    description:
      "We explain timeline realities, third-party API costs, and architectural trade-offs upfront so you can make informed commercial decisions.",
  },
  {
    number: "06",
    icon: <Code2 className="size-5 text-primary" />,
    title: "Maintainable Implementations & Code Ownership",
    description:
      "Upon final milestone completion, your organization receives 100% ownership of the custom source code, repository history, and deployment configurations.",
  },
];

const COMPARISON_ROWS = [
  {
    dimension: "Point of Contact",
    jayantSystems: "Direct communication with the founder & lead engineer from discovery to launch.",
    typicalAgency: "Sales handoff to account managers, with limited access to the actual developers.",
  },
  {
    dimension: "Scope & Pricing",
    jayantSystems: "Written specification with fixed milestone deliverables agreed upfront.",
    typicalAgency: "Vague estimates that expand into unexpected change-order fees.",
  },
  {
    dimension: "Progress Visibility",
    jayantSystems: "Live staging preview links updated at every milestone for hands-on testing.",
    typicalAgency: "Static slide decks or long silences until late-stage delivery.",
  },
  {
    dimension: "Code & IP Ownership",
    jayantSystems: "Full source code, repository, and domain control transferred upon completion.",
    typicalAgency: "Proprietary lock-in or withheld repository access.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="hog-grid min-h-screen pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-10 md:pt-14 text-left">
        {/* Hero Section */}
        <section className="pb-14 md:pb-20 border-b border-border-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-card-bg border border-border-custom mb-6">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold">
                JAYANT SYSTEMS &bull; Working Standards
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-base leading-[1.08] mb-6">
              Technology Built With Clarity, Purpose, and{" "}
              <span className="text-primary">Accountability.</span>
            </h1>

            <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8">
              Choosing a technical partner shouldn&apos;t rely on exaggerated promises. Here are the concrete operational standards that govern every website, software product, and AI workflow built by JAYANT SYSTEMS.
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
                href="/process"
                className="inline-flex items-center gap-2 rounded-lg border border-border-custom bg-card-bg hover:border-primary/40 px-5 py-3 text-sm font-display font-bold text-text-base transition-colors"
              >
                <span>Inspect Our 5-Stage Process</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 6 Working Principles Grid */}
        <section className="py-16 border-b border-border-custom">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Six Operational Commitments
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight mb-3">
              Why Businesses Work With JAYANT SYSTEMS
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Practical engineering discipline designed to keep scope clear, communication direct, and software maintainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_PRINCIPLES.map((item) => (
              <div
                key={item.number}
                className="hog-card p-6 sm:p-7 bg-card-bg border border-border-custom flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-text-muted">
                    {item.number}
                  </span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Comparison */}
        <section className="py-16 border-b border-border-custom">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              Operating Model Comparison
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight mb-3">
              Founder-Led Studio vs. Traditional Agency Layers
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={row.dimension}
                className="hog-card p-6 bg-card-bg border border-border-custom grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
              >
                <div className="lg:col-span-3">
                  <span className="font-display text-sm sm:text-base font-extrabold text-text-base">
                    {row.dimension}
                  </span>
                </div>
                <div className="lg:col-span-5 flex items-start gap-2.5 p-3.5 rounded-lg bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold block mb-0.5">
                      JAYANT SYSTEMS
                    </span>
                    <p className="text-xs sm:text-sm text-text-base leading-relaxed">
                      {row.jayantSystems}
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-4 flex items-start gap-2.5 p-3.5 rounded-lg bg-card-subtle border border-border-custom">
                  <XCircle className="size-4 text-text-muted shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-0.5">
                      Typical Outsourcing Model
                    </span>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {row.typicalAgency}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-16">
          <div className="rounded-2xl bg-[#0A0F1D] border border-slate-800 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400 font-semibold block mb-2">
                Ready to Discuss Your Requirements?
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Let&apos;s Build Something That Works.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell us about your business, your requirements, and the problem you want to solve. We&apos;ll determine the appropriate next step together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3.5 text-sm font-display font-bold transition-colors shrink-0"
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
