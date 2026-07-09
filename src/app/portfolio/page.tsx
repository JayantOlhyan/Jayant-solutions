"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, X, ExternalLink } from "lucide-react";
import CallToAction from "@/components/CallToAction";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const stats = [
    { number: "50+", label: "Projects Delivered", desc: "Across industries" },
    { number: "100%", label: "Client Satisfaction", desc: "We build relationships" },
    { number: "5+", label: "Years of Experience", desc: "Building digital solutions" },
    { number: "10+", label: "Industries Served", desc: "Startups to Enterprises" },
  ];

  const filterTabs = [
    "All",
    "AI / ML",
    "Web Applications",
    "Mobile Apps",
    "Platforms",
    "Automation",
    "Business Solutions",
  ];

  const projects = [
    {
      id: "healthkinator",
      title: "Healthkinator",
      category: "AI / ML",
      industry: "AI / Healthcare",
      client: "Healthcare Platform",
      description: "AI-powered symptom checker that provides intelligent health insights and recommendations.",
      before: "Patients waited hours for diagnostic triage or relied on unreliable online web search forums.",
      after: "Instant, co-authored research-supported AI diagnostic triage reduces wait time by 80%.",
      solution: "Deploys multi-agent diagnostic LLM trained on verified clinical datasets with immediate triage output.",
      result: "80% diagnostic efficiency",
      features: ["Clinical LLM integrations", "Automated patient intake triage", "Symptom tracking logs"],
    },
    {
      id: "teachersathi",
      title: "Teacher Sathi",
      category: "AI / ML",
      industry: "AI / Education",
      client: "EdTech Startup",
      description: "AI voice assistant for teachers to save time, manage tasks, and enhance productivity.",
      before: "Teachers spent 10+ hours weekly grading, lesson planning, and inputting manual student logs.",
      after: "Voice-activated AI assistant automated administrative tasks in under 12 minutes daily.",
      solution: "Speech-to-text integration with custom LLM prompts tailored for pedagogical lesson plans and school board rules.",
      result: "10+ hours saved weekly",
      features: ["Speech-to-text lesson builder", "Automated grading rubric engine", "Student progress reporting"],
    },
    {
      id: "weact",
      title: "WeAct",
      category: "Platforms",
      industry: "Platform / NGO",
      client: "Global NGO Network",
      description: "NGO platform connecting volunteers with communities and driving real impact.",
      before: "Volunteers had no unified directory, leading to offline coordination bottlenecks and resource mismatch.",
      after: "A real-time dispatch dashboard matches volunteers to regional needs in under 3 minutes.",
      solution: "Interactive geographic dashboard integrated with SMS/WhatsApp alerts for disaster zones.",
      result: "Under 3 mins coordination",
      features: ["Real-time dispatch system", "Secure geographic directory", "WhatsApp trigger notification hub"],
    },
    {
      id: "sentinelai",
      title: "Sentinel AI",
      category: "AI / ML",
      industry: "AI / Security",
      client: "Security Enterprise",
      description: "Real-time scam detection system using AI and machine learning to protect users.",
      before: "Financial users suffered wire fraud attacks from highly disguised phishing campaigns.",
      after: "AI agent identifies and flags social engineering indicators in under 15 milliseconds.",
      solution: "NLP pattern scanner that flags high-risk communication vectors and holds transactions.",
      result: "15ms scam detection rate",
      features: ["Real-time NLP scanning", "Scam pattern database", "Instant fraud alerting API"],
    },
    {
      id: "khelclan",
      title: "KhelClan",
      category: "Platforms",
      industry: "Platform / Gaming",
      client: "Gaming Startup",
      description: "Gaming community platform for players to connect, compete, and grow together.",
      before: "Clans coordinated tournaments on ad-hoc spreadsheets, making score tracking difficult.",
      after: "Unified tournament engine updates brackets and leaderboards instantly.",
      solution: "Real-time tournament SaaS built on WebSockets with integrated player stats APIs.",
      result: "100% automated tournament brackets",
      features: ["WebSocket matchmaking engine", "Automated leaderboard updates", "Clan management portal"],
    },
    {
      id: "farmiq",
      title: "FarmIQ",
      category: "Automation",
      industry: "AgriTech / AI",
      client: "AgriTech Enterprise",
      description: "Smart farming solution that helps farmers make data-driven decisions and improve yield.",
      before: "Farmers applied irrigation and fertilizer blindly based on static weekly calendars.",
      after: "Real-time soil sensor data feeds AI recommendation logs, reducing water consumption by 35%.",
      solution: "IoT sensor grid linked to cloud AI model providing daily watering and pesticide recommendations.",
      result: "35% water usage reduction",
      features: ["IoT sensor stream integration", "Daily watering crop recommendations", "Pesticide forecast warning logs"],
    },
    {
      id: "civicsetu",
      title: "CivicSetu",
      category: "Web Applications",
      industry: "GovTech / Platform",
      client: "Municipality Board",
      description: "Civic engagement platform bridging the gap between citizens and local government.",
      before: "Citizens filed paper complaints for road repairs, taking weeks to reach municipal engineers.",
      after: "Geo-tagged photo submissions route instantly to nearest field crew dispatcher.",
      solution: "Mobile web portal with location tagging, automated PDF routing, and public status tracking.",
      result: "85% faster ticket resolution",
      features: ["Geo-location photo uploader", "Automated PDF route dispatcher", "Citizen alert tracking board"],
    },
    {
      id: "janganana",
      title: "JanGanana Digital",
      category: "Business Solutions",
      industry: "GovTech / Data Platform",
      client: "National Census Bureau",
      description: "Digital census platform for accurate data collection and social impact analytics.",
      before: "Data collectors filled paper logs in rural areas, taking months to digitalize and tabulate.",
      after: "Offline-first tablet app syncs local encrypted census records to cloud instantly.",
      solution: "React Native offline data storage system with end-to-end database synchronization rules.",
      result: "90% faster census tabulation",
      features: ["Offline SQLite data storage", "E2E data synchronization rules", "Real-time demography analytics dashboard"],
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.industry.includes(activeFilter));

  const activeProject = projects.find((p) => p.id === selectedId);

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Portfolio Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR PORTFOLIO
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Solutions We&apos;ve Built.{" "}
                <span className="text-primary block sm:inline">Impact We Deliver.</span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                From AI-powered platforms to full-stack web applications, we build digital products that solve real problems and create measurable impact.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#projects-grid"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right stats counter grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 md:p-6 border border-border-custom bg-card-bg/40 flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-serif font-black text-primary">{stat.number}</span>
                  <h4 className="font-serif text-xs md:text-sm font-bold text-text-base">{stat.label}</h4>
                  <p className="text-[10px] md:text-xs text-text-muted">{stat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Filters and Grid */}
          <section id="projects-grid" className="py-8 relative">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-12">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                    activeFilter === tab
                      ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-950 shadow-sm"
                      : "bg-white border-border-custom text-text-muted hover:text-text-base dark:bg-card-bg/40"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="hog-card rounded-3xl overflow-hidden border border-border-custom bg-card-bg/50 flex flex-col h-full group"
                >
                  {/* Mock Image Representation */}
                  <div 
                    onClick={() => setSelectedId(project.id)}
                    className="w-full aspect-[4/3] bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center p-4 cursor-pointer overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,138,0,0.1),transparent)]" />
                    
                    {/* Mock dashboard card */}
                    <div className="w-[85%] h-[85%] rounded-t-lg bg-[#0B0F19] border border-white/10 shadow-lg flex flex-col overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/5 bg-[#121824]/50 text-[7px] text-white/30 uppercase font-mono tracking-widest">
                        <span>{project.client}</span>
                      </div>
                      <div className="flex-1 p-3 flex flex-col gap-2 font-mono text-[8px] text-white/40 text-left">
                        <span className="text-[9px] font-bold text-white leading-none mb-1">{project.title}</span>
                        <div className="h-2 bg-white/5 rounded w-3/4" />
                        <div className="h-2 bg-white/5 rounded w-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded mb-2 inline-block">
                        {project.industry}
                      </span>
                      <h3 className="font-serif text-base md:text-lg font-bold text-text-base leading-snug mb-1">{project.title}</h3>
                      <p className="text-[10px] md:text-xs text-text-muted leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedId(project.id)}
                      className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline self-start"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </section>

          {/* Commitment Banner */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.04),transparent)] pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
                OUR COMMITMENT
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                We don&apos;t just build products, we build partnerships.
              </h3>
              <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                Every project we take on is a partnership focused on understanding your goals, solving the right problems, and delivering solutions that drive long-term growth.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> Transparent Communication
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> On-Time Delivery
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" /> Long-Term Support
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Detail Modal Overlay */}
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
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card-bg rounded-[28px] p-6 md:p-10 border border-border-custom shadow-2xl flex flex-col gap-6 text-left"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start border-b border-border-custom/50 pb-4">
                    <div>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-2 inline-block">
                        {activeProject.industry}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base">{activeProject.title}</h3>
                      <p className="text-xs text-text-muted mt-1">Client: {activeProject.client}</p>
                    </div>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="p-1.5 rounded-lg border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                    >
                      <X className="size-4 text-text-base" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 text-xs md:text-sm text-text-muted leading-relaxed">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="border border-border-custom/60 rounded-2xl p-4 bg-red-500/5">
                        <span className="font-bold text-[10px] text-red-600 block mb-1 uppercase tracking-wider">❌ Before</span>
                        <p className="text-text-base">{activeProject.before}</p>
                      </div>
                      <div className="border border-border-custom/60 rounded-2xl p-4 bg-emerald-500/5">
                        <span className="font-bold text-[10px] text-emerald-600 block mb-1 uppercase tracking-wider">✅ After</span>
                        <p className="text-text-base">{activeProject.after}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-serif font-bold text-text-base block mb-1">Operational Helper Built</span>
                      <p>{activeProject.solution}</p>
                    </div>

                    <div>
                      <span className="font-serif font-bold text-text-base block mb-2">Key System Features</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeProject.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-border-custom/50 pt-4 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-text-muted block uppercase">Measurable Result</span>
                        <span className="text-base md:text-lg font-bold text-primary">{activeProject.result}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <CallToAction />

        </main>
      </div>
    </PageTransition>
  );
}
