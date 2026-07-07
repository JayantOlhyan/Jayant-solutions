"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] flex flex-col justify-center items-center py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Outcome-focused Monospace Badge */}
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
            📈 Custom Systems Built for Business Growth
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.05] max-w-3xl mb-6"
        >
          AI & Software Development for <span className="text-primary underline decoration-primary decoration-4">Startups & Businesses</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-lg text-text-muted leading-relaxed max-w-2xl font-mono mb-10"
        >
          We build custom websites, AI solutions, automated workflows, and high-performance software tailored to your operational business goals.
        </motion.p>

        {/* Illustrative UI Diagram (Replaces fake metric numbers with clean visual hierarchy diagram) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl text-left border-2 border-border-custom rounded-2xl bg-card-bg text-text-base p-6 shadow-[6px_6px_0px_0px_rgba(28,28,31,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] mb-12 select-none"
        >
          <div className="flex items-center justify-between border-b border-border-custom pb-3 mb-4 text-text-muted">
            <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-text-base">
              ⚙️ Automated Project Workflow Diagram
            </span>
            <span className="text-[10px] bg-primary/10 border border-primary/20 px-2 py-0.5 rounded text-primary font-bold">
              Example Interface (Illustrative UI)
            </span>
          </div>

          {/* Clean architectural layout chart representation instead of fake metrics */}
          <div className="space-y-3 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-2 border border-border-custom/30 p-2.5 rounded-xl bg-background-base/50">
              <span className="text-primary">1. Discovery</span>
              <span className="text-[10px] text-text-muted/60">→</span>
              <span>Map manual spreadsheet entries & requirements blueprint</span>
            </div>
            <div className="flex items-center gap-2 border border-border-custom/30 p-2.5 rounded-xl bg-background-base/50">
              <span className="text-primary">2. Development</span>
              <span className="text-[10px] text-text-muted/60">→</span>
              <span>Deploy React/Next.js frontend with PostgreSQL + API links</span>
            </div>
            <div className="flex items-center gap-2 border border-border-custom/30 p-2.5 rounded-xl bg-background-base/50">
              <span className="text-primary">3. Launch</span>
              <span className="text-[10px] text-text-muted/60">→</span>
              <span>Map domains, configure SSL security & setup analytics</span>
            </div>
          </div>
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
            Get Free Consultation
          </Link>

          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border-custom bg-card-bg hover:bg-neutral-100 dark:hover:bg-neutral-900 px-8 py-3.5 text-sm md:text-base font-mono font-bold text-text-base shadow-[3px_3px_0px_0px_rgba(43,43,43,1)] dark:shadow-[3px_3px_0px_0px_rgba(247,244,237,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(43,43,43,1)] transition-all cursor-pointer"
          >
            View Pricing Tiers
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border-custom bg-card-bg hover:bg-neutral-100 dark:hover:bg-neutral-900 px-8 py-3.5 text-sm md:text-base font-mono font-bold text-text-base shadow-[3px_3px_0px_0px_rgba(43,43,43,1)] dark:shadow-[3px_3px_0px_0px_rgba(247,244,237,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(43,43,43,1)] transition-all cursor-pointer"
          >
            View Portfolio <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
