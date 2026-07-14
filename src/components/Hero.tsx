"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import NetworkDiagram from "./NetworkDiagram";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] flex flex-col justify-center py-12 md:py-24 overflow-hidden">
      <div className="w-full">
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
                AI-Powered Solutions. Real Business Impact.
              </span>
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl lg:text-7.5xl font-bold tracking-tight text-text-base leading-[1.05] mb-6"
            >
              Building Intelligent Digital Solutions for{" "}
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
              I build custom websites, AI solutions, automated workflows, and high-performance software that help businesses innovate, automate, and scale with confidence.
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
                <span>View Our Work</span>
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>

            {/* Micro Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img className="size-8 rounded-full border border-border-custom object-cover" src="/avatar1.jpg" alt="Happy client testimonial avatar 1" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" }} />
                  <img className="size-8 rounded-full border border-border-custom object-cover" src="/avatar2.jpg" alt="Happy client testimonial avatar 2" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" }} />
                  <img className="size-8 rounded-full border border-border-custom object-cover" src="/avatar3.jpg" alt="Happy client testimonial avatar 3" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" }} />
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-sm font-bold text-text-base leading-none">50+</span>
                  <span className="text-[10px] text-text-muted mt-1 uppercase font-semibold tracking-wider">Happy Clients</span>
                </div>
              </div>

              <div className="h-6 w-[1px] bg-border-custom/50" />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-text-base leading-none">100%</span>
                <span className="text-[10px] text-text-muted mt-1 uppercase font-semibold tracking-wider">Client Satisfaction</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Network Diagram */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <NetworkDiagram />
          </div>

        </div>
      </div>
    </section>
  );
}
