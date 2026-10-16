"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [activeMode, setActiveMode] = useState<"brief" | "calendar">("brief");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32 relative border-t border-border-custom"
    >
      <div className="w-full text-left">
        {/* Top Metadata Ledger */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 md:mb-14 border-b border-border-custom">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              / 07 — Project Inquiry
            </span>
            <span className="hidden sm:inline-block text-border-strong">&mdash;</span>
            <span className="hidden sm:inline-block font-mono text-xs text-text-muted">
              Direct Founder Scoping &bull; Written Proposal Within 24h
            </span>
          </div>
          <span className="font-mono text-xs text-text-muted">
            New Delhi, India &bull; Working Remotely
          </span>
        </div>

        {/* High-Contrast Dark Editorial Banner */}
        <div className="metalab-stage p-8 sm:p-12 md:p-16 mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#FF8A00] font-semibold block mb-4">
                Start a Project With JAYANT SYSTEMS
              </span>
              <h2
                id="contact-heading"
                className="font-display metalab-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5"
              >
                Let&apos;s build something that works.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Tell us about your business, your technical requirements, and the operational problem you want to solve. We will review your context directly and determine the right next step together.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end justify-end">
              <a
                href="#project-inquiry-workspace"
                onClick={() => setActiveMode("brief")}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-primary-hover text-white px-7 py-4 text-sm font-display font-bold transition-all duration-200 shadow-sm w-full sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setActiveMode("calendar");
                  const el = document.getElementById("project-inquiry-workspace");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-6 py-3.5 text-xs font-mono font-semibold transition-colors cursor-pointer w-full sm:w-auto"
              >
                <Calendar className="size-3.5 text-[#FF8A00]" />
                <span>Or Schedule a 15-Min Discovery Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Workspace Grid: Left Sticky Direct Channels Ledger, Right Interactive Brief / Scheduler */}
        <div
          id="project-inquiry-workspace"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start scroll-mt-28"
        >
          {/* Left Column: Direct Founder Contact Ledger */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-semibold block mb-2">
                Direct Access
              </span>
              <h3 className="font-display text-2xl font-extrabold text-text-base tracking-tight">
                Reach Jayant directly.
              </h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                No sales intermediaries or account managers. Every inquiry is reviewed directly by the founder within 12–24 business hours.
              </p>
            </div>

            {/* Hairline Contact Ledger */}
            <div className="border-t border-b border-border-custom divide-y divide-border-custom">
              <a
                href="mailto:jayantwebaisystems@gmail.com"
                className="py-4 flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <Mail className="size-4 text-primary shrink-0 mt-1" />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block">
                      Email Directly
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-text-base group-hover:text-primary transition-colors break-all">
                      jayantwebaisystems@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-text-muted group-hover:text-primary shrink-0 mt-1" />
              </a>

              <a
                href="https://wa.me/919667344125?text=Hi%20Jayant,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3.5">
                  <MessageCircle className="size-4 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                        WhatsApp Direct
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                        Fastest
                      </span>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-text-base group-hover:text-primary transition-colors">
                      +91 96673 44125
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-text-muted group-hover:text-primary shrink-0 mt-1" />
              </a>

              <a
                href="tel:+919667344125"
                className="py-4 flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3.5">
                  <Phone className="size-4 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block">
                      Telephone
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-text-base group-hover:text-primary transition-colors">
                      +91 96673 44125
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-text-muted group-hover:text-primary shrink-0 mt-1" />
              </a>

              <div className="py-4 flex items-start gap-3.5">
                <MapPin className="size-4 text-primary shrink-0 mt-1" />
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block">
                    Studio Base &amp; Operating Hours
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-text-base block">
                    Dwarka, New Delhi &bull; Remote Worldwide
                  </span>
                  <span className="font-mono text-[11px] text-text-muted block mt-0.5">
                    Mon – Sat, 9:00 AM – 8:00 PM IST
                  </span>
                </div>
              </div>
            </div>

            {/* Next Steps Specification */}
            <div className="p-6 rounded-xl bg-[#0A0E17] text-white border border-slate-800 space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FF8A00] font-semibold block">
                What Happens After You Reach Out
              </span>
              <ol className="list-decimal pl-4 space-y-2 text-xs text-slate-300 leading-relaxed">
                <li>We review your project brief, live URL, or operational bottleneck.</li>
                <li>We hold a focused 15–20 minute technical discovery call.</li>
                <li>You receive a written scope, system architecture recommendation, and fixed-milestone proposal.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Mode Switcher between Written Project Brief Form & Cal.com Scheduler */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Switcher Tabs */}
            <div
              className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-card-subtle border border-border-custom self-start"
              role="tablist"
              aria-label="Contact method"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeMode === "brief"}
                onClick={() => setActiveMode("brief")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  activeMode === "brief"
                    ? "bg-[#0A0E17] text-white shadow-2xs"
                    : "text-text-muted hover:text-text-base"
                }`}
              >
                <FileText className="size-3.5" />
                <span>01 / Written Project Brief</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeMode === "calendar"}
                onClick={() => setActiveMode("calendar")}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  activeMode === "calendar"
                    ? "bg-[#0A0E17] text-white shadow-2xs"
                    : "text-text-muted hover:text-text-base"
                }`}
              >
                <Calendar className="size-3.5" />
                <span>02 / Book Discovery Call (Cal.com)</span>
              </button>
            </div>

            {activeMode === "brief" ? (
              <ContactForm />
            ) : (
              <div className="p-4 sm:p-6 rounded-2xl bg-card-bg border border-border-custom h-[660px] flex flex-col">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase text-text-base font-bold">
                      Discovery Call Scheduler
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-500" /> Live Calendar
                    </span>
                  </div>
                  <a
                    href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>

                <div className="w-full flex-1 rounded-xl overflow-hidden border border-border-custom bg-card-subtle relative">
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-card-bg/80 z-10">
                      <div className="flex flex-col items-center gap-2">
                        <div className="size-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs text-text-muted font-mono">
                          Loading calendar availability...
                        </span>
                      </div>
                    </div>
                  )}
                  <iframe
                    src="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Book a Discovery Call with Jayant Olhyan"
                    onLoad={() => setIframeLoaded(true)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
