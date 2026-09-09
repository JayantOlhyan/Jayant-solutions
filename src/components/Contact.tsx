"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle2, MessageCircle, ExternalLink } from "lucide-react";

export default function Contact() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Direct Founder Access
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
            Let&apos;s discuss your project
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Schedule a 15-minute strategy call directly. We&apos;ll audit your operational bottlenecks, discuss your goals, and outline a straightforward solution.
          </p>
        </div>

        {/* Pre-Qualification Banner / Fit Check */}
        <div className="glass-card rounded-[28px] border border-border-custom p-6 md:p-8 mb-12 flex flex-col md:flex-row gap-8 items-stretch select-none shadow-sm hover:border-primary/30 transition-all">
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <h4 className="font-sans text-base md:text-lg font-bold text-text-base flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> Best fit if you are:
            </h4>
            <ul className="text-xs md:text-sm text-text-muted space-y-2.5 list-disc pl-5">
              <li>Running or launching a serious business, portal, or startup in India or globally.</li>
              <li>Focused on measurable customer growth, conversion, and business outcomes.</li>
              <li>Ready to invest in high-performance web and automation infrastructure.</li>
            </ul>
          </div>
          
          <div className="hidden md:block w-px bg-border-custom/80" />

          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <h4 className="font-sans text-base md:text-lg font-bold text-text-base flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" /> Not ideal if you are:
            </h4>
            <ul className="text-xs md:text-sm text-text-muted space-y-2.5 list-disc pl-5">
              <li>Looking for cheap cookie-cutter templates or low-code sites.</li>
              <li>Unclear about your product vision and unwilling to communicate directly.</li>
              <li>Looking for agency middle-men or bureaucratic management layers.</li>
            </ul>
          </div>
        </div>

        {/* Main Grid: Info on left, Calendar on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Channels */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            {/* WhatsApp Quick Connect (High Priority) */}
            <a
              href="https://wa.me/919667344125?text=Hi%20Jayant,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl p-4 md:p-5 border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all flex items-start gap-4 group"
            >
              <div className="size-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-500">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h4 className="font-bold text-sm text-text-base">WhatsApp (Instant)</h4>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold">Fastest</span>
                </div>
                <span className="text-xs md:text-sm text-text-muted hover:text-emerald-500 transition-colors font-mono">
                  +91 9667344125
                </span>
              </div>
            </a>

            {/* Email Directly */}
            <div className="glass-card rounded-2xl p-4 md:p-5 border border-border-custom/90 flex items-start gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Mail className="size-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">Email directly</h4>
                <a
                  href="mailto:jayantwebaisystems@gmail.com"
                  className="text-xs md:text-sm text-text-muted hover:text-primary transition-colors font-mono break-all"
                >
                  jayantwebaisystems@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Directly */}
            <div className="glass-card rounded-2xl p-4 md:p-5 border border-border-custom/90 flex items-start gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Phone className="size-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">Call directly</h4>
                <a
                  href="tel:+919667344125"
                  className="text-xs md:text-sm text-text-muted hover:text-primary transition-colors font-mono"
                >
                  +91 9667344125
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-4 md:p-5 border border-border-custom/90 flex items-start gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="size-4 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">Office location</h4>
                <span className="text-xs md:text-sm text-text-muted">
                  Remote (Dwarka, New Delhi)
                </span>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="glass-card rounded-2xl p-4 md:p-5 border border-border-custom/90 flex items-start gap-4 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 text-primary"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-base mb-1">LinkedIn</h4>
                <a
                  href="https://linkedin.com/company/jayant-systems"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs md:text-sm text-text-muted hover:text-primary transition-colors"
                >
                  linkedin.com/company/jayant-systems
                </a>
              </div>
            </div>

            {/* Response & Consultation Expectations */}
            <div className="glass-card rounded-2xl p-5 border border-border-custom text-xs text-text-muted leading-relaxed space-y-3 shadow-sm">
              <div>
                <p className="font-semibold text-text-base mb-1">⏱️ Response time:</p>
                <p>Usually within 12 hours (Monday–Saturday).</p>
              </div>
              <div className="border-t border-border-custom/40 pt-2.5">
                <p className="font-semibold text-text-base mb-1">📅 Business hours:</p>
                <p>Monday – Saturday<br />7:00 AM – 9:00 PM IST</p>
              </div>
              <div className="border-t border-border-custom/40 pt-2.5">
                <p className="font-semibold text-text-base mb-1">What to expect:</p>
                <ul className="list-disc pl-4 space-y-1 mt-1">
                  <li>15 minutes total over Google Meet.</li>
                  <li>We analyze your current landing page or manual business flows.</li>
                  <li>You walk away with an actionable execution proposal.</li>
                </ul>
              </div>
            </div>         
          </div>

          {/* Right Column: Embedded Cal.com Scheduler */}
          <div className="lg:col-span-8 glass-card rounded-[28px] p-4 md:p-6 border border-border-custom shadow-xl h-[680px] md:h-[760px] flex flex-col bg-card-bg/90 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-wider uppercase text-text-muted font-bold">
                  Direct Scheduler
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Availability
                </span>
              </div>
              <a
                href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-text-muted hover:text-primary transition-colors font-mono"
              >
                Open in new tab <ExternalLink className="size-3" />
              </a>
            </div>

            {/* Scheduler Container */}
            <div className="w-full flex-1 rounded-2xl overflow-hidden border border-border-custom/80 bg-white/5 relative">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-card-bg/60 backdrop-blur-sm z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs text-text-muted font-mono">Loading calendar slots...</span>
                  </div>
                </div>
              )}
              <iframe
                src="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Book a Strategy Call with Jayant"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
