"use client";

import React, { useState } from "react";
import { caseStudies } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0B0F19] flex items-center justify-center">
      {!loaded && !error && (
        <div className="absolute inset-0 skeleton-shimmer z-10" />
      )}
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover object-top transition-all duration-700 group-hover:scale-[1.03] ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-102"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-text-muted gap-2 p-6">
          <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Sparkles className="size-5 text-primary" />
          </div>
          <span className="font-mono text-xs">{alt}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

export default function CaseStudies() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const modalRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  const activeStudy = caseStudies.find((s) => s.id === selectedId);

  // Take the first 6 case studies for richer portfolio exploration
  const allFeatured = caseStudies.slice(0, 6);

  // Distinct categories for filtering
  const categories = ["All", ...Array.from(new Set(allFeatured.map((s) => s.industry.split(" • ")[0])))];

  const filteredStudies = activeCategory === "All"
    ? allFeatured
    : allFeatured.filter((s) => s.industry.includes(activeCategory));

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

    // Initial focus on close button or modal container
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
    <section id="work" className="py-20 md:py-28 relative">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left max-w-2xl">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
              FEATURED PROJECTS
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
              Solutions that drive results
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              We design custom software to address real-world business challenges.
            </p>
          </div>
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-custom bg-card-bg hover:bg-neutral-50 dark:hover:bg-neutral-900 text-xs font-mono font-bold text-text-base transition-all hover:border-primary/40 shadow-sm"
            >
              <span>View all projects</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? "bg-primary text-white font-bold shadow-md shadow-primary/20"
                  : "bg-card-bg/80 border border-border-custom text-text-muted hover:text-text-base hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredStudies.map((study) => (
              <motion.div
                layout
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="hog-card rounded-3xl overflow-hidden bg-card-bg/80 backdrop-blur-md border border-border-custom hover:border-primary/40 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Realistic macOS Browser Mockup Frame */}
                <div 
                  onClick={() => setSelectedId(study.id)}
                  className="w-full bg-[#111827] border-b border-white/10 cursor-pointer flex flex-col group/mockup"
                >
                  {/* Window Titlebar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F19] border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-[#FF5F56]" />
                      <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
                      <span className="size-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/50 truncate max-w-[180px]">
                      {study.client}
                    </div>
                    <div className="w-10 flex justify-end">
                      <span className="text-[9px] font-mono text-primary font-semibold">Live Preview</span>
                    </div>
                  </div>

                  {/* Real Project Image with Shimmer Placeholder */}
                  <div className="w-full aspect-[16/10] relative">
                    <ProjectImage src={study.image} alt={study.title} />
                  </div>
                </div>

                {/* Info section */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                        {study.industry}
                      </span>
                      {study.duration && (
                        <span className="text-[10px] font-mono text-text-muted">
                          {study.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="font-sans text-xl md:text-2xl font-bold text-text-base mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6 line-clamp-2">
                      {study.solution}
                    </p>
                  </div>
                  
                  {study.result && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg mb-4 w-fit">
                      <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="font-semibold line-clamp-1">{study.result}</span>
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedId(study.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline self-start cursor-pointer"
                  >
                    <span>View case study</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay details */}
        <AnimatePresence>
          {selectedId && activeStudy && (
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
                aria-labelledby="case-study-title"
                tabIndex={-1}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar bg-card-bg rounded-[28px] border border-border-custom shadow-2xl flex flex-col text-left outline-none"
              >
                {/* Modal Header Media Preview */}
                <div className="relative w-full h-48 sm:h-60 bg-neutral-900 border-b border-border-custom/80 overflow-hidden shrink-0">
                  <ProjectImage src={activeStudy.image} alt={activeStudy.title} />
                  <button
                    onClick={() => setSelectedId(null)}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/70 text-white border border-white/10 hover:bg-neutral-900 transition-colors"
                  >
                    <X className="size-4" />
                  </button>
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-6">
                  {/* Title Bar */}
                  <div className="border-b border-border-custom/50 pb-4">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                      {activeStudy.industry}
                    </span>
                    <h3 id="case-study-title" className="font-sans text-2xl md:text-3xl font-bold text-text-base">{activeStudy.title}</h3>
                    <p className="text-xs text-text-muted mt-1">Client: {activeStudy.client}</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 text-xs md:text-sm text-text-muted leading-relaxed">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="border border-border-custom/60 rounded-2xl p-4 bg-red-500/5">
                        <span className="font-bold text-[10px] text-red-600 block mb-1 uppercase tracking-wider">❌ Before (manual bottleneck)</span>
                        <p className="text-text-base">{activeStudy.beforeState}</p>
                      </div>
                      <div className="border border-border-custom/60 rounded-2xl p-4 bg-emerald-500/5">
                        <span className="font-bold text-[10px] text-emerald-600 block mb-1 uppercase tracking-wider">✅ After (automated outcome)</span>
                        <p className="text-text-base">{activeStudy.afterState}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-sans font-bold text-text-base block mb-1">Operational system built</span>
                      <p>{activeStudy.solution}</p>
                    </div>

                    {activeStudy.features && (
                      <div>
                        <span className="font-sans font-bold text-text-base block mb-2">Key system features</span>
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

                    <div className="border-t border-border-custom/50 pt-4 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono text-text-muted block uppercase">Measurable result</span>
                        <span className="text-base md:text-lg font-bold text-primary">{activeStudy.result}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedId(null)}
                          className="px-4 py-2.5 rounded-xl border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-semibold text-text-muted transition-colors cursor-pointer"
                        >
                          Close
                        </button>
                        {activeStudy.liveWebsite && activeStudy.liveWebsite !== "#" && (
                          <a
                            href={activeStudy.liveWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-2.5 text-xs font-semibold shadow-sm transition-all"
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
