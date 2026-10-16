"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ShowcaseSystem {
  id: string;
  index: string;
  name: string;
  category: string;
  engagementType: string;
  problemSolved: string;
  architecture: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

const SHOWCASE_SYSTEMS: ShowcaseSystem[] = [
  {
    id: "teachersathi",
    index: "01",
    name: "Teacher Sathi",
    category: "Education Workspace",
    engagementType: "Client Engagement",
    problemSolved:
      "Replaced scattered classroom binders and fragmented chat groups with a unified web workspace for lesson planning, resource organization, and student tracking.",
    architecture: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/teachersathi.webp",
  },
  {
    id: "healthkinator",
    index: "02",
    name: "Healthkinator",
    category: "AI Symptom Triage",
    engagementType: "Deployed AI Application",
    problemSolved:
      "Built a bilingual (English/Hindi) interactive AI symptom analysis system that structures user-reported symptoms into clear preliminary guidance.",
    architecture: ["Next.js", "FastAPI", "Python", "Google Gemini API", "PostgreSQL"],
    image: "/projects/healthkinator.webp",
    liveUrl: "https://healthkinator-1.netlify.app",
    repoUrl: "https://github.com/JayantOlhyan/healthkinator-1-",
  },
  {
    id: "civicsetu",
    index: "03",
    name: "CivicSetu",
    category: "Public Grievance Portal",
    engagementType: "Functional Prototype",
    problemSolved:
      "Streamlined municipal complaint registration and utility directory lookups into a single digital ticket-tracking portal.",
    architecture: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/civicsetu.webp",
    liveUrl: "https://civicsetu-1.netlify.app/",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeSystem = SHOWCASE_SYSTEMS[activeIndex];

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative pt-10 pb-20 md:pt-16 md:pb-28 border-b border-border-custom"
    >
      <div className="w-full flex flex-col gap-12 md:gap-16">
        {/* Top Metadata Ledger Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-custom text-left">
          <div className="inline-flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />
            <span className="font-mono text-[11px] font-bold tracking-[0.16em] uppercase text-text-base">
              JAYANT SYSTEMS
            </span>
            <span className="text-text-muted/40">/</span>
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-text-muted">
              Websites &bull; Custom Software &bull; AI Systems
            </span>
          </div>

          <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider hidden sm:block">
            Founder-Led Technology Studio &mdash; New Delhi &amp; Remote
          </div>
        </div>

        {/* Expressive Editorial Statement + Asymmetric Narrative Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end text-left">
          <div className="lg:col-span-8">
            <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[74px] font-extrabold text-text-base tracking-tight">
              We design and engineer{" "}
              <span className="text-primary">digital systems</span> that work in the real world.
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start justify-between gap-6 lg:pb-1">
            <p className="text-base sm:text-[17px] text-text-muted leading-relaxed">
              JAYANT SYSTEMS partners with businesses, founders, and institutions to turn complex workflows and outdated web experiences into fast, maintainable websites, software products, and AI-powered systems.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-7 py-3.5 text-sm font-display font-bold transition-all duration-200 shadow-xs"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-card-bg hover:border-primary/50 px-6 py-3.5 text-sm font-display font-bold text-text-base transition-all duration-200"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="size-4 text-text-muted" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full-Width Metalab-Style Product Exhibition Stage */}
        <div className="metalab-stage w-full text-left shadow-2xl">
          {/* Top Stage Bar: Real Project Selector & Live Links */}
          <div className="px-5 sm:px-8 py-4 bg-[#0D1322] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF8A00] font-semibold">
                Shipped System Preview
              </span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <span className="font-mono text-xs text-slate-300 hidden sm:inline">
                {activeSystem.engagementType} &mdash; {activeSystem.category}
              </span>
            </div>

            {/* Interactive System Switcher Pills */}
            <div
              className="flex flex-wrap items-center gap-1.5"
              role="tablist"
              aria-label="Inspect shipped systems"
            >
              {SHOWCASE_SYSTEMS.map((sys, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={sys.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-white font-semibold"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="opacity-60 mr-1.5">{sys.index}</span>
                    {sys.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Editorial Split Inside the Dark Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left 8 Columns: High-Resolution Product Interface Frame */}
            <div className="lg:col-span-8 relative aspect-[16/10] bg-[#070A12] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
              <Image
                key={activeSystem.image}
                src={activeSystem.image}
                alt={`${activeSystem.name} — ${activeSystem.category} product interface`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-top transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right 4 Columns: System Specification & Verifiable Links */}
            <motion.div
              key={activeSystem.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#0A0E17] text-white"
            >
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF8A00] block mb-2">
                    {activeSystem.index} / {activeSystem.engagementType}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeSystem.name}
                  </h2>
                  <p className="font-mono text-xs text-slate-400 mt-1">
                    {activeSystem.category}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
                    Problem Addressed &amp; Deliverable
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {activeSystem.problemSolved}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2.5">
                    Production Architecture
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSystem.architecture.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-white hover:text-[#FF8A00] transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <div className="flex items-center gap-4">
                  {activeSystem.repoUrl && (
                    <a
                      href={activeSystem.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                  {activeSystem.liveUrl && (
                    <a
                      href={activeSystem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary hover:bg-primary-hover text-white font-mono text-xs font-semibold transition-colors"
                    >
                      <span>Live Build</span>
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom 3-Column Editorial Ledger (No Cards, Hairline Dividers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 text-left">
          <div className="border-t border-border-custom pt-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary block mb-2">
              01 / Direct Founder Execution
            </span>
            <p className="text-sm text-text-muted leading-relaxed">
              Every project is scoped, architected, and engineered directly with founder Jayant Olhyan—without account-manager handoffs.
            </p>
          </div>

          <div className="border-t border-border-custom pt-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary block mb-2">
              02 / Production-Grade Stack
            </span>
            <p className="text-sm text-text-muted leading-relaxed">
              Built with Next.js, React, TypeScript, Python FastAPI, PostgreSQL, and practical LLM integrations chosen for long-term maintainability.
            </p>
          </div>

          <div className="border-t border-border-custom pt-5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary block mb-2">
              03 / Full Code &amp; IP Ownership
            </span>
            <p className="text-sm text-text-muted leading-relaxed">
              Milestone-governed delivery with complete repository transfer, deployment documentation, and post-launch technical support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
