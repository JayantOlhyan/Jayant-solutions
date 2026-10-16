"use client";

import React, { useState, useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  ExternalLink,
  Code2,
} from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { caseStudies as sharedCaseStudies, type CaseStudy } from "@/data/content";

export interface PortfolioProject extends CaseStudy {
  category:
    | "AI / ML"
    | "Web Applications"
    | "Mobile Apps"
    | "Platforms"
    | "Automation"
    | "Business Solutions";
}

// Map verified shared case studies to categories
const allPortfolioProjects: PortfolioProject[] = sharedCaseStudies.map((cs) => {
  let cat: PortfolioProject["category"] = "Web Applications";
  const ind = cs.industry.toLowerCase();
  const id = cs.id.toLowerCase();
  if (
    id === "healthkinator" ||
    id === "teachersathi" ||
    id === "sentinelai" ||
    ind.includes("ai")
  ) {
    cat = "AI / ML";
  } else if (id === "rakshatap" || ind.includes("mobile")) {
    cat = "Mobile Apps";
  } else if (
    id === "weact" ||
    id === "khelclan" ||
    id === "yaperz" ||
    ind.includes("platform")
  ) {
    cat = "Platforms";
  } else if (
    id === "flowforge" ||
    id === "farmiq" ||
    ind.includes("automation") ||
    ind.includes("agritech")
  ) {
    cat = "Automation";
  }
  return {
    ...cs,
    category: cat,
  };
});

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const stats = [
    {
      index: "01",
      number: `${allPortfolioProjects.length}`,
      label: "Documented Systems",
      desc: "Client work, live apps & prototypes",
    },
    {
      index: "02",
      number: "Direct",
      label: "Founder Execution",
      desc: "No middle-layer handoffs",
    },
    {
      index: "03",
      number: "30+",
      label: "Hackathons & Tracks",
      desc: "Recognized across university & tech tracks",
    },
    {
      index: "04",
      number: "100%",
      label: "Code Ownership",
      desc: "Full repository & IP transfer",
    },
  ];

  const filterTabs = [
    "All",
    "AI / ML",
    "Web Applications",
    "Mobile Apps",
    "Platforms",
    "Automation",
  ];

  // Accessible Modal Focus Trap & Keyboard Dismiss
  useEffect(() => {
    if (!selectedId) {
      if (triggerRef.current) {
        triggerRef.current.focus();
        triggerRef.current = null;
      }
      return;
    }

    triggerRef.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
        const closeBtn = modalRef.current.querySelector<HTMLElement>("button");
        if (closeBtn) closeBtn.focus();
        else modalRef.current.focus();
      }
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [selectedId]);

  const filteredProjects =
    activeFilter === "All"
      ? allPortfolioProjects
      : allPortfolioProjects.filter(
          (p) =>
            p.category === activeFilter ||
            p.industry.toLowerCase().includes(activeFilter.toLowerCase())
        );

  const activeProject = allPortfolioProjects.find((p) => p.id === selectedId);

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-24 pt-10 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-20 md:gap-28">
          {/* Editorial Portfolio Hero */}
          <section className="pt-8 border-b border-border-custom pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-4">
                  JAYANT SYSTEMS &bull; SELECTED WORK ARCHIVE
                </span>
                <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-base">
                  Systems engineered for{" "}
                  <span className="text-primary">real-world problems.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start gap-6">
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  Inspect client engagements, institutional portals, deployed AI applications, and functional prototypes built by JAYANT SYSTEMS. Every entry clearly distinguishes its engagement type, architecture, and problem addressed.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href="#projects-grid"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-display font-bold transition-all"
                  >
                    <span>Inspect Archive</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-card-bg hover:border-primary px-6 py-3 text-xs font-display font-bold text-text-base transition-all"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 4-Column Hairline Ledger Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border-custom pt-8 gap-8">
              {stats.map((stat) => (
                <div key={stat.index} className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] font-bold text-primary">
                    /{stat.index}
                  </span>
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-text-base tracking-tight">
                    {stat.number}
                  </span>
                  <h2 className="font-display text-sm font-bold text-text-base">
                    {stat.label}
                  </h2>
                  <p className="text-xs text-text-muted">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Filters and Metalab-Style Varied Grid */}
          <section id="projects-grid" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-custom mb-14">
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeFilter === tab
                        ? "bg-text-base text-bg-base font-bold"
                        : "bg-transparent border border-border-custom text-text-muted hover:text-text-base"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <span className="font-mono text-xs text-text-muted">
                Showing {filteredProjects.length} documented systems
              </span>
            </div>

            {/* Editorial Exhibition Grid (Alternating Full-Width Feature & 2-Column Asymmetric Pairs) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-24">
              {filteredProjects.map((project, index) => {
                const isWideFeature = index % 3 === 0;
                const indexNum = String(index + 1).padStart(2, "0");

                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      isWideFeature ? "md:col-span-12" : "md:col-span-6"
                    } group flex flex-col gap-5 pb-12 border-b border-border-custom`}
                  >
                    {/* Top Metadata Line */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-primary">
                          /{indexNum}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {project.client}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          {project.industry}
                        </span>
                      </div>

                      {project.liveWebsite && project.liveWebsite !== "#" && (
                        <a
                          href={project.liveWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary hover:underline"
                        >
                          <span>Live Build</span>
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>

                    {/* Dark Exhibition Image Stage */}
                    <div
                      onClick={() => setSelectedId(project.id)}
                      className={`metalab-stage w-full ${
                        isWideFeature ? "aspect-[16/9]" : "aspect-[16/10]"
                      } relative cursor-pointer`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes={
                          isWideFeature
                            ? "100vw"
                            : "(max-width: 768px) 100vw, 50vw"
                        }
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Bottom Editorial Caption & Action Row */}
                    <div
                      className={`grid grid-cols-1 ${
                        isWideFeature ? "lg:grid-cols-12 gap-6" : "gap-4"
                      } items-start pt-1`}
                    >
                      <div className={isWideFeature ? "lg:col-span-5" : ""}>
                        <h3
                          onClick={() => setSelectedId(project.id)}
                          className="font-display text-xl sm:text-2xl font-extrabold text-text-base group-hover:text-primary transition-colors cursor-pointer leading-tight mb-2"
                        >
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 5).map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded-full bg-card-subtle border border-border-custom font-mono text-[10px] text-text-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`${
                          isWideFeature ? "lg:col-span-7" : ""
                        } flex flex-col justify-between gap-4`}
                      >
                        <p className="text-sm text-text-muted leading-relaxed">
                          {project.problem}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                          <button
                            onClick={() => setSelectedId(project.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline cursor-pointer"
                          >
                            <span>Inspect Architecture &amp; Case Study</span>
                            <ArrowRight className="size-3.5" />
                          </button>

                          <div className="flex items-center gap-3">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} GitHub repository`}
                                className="inline-flex items-center gap-1 font-mono text-xs text-text-muted hover:text-text-base"
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
          </section>

          {/* Bottom CTA */}
          <CallToAction />
        </main>

        {/* Modal Overlay for Deep Dive with Accessible Focus Trap */}
        <AnimatePresence>
          {selectedId && activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
              />

              <motion.div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="portfolio-modal-title"
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar bg-card-bg rounded-2xl border border-border-custom shadow-2xl flex flex-col text-left outline-none"
              >
                {/* Modal Header Media Preview */}
                <div className="relative w-full h-52 sm:h-64 bg-[#0A0E17] border-b border-border-custom/80 overflow-hidden shrink-0">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={() => setSelectedId(null)}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/70 text-white border border-white/10 hover:bg-neutral-900 transition-colors cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-6">
                  {/* Title Bar */}
                  <div className="border-b border-border-custom/50 pb-4">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                      {activeProject.industry}
                    </span>
                    <h3
                      id="portfolio-modal-title"
                      className="font-display text-xl md:text-2xl font-extrabold text-text-base"
                    >
                      {activeProject.title}
                    </h3>
                    <p className="text-xs font-mono text-text-muted mt-1">
                      Classification: {activeProject.client}
                    </p>
                  </div>

                  {/* Problem & Solution State Comparison */}
                  <div className="space-y-6 text-xs md:text-sm text-text-muted leading-relaxed">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border border-border-custom rounded-xl p-4 bg-card-subtle">
                        <span className="font-mono font-bold text-[10px] text-text-muted block mb-1 uppercase tracking-wider">
                          Before (Operational Bottleneck)
                        </span>
                        <p className="text-text-base">
                          {activeProject.beforeState}
                        </p>
                      </div>
                      <div className="border border-primary/20 rounded-xl p-4 bg-primary/5">
                        <span className="font-mono font-bold text-[10px] text-primary block mb-1 uppercase tracking-wider">
                          After (System Outcome)
                        </span>
                        <p className="text-text-base">
                          {activeProject.afterState}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="font-display font-bold text-text-base block mb-1">
                        Architecture &amp; Solution
                      </span>
                      <p>{activeProject.solution}</p>
                    </div>

                    {activeProject.features && (
                      <div>
                        <span className="font-display font-bold text-text-base block mb-2">
                          Key System Features
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeProject.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="border-t border-border-custom/50 pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-text-muted block uppercase">
                          Outcome Summary
                        </span>
                        <span className="text-sm font-display font-bold text-text-base">
                          {activeProject.result}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedId(null)}
                          className="px-4 py-2 rounded-full border border-border-custom hover:bg-card-subtle text-xs font-mono font-bold text-text-muted transition-colors cursor-pointer"
                        >
                          Close
                        </button>
                        {activeProject.githubLink && (
                          <a
                            href={activeProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-border-custom bg-card-bg px-4 py-2 text-xs font-mono font-bold text-text-base hover:border-primary/40 transition-all"
                          >
                            <Code2 className="size-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {activeProject.liveWebsite &&
                          activeProject.liveWebsite !== "#" && (
                            <a
                              href={activeProject.liveWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary-hover text-white px-5 py-2 text-xs font-mono font-bold shadow-sm transition-all"
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
    </PageTransition>
  );
}
