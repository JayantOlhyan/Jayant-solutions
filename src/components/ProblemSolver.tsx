"use client";

import React, { useState } from "react";
import { Globe, Cpu, Terminal, TrendingUp, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SolverOption {
  id: number;
  title: string;
  priceAnchor: string;
  description: string;
  outcome: string;
  iconName: string;
}

export default function ProblemSolver() {
  const [activeTab, setActiveTab] = useState(0);

  const options: SolverOption[] = [
    {
      id: 0,
      title: "Launching a high-converting website",
      priceAnchor: "₹40,000+",
      description: "A website is not just a digital brochure. It is your first sales agent. I build lightning-fast web infrastructures optimized for conversion and SEO, ensuring your visitors translate into client leads.",
      outcome: "Ideal for landing pages, D2C brands, and startups looking to establish an immediate, premium credibility standard.",
      iconName: "Globe",
    },
    {
      id: 1,
      title: "Automating repetitive manual work",
      priceAnchor: "₹90,000+",
      description: "Tired of copy-pasting data between spreadsheets, manually notifying team members, or following up on email queries? I build custom WhatsApp notifications, automated alerts, and background CRM linkages.",
      outcome: "Ideal for SMB owners looking to eliminate manual busywork, reduce operational overhead, and speed up client response times.",
      iconName: "Cpu",
    },
    {
      id: 2,
      title: "Building custom portals or dashboards",
      priceAnchor: "₹2,00,000+",
      description: "Generic spreadsheets and off-the-shelf software can only take your operations so far. I engineer custom React dashboards, client portal platforms, and operational admin tools tailored to your exact business flow.",
      outcome: "Ideal for businesses requiring tailored data aggregation, client login zones, and proprietary backend tools.",
      iconName: "Terminal",
    },
    {
      id: 3,
      title: "Connecting an end-to-end sales pipeline",
      priceAnchor: "₹2,00,000+",
      description: "Align your landing pages, CRM database (Zoho, HubSpot), automated WhatsApp follow-ups, and AI data-qualification chatbot into one unified, automated sales pipeline that closes clients while you sleep.",
      outcome: "Ideal for professional services and high-volume operations looking to capture, qualify, and route leads automatically.",
      iconName: "TrendingUp",
    },
  ];

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

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Globe: Globe,
    Cpu: Cpu,
    Terminal: Terminal,
    TrendingUp: TrendingUp,
  };

  const IconComponent = iconMap[options[activeTab].iconName] || Globe;

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Problem Identification
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
            What are you here to solve?
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Select your primary business bottleneck below to view the customized web or AI solution.
          </p>
        </div>

        {/* Dynamic Selector Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Hand Options Panel */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {options.map((opt, i) => {
              const Icon = iconMap[opt.iconName] || Globe;
              const isActive = activeTab === i;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer focus:outline-none ${
                    isActive
                      ? "bg-primary/5 border-primary/40 shadow-sm"
                      : "border-border-custom hover:border-text-muted/30 bg-card-bg/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "bg-primary border-primary text-white"
                          : "bg-background border-border-custom text-text-muted group-hover:text-text-base"
                      }`}
                    >
                      <Icon className="size-4.5" />
                    </div>
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-text-muted group-hover:text-text-base"
                      }`}
                    >
                      {opt.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`size-4 transition-transform duration-300 ${
                      isActive ? "text-primary translate-x-0.5" : "text-text-muted/40 group-hover:text-text-base"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Hand Output Panel */}
          <div className="lg:col-span-7 relative">
            <div className="glass-card rounded-[28px] p-8 md:p-10 border border-border-custom shadow-sm h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Icon + Title Block */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/10 text-primary">
                      <IconComponent className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base leading-tight">
                        {options[activeTab].title}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold block mt-1.5">
                        Investment Anchor: {options[activeTab].priceAnchor}
                      </span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed">
                    <p>{options[activeTab].description}</p>
                    <p className="border-l-2 border-primary/30 pl-4 italic text-text-base/90">
                      {options[activeTab].outcome}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Link Button */}
              <div className="mt-8 pt-6 border-t border-border-custom/50 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <span className="text-xs text-text-muted">
                  Fully customized design & execution.
                </span>
                <button
                  onClick={() => handleScrollTo("#packages")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Choose Your Tier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
