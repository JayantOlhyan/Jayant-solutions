"use client";

import React, { useState, useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import {
  ShieldCheck,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  RotateCw,
  Mail,
  AlertCircle,
  Clock,
} from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";

export default function BookConsultationPage() {
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "timeout">("loading");
  const [retryCount, setRetryCount] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const activeAttemptRef = useRef(0);

  useEffect(() => {
    const attemptId = retryCount;
    activeAttemptRef.current = attemptId;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Bounded 12-second loading timeout
    timerRef.current = setTimeout(() => {
      // Ensure only the active attempt can transition state to timeout
      if (activeAttemptRef.current === attemptId) {
        setLoadState("timeout");
      }
    }, 12000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [retryCount]);

  const handleIframeLoad = (attemptId: number) => {
    // Ignore load events from outdated attempts
    if (activeAttemptRef.current !== attemptId) {
      return;
    }
    // Clean up timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // Only transition if still waiting; keep fallback overlay active if timeout already fired
    setLoadState((current) => (current === "loading" ? "loaded" : current));
  };

  const handleRetry = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setLoadState("loading");
    setRetryCount((prev) => prev + 1);
  };

  const sessionPoints = [
    {
      title: "1. Diagnostic & Feasibility",
      desc: "We analyze your project goals, user workflows, technical constraints, and desired architecture.",
    },
    {
      title: "2. Technology & Stack Evaluation",
      desc: "We evaluate modern, scalable stacks (Next.js, FastAPI, Python, AI APIs, PostgreSQL) suitable for your requirements.",
    },
    {
      title: "3. Scope & Milestones Alignment",
      desc: "We identify core MVP deliverables, dependencies, and realistic delivery phases.",
    },
    {
      title: "4. Written Scope Proposal",
      desc: "Following discovery, you receive a clear written scope and milestone proposal before committing any budget.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-neutral-950 pb-24 pt-6 text-left">
        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10 md:gap-14">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-neutral-500 flex items-center gap-2 pt-4">
            <Link href="/" className="hover:text-neutral-950 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/contact" className="hover:text-neutral-950 transition-colors">Contact</Link>
            <span>/</span>
            <span className="text-neutral-950 font-medium">Book a Call</span>
          </nav>

          {/* Hero Header */}
          <section className="border-b border-neutral-200 pb-8 md:pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-3">
                  Direct Technical Consultation
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-950 leading-[1.1]">
                  Schedule a discovery call with Jayant Olhyan.
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Discuss your project requirements, system architecture, and technology options directly with the engineer writing the code.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Confidential discussion · Free consultation</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Booking Section: Calendar Embed + Sidebar Context */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 cols: Interactive Cal.com Scheduler */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {/* Header above iframe: Always visible in every state */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold">
                    Calendar Availability
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Scheduler
                  </span>
                </div>
                <a
                  href={CONTACT_INFO.calComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                  aria-label="Open booking calendar in full tab on Cal.com (opens in new tab)"
                >
                  <span>Open calendar in full tab</span>
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="w-full min-h-[580px] sm:min-h-[640px] md:min-h-[700px] rounded-xl border border-neutral-200 bg-neutral-50/50 overflow-hidden relative shadow-sm">
                {/* Loading State Overlay */}
                {loadState === "loading" && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-50/95 z-10 p-6 text-center"
                  >
                    <div className="size-8 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs font-mono text-neutral-600">
                      Connecting to Cal.com scheduler…
                    </p>
                    <p className="text-xs text-neutral-400 max-w-xs">
                      If loading takes more than a few seconds, you can open the calendar in a new tab above.
                    </p>
                  </div>
                )}

                {/* Timeout / Failure State Overlay */}
                {loadState === "timeout" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white z-20 p-6 sm:p-8 text-center"
                  >
                    <div className="size-12 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                      <AlertCircle className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-lg font-medium text-neutral-950">
                        Calendar loading could not be confirmed
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-600 max-w-md mt-1 leading-relaxed">
                        The embedded scheduler from Cal.com is taking longer than expected. You can open the calendar directly, retry the embed, or contact Jayant directly.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={CONTACT_INFO.calComUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-neutral-950 text-white px-5 text-xs font-medium hover:bg-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                      >
                        <span>Open on Cal.com</span>
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={handleRetry}
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-neutral-300 bg-white text-neutral-950 px-4 text-xs font-medium hover:border-neutral-950 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                      >
                        <RotateCw className="size-3.5" aria-hidden="true" />
                        <span>Retry loading</span>
                      </button>
                    </div>

                    <p className="text-xs text-neutral-500 pt-2">
                      Prefer WhatsApp?{" "}
                      <a
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-neutral-900 font-medium"
                      >
                        Chat directly on WhatsApp
                      </a>
                    </p>
                  </div>
                )}

                {/* Calendar iframe */}
                <iframe
                  key={retryCount}
                  src={CONTACT_INFO.calComUrl}
                  className="w-full h-full min-h-[580px] sm:min-h-[640px] md:min-h-[700px] border-0"
                  allowFullScreen
                  loading="eager"
                  title="Cal.com scheduling calendar for technical consultation with Jayant Olhyan"
                  onLoad={() => handleIframeLoad(retryCount)}
                />
              </div>

              {/* Informative footer below calendar */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono">
                <Clock className="size-3.5 shrink-0 text-neutral-400" aria-hidden="true" />
                <span>Calendar times adjust to your browser&apos;s local timezone.</span>
              </div>
            </div>

            {/* Right 5 cols: WhatsApp alternative, Call outline, Written brief */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* WhatsApp Quick-Contact Card */}
              <div className="rounded-xl border border-neutral-900 bg-neutral-950 p-6 text-white flex flex-col gap-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                    Direct Channel
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Direct Chat
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-medium tracking-tight text-white">Have a quick question first?</h2>
                  <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                    Message Jayant directly on WhatsApp for brief scoping questions before booking a call.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 text-sm font-medium text-white transition-colors hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    <span>Chat on WhatsApp ({CONTACT_INFO.whatsappNumber})</span>
                  </a>
                </div>
              </div>

              {/* What Happens On The Call */}
              <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col gap-4">
                <h2 className="text-base font-medium text-neutral-950">What we cover on the call</h2>
                <ul className="flex flex-col gap-3 text-sm text-neutral-700">
                  {sessionPoints.map((p) => (
                    <li key={p.title} className="flex flex-col gap-0.5">
                      <span className="font-medium text-neutral-950">{p.title}</span>
                      <span className="text-xs text-neutral-600 leading-relaxed">{p.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prefer Written Brief? */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-neutral-950">Prefer to write out your requirements?</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Submit our full project brief form instead.</p>
                </div>
                <Link
                  href={CONTACT_INFO.inquiryPath}
                  className="inline-flex min-h-10 items-center gap-1 text-xs font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  <span>Project brief form</span>
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>

              {/* Direct Email fallback */}
              <div className="rounded-xl border border-neutral-200 bg-white p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="size-4 text-neutral-500 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-neutral-500">Direct Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-mono font-medium text-neutral-950 hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </PageTransition>
  );
}
