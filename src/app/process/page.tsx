"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import CallToAction from "@/components/CallToAction";

export default function ProcessPage() {
  const steps = [
    {
      id: "01",
      name: "Discovery & Context Audit",
      deliverable: "Requirements Brief & Fit Assessment",
      desc: "We examine your business model, operational bottlenecks, target user flows, and existing technical constraints before writing code.",
    },
    {
      id: "02",
      name: "Scope & Architecture Blueprint",
      deliverable: "Written Scope, Schema & Milestone Plan",
      desc: "We define exact deliverables, system boundaries, database schemas, API contracts, and fixed milestone checkpoints in writing.",
    },
    {
      id: "03",
      name: "Interface Design & Prototyping",
      deliverable: "Interactive Wireframes & UI System",
      desc: "We structure page hierarchy, user journeys, and clean component states so you can review the experience early.",
    },
    {
      id: "04",
      name: "Full-Stack Implementation",
      deliverable: "Staging Previews & Typed Codebase",
      desc: "We build the frontend, backend APIs, database tables, and AI/automation workflows with regular staging links for your inspection.",
    },
    {
      id: "05",
      name: "Quality Assurance & Verification",
      deliverable: "Verified Release Candidate",
      desc: "We test mobile responsiveness, keyboard accessibility, form validation, security rules, and edge cases against the agreed scope.",
    },
    {
      id: "06",
      name: "Deployment, Handover & Support",
      deliverable: "Production Launch & Full Code Transfer",
      desc: "We deploy to production, configure domains and SSL, transfer 100% repository ownership, and provide agreed post-launch support.",
    },
  ];

  const methodologyPrinciples = [
    {
      index: "01",
      title: "Direct Founder Communication",
      desc: "You communicate directly with the engineer building your system—no account managers or diluted context.",
    },
    {
      index: "02",
      title: "Inspectable Staging Builds",
      desc: "Instead of waiting weeks for a reveal, you receive live staging URLs to test real progress throughout the build.",
    },
    {
      index: "03",
      title: "Clear Written Documentation",
      desc: "Scope, architecture decisions, environment setup, and handover instructions are documented clearly.",
    },
    {
      index: "04",
      title: "Honest Technical Trade-offs",
      desc: "We explain infrastructure costs, third-party API limits, and maintainability considerations upfront.",
    },
    {
      index: "05",
      title: "Post-Launch Continuity",
      desc: "Every project includes agreed post-deployment support and optional maintenance retainers as your needs grow.",
    },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-24 pt-10 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-20 md:gap-28">
          {/* Editorial Process Hero */}
          <section className="pt-8 border-b border-border-custom pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-4">
                  JAYANT SYSTEMS &bull; ENGINEERING METHODOLOGY
                </span>
                <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-base">
                  A structured process.{" "}
                  <span className="text-primary">Accountable delivery.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start gap-6">
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  We follow a transparent, milestone-governed engineering sequence that eliminates scope ambiguity and keeps every technical decision visible.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-display font-bold transition-all"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-card-bg hover:border-primary px-6 py-3 text-xs font-display font-bold text-text-base transition-all"
                  >
                    <span>View Shipped Work</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 6-Stage Hairline Execution Ledger */}
          <section aria-labelledby="six-step-heading">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-3">
                  01 &mdash; 06 / Execution Sequence
                </span>
                <h2
                  id="six-step-heading"
                  className="metalab-subheadline text-3xl sm:text-4xl font-extrabold text-text-base mb-4"
                >
                  From initial brief to production handover.
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">
                  Each stage produces a concrete engineering artifact so you never have to guess where your project stands.
                </p>
              </div>

              <div className="lg:col-span-8 divide-y divide-border-custom border-t border-b border-border-custom">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="py-8 sm:py-10 flex flex-col gap-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-sm font-bold text-primary">
                          /{step.id}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-extrabold text-text-base tracking-tight">
                          {step.name}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-primary font-semibold">
                        Artifact: {step.deliverable}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed pl-0 sm:pl-9">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Operating Standards Dark Editorial Block */}
          <section className="rounded-2xl bg-[#0A0E17] border border-slate-800 p-8 sm:p-12 md:p-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A00] font-semibold block mb-3">
                  Operating Standards
                </span>
                <h2 className="metalab-subheadline text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  What you can expect at every milestone.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our methodology is designed for founders and operations teams who value direct technical answers and predictable delivery.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
                {methodologyPrinciples.map((prop) => (
                  <div
                    key={prop.index}
                    className="py-5 flex items-start gap-4"
                  >
                    <CheckCircle2 className="size-4 text-[#FF8A00] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white">
                        {prop.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <CallToAction />
        </main>
      </div>
    </PageTransition>
  );
}
