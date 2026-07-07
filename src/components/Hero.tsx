"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, CheckSquare } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] flex flex-col justify-center items-center py-20 md:py-28 overflow-hidden">
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
          We Build Revenue Systems. <br className="hidden md:inline" />
          <span className="text-primary underline decoration-primary decoration-4">Not Just Websites.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-lg text-text-muted leading-relaxed max-w-2xl font-mono mb-10"
        >
          We help businesses generate more leads, automate operations, and scale with custom websites, AI systems, and business software.
        </motion.p>

        {/* Dashboard Mockup (PostHog Style UX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl text-left border-2 border-border-custom rounded-2xl bg-card-bg text-text-base p-6 shadow-[6px_6px_0px_0px_rgba(28,28,31,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] mb-12 select-none"
        >
          <div className="flex items-center justify-between border-b border-border-custom pb-3 mb-4 text-text-muted">
            <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-text-base">
              📊 Live Operations & Booking Dashboard
            </span>
            <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-emerald-600 font-bold">
              System Active
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="border border-border-custom p-3 rounded-xl bg-background-base">
              <span className="text-[9px] font-mono text-text-muted block">Inquiries Handled</span>
              <span className="text-xl font-bold text-text-base block mt-0.5">1,402</span>
              <span className="text-[9px] font-mono text-emerald-500">100% automated</span>
            </div>
            <div className="border border-border-custom p-3 rounded-xl bg-background-base">
              <span className="text-[9px] font-mono text-text-muted block">Time Saved</span>
              <span className="text-xl font-bold text-text-base block mt-0.5">84 hours</span>
              <span className="text-[9px] font-mono text-emerald-500">this month</span>
            </div>
            <div className="border border-border-custom p-3 rounded-xl bg-background-base">
              <span className="text-[9px] font-mono text-text-muted block">Leads Generated</span>
              <span className="text-xl font-bold text-text-base block mt-0.5">+40%</span>
              <span className="text-[9px] font-mono text-emerald-500">vs last quarter</span>
            </div>
          </div>

          <div className="border border-border-custom rounded-xl p-3 bg-background-base flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <MessageSquare className="size-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-text-muted block">Latest WhatsApp Event</span>
                <span className="text-xs font-bold text-text-base block">Automated response sent to +91 9810X XXXXX</span>
              </div>
            </div>
            <div className="p-1 bg-emerald-500/10 text-emerald-600 rounded-full">
              <CheckSquare className="size-3.5" />
            </div>
          </div>
          
          <div className="mt-3.5 text-right">
            <span className="font-mono text-[9px] text-text-muted italic">
              *Illustrative Preview of Custom Dashboard Systems
            </span>
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
            Get Proposal
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border-custom bg-card-bg hover:bg-neutral-100 dark:hover:bg-neutral-900 px-8 py-3.5 text-sm md:text-base font-mono font-bold text-text-base shadow-[3px_3px_0px_0px_rgba(43,43,43,1)] dark:shadow-[3px_3px_0px_0px_rgba(247,244,237,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(43,43,43,1)] transition-all cursor-pointer"
          >
            View Case Studies <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
