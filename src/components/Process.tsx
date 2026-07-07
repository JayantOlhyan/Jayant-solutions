"use client";

import React, { useState } from "react";
import { clientJourneyDays } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Collaboration Model
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
            The Client Journey
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Weekly updates, direct access to me—no project managers, account handlers, or layered delays.
          </p>
        </div>

        {/* Stepper Navigation (Horizontal Timeline on Desktop) */}
        <div className="w-full relative flex items-center justify-between mb-12 overflow-x-auto scrollbar-none pb-4 select-none">
          {/* Continuous background connector line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-border-custom -translate-y-1/2 z-0 min-w-[700px]" />
          
          {/* Animated active progress line indicator */}
          <motion.div 
            className="absolute top-1/2 left-0 h-[2px] bg-primary -translate-y-1/2 z-0 min-w-[700px] origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeStep / (clientJourneyDays.length - 1) }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          />
          
          {clientJourneyDays.map((step, index) => {
            const isCompleted = index <= activeStep;
            const isActive = index === activeStep;

            return (
              <button
                key={step.day}
                onClick={() => setActiveStep(index)}
                className="relative z-10 flex flex-col items-center gap-2 group min-w-[100px] shrink-0 cursor-pointer focus:outline-none"
              >
                {/* Stepper Dot */}
                <motion.div
                  className={`size-9 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-colors duration-300 ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/10"
                      : isCompleted
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-background-base border-border-custom text-text-muted group-hover:border-text-base group-hover:text-text-base"
                  }`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index + 1}
                </motion.div>
                
                {/* Step Label */}
                <span
                  className={`text-xs font-semibold transition-all duration-300 ${
                    isActive 
                      ? "text-primary font-bold" 
                      : isCompleted 
                      ? "text-primary/80 font-medium" 
                      : "text-text-muted group-hover:text-text-base"
                  }`}
                >
                  {step.day}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Content Block */}
        <div className="glass-card rounded-[28px] border-2 border-border-custom p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(43,43,43,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] min-h-[160px] relative overflow-hidden">
          {/* Animated left indicator block */}
          <motion.div 
            layoutId="leftIndicator"
            className="absolute top-0 left-0 bottom-0 w-2 bg-primary" 
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 15, filter: "blur(2px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -15, filter: "blur(2px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider block mb-2">
                  {clientJourneyDays[activeStep].day} — {clientJourneyDays[activeStep].title}
                </span>
                <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-3xl">
                  {clientJourneyDays[activeStep].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
