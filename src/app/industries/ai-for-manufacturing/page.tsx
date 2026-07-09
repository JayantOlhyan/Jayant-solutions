"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Activity, ShieldAlert, Cpu, Heart, CheckCircle2 } from "lucide-react";

export default function AIManufacturingPage() {
  const indicators = [
    { label: "Maximize Production", icon: "⚙️" },
    { label: "Predict & Prevent Downtime", icon: "🛠️" },
    { label: "Reduce Costs & Increase Quality", icon: "📈" },
  ];

  const clientLogos = [
    "TATA MOTORS", "Mahindra", "LARSEN & TOUBRO", "SIEMENS", "BOSCH", "kirloskar", "HERO"
  ];

  const solutions = [
    {
      title: "Predictive Maintenance",
      desc: "Use AI to predict equipment failures before they happen and minimize unplanned downtime.",
      icon: "🔧"
    },
    {
      title: "Production Optimization",
      desc: "Optimize schedules, resources, and workflows to increase throughput and reduce bottlenecks.",
      icon: "⚙️"
    },
    {
      title: "Quality Inspection",
      desc: "AI-powered vision systems detect defects in real-time and ensure consistent product quality.",
      icon: "👁️"
    },
    {
      title: "Supply Chain Intelligence",
      desc: "Predict demand, optimize inventory, and build resilient supply chains with AI-driven insights.",
      icon: "📦"
    },
    {
      title: "Energy Management",
      desc: "Monitor and optimize energy usage to reduce consumption and improve sustainability.",
      icon: "⚡"
    },
    {
      title: "Process Analytics",
      desc: "Analyze production data to uncover inefficiencies and drive continuous improvement.",
      icon: "📊"
    }
  ];

  const useCases = [
    {
      title: "Predict Equipment Failures",
      desc: "Reduce downtime and maintenance costs with accurate failure prediction models.",
      icon: "⚠️"
    },
    {
      title: "Increase Production Yield",
      desc: "Optimize process parameters to improve yield and overall equipment effectiveness (OEE).",
      icon: "📈"
    },
    {
      title: "Automated Quality Control",
      desc: "Detect surface defects, measure dimensions, and ensure compliance with AI vision systems.",
      icon: "🔍"
    },
    {
      title: "Demand Forecasting",
      desc: "Forecast demand accurately and align production planning to reduce stockouts and overstock.",
      icon: "🔮"
    },
    {
      title: "Workplace Safety",
      desc: "AI-powered monitoring to detect unsafe conditions and prevent accidents in real-time.",
      icon: "🛡️"
    },
    {
      title: "Sustainability Monitoring",
      desc: "Track emissions, waste, and resource usage for smarter and greener manufacturing.",
      icon: "🍃"
    }
  ];

  const pillars = [
    "Industry-Specific Expertise",
    "Proven AI Solutions",
    "Scalable & Secure",
    "End-to-End Support",
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Industries</span>
            <span>&gt;</span>
            <span className="text-text-base">AI for Manufacturing</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                GET IN TOUCH
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                AI-Powered Manufacturing. <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Higher Output. Lower Costs. Smarter Operations.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help manufacturers leverage AI to optimize production, predict equipment failures, ensure quality, and build resilient supply chains for a more competitive future.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/contact/book-a-consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-colors"
                >
                  <span>Explore Our Solutions</span>
                </Link>
              </div>

              {/* Stats/Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {indicators.map((ind, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-lg leading-none shrink-0">{ind.icon}</span>
                    <span className="text-[10px] font-mono font-bold text-text-base leading-none">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-between text-white/95">
                <div className="flex flex-col gap-3 font-mono text-[9px] text-white/60">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>OEE (Overall Equipment Effectiveness)</span><span className="text-primary font-bold">82%</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Production Output</span><span className="text-primary font-bold">24,540 Today</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Energy Consumption</span><span className="text-primary">-15%</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Predictive Maintenance</span>
                    <span className="font-bold font-serif text-white mt-1">Status: Operational</span>
                  </div>
                  <span className="text-lg">🏭</span>
                </div>
              </div>
            </div>

          </section>

          {/* Client Logos strip */}
          <section className="py-4 border-y border-border-custom/15 text-center">
            <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest block mb-6">Trusted by Leading Manufacturers</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-serif text-sm font-bold text-text-muted/60 hover:text-text-base transition-colors select-none">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          {/* Our AI Solutions for Manufacturing */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our AI Solutions for Manufacturing
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                From predictive insights to intelligent automation, we deliver AI solutions that drive efficiency, quality, and innovation across your operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {solutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left"
                >
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                    {sol.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{sol.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases That Deliver Real Impact */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Use Cases That Deliver Real Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left"
                >
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                    {uc.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{uc.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Block */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Let&apos;s Build the Smart Factory <br />
                  <span className="text-primary">of Tomorrow</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Whether you&apos;re just beginning your AI journey or looking to scale existing initiatives, we&apos;re your technology partner for transformation.
                </p>
                
                <div className="flex flex-wrap gap-4 text-white/80">
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>View Our Work</span>
                  </Link>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-[10px] font-mono">
                {pillars.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="size-3.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
