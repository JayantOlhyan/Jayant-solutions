"use client";

import React, { useState } from "react";
import { ArrowRight, Eye, ClipboardList, Code, CheckSquare, Rocket, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 1,
      name: "Discovery",
      desc: "We understand your goals, challenges, and requirements.",
      icon: <Eye className="size-5 text-primary" />,
    },
    {
      id: 2,
      name: "Planning",
      desc: "We create a clear roadmap, timeline, and project plan.",
      icon: <ClipboardList className="size-5 text-primary" />,
    },
    {
      id: 3,
      name: "Development",
      desc: "I build scalable, clean, and maintainable solutions.",
      icon: <Code className="size-5 text-primary" />,
    },
    {
      id: 4,
      name: "Testing",
      desc: "We test thoroughly for quality, security, and performance.",
      icon: <CheckSquare className="size-5 text-primary" />,
    },
    {
      id: 5,
      name: "Deployment",
      desc: "We deploy smoothly and ensure everything runs perfectly.",
      icon: <Rocket className="size-5 text-primary" />,
    },
    {
      id: 6,
      name: "Support",
      desc: "We provide ongoing support and iterate for continuous growth.",
      icon: <HelpCircle className="size-5 text-primary" />,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Process Copy */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
              my process
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
              A proven process. Predictable results.
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8">
              We work in clear steps to build systems that fit your team&apos;s workflow.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-card-bg text-text-base border border-border-custom hover:border-primary/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 px-6 py-3 text-xs font-mono font-bold transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>View my process</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Steps Chain */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {steps.map((step) => {
              const isHovered = hoveredStep === step.id;
              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  whileHover={{ y: -3 }}
                  className={`p-6 rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between group ${
                    isHovered
                      ? "bg-card-bg border-primary/50 shadow-[0_8px_30px_rgba(255,138,0,0.12)]"
                      : "bg-card-bg/60 border-border-custom hover:border-border-custom/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* Visual Step Icon inside Circle */}
                    <div className="size-12 rounded-xl border border-border-custom bg-card-bg shadow-sm flex items-center justify-center transition-transform group-hover:scale-110">
                      {step.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-primary/80 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      0{step.id}
                    </span>
                  </div>

                  {/* Step Name & Description */}
                  <div className="flex flex-col gap-1.5">
                    <span className="font-sans text-base font-bold text-text-base leading-tight group-hover:text-primary transition-colors">
                      {step.id}. {step.name}
                    </span>
                    <span className="text-xs text-text-muted leading-relaxed">
                      {step.desc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
