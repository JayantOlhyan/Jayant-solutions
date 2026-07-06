"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden py-24 md:py-32">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Monospace Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-border-custom px-4 py-1.5 rounded-full bg-card-bg/50 backdrop-blur-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase text-text-muted">
            Solo Builder • MSIT & IIT Guwahati
          </span>
        </motion.div>

        {/* Hero Title (Editorial Serif) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.1] max-w-3xl mb-6"
        >
          Websites That Win Customers. <br className="hidden md:inline" />
          <span className="text-primary">AI Systems</span> That Save Time.
        </motion.h1>

        {/* Subtitle (Sans-Serif Outfit) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-text-muted leading-relaxed max-w-2xl mb-10"
        >
          I design websites, AI chatbots, WhatsApp automation, CRM workflows, and custom business systems that help Indian businesses grow without unnecessary complexity.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={() => handleScrollTo("#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-8 py-3.5 text-sm md:text-base font-semibold text-white shadow-md active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book a Free Strategy Call
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => handleScrollTo("#work")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border-custom hover:bg-card-bg px-8 py-3.5 text-sm md:text-base font-medium text-text-base hover:border-text-muted active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            View My Work <ArrowRight className="size-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
