"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Shield, Download, Star } from "lucide-react";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = [
    "All",
    "Web Development",
    "AI & ML Solutions",
    "SaaS Development",
    "Mobile Apps",
    "Automation",
    "Business Solutions",
  ];

  const cases = [
    {
      title: "Healthkinator – AI Symptom Checker Platform",
      category: "AI & ML Solutions",
      desc: "We built an intelligent symptom checker platform that uses AI to analyze user inputs and provide possible conditions with precautionary recommendations.",
      stats: [
        { label: "Users", value: "150K+" },
        { label: "Increase in engagement", value: "60%" },
        { label: "More Consultations", value: "3.2x" },
      ],
      avatar: "🏥",
    },
    {
      title: "FlowForge – Automation & Productivity Platform",
      category: "SaaS Development",
      desc: "A no-code/low-code automation platform that helps businesses streamline workflows, integrate tools, and boost productivity.",
      stats: [
        { label: "Active Users", value: "10K+" },
        { label: "Time Saved", value: "45%" },
        { label: "Reduction in Costs", value: "30%" },
      ],
      avatar: "⚙️",
    },
    {
      title: "Sentinel AI – Scam & Fraud Detection System",
      category: "AI & ML Solutions",
      desc: "An AI-powered system that detects and flags suspicious SMS and transactions in real-time to protect users from fraud.",
      stats: [
        { label: "Detection Accuracy", value: "98.7%" },
        { label: "Threats Detected", value: "25K+" },
        { label: "Faster Response", value: "70%" },
      ],
      avatar: "🛡️",
    },
    {
      title: "MSIT – College Website Redesign",
      category: "Web Development",
      desc: "We redesigned the official college website with a modern UI/UX, improved performance, and an easy-to-manage CMS.",
      stats: [
        { label: "Faster Performance", value: "2.5x" },
        { label: "Increase in Traffic", value: "35%" },
        { label: "Mobile Responsive", value: "100%" },
      ],
      avatar: "🏫",
    },
  ];

  const filteredCases = activeFilter === "All"
    ? cases
    : cases.filter((c) => c.category === activeFilter);

  const trustPoints = [
    "We understand your business goals and challenges.",
    "We build tailored solutions that deliver real results.",
    "We ensure transparency, timely delivery, and long-term support.",
    "We focus on measurable impact and continuous improvement.",
  ];

  const industriesList = [
    "Healthcare",
    "Education",
    "Fintech",
    "E-commerce",
    "Real Estate",
    "SaaS",
    "Logistics & Supply Chain",
    "Startups & SMEs",
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Resources</span>
            <span>&gt;</span>
            <span className="text-text-base">Case Studies</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                CASE STUDIES
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Real Challenges. <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Proven Results.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Explore how we help businesses turn ideas into powerful digital solutions that drive growth, efficiency, and impact.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">🎯 Business-Focused Solutions</span>
                <span className="flex items-center gap-1">📈 Measurable Impact</span>
                <span className="flex items-center gap-1">🤝 End-to-End Partnership</span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <span className="text-3xl font-serif font-black text-primary leading-none mb-1">↑ 240%</span>
                  <h4 className="font-serif text-sm font-bold text-white mb-2">Increase in Leads</h4>
                  <p className="text-xs text-white/60">Results That Drive Growth</p>
                </div>
              </div>
            </div>

          </section>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center py-4 border-t border-border-custom/20 pt-8">
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
                {tab === "All" ? "All Case Studies" : tab}
              </button>
            ))}
          </div>

          {/* Split grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
            
            {/* Left Case Studies Cards */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-left w-full">
              {filteredCases.map((c, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-3xl overflow-hidden border border-border-custom bg-card-bg/40 flex flex-col sm:flex-row h-full group"
                >
                  <div className="w-full sm:w-[35%] bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center p-6 shrink-0 text-5xl">
                    {c.avatar}
                  </div>
                  <div className="p-6 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded mb-2.5 inline-block">
                        {c.category}
                      </span>
                      <h4 className="font-serif text-sm md:text-base font-bold text-text-base leading-snug mb-1 group-hover:text-primary transition-colors">
                        {c.title}
                      </h4>
                      <p className="text-[10px] md:text-xs text-text-muted leading-relaxed mb-4">{c.desc}</p>
                      
                      {/* Stats grid */}
                      <div className="grid grid-cols-3 gap-3 border-t border-border-custom/30 pt-4 mt-4 w-full">
                        {c.stats.map((stat, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-sm md:text-base font-serif font-black text-primary leading-none">{stat.value}</span>
                            <span className="text-[8px] font-mono text-text-muted mt-0.5 leading-tight">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/portfolio" className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline mt-6">
                      <span>View Case Study</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8 text-left w-full">
              
              {/* Why clients trust us */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-base font-bold text-text-base border-b border-border-custom pb-2">
                  Why Our Clients Trust Us
                </h3>
                <div className="space-y-4">
                  {trustPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[10px] md:text-xs text-text-muted leading-relaxed">
                      <Star className="size-3.5 fill-primary text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Portfolio PDF */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-[#0B0F19] border border-white/10 flex flex-col gap-4 text-white">
                <h3 className="font-serif text-base font-bold text-white border-b border-white/5 pb-2">
                  Want to see more?
                </h3>
                <p className="text-[10px] text-white/70 leading-relaxed">
                  Download our case studies portfolio (PDF) to explore more success stories.
                </p>
                <a
                  href="/jayant_systems_portfolio.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white py-2.5 text-xs font-mono font-bold transition-all shadow-sm mt-4"
                >
                  <Download className="size-4" />
                  <span>Download Portfolio</span>
                </a>
              </div>

              {/* Industries list */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-base font-bold text-text-base border-b border-border-custom pb-2">
                  Industries We Work With
                </h3>
                <div className="grid grid-cols-1 gap-2.5 text-[10px] md:text-xs text-text-muted">
                  {industriesList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="size-3.5 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </section>

          {/* Bottom CTA */}
          <section className="border border-border-custom bg-card-bg/40 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-serif text-sm md:text-base font-bold text-text-base mb-1">Have a similar challenge?</h4>
              <p className="text-[10px] md:text-xs text-text-muted">Let&apos;s build a solution that drives real impact for your business.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-xs font-mono font-bold text-white transition-colors shrink-0 shadow-md"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="size-4" />
            </Link>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
