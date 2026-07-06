"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] flex flex-col justify-center items-center py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Monospace Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 border-2 border-border-custom px-4 py-1.5 rounded-full bg-card-bg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-wider uppercase text-text-base">
            🦔 POSTHOG-INSPIRED DEV STUDIO
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.05] max-w-3xl mb-6"
        >
          Build a Business That <br className="hidden md:inline" />
          Works Even When You <span className="underline decoration-primary decoration-4">Sleep.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-lg text-text-muted leading-relaxed max-w-2xl font-mono mb-10"
        >
          We design AI-powered websites, automation systems, and custom database solutions that help businesses generate more leads and scale operations.
        </motion.p>

        {/* Terminal Sandbox code snippet (PostHog Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl text-left border-2 border-border-custom rounded-2xl bg-[#000000] text-emerald-400 p-5 font-mono text-xs md:text-sm shadow-[6px_6px_0px_0px_rgba(28,28,31,0.15)] mb-12 select-none"
        >
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-3 text-neutral-400">
            <span className="flex items-center gap-1.5 font-bold">
              <Terminal className="size-3.5" /> studio-automation-builder.js
            </span>
            <span className="text-[10px] bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-neutral-300">
              Active
            </span>
          </div>
          <p className="text-neutral-500">{"// Initialize Lead Generation & Automation pipeline"}</p>
          <p className="mt-1">
            <span className="text-purple-400">const</span> studio = <span className="text-blue-400">require</span>(<span className="text-amber-300">&apos;@jayant-studio/core&apos;</span>);
          </p>
          <p className="mt-1">
            <span className="text-purple-400">const</span> pipeline = studio.<span className="text-blue-300">createPipeline</span>(&apos;lead-gen&apos;);
          </p>
          <p className="mt-2 text-neutral-500">{"// Connect WhatsApp, CRM, and AI Agent"}</p>
          <p className="mt-1">
            pipeline
          </p>
          <p className="ml-4">
            .<span className="text-blue-300">connectWhatsApp</span>(&apos;Meta_Cloud_API&apos;)
          </p>
          <p className="ml-4">
            .<span className="text-blue-300">trainLLM</span>(&apos;/knowledge/pricing.pdf&apos;)
          </p>
          <p className="ml-4 text-emerald-300">
            .<span className="text-blue-300">onLead</span>((data) =&gt; pipeline.routeToCRM(data));
          </p>
          <p className="mt-3 text-purple-400 font-bold">
            &gt; pipeline.run(); <span className="text-emerald-400 animate-pulse">■</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl hog-btn px-8 py-3.5 text-sm md:text-base cursor-pointer"
          >
            Book Free Consultation <kbd className="bg-black/10 text-[9px] px-1.5 py-0.5 rounded">C</kbd>
          </Link>

          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border-custom bg-card-bg hover:bg-neutral-100 dark:hover:bg-neutral-900 px-8 py-3.5 text-sm md:text-base font-mono font-bold text-text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            Get Proposal <kbd className="bg-neutral-200 dark:bg-neutral-800 text-text-base text-[9px] px-1.5 py-0.5 rounded">P</kbd>
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border-custom bg-card-bg hover:bg-neutral-100 dark:hover:bg-neutral-900 px-8 py-3.5 text-sm md:text-base font-mono font-bold text-text-base shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            View Case Studies <kbd className="bg-neutral-200 dark:bg-neutral-800 text-text-base text-[9px] px-1.5 py-0.5 rounded">O</kbd>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
