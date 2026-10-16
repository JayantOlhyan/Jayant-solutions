"use client";

import React, { useState } from "react";
import { caseStudies } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X, CheckCircle2, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0A0F1D] flex items-center justify-center">
      {!loaded && !error && (
        <div className="absolute inset-0 skeleton-shimmer z-10" />
      )}
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={`object-cover object-top transition-all duration-500 group-hover:scale-[1.02] ${
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

  const filters = ["All", "Client & Institutional", "AI & Automation", "Civic & Product"];

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
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
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
      className="py-16 md:py-24 border-b border-border-custom relative"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left max-w-2xl">
            <span className="font-mono text-[11px] tracking-wider uppercase text-primary font-semibold block mb-2">
              Section 02 &bull; Selected Work &amp; Case Studies
            </span>
            <h2
              id="selected-work-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-base mb-3"
            >
              Real Evidence of Engineering Execution
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Every project below documents the actual problem addressed, what JAYANT SYSTEMS built, key technical decisions, and transparent classification of whether it was a client engagement, institutional portal, or independent prototype.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-custom bg-card-bg hover:border-primary/40 text-xs font-mono font-semibold text-text-base transition-colors shadow-2xs"
            >
              <span>View complete archive ({caseStudies.length} projects)</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-[#0A0F1D] text-white font-semibold border border-slate-800"
                  : "bg-card-bg border border-border-custom text-text-muted hover:text-text-base hover:border-primary/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Editorial Alternating Case Studies List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {filteredStudies.map((study, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35 }}
                className="hog-card overflow-hidden bg-card-bg border border-border-custom group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Visual Column (Alternating Order on Desktop) */}
                  <div
                    className={`lg:col-span-7 bg-[#0A0F1D] border-b lg:border-b-0 ${
                      isEven
                        ? "lg:order-1 lg:border-r border-slate-800"
                        : "lg:order-2 lg:border-l border-slate-800"
                    } flex flex-col`}
                  >
                    {/* Browser Frame Header */}
                    <div className="px-4 py-2.5 bg-[#111827] border-b border-slate-800 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="size-2.5 rounded-full bg-slate-700" />
                        <span className="size-2.5 rounded-full bg-slate-700" />
                        <span className="size-2.5 rounded-full bg-slate-700" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-300 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {study.client} &bull; {study.industry}
                      </span>
                      <div className="font-mono text-[10px] text-slate-400">
                        {study.duration || "Scoped Delivery"}
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div
                      onClick={() => setSelectedId(study.id)}
                      className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden flex-1"
                    >
                      <ProjectImage src={study.image} alt={study.title} />
                    </div>
                  </div>

                  {/* Editorial Narrative Column */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-left ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Classification & Domain Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                          {study.client}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 rounded bg-card-subtle border border-border-custom">
                          {study.industry}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-text-base leading-snug">
                        {study.title}
                      </h3>

                      {/* 1. Problem / Objective */}
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block">
                          Problem &amp; Objective
                        </span>
                        <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      {/* 2. Agency Contribution */}
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold block">
                          Engineering Contribution
                        </span>
                        <p className="text-xs sm:text-[13px] text-text-base leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      {/* 3. Key Features & Technical Stack */}
                      {study.features && (
                        <div className="pt-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted font-bold block mb-2">
                            Key Capabilities Built
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {study.features.slice(0, 4).map((feat) => (
                              <div
                                key={feat}
                                className="flex items-center gap-1.5 text-xs text-text-muted"
                              >
                                <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Tech Stack + Action Links */}
                    <div className="pt-5 mt-6 border-t border-border-custom flex flex-col gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {study.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-card-subtle border border-border-custom font-mono text-[10px] text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedId(study.id)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-card-subtle hover:bg-primary hover:text-white border border-border-custom text-xs font-mono font-semibold text-text-base transition-colors cursor-pointer"
                        >
                          <span>Inspect Full Case Study</span>
                          <ArrowRight className="size-3.5" />
                        </button>

                        {study.liveWebsite && study.liveWebsite !== "#" && (
                          <a
                            href={study.liveWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-mono font-semibold transition-colors"
                          >
                            <span>Live Product</span>
                            <ExternalLink className="size-3.5" />
                          </a>
                        )}

                        {study.githubLink && (
                          <a
                            href={study.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-text-muted hover:text-text-base underline underline-offset-4"
                          >
                            <Code2 className="size-3.5" />
                            <span>Source</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
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
                <div className="relative w-full h-52 sm:h-64 bg-[#0A0F1D] border-b border-border-custom overflow-hidden shrink-0">
                  <ProjectImage src={activeStudy.image} alt={activeStudy.title} />
                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    aria-label="Close case study details"
                    className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-slate-950/80 text-white border border-slate-700 hover:bg-slate-900 transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div className="border-b border-border-custom pb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded font-semibold">
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
                          className="px-4 py-2 rounded-lg border border-border-custom hover:bg-card-subtle text-xs font-mono font-semibold text-text-muted transition-colors cursor-pointer"
                        >
                          Close
                        </button>
                        {activeStudy.liveWebsite && activeStudy.liveWebsite !== "#" && (
                          <a
                            href={activeStudy.liveWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white px-4 py-2 text-xs font-mono font-semibold transition-colors"
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
