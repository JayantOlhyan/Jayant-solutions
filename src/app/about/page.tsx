"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

const STUDIO_CAPABILITIES = [
  {
    icon: <Terminal className="size-5 text-primary" />,
    title: "Website Design & Development",
    description:
      "Positioning-led business websites, landing pages, and institutional portals built with Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: <Database className="size-5 text-primary" />,
    title: "Custom Software & Web Applications",
    description:
      "Role-based client portals, educator workspaces, and internal operational dashboards backed by PostgreSQL, Supabase, or Firebase.",
  },
  {
    icon: <Cpu className="size-5 text-primary" />,
    title: "AI-Powered Applications",
    description:
      "Practical LLM integrations, bilingual triage systems, and RAG knowledge assistants built with Python FastAPI, Google Gemini, and OpenAI.",
  },
  {
    icon: <Workflow className="size-5 text-primary" />,
    title: "Business Process Automation",
    description:
      "Automated lead capture, CRM synchronization, WhatsApp Business API notifications, and custom webhook pipelines.",
  },
];

export default function AboutPage() {
  return (
    <div className="hog-grid min-h-screen pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-10 md:pt-14 text-left">
        {/* Hero Section */}
        <section className="pb-14 md:pb-20 border-b border-border-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-card-bg border border-border-custom mb-6">
                <span className="size-2 rounded-full bg-primary" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold">
                  About JAYANT SYSTEMS
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-base leading-[1.08] mb-6">
                A Founder-Led Technology Studio Building{" "}
                <span className="text-primary">Practical Digital Systems.</span>
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
                  className="inline-flex items-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white px-6 py-3 text-sm font-display font-bold transition-colors shadow-xs"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-custom bg-card-bg hover:border-primary/40 px-5 py-3 text-sm font-display font-bold text-text-base transition-colors"
                >
                  <span>Explore Selected Work</span>
                </Link>
              </div>
            </div>

            {/* Right: Authentic Founder & Studio Card */}
            <div className="lg:col-span-5">
              <div className="hog-card p-6 bg-[#0A0F1D] text-white border border-slate-800 flex flex-col gap-5">
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
                    <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 font-semibold block">
                      Founder &amp; Lead Engineer
                    </span>
                    <h2 className="font-display text-xl font-extrabold text-white">
                      Jayant Olhyan
                    </h2>
                    <span className="font-mono text-xs text-slate-400 block mt-0.5">
                      New Delhi, India &bull; Remote Globally
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="size-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Education:</strong> B.Tech in Computer Science (MSIT, New Delhi) &amp; Online BSc (Hons) in Data Science and AI (IIT Guwahati).
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Code2 className="size-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Engineering Background:</strong> Former Lead at MSIT Web Development Society; 30+ national hackathon selections &amp; shipped full-stack web and AI systems.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="size-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Accountability:</strong> Direct technical contact from initial requirement scoping through production deployment.
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-4">
                  <Link
                    href="/company/founder"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
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

        {/* Core Capabilities */}
        <section className="py-16 border-b border-border-custom">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold block mb-2">
              What We Build
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight mb-3">
              Core Engineering Capabilities
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Every engagement focuses on practical digital infrastructure that solves a real operational or conversion bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STUDIO_CAPABILITIES.map((cap) => (
              <div
                key={cap.title}
                className="hog-card p-6 sm:p-7 bg-card-bg border border-border-custom flex flex-col gap-3"
              >
                <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-text-base">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-16">
          <div className="rounded-2xl bg-[#0A0F1D] border border-slate-800 p-8 sm:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400 font-semibold block mb-2">
                Work With JAYANT SYSTEMS
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
