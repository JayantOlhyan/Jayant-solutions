"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const STUDIO_CAPABILITIES = [
  {
    index: "01",
    title: "Website Design & Development",
    description:
      "Positioning-led business websites, high-clarity landing pages, and institutional portals engineered with Next.js, React, TypeScript, and Tailwind CSS.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Custom Software & Web Applications",
    description:
      "Role-based client portals, educator workspaces, and internal operational dashboards backed by PostgreSQL, Supabase, or Firebase.",
    stack: ["PostgreSQL", "Supabase", "Role-Based Auth", "REST APIs"],
  },
  {
    index: "03",
    title: "AI-Powered Applications",
    description:
      "Practical LLM integrations, bilingual triage systems, and RAG knowledge assistants built with Python FastAPI, Google Gemini, and OpenAI.",
    stack: ["Python FastAPI", "Google Gemini", "OpenAI", "Vector Search"],
  },
  {
    index: "04",
    title: "Business Process Automation",
    description:
      "Automated lead capture, CRM synchronization, WhatsApp Business API notifications, and custom webhook pipelines.",
    stack: ["Webhooks", "WhatsApp API", "CRM Sync", "Workflow Automation"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-8 md:pt-14 text-left">
        {/* Top Metadata Ledger */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 md:mb-14 border-b border-border-custom">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              / Studio Profile — JAYANT SYSTEMS
            </span>
            <span className="hidden sm:inline-block text-border-strong">&mdash;</span>
            <span className="hidden sm:inline-block font-mono text-xs text-text-muted">
              Founder-Led Engineering &amp; Product Studio
            </span>
          </div>
          <span className="font-mono text-xs text-text-muted">
            New Delhi, India &bull; Remote Worldwide
          </span>
        </div>

        {/* Hero Section */}
        <section className="pb-16 md:pb-24 border-b border-border-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h1 className="font-display metalab-headline text-4xl sm:text-6xl lg:text-[64px] font-extrabold text-text-base mb-6">
                A founder-led studio building{" "}
                <span className="text-primary">practical digital systems.</span>
              </h1>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6">
                JAYANT SYSTEMS designs and builds websites, custom software products, and AI-powered workflows for businesses, founders, and educational institutions that value clear communication and reliable execution.
              </p>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8">
                Founded in New Delhi by software engineer Jayant Olhyan, the studio operates on a straightforward principle:{" "}
                <strong className="text-text-base font-semibold">
                  technology built with clarity, purpose, and accountability.
                </strong>{" "}
                Every project is scoped in writing, engineered with modern production tools, and delivered with full source-code ownership.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-7 py-3.5 text-sm font-display font-bold transition-colors shadow-xs"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-card-bg hover:border-primary/40 px-6 py-3.5 text-sm font-display font-bold text-text-base transition-colors"
                >
                  <span>Explore Selected Work</span>
                </Link>
              </div>
            </div>

            {/* Right: Authentic Founder & Studio Stage */}
            <div className="lg:col-span-5">
              <div className="metalab-stage p-7 sm:p-9 text-white flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative size-20 rounded-xl overflow-hidden border border-slate-700 shrink-0">
                    <Image
                      src="/jayant.webp"
                      alt="Jayant Olhyan — Founder of JAYANT SYSTEMS"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF8A00] font-semibold block">
                      Founder &amp; Lead Engineer
                    </span>
                    <h2 className="font-display text-2xl font-extrabold text-white tracking-tight">
                      Jayant Olhyan
                    </h2>
                    <span className="font-mono text-xs text-slate-400 block mt-0.5">
                      New Delhi, India &bull; Remote Globally
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 pt-5 border-t border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Education:</strong> B.Tech in Computer Science (MSIT, New Delhi) &amp; Online BSc (Hons) in Data Science and AI (IIT Guwahati).
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Code2 className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Engineering Background:</strong> Former Lead at MSIT Web Development Society; 30+ national hackathon selections &amp; shipped full-stack web and AI systems.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Accountability:</strong> Direct technical contact from initial requirement scoping through production deployment.
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-5">
                  <Link
                    href="/company/founder"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#FF8A00] hover:text-[#FFA333] underline underline-offset-4"
                  >
                    <span>Full Founder Bio</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                  <a
                    href="https://github.com/JayantOlhyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-300 hover:text-white"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jayant-olhyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-300 hover:text-white"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Hairline Ledger */}
        <section className="py-16 md:py-24 border-b border-border-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary font-semibold block mb-3">
                / Capabilities
              </span>
              <h2 className="font-display metalab-headline text-3xl sm:text-5xl font-extrabold text-text-base">
                Core engineering capabilities.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                Every engagement focuses on practical digital infrastructure that solves a real operational or conversion bottleneck.
              </p>
            </div>
          </div>

          <div className="border-t border-b border-border-custom divide-y divide-border-custom">
            {STUDIO_CAPABILITIES.map((cap) => (
              <div
                key={cap.index}
                className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs font-bold text-primary">
                    /{cap.index}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-text-base tracking-tight">
                    {cap.title}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-sm text-text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-1.5 lg:justify-end">
                  {cap.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-card-subtle border border-border-custom text-text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-16 md:pt-20">
          <div className="metalab-stage p-8 sm:p-12 md:p-16 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF8A00] font-semibold block mb-3">
                Work With JAYANT SYSTEMS
              </span>
              <h2 className="font-display metalab-headline text-3xl sm:text-5xl font-extrabold text-white mb-4">
                Let&apos;s build something that works.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tell us about your business, your requirements, and the problem you want to solve. We&apos;ll determine the appropriate next step together.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-7 py-4 text-sm font-display font-bold transition-colors shrink-0"
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
