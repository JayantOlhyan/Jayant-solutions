"use client";

import React, { useState } from "react";
import { caseStudies } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  X,
  CheckCircle2,
  Code2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0E17] flex items-center justify-center">
      {!loaded && !error && (
        <div className="absolute inset-0 skeleton-shimmer z-10" />
      )}
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className={`object-cover object-top transition-all duration-700 group-hover:scale-[1.02] ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-102"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-slate-400 gap-2 p-6">
          <div className="size-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
            <Sparkles className="size-5 text-primary" />
          </div>
          <span className="font-mono text-xs">{alt}</span>
        </div>
      )}
    </div>
  );
}

// Order featured projects so real client & deployed live systems lead first
const FEATURED_PROJECT_IDS = [
  "teachersathi",
  "healthkinator",
  "msitwebsite",
  "sentinelai",
  "civicsetu",
  "flowforge",
];

export default function CaseStudies() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const modalRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  const featuredStudies = FEATURED_PROJECT_IDS.map((id) =>
    caseStudies.find((s) => s.id === id)
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  const activeStudy = caseStudies.find((s) => s.id === selectedId);

  const filters = [
    "All",
    "Client & Institutional",
    "AI & Automation",
    "Civic & Product",
  ];

  const filteredStudies = featuredStudies.filter((study) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Client & Institutional") {
      return study.id === "teachersathi" || study.id === "msitwebsite";
    }
    if (activeFilter === "AI & Automation") {
      return (
        study.id === "healthkinator" ||
        study.id === "sentinelai" ||
        study.id === "flowforge"
      );
    }
    if (activeFilter === "Civic & Product") {
      return study.id === "civicsetu" || study.id === "flowforge";
    }
    return true;
  });

  // Focus trap and keyboard dismiss for modal
  React.useEffect(() => {
    if (!selectedId) {
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements =
          modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
        const firstBtn = modalRef.current.querySelector<HTMLElement>("button");
        if (firstBtn) firstBtn.focus();
        else modalRef.current.focus();
      }
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [selectedId]);

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="py-20 md:py-32 border-b border-border-custom relative"
    >
      <div className="w-full">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border-custom">
          <div className="lg:col-span-8 text-left">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-3">
              02 / Selected Work &amp; Case Studies
            </span>
            <h2
              id="selected-work-heading"
              className="metalab-subheadline text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-text-base"
            >
              Systems built for real users, operations, and workflows.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-4 text-left lg:text-right">
            <p className="text-sm text-text-muted leading-relaxed">
              Every project below documents the problem addressed, the architecture delivered, and a clear distinction between paid client work, institutional portals, and independent prototypes.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-text-base hover:text-primary transition-colors group"
            >
              <span>Complete Archive ({caseStudies.length} Systems)</span>
              <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Minimalist Editorial Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-b border-border-custom mb-16">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {filters.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-text-base text-bg-base font-bold"
                      : "bg-transparent text-text-muted hover:text-text-base border border-border-custom"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <span className="font-mono text-[11px] text-text-muted hidden sm:block">
            Showing {filteredStudies.length} of {featuredStudies.length} featured systems
          </span>
        </div>

        {/* Metalab-Inspired Editorial Exhibition Stream (Varied Scale & Sticky Context) */}
        <div className="flex flex-col gap-20 md:gap-28">
          {filteredStudies.map((study, index) => {
            const indexLabel = String(index + 1).padStart(2, "0");
            const isHeroFeature = index === 0;

            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
                className="group border-b border-border-custom pb-16 md:pb-24 last:border-b-0 last:pb-0 text-left"
              >
                {/* Top Project Index & Classification Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-primary">
                      /{indexLabel}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {study.client}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {study.industry}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    {study.liveWebsite && study.liveWebsite !== "#" && (
                      <a
                        href={study.liveWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:underline"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                    {study.githubLink && (
                      <a
                        href={study.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-text-muted hover:text-text-base"
                      >
                        <Code2 className="size-3.5" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Varied Composition: Lead Project Gets Monumental Full-Bleed Stage, Subsequent Projects Get Sticky 5/7 Editorial Split */}
                {isHeroFeature ? (
                  <div className="flex flex-col gap-8">
                    {/* Monumental Visual Stage */}
                    <div
                      onClick={() => setSelectedId(study.id)}
                      className="metalab-stage relative aspect-[16/9] w-full cursor-pointer"
                    >
                      <ProjectImage src={study.image} alt={study.title} />
                      <div className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-full bg-[#0A0E17]/90 backdrop-blur-md border border-white/15 text-white font-mono text-xs inline-flex items-center gap-2">
                        <span>Inspect Architecture &amp; Case Study</span>
                        <ArrowUpRight className="size-3.5 text-[#FF8A00]" />
                      </div>
                    </div>

                    {/* Below-Stage 12-Column Editorial Specification */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 items-start">
                      <div className="lg:col-span-5">
                        <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-text-base tracking-tight leading-[1.1] mb-4">
                          {study.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {study.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full bg-card-subtle border border-border-custom font-mono text-[11px] text-text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="border-t border-border-custom pt-4">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2">
                            Context &amp; Objective
                          </span>
                          <p className="text-sm text-text-muted leading-relaxed">
                            {study.problem}
                          </p>
                        </div>

                        <div className="border-t border-border-custom pt-4">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">
                            What We Engineered
                          </span>
                          <p className="text-sm text-text-base leading-relaxed mb-4">
                            {study.solution}
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedId(study.id)}
                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary hover:underline cursor-pointer"
                          >
                            <span>Read Full Case Study</span>
                            <ArrowRight className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Sticky Narrative Column (5 cols) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-between gap-6">
                      <div className="space-y-5">
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-text-base tracking-tight leading-[1.12]">
                          {study.title}
                        </h3>

                        <div className="border-t border-border-custom pt-4">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-1.5">
                            Problem &amp; Context
                          </span>
                          <p className="text-sm text-text-muted leading-relaxed">
                            {study.problem}
                          </p>
                        </div>

                        <div className="border-t border-border-custom pt-4">
                          <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold block mb-1.5">
                            Engineering Deliverable
                          </span>
                          <p className="text-sm text-text-base leading-relaxed">
                            {study.solution}
                          </p>
                        </div>

                        {study.features && (
                          <div className="border-t border-border-custom pt-4">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-2.5">
                              Capabilities Delivered
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {study.features.slice(0, 4).map((feat) => (
                                <li
                                  key={feat}
                                  className="flex items-start gap-2 text-xs text-text-muted"
                                >
                                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-border-custom flex flex-col gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {study.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded-full bg-card-subtle border border-border-custom font-mono text-[10px] text-text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedId(study.id)}
                            className="inline-flex items-center gap-2 rounded-full bg-text-base text-bg-base hover:bg-primary hover:text-white px-5 py-2.5 text-xs font-mono font-bold transition-colors cursor-pointer"
                          >
                            <span>Inspect Case Study</span>
                            <ArrowRight className="size-3.5" />
                          </button>

                          {study.liveWebsite && study.liveWebsite !== "#" && (
                            <a
                              href={study.liveWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full border border-border-custom hover:border-primary px-4 py-2.5 text-xs font-mono font-semibold text-text-base transition-colors"
                            >
                              <span>Live App</span>
                              <ExternalLink className="size-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Product Stage Column (7 cols) */}
                    <div className="lg:col-span-7">
                      <div
                        onClick={() => setSelectedId(study.id)}
                        className="metalab-stage relative aspect-[16/10] w-full cursor-pointer"
                      >
                        <ProjectImage src={study.image} alt={study.title} />
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Case Study Inspection Modal */}
        <AnimatePresence>
          {selectedId && activeStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs"
              />

              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="case-study-title"
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar bg-card-bg rounded-2xl border border-border-custom shadow-2xl flex flex-col text-left outline-none"
              >
                <div className="relative w-full h-56 sm:h-72 bg-[#0A0E17] border-b border-border-custom overflow-hidden shrink-0">
                  <ProjectImage src={activeStudy.image} alt={activeStudy.title} />
                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    aria-label="Close case study details"
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-white border border-slate-700 hover:bg-slate-900 transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div className="border-b border-border-custom pb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full font-semibold">
                        {activeStudy.client}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">
                        {activeStudy.industry}
                      </span>
                    </div>
                    <h3
                      id="case-study-title"
                      className="font-display text-2xl md:text-3xl font-extrabold text-text-base"
                    >
                      {activeStudy.title}
                    </h3>
                  </div>

                  <div className="space-y-6 text-xs md:text-sm text-text-muted leading-relaxed">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border border-border-custom rounded-xl p-4 bg-card-subtle">
                        <span className="font-mono font-bold text-[10px] text-text-muted block mb-1 uppercase tracking-wider">
                          Before (Manual State)
                        </span>
                        <p className="text-text-base">{activeStudy.beforeState}</p>
                      </div>
                      <div className="border border-primary/20 rounded-xl p-4 bg-primary/5">
                        <span className="font-mono font-bold text-[10px] text-primary block mb-1 uppercase tracking-wider">
                          After (Engineered System)
                        </span>
                        <p className="text-text-base">{activeStudy.afterState}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-display font-bold text-text-base block mb-1">
                        System Architecture &amp; Delivery
                      </span>
                      <p>{activeStudy.solution}</p>
                    </div>

                    {activeStudy.features && (
                      <div>
                        <span className="font-display font-bold text-text-base block mb-2">
                          Key Capabilities Built
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeStudy.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="border-t border-border-custom pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-text-muted block uppercase">
                          Outcome Summary
                        </span>
                        <span className="text-sm font-display font-bold text-text-base">
                          {activeStudy.result}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedId(null)}
                          className="px-4 py-2 rounded-full border border-border-custom hover:bg-card-subtle text-xs font-mono font-semibold text-text-muted transition-colors cursor-pointer"
                        >
                          Close
                        </button>
                        {activeStudy.liveWebsite &&
                          activeStudy.liveWebsite !== "#" && (
                            <a
                              href={activeStudy.liveWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary-hover text-white px-5 py-2 text-xs font-mono font-semibold transition-colors"
                            >
                              <span>Visit Live Site</span>
                              <ExternalLink className="size-3.5" />
                            </a>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
