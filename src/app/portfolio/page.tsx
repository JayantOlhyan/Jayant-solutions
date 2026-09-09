"use client";

import React, { useState, useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, X, ExternalLink, Code2, Sparkles, Filter } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { caseStudies as sharedCaseStudies, type CaseStudy } from "@/data/content";

export interface PortfolioProject extends CaseStudy {
  category: "AI / ML" | "Web Applications" | "Mobile Apps" | "Platforms" | "Automation" | "Business Solutions";
}

const additionalProjects: PortfolioProject[] = [
  {
    id: "ai-mock-interviewer",
    title: "AI Mock Interviewer",
    client: "EdTech Platform",
    category: "AI / ML",
    industry: "AI / Education",
    problem: "Candidates lack real-time feedback when practicing behavioral and technical interview questions.",
    beforeState: "Manual practice sessions with peers yielded inconsistent critique and zero metrics.",
    solution: "Real-time AI voice interviewer with instant transcription, pacing analysis, and rubric evaluation.",
    afterState: "Candidates receive comprehensive rubric scoring and answer revisions in under 10 seconds.",
    result: "92% interview readiness improvement",
    tech: ["Next.js", "OpenAI Whisper", "GPT-4o", "Tailwind CSS", "TypeScript"],
    image: "/projects/teachersathi.webp",
    duration: "3 Weeks",
    features: ["Real-time audio transcription", "Pacing & filler-word telemetry", "Structured rubric reports"],
  },
  {
    id: "ai-voice-agent",
    title: "AI Voice Agent",
    client: "Customer Support Portal",
    category: "Mobile Apps",
    industry: "AI / Voice Telephony",
    problem: "Call centers experience high drop-off rates during peak call volume hours.",
    beforeState: "Customers waited on hold for an average of 14 minutes to resolve basic billing questions.",
    solution: "Low-latency streaming voice agent running on WebSockets with custom tool calling.",
    afterState: "Zero queue wait time with 75% first-call resolution of routine requests.",
    result: "75% automated resolution rate",
    tech: ["React Native", "WebSockets", "FastAPI", "Python", "ElevenLabs"],
    image: "/projects/sentinelai.webp",
    duration: "4 Weeks",
    features: ["Sub-500ms voice response latency", "CRM record lookups", "Live operator handoff"],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    client: "CloudOps Enterprise",
    category: "Web Applications",
    industry: "SaaS / Cloud Analytics",
    problem: "Engineering teams lacked unified visibility into distributed microservice telemetry and costs.",
    beforeState: "Engineers logged into 4 separate cloud consoles to correlate performance anomalies.",
    solution: "Centralized real-time observability dashboard built with Next.js App Router and PostgreSQL.",
    afterState: "Aggregated metric graphs and anomaly alerts render in a single unified view.",
    result: "60% faster incident response",
    tech: ["Next.js 15", "PostgreSQL", "Tailwind CSS", "Recharts", "Prisma"],
    image: "/projects/flowforge.webp",
    duration: "4 Weeks",
    features: ["Real-time metric telemetry", "Role-based access control", "Automated cost anomaly alerts"],
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Engine",
    client: "Direct-to-Consumer Retail",
    category: "Platforms",
    industry: "Retail / E-Commerce",
    problem: "Legacy e-commerce store suffered from 4.8s page loads and high checkout cart abandonment.",
    beforeState: "Monolithic storefront had 4.8s TTFB and 72% mobile abandonment rate.",
    solution: "Headless e-commerce storefront with server-rendered product catalog and 1-click checkout.",
    afterState: "Sub-second product loads and a streamlined checkout flow.",
    result: "42% increase in mobile conversion",
    tech: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Stripe", "TypeScript"],
    image: "/projects/khelclan.webp",
    duration: "5 Weeks",
    features: ["Instant client-side cart", "Automated inventory sync", "1-click checkout"],
  },
  {
    id: "workflow-automation",
    title: "Enterprise Workflow Automation",
    client: "Logistics Enterprise",
    category: "Automation",
    industry: "Enterprise / Automation",
    problem: "Dispatch operators manually re-entered delivery orders between spreadsheets and warehouse ERPs.",
    beforeState: "Operators spent 3 hours each morning copy-pasting order manifests with frequent typos.",
    solution: "Autonomous event-driven pipeline orchestrating webhook triggers between inventory and dispatch.",
    afterState: "Orders process in 200ms with zero manual data entry.",
    result: "3 hours saved daily per operator",
    tech: ["Node.js", "FastAPI", "PostgreSQL", "Docker", "Redis"],
    image: "/projects/flowforge.webp",
    duration: "3 Weeks",
    features: ["Bi-directional webhook sync", "Automated retry queue", "Discord/Slack error alerting"],
  },
  {
    id: "janganana",
    title: "JanGanana Digital",
    client: "National Census Bureau",
    category: "Business Solutions",
    industry: "GovTech / Data Platform",
    problem: "Data collectors filled paper logs in rural areas, taking months to digitalize and tabulate.",
    beforeState: "Data collectors filled paper logs in rural areas, taking months to digitalize and tabulate.",
    solution: "Offline-first tablet app syncs local encrypted census records to cloud instantly.",
    afterState: "Offline-first tablet app syncs local encrypted census records to cloud instantly.",
    result: "90% faster census tabulation",
    tech: ["React Native", "SQLite", "Node.js", "PostgreSQL"],
    image: "/projects/civicsetu.webp",
    duration: "6 Weeks",
    features: ["Offline SQLite data storage", "E2E data synchronization rules", "Real-time demography analytics dashboard"],
  },
];

