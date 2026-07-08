"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Code, Rocket, Check, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] flex flex-col justify-center py-12 md:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Text & CTAs & Metrics */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Monospace Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 border border-border-custom/80 px-4 py-1.5 rounded-full bg-card-bg shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <Zap className="size-3 text-primary fill-primary" />
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-wider uppercase text-text-base">
                CUSTOM SYSTEMS BUILT FOR BUSINESS GROWTH
              </span>
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6"
            >
              AI & Software Development for{" "}
              <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                Startups & Businesses
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8"
            >
              I build custom websites, AI solutions, automated workflows, and high-performance software tailored to your operational business goals.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-sm font-semibold text-text-base transition-all duration-200 active:scale-[0.98]"
              >
                <span>View Portfolio</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-sm font-semibold text-text-base transition-all duration-200 active:scale-[0.98]"
              >
                <span>View Pricing</span>
              </Link>
            </motion.div>

            {/* Metrics Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-2xl border border-border-custom rounded-2xl p-4 md:py-5 md:px-6 bg-card-bg/60 backdrop-blur-sm grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border-custom/50"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:first:pl-0 sm:pl-4">
                <span className="text-xl md:text-2xl font-bold text-primary">14+</span>
                <span className="text-[10px] md:text-xs text-text-muted mt-1 uppercase font-semibold tracking-wider">Projects Delivered</span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0 sm:pl-6">
                <span className="text-xl md:text-2xl font-bold text-primary">33+</span>
                <span className="text-[10px] md:text-xs text-text-muted mt-1 uppercase font-semibold tracking-wider">Hackathons</span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0 sm:pl-6">
                <span className="text-xl md:text-2xl font-bold text-primary">5+</span>
                <span className="text-[10px] md:text-xs text-text-muted mt-1 uppercase font-semibold tracking-wider">Industries</span>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-3 sm:pt-0 sm:pl-6">
                <span className="text-xl md:text-2xl font-bold text-primary">100%</span>
                <span className="text-[10px] md:text-xs text-text-muted mt-1 uppercase font-semibold tracking-wider">Client Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Process Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full max-w-[480px] border border-border-custom/80 rounded-3xl bg-card-bg p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col gap-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-base md:text-lg font-bold text-text-base">
                  Our Proven 3-Step Process
                </span>
                <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
                  Example Interface (Illustrative UI)
                </span>
              </div>

              {/* Steps Visual Layout */}
              <div className="flex flex-col gap-6 relative">
                {/* 3 Steps Icons and Connecting Lines */}
                <div className="flex items-center justify-between relative px-2">
                  {/* Step 1 Icon */}
                  <div className="relative z-10 flex items-center justify-center size-14 rounded-full border border-border-custom bg-card-bg shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-text-base">
                    <FileText className="size-5 text-text-base" />
                  </div>

                  {/* Connecting Line 1 */}
                  <div className="absolute top-1/2 left-[20%] right-[60%] h-[1px] border-t border-dashed border-border-custom/80 -translate-y-1/2 z-0" />

                  {/* Step 2 Icon */}
                  <div className="relative z-10 flex items-center justify-center size-14 rounded-full border border-border-custom bg-card-bg shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-text-base">
                    <Code className="size-5 text-text-base" />
                  </div>

                  {/* Connecting Line 2 */}
                  <div className="absolute top-1/2 left-[60%] right-[20%] h-[1px] border-t border-dashed border-border-custom/80 -translate-y-1/2 z-0" />

                  {/* Step 3 Icon */}
                  <div className="relative z-10 flex items-center justify-center size-14 rounded-full border border-border-custom bg-card-bg shadow-[0_4px_12px_rgba(0,0,0,0.02)] text-text-base">
                    <Rocket className="size-5 text-text-base" />
                  </div>
                </div>

                {/* Step Text Descriptions */}
                <div className="grid grid-cols-3 gap-2 text-center mt-2">
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-xs md:text-sm font-bold text-text-base">1. Discovery</span>
                    <span className="text-[10px] md:text-xs text-text-muted leading-tight">Understand your goals, requirements & challenges</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-xs md:text-sm font-bold text-text-base">2. Development</span>
                    <span className="text-[10px] md:text-xs text-text-muted leading-tight">Build, test & integrate high-quality solutions</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-xs md:text-sm font-bold text-text-base">3. Launch</span>
                    <span className="text-[10px] md:text-xs text-text-muted leading-tight">Deploy, optimize & scale with confidence</span>
                  </div>
                </div>
              </div>

              {/* Bottom Badge Pill */}
              <div className="flex justify-center mt-2">
                <div className="inline-flex items-center gap-1.5 border border-border-custom/60 rounded-full px-4 py-1.5 bg-background-base/50 text-[10px] md:text-xs font-mono text-text-muted">
                  <Check className="size-3 text-primary stroke-[3px]" />
                  <span>Secure</span>
                  <span className="text-border-custom/80">•</span>
                  <span>Scalable</span>
                  <span className="text-border-custom/80">•</span>
                  <span>AI-Powered</span>
                  <span className="text-border-custom/80">•</span>
                  <span>Performance-Driven</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
