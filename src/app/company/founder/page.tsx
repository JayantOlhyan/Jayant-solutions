"use client";

import React from "react";
import JsonLd from "@/components/seo/JsonLd";
import { createProfilePageSchema } from "@/lib/seo/schema";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import CallToAction from "@/components/CallToAction";

export default function FounderPage() {
  const stats = [
    { index: "01", number: "Direct", label: "Founder Execution" },
    { index: "02", number: "30+", label: "Hackathons & Tracks" },
    { index: "03", number: "100%", label: "Source Code Transfer" },
    { index: "04", number: "Fixed", label: "Milestone Governance" },
  ];

  const principles = [
    "Performance-first frontend and API engineering",
    "Accessible, responsive interfaces across all viewports",
    "Modular, typed architectures built for long-term maintenance",
    "Transparent communication without account-manager relays",
    "Pragmatic AI integrations grounded in real operational workflows",
    "Documented repositories with complete IP handover",
  ];

  const milestones = [
    {
      year: "Foundation",
      title:
        "B.Tech in Computer Science at Maharaja Surajmal Institute of Technology (MSIT), New Delhi & Lead at the MSIT Web Development Society.",
    },
    {
      year: "Data & AI",
      title:
        "Pursued Online BSc (Hons) in Data Science and Artificial Intelligence from IIT Guwahati, combining mathematical foundations with production ML systems.",
    },
    {
      year: "Shipped Systems",
      title:
        "Architected and delivered systems across education (Teacher Sathi, MSIT Portal), healthcare triage (Healthkinator), cybersecurity (Sentinel AI), and civic tech (CivicSetu).",
    },
    {
      year: "JAYANT SYSTEMS",
      title:
        "Established JAYANT SYSTEMS as a founder-led technology studio helping businesses design and engineer websites, custom software, and AI workflows.",
    },
  ];

  return (
    <>
      <JsonLd schema={createProfilePageSchema()} />
      <PageTransition>
        <div className="hog-grid min-h-screen pb-24 pt-10 text-left">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-20 md:gap-28">
            {/* Editorial Founder Hero */}
            <section className="pt-8 border-b border-border-custom pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                <div className="lg:col-span-7">
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-4">
                    JAYANT SYSTEMS &bull; FOUNDER PROFILE
                  </span>
                  <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-base mb-6">
                    Jayant Olhyan.{" "}
                    <span className="text-primary block sm:inline">
                      Founder &amp; Lead Engineer.
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mb-8">
                    I founded JAYANT SYSTEMS to give businesses and organizations direct access to senior engineering execution—turning complex operational challenges into clean, reliable websites, software products, and AI workflows.
                  </p>

                  <div className="flex flex-wrap items-center gap-3.5">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-7 py-3.5 text-xs font-display font-bold transition-all"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border-custom bg-card-bg hover:border-primary px-6 py-3.5 text-xs font-display font-bold text-text-base transition-all"
                    >
                      <span>Inspect Shipped Work</span>
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Portrait Stage */}
                <div className="lg:col-span-5">
                  <div className="metalab-stage relative aspect-[4/5] w-full max-w-[420px] lg:ml-auto">
                    <Image
                      src="/jayant.webp"
                      alt="Jayant Olhyan — Founder and Lead Engineer at JAYANT SYSTEMS"
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/70 to-transparent p-6">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF8A00] block">
                        New Delhi, India &bull; Remote Globally
                      </span>
                      <span className="font-display text-xl font-extrabold text-white">
                        Jayant Olhyan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4-Column Hairline Ledger */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 mt-12 border-t border-border-custom">
                {stats.map((stat) => (
                  <div key={stat.index} className="flex flex-col gap-1">
                    <span className="font-mono text-xs font-bold text-primary">
                      /{stat.index}
                    </span>
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-text-base tracking-tight">
                      {stat.number}
                    </span>
                    <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Editorial Long-Form Biography */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-border-custom pb-20">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-2">
                  01 / Engineering Background
                </span>
                <h2 className="metalab-subheadline text-3xl sm:text-4xl font-extrabold text-text-base mb-4">
                  Hands-on systems architecture.
                </h2>
                <div className="flex flex-col gap-2 pt-4 border-t border-border-custom font-mono text-xs">
                  <a
                    href="https://github.com/JayantOlhyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-base hover:text-primary"
                  >
                    <span>GitHub (@JayantOlhyan)</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jayant-olhyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-base hover:text-primary"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-6 text-sm sm:text-base text-text-muted leading-relaxed">
                <p className="text-text-base font-medium text-base sm:text-lg">
                  I am Jayant Olhyan, a software engineer and the founder of JAYANT SYSTEMS, based in Dwarka, New Delhi. My work focuses on bridging complex full-stack and AI architectural requirements with practical business outcomes.
                </p>
                <p>
                  My formal engineering foundation was built at Maharaja Surajmal Institute of Technology (MSIT), New Delhi, where I also served as Lead of the MSIT Web Development Society—mentoring peers, architecting student portals, and running applied workshops on modern web engineering, state management, and deployment pipelines.
                </p>
                <p>
                  Alongside my computer science studies, I pursued the Online BSc (Hons) in Data Science and Artificial Intelligence at IIT Guwahati, combining mathematical foundations in probability and optimization with practical machine learning and LLM system deployment.
                </p>
                <p>
                  Across client engagements, institutional builds, and national hackathons, I have architected and shipped systems including <strong>Teacher Sathi</strong> (educator classroom workspace), <strong>Healthkinator</strong> (bilingual AI symptom triage), <strong>Sentinel AI</strong> (phishing and fraud detection), <strong>CivicSetu</strong> (municipal grievance portal), and <strong>FarmIQ</strong> (agricultural telemetry and advisory).
                </p>
                <p>
                  At JAYANT SYSTEMS, I lead every engagement personally. Our production stack centers on Next.js, React, TypeScript, Tailwind CSS, Python FastAPI, PostgreSQL, and practical LLM integrations—chosen so every system we hand over is fast, accessible, and straightforward for your organization to maintain.
                </p>

                <div className="pt-4">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-border-custom bg-card-bg hover:border-primary px-6 py-3 text-xs font-mono font-bold text-text-base transition-colors"
                  >
                    <span>Download Technical Resume (PDF)</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Engineering Principles + Timeline */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0A0E17] border border-slate-800 text-white">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF8A00] font-bold block mb-2">
                  02 / Technical Standards
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-6">
                  Engineering Principles
                </h2>
                <ul className="space-y-3.5">
                  {principles.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed"
                    >
                      <CheckCircle2 className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold block mb-2">
                  03 / Track Record
                </span>
                <h2 className="metalab-subheadline text-2xl sm:text-3xl font-extrabold text-text-base mb-6">
                  Key Milestones
                </h2>
                <div className="divide-y divide-border-custom border-t border-b border-border-custom">
                  {milestones.map((m) => (
                    <div
                      key={m.year}
                      className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                    >
                      <span className="sm:col-span-3 font-mono text-xs font-bold text-primary uppercase tracking-wider">
                        {m.year}
                      </span>
                      <p className="sm:col-span-9 text-sm text-text-muted leading-relaxed">
                        {m.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <CallToAction />
          </main>
        </div>
      </PageTransition>
    </>
  );
}