// Map shared case studies to categories
const mappedSharedStudies: PortfolioProject[] = sharedCaseStudies.map((cs) => {
  let cat: PortfolioProject["category"] = "Web Applications";
  const ind = cs.industry.toLowerCase();
  const id = cs.id.toLowerCase();
  if (id === "healthkinator" || id === "teachersathi" || id === "sentinelai" || ind.includes("ai")) {
    cat = "AI / ML";
  } else if (id === "rakshatap" || ind.includes("mobile")) {
    cat = "Mobile Apps";
  } else if (id === "weact" || id === "khelclan" || id === "yaperz" || ind.includes("platform")) {
    cat = "Platforms";
  } else if (id === "flowforge" || id === "farmiq" || ind.includes("automation") || ind.includes("agritech")) {
    cat = "Automation";
  }
  return {
    ...cs,
    category: cat,
  };
});

// Complete deduplicated unified project list preserving all original items
const allPortfolioProjects: PortfolioProject[] = [
  ...mappedSharedStudies,
  ...additionalProjects.filter((p) => !mappedSharedStudies.some((s) => s.id === p.id)),
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Original statistics preserved
  const stats = [
    { number: "25+", label: "Completed Projects", desc: "Full-stack apps, prototypes & tools" },
    { number: "Direct", label: "Developer Access", desc: "Direct engineering collaboration" },
    { number: "30+", label: "Hackathons & Tracks", desc: "Recognized across university & tech tracks" },
    { number: "10+", label: "Specialized Domains", desc: "Healthcare, EdTech, SaaS & Automation" },
  ];

  // Original complete filter categories restored
  const filterTabs = [
    "All",
    "AI / ML",
    "Web Applications",
    "Mobile Apps",
    "Platforms",
    "Automation",
    "Business Solutions",
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

  const filteredProjects = activeFilter === "All"
    ? allPortfolioProjects
    : allPortfolioProjects.filter((p) => p.category === activeFilter || p.industry.toLowerCase().includes(activeFilter.toLowerCase()));

  const activeProject = allPortfolioProjects.find((p) => p.id === selectedId);

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-8 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-16 md:gap-24">
          
          {/* Portfolio Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-6">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR PORTFOLIO
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Solutions We&apos;ve Built.{" "}
                <span className="text-primary block sm:inline">Impact I deliver.</span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                From AI-powered platforms to full-stack web applications, I build digital products that solve real problems and create measurable impact.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#projects-grid"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-card-bg hover:border-primary/40 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right stats counter grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-5 md:p-6 border border-border-custom bg-card-bg/60 flex flex-col gap-1 shadow-sm hover:border-primary/30 transition-all">
                  <span className="text-2xl md:text-3xl font-serif font-black text-primary">{stat.number}</span>
                  <h4 className="font-serif text-xs md:text-sm font-bold text-text-base">{stat.label}</h4>
                  <p className="text-[10px] md:text-xs text-text-muted">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Filters and Grid */}
          <section id="projects-grid" className="py-4 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div className="flex items-center gap-2">
                <Filter className="size-4 text-primary" />
                <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-bold">Filter By Domain:</span>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border ${
                      activeFilter === tab
                        ? "bg-primary border-primary text-white shadow-sm"
                        : "bg-card-bg/70 border-border-custom text-text-muted hover:border-primary/40 hover:text-text-base"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card rounded-3xl overflow-hidden border border-border-custom hover:border-primary/50 bg-card-bg/70 flex flex-col h-full group hover:shadow-[0_12px_32px_rgba(255,138,0,0.08)] transition-all duration-300"
                >
                  {/* Real WebP Project Image */}
                  <div 
                    onClick={() => setSelectedId(project.id)}
                    className="w-full aspect-[16/10] bg-neutral-900/90 relative overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Badge over image */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 px-2.5 py-0.5 rounded-full">
                        {project.client}
                      </span>
                    </div>

                    {project.liveWebsite && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-mono flex items-center gap-1 text-emerald-400 bg-black/60 backdrop-blur-md border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info block */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                          {project.industry}
                        </span>
                        {project.duration && (
                          <span className="text-[10px] font-mono text-text-muted">
                            {project.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="font-sans text-lg md:text-xl font-bold text-text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-2">
                        {project.problem}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 4).map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-card-bg border border-border-custom text-text-muted"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded text-text-muted">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border-custom/50 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedId(project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:underline cursor-pointer"
                      >
                        <span>Deep-dive Breakdown</span>
                        <ArrowRight className="size-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} GitHub repository`}
                            className="p-1.5 rounded-lg border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                          >
                            <Code2 className="size-3.5 text-text-muted" />
                          </a>
                        )}
                        {project.liveWebsite && (
                          <a
                            href={project.liveWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title} live website`}
                            className="p-1.5 rounded-lg border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                          >
                            <ExternalLink className="size-3.5 text-text-muted" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Banner */}
          <section className="mt-8">
            <div className="rounded-[32px] p-8 md:p-12 border border-border-custom bg-gradient-to-br from-card-bg via-card-bg to-primary/5 shadow-xl relative overflow-hidden text-center md:text-left">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 flex flex-col items-center md:items-start gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Have a similar project?</span>
                  <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base leading-tight">
                    Let&apos;s build software that actually delivers results.
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted max-w-lg">
                    Schedule a free 15-minute consultation directly with me. We&apos;ll discuss your product goals, technical stack, and project roadmap.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-center md:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-mono font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    <span>Schedule Free Strategy Call</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

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
                className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card-bg rounded-[28px] border border-border-custom shadow-2xl flex flex-col text-left outline-none"
              >
                {/* Modal Header Media Preview */}
                <div className="relative w-full aspect-[21/9] bg-neutral-900 border-b border-border-custom/80 overflow-hidden">
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
                    <h3 id="portfolio-modal-title" className="font-sans text-xl md:text-2xl font-bold text-text-base">{activeProject.title}</h3>
                    <p className="text-xs text-text-muted mt-1">Client: {activeProject.client}</p>
                  </div>

                  {/* Problem & Solution State Comparison */}
                  <div className="space-y-6 text-xs md:text-sm text-text-muted leading-relaxed">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border border-border-custom/60 rounded-2xl p-4 bg-red-500/5">
                        <span className="font-bold text-[10px] text-red-600 block mb-1 uppercase tracking-wider">Before (Operational Bottleneck)</span>
                        <p className="text-text-base">{activeProject.beforeState}</p>
                      </div>
                      <div className="border border-border-custom/60 rounded-2xl p-4 bg-emerald-500/5">
                        <span className="font-bold text-[10px] text-emerald-600 block mb-1 uppercase tracking-wider">After (System Outcome)</span>
                        <p className="text-text-base">{activeProject.afterState}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-sans font-bold text-text-base block mb-1">Architecture & Solution</span>
                      <p>{activeProject.solution}</p>
                    </div>

                    {activeProject.features && (
                      <div>
                        <span className="font-sans font-bold text-text-base block mb-2">Key System Features</span>
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
                        <span className="text-[10px] font-mono text-text-muted block uppercase">Measurable Result</span>
                        <span className="text-base font-bold text-primary">{activeProject.result}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {activeProject.githubLink && (
                          <a
                            href={activeProject.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-border-custom bg-card-bg px-4 py-2 text-xs font-mono font-bold text-text-base hover:border-primary/40 transition-all"
                          >
                            <Code2 className="size-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {activeProject.liveWebsite && activeProject.liveWebsite !== "#" && (
                          <a
                            href={activeProject.liveWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white px-5 py-2 text-xs font-mono font-bold shadow-sm transition-all"
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
