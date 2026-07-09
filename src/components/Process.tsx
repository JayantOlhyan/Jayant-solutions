"use client";

import React from "react";
import { ArrowRight, Eye, ClipboardList, Code, CheckSquare, Rocket, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function Process() {
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
      desc: "We build scalable, clean, and maintainable solutions.",
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
              OUR PROCESS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
              A Proven Process. Predictable Results.
            </h2>
            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-8">
              We follow a transparent and collaborative process to deliver solutions that make an impact.
            </p>
            <Link
              href="/process"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 px-6 py-3 text-xs font-mono font-bold transition-all"
            >
              <span>View Our Process</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Right Column: Steps Chain */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center relative group">
                {/* Visual Step Icon inside Circle */}
                <div className="relative z-10 size-14 rounded-full border border-border-custom bg-card-bg shadow-sm flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                  {step.icon}
                </div>

                {/* Connecting Line to next item (rendered only on desktop screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[1px] border-t border-dashed border-border-custom z-0 pointer-events-none" />
                )}

                {/* Description */}
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-xs md:text-sm font-bold text-text-base leading-none">
                    {step.id}. {step.name}
                  </span>
                  <span className="text-[10px] md:text-xs text-text-muted leading-tight mt-1.5 px-1">
                    {step.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
