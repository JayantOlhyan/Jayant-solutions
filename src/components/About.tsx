import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Code2 } from "lucide-react";

const WORKING_PRINCIPLES = [
  {
    index: "01",
    title: "Founder-led communication",
    description:
      "You speak directly with the engineer planning and building your system—no account managers, sales relays, or diluted technical context.",
  },
  {
    index: "02",
    title: "Clear requirements & deliverables",
    description:
      "Every engagement begins with a written specification defining exact deliverables, milestone checkpoints, and agreed responsibilities.",
  },
  {
    index: "03",
    title: "Thoughtful technical choices",
    description:
      "We choose proven technologies (Next.js, TypeScript, Python FastAPI, PostgreSQL) based on maintainability and operational fit—not hype.",
  },
  {
    index: "04",
    title: "Rigorous quality assurance",
    description:
      "Interfaces, forms, API endpoints, and mobile viewports are tested against agreed acceptance criteria prior to production deployment.",
  },
  {
    index: "05",
    title: "Honest architectural trade-offs",
    description:
      "We openly discuss technical limitations, third-party API costs, timeline realities, and architectural trade-offs before you commit budget.",
  },
  {
    index: "06",
    title: "Complete code & IP ownership",
    description:
      "Upon project completion and final milestone settlement, clean, documented source code and deployment configurations are transferred directly to you.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-32 border-b border-border-custom relative"
    >
      <div className="w-full flex flex-col gap-24 md:gap-32 text-left">
        {/* Part 1: Why JAYANT SYSTEMS — Editorial Architectural Grid */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border-custom">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-3">
                05 / Working Principles
              </span>
              <h2
                id="about-heading"
                className="metalab-subheadline text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-text-base"
              >
                Technology built with clarity, purpose, and accountability.
              </h2>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4 lg:text-right">
              <p className="text-sm text-text-muted leading-relaxed">
                Instead of unverifiable agency superlatives, our studio operates on six concrete engineering commitments that reduce project risk.
              </p>
              <Link
                href="/company/why-choose-us"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-text-base hover:text-primary transition-colors"
              >
                <span>Read Working Standards</span>
                <ArrowUpRight className="size-4 text-primary" />
              </Link>
            </div>
          </div>

          {/* 6-Cell Hairline Matrix (No Rounded Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-border-custom">
            {WORKING_PRINCIPLES.map((principle, idx) => (
              <div
                key={principle.index}
                className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-4 border-border-custom ${
                  idx % 3 !== 2 ? "lg:border-r" : ""
                } ${idx < 3 ? "border-b" : "border-b lg:border-b-0"}`}
              >
                <span className="font-mono text-xs font-bold text-primary">
                  /{principle.index}
                </span>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-text-base mb-2.5 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Founder Accountability — High-Contrast Editorial Feature */}
        <div className="rounded-2xl bg-[#0A0E17] border border-slate-800/90 overflow-hidden text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 5 Columns: Full-Bleed Editorial Portrait */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] bg-[#070A12] border-b lg:border-b-0 lg:border-r border-white/10">
              <Image
                src="/jayant.webp"
                alt="Jayant Olhyan — Founder and Lead Engineer at JAYANT SYSTEMS"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/75 to-transparent p-6 sm:p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A00] font-semibold block mb-1">
                  Founder &amp; Lead Systems Engineer
                </span>
                <span className="font-display text-2xl font-extrabold text-white block">
                  Jayant Olhyan
                </span>
              </div>
            </div>

            {/* Right 7 Columns: Accountable Narrative & Verifiable Credentials */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A00] font-semibold block mb-3">
                    06 / Founder-Led Accountability
                  </span>
                  <h3 className="metalab-subheadline text-2xl sm:text-4xl font-extrabold text-white">
                    Scoped, architected, and delivered directly by Jayant Olhyan.
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p className="text-white font-medium">
                    JAYANT SYSTEMS is a founder-led technology studio based in New Delhi. When you engage us, your project is never handed off to anonymous junior contractors or filtered through layers of account management.
                  </p>
                  <p>
                    I personally lead system discovery, technical architecture, frontend and backend implementation, and production deployment. Whether we are building a high-converting business website, a custom operational portal, or an AI workflow integration, my focus is on writing clean, maintainable software that solves your actual operational problem.
                  </p>
                </div>

                {/* Verifiable Academic & Engineering Credentials */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="size-5 text-[#FF8A00] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block font-display mb-0.5">
                        Academic Foundation
                      </strong>
                      B.Tech in Computer Science (MSIT, New Delhi) &amp; Online BSc (Hons) in Data Science and AI (IIT Guwahati).
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Code2 className="size-5 text-[#FF8A00] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block font-display mb-0.5">
                        Engineering Track Record
                      </strong>
                      Former Lead at MSIT Web Development Society; 30+ national hackathon selections &amp; shipped full-stack systems.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/company/founder"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-xs font-display font-bold transition-colors"
                >
                  <span>Full Founder Profile</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>

                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/JayantOlhyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-[#FF8A00] transition-colors"
                  >
                    <span>GitHub (@JayantOlhyan)</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jayant-olhyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-[#FF8A00] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
