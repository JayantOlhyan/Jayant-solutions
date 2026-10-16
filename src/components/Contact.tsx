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
      className="py-16 md:py-24 relative"
    >
      <div className="w-full">
        {/* Final Conversion Banner */}
        <div className="rounded-2xl bg-[#0A0F1D] border border-slate-800 p-8 sm:p-10 md:p-12 mb-12 text-left shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="font-mono text-[11px] tracking-wider uppercase text-[#FF8A00] font-semibold block mb-2.5">
                Section 08 &bull; Project Inquiry
              </span>
              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]"
              >
                Let&apos;s Build Something That Works.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Tell us about your business, your requirements, and the problem you want to solve. We&apos;ll determine the appropriate next step together.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end justify-end">
              <a
                href="#project-inquiry-workspace"
                onClick={() => setActiveMode("brief")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white px-6 py-3.5 text-sm font-display font-bold transition-all duration-200 shadow-sm w-full sm:w-auto"
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
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-6 py-3 text-xs font-mono font-semibold transition-colors cursor-pointer w-full sm:w-auto"
              >
                <Calendar className="size-3.5 text-[#FF8A00]" />
                <span>Or Schedule a 15-Min Discovery Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Workspace Grid: Left Direct Channels, Right Interactive Brief / Scheduler */}
        <div
          id="project-inquiry-workspace"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start scroll-mt-24"
        >
          {/* Left Column: Direct Founder Contact Channels */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <div className="hog-card p-6 bg-card-bg border border-border-custom flex flex-col gap-5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold block mb-1">
                  Direct Channels
                </span>
                <h3 className="font-display text-lg font-extrabold text-text-base">
                  Reach Jayant Directly
                </h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  No sales intermediaries. Every inquiry is reviewed directly by the founder within 12–24 business hours.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 border-t border-border-custom">
                {/* Email */}
                <a
                  href="mailto:jayantwebaisystems@gmail.com"
                  className="p-3.5 rounded-xl border border-border-custom bg-card-subtle/60 hover:border-primary/40 transition-colors flex items-start gap-3.5 group"
                >
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-display text-xs font-bold text-text-base block">
                      Email Directly
                    </span>
                    <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors break-all">
                      jayantwebaisystems@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919667344125?text=Hi%20Jayant,%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-border-custom bg-card-subtle/60 hover:border-primary/40 transition-colors flex items-start gap-3.5 group"
                >
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <MessageCircle className="size-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xs font-bold text-text-base">
                        WhatsApp Message
                      </span>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                        Direct
                      </span>
                    </div>
                    <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors">
                      +91 96673 44125
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919667344125"
                  className="p-3.5 rounded-xl border border-border-custom bg-card-subtle/60 hover:border-primary/40 transition-colors flex items-start gap-3.5 group"
                >
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold text-text-base block">
                      Phone
                    </span>
                    <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors">
                      +91 96673 44125
                    </span>
                  </div>
                </a>

                {/* Base Location */}
                <div className="p-3.5 rounded-xl border border-border-custom bg-card-subtle/40 flex items-start gap-3.5">
                  <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold text-text-base block">
                      Location &amp; Hours
                    </span>
                    <span className="text-xs text-text-muted block">
                      Dwarka, New Delhi &bull; Working Remotely
                    </span>
                    <span className="font-mono text-[11px] text-text-muted block mt-0.5">
                      Mon – Sat, 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Box */}
            <div className="hog-card p-5 bg-card-bg border border-border-custom text-xs text-text-muted space-y-2.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold block">
                What Happens After You Reach Out
              </span>
              <ol className="list-decimal pl-4 space-y-1.5 leading-relaxed">
                <li>We review your project context or existing system bottleneck.</li>
                <li>We hold a focused 15–20 minute discovery call to clarify requirements.</li>
                <li>If we are a strong technical fit, you receive a written scope, architecture plan, and milestone proposal.</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Mode Switcher between Written Project Brief Form & Cal.com Scheduler */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Switcher Tabs */}
            <div
              className="flex items-center gap-2 p-1.5 rounded-xl bg-card-subtle border border-border-custom self-start"
              role="tablist"
              aria-label="Contact method"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeMode === "brief"}
                onClick={() => setActiveMode("brief")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  activeMode === "brief"
                    ? "bg-[#0A0F1D] text-white shadow-2xs"
                    : "text-text-muted hover:text-text-base"
                }`}
              >
                <FileText className="size-3.5" />
                <span>Send Written Project Brief</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeMode === "calendar"}
                onClick={() => setActiveMode("calendar")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                  activeMode === "calendar"
                    ? "bg-[#0A0F1D] text-white shadow-2xs"
                    : "text-text-muted hover:text-text-base"
                }`}
              >
                <Calendar className="size-3.5" />
                <span>Book Discovery Call (Cal.com)</span>
              </button>
            </div>

            {activeMode === "brief" ? (
              <ContactForm />
            ) : (
              <div className="hog-card p-4 sm:p-6 bg-card-bg border border-border-custom h-[660px] flex flex-col">
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
