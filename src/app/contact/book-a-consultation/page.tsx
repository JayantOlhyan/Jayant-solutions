"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Mail,
  ArrowRight,
  Sparkles,
  Award,
  GraduationCap,
  Code2,
} from "lucide-react";

export default function BookConsultationPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const sessionPoints = [
    {
      title: "1. Diagnostic & Feasibility",
      desc: "We analyze your project goals, technical constraints, and desired architecture.",
    },
    {
      title: "2. Technology & Stack Selection",
      desc: "We evaluate modern, scalable stacks (Next.js, FastAPI, Python, AI APIs, PostgreSQL).",
    },
    {
      title: "3. Scope & Timeline Estimate",
      desc: "We identify MVP requirements and establish a realistic delivery schedule.",
    },
    {
      title: "4. Written Milestone Proposal",
      desc: "Within 24 hours, you receive a transparent fixed-milestone proposal with zero obligation.",
    },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      label: "Dual CS & AI Pedigree",
      desc: "B.Tech CS (MSIT New Delhi) · BSc Data Science & AI (IIT Guwahati)",
    },
    {
      icon: Award,
      label: "National Winner & Speaker",
      desc: "Winner Elite Hack 1.0 (FarmIQ) · Speaker MRIIRS International AI Conf 2026",
    },
    {
      icon: Code2,
      label: "Founder-Led Delivery",
      desc: "100% direct founder execution · Complete source-code ownership",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-neutral-950 pb-24 pt-6 text-left">
        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-12 md:gap-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-neutral-500 flex items-center gap-2 pt-4">
            <Link href="/" className="hover:text-neutral-950 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-neutral-950 transition-colors">Contact</Link>
            <span>/</span>
            <span className="text-neutral-950 font-medium">Book a Consultation</span>
          </nav>

          {/* Hero Header */}
          <section className="border-b border-neutral-200 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 text-xs font-mono text-neutral-700 mb-4">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>15–20 Min Technical Discovery · 100% Free &amp; Zero Obligation</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-950 leading-[1.08]">
                  Schedule a strategy call with <span className="underline decoration-neutral-300 decoration-2 underline-offset-8">Jayant Olhyan.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Discuss your project requirements, technology stack, and business goals directly with the engineer writing the code.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span>Confidential discussion · NDA available upon request</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Booking Section: Calendar Embed + Sidebar Context */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 cols: Real Interactive Cal.com Scheduler */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold">
                    Live Calendar Availability
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Google Meet
                  </span>
                </div>
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
                >
                  <span>Open in full tab</span>
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="w-full min-h-[640px] md:min-h-[720px] rounded-2xl border border-neutral-200 bg-neutral-50/50 overflow-hidden relative shadow-sm">
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-50 z-10">
                    <div className="size-8 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-mono text-neutral-500">
                      Loading calendar slots from Cal.com...
                    </span>
                  </div>
                )}
                <iframe
                  src="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  className="w-full h-full min-h-[640px] md:min-h-[720px] border-0"
                  allowFullScreen
                  loading="lazy"
                  title="Schedule a Discovery Call with Jayant Olhyan"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>

              <p className="text-xs text-neutral-500 font-mono">
                🌐 All available slots automatically adjust to your local timezone. Google Meet invitation generated upon booking.
              </p>
            </div>

            {/* Right 5 cols: Value proposition, WhatsApp alternative, Credentials */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* WhatsApp Quick-Booking Card */}
              <div className="rounded-xl border border-neutral-900 bg-neutral-950 p-6 text-white flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                    Fastest Response
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-mono">
                    ● Typically &lt; 1 hr
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-white">Need a Slot Today or Have a Quick Question?</h3>
                  <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                    Message Jayant directly on WhatsApp for immediate scheduling or brief questions before booking.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/919667344125?text=Hi%20Jayant,%20I%20would%20like%20to%20schedule%20a%20strategy%20call%20for%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    <span>Chat on WhatsApp (+91 96673 44125)</span>
                  </a>
                </div>
              </div>

              {/* What Happens On The Call */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col gap-4">
                <h3 className="text-base font-medium text-neutral-950">What we cover in 15 minutes</h3>
                <ul className="flex flex-col gap-3 text-sm text-neutral-700">
                  {sessionPoints.map((p) => (
                    <li key={p.title} className="flex flex-col gap-0.5">
                      <span className="font-medium text-neutral-950">{p.title}</span>
                      <span className="text-xs text-neutral-600 leading-relaxed">{p.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Founder Credentials */}
              <div className="rounded-xl border border-neutral-200 bg-white p-6 flex flex-col gap-4">
                <h3 className="text-base font-medium text-neutral-950">About Jayant Olhyan</h3>
                <div className="flex flex-col gap-3 text-sm">
                  {credentials.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div key={c.label} className="flex items-start gap-3">
                        <Icon className="size-4 text-neutral-950 shrink-0 mt-0.5" aria-hidden="true" />
                        <div>
                          <p className="font-medium text-neutral-950 text-xs">{c.label}</p>
                          <p className="text-xs text-neutral-600 leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-mono">
                  <a
                    href="https://github.com/JayantOlhyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
                  >
                    GitHub Profile ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/jayant-olhyan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 underline underline-offset-4 hover:text-neutral-500"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>

              {/* Prefer Written Brief? */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium text-neutral-950">Prefer to write out your requirements?</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Submit our full project brief form instead.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600 shrink-0"
                >
                  <span>Project Form</span>
                  <ArrowRight className="size-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
