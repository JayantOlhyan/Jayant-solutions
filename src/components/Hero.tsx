"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Code2, Layers, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ShowcaseSystem {
  id: string;
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
    name: "Teacher Sathi",
    category: "Education Workspace",
    engagementType: "Client Project",
    problemSolved:
      "Replaced scattered classroom binders and fragmented chat groups with a unified web workspace for lesson planning, resource organization, and student tracking.",
    architecture: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/teachersathi.webp",
  },
  {
    id: "healthkinator",
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
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-border-custom/80"
    >
      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Positioning, Clarity, CTAs & Verifiable Facts */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pt-2">
            {/* Restrained Technical Brand Label */}
            <div className="inline-flex items-center gap-2.5 border border-border-custom bg-card-bg px-3.5 py-1.5 rounded-md mb-6 shadow-2xs">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-[11px] font-bold tracking-[0.12em] uppercase text-text-base">
                JAYANT SYSTEMS
              </span>
              <span className="text-border-custom">&bull;</span>
              <span className="font-mono text-[10px] tracking-wider uppercase text-text-muted">
                Web &middot; Software &middot; AI Studio
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-text-base leading-[1.06] mb-6">
              Building Digital Systems for{" "}
              <span className="text-primary">Real-World Businesses.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base md:text-[17px] text-text-muted leading-relaxed max-w-xl mb-8">
              From high-performance websites to custom software and practical AI automation, we turn business requirements into carefully engineered digital solutions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white px-6 py-3.5 text-sm font-display font-bold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-custom bg-card-bg hover:border-primary/40 hover:bg-card-subtle px-6 py-3.5 text-sm font-display font-bold text-text-base transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="size-4 text-text-muted" />
              </Link>
            </div>

            {/* Verifiable Practice Pillars (Zero Fabricated Metrics) */}
            <div className="w-full pt-7 border-t border-border-custom grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-primary uppercase">
                  <Code2 className="size-3.5" />
                  <span>Direct Execution</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Work directly with founder Jayant Olhyan from requirement scoping to deployment.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-primary uppercase">
                  <Cpu className="size-3.5" />
                  <span>Production Stack</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Next.js, React, TypeScript, Python FastAPI, PostgreSQL, and LLM integrations.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-primary uppercase">
                  <Layers className="size-3.5" />
                  <span>Clear Ownership</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Milestone-based delivery with full source code transfer upon completion.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dimensional System & Product Interface Inspector */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-xl bg-[#0A0F1D] border border-slate-800 shadow-[0_20px_50px_rgba(10,15,29,0.22)] overflow-hidden text-left">
              {/* Top System Switcher Header */}
              <div className="px-4 py-3 bg-[#111827] border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-slate-700" />
                    <span className="size-2.5 rounded-full bg-slate-700" />
                    <span className="size-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                    Verified System Inspector
                  </span>
                </div>

                {/* Interactive Tabs to Switch Real Project Views */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800" role="tablist" aria-label="Inspect shipped systems">
                  {SHOWCASE_SYSTEMS.map((sys, idx) => {
                    const isSelected = idx === activeIndex;
                    return (
                      <button
                        key={sys.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveIndex(idx)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-primary text-white font-semibold"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {sys.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Middle Plane: Real Product Interface Screenshot */}
              <div className="relative aspect-[16/10] w-full bg-slate-950 border-b border-slate-800 overflow-hidden">
                <Image
                  key={activeSystem.image}
                  src={activeSystem.image}
                  alt={`${activeSystem.name} — ${activeSystem.category} interface`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating Foreground Plane: Engagement Classification Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A0F1D]/90 backdrop-blur-md border border-slate-700/80">
                  <CheckCircle2 className="size-3.5 text-blue-400" />
                  <span className="font-mono text-[10px] font-semibold text-slate-200 uppercase tracking-wider">
                    {activeSystem.engagementType} &bull; {activeSystem.category}
                  </span>
                </div>

                {activeSystem.liveUrl && (
                  <a
                    href={activeSystem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-600/95 hover:bg-blue-500 text-white font-mono text-[10px] font-semibold transition-colors shadow-sm"
                  >
                    <span>Live Deployment</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>

              {/* Bottom Plane: Problem Solved & Stack Architecture */}
              <motion.div
                key={activeSystem.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-6 bg-[#0A0F1D]"
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-blue-400 block mb-1">
                      Problem Addressed &amp; Deliverable
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeSystem.problemSolved}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[10px] text-slate-400 mr-1">
                        Stack:
                      </span>
                      {activeSystem.architecture.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {activeSystem.repoUrl && (
                      <a
                        href={activeSystem.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] text-blue-400 hover:text-blue-300 underline underline-offset-4 inline-flex items-center gap-1"
                      >
                        <span>Source Repo</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
