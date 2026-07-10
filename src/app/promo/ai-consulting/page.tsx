"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PromoAIConsultingPage() {
  const indicators = [
    { label: "AI Strategy & Roadmap", icon: "🗺️" },
    { label: "Use Case Identification", icon: "🔍" },
    { label: "Solution Implementation", icon: "⚙️" },
    { label: "Scalable AI Transformation", icon: "📈" },
  ];

  const clientLogos = [
    "StackCode TRAINING", "Healthkinator", "FlowForge", "MONEY PULSE", "SMART SURVEILLANCE", "JanGanana DIGITAL"
  ];

  const services = [
    {
      title: "AI Strategy & Roadmap",
      desc: "We assess your business and build a clear AI strategy aligned with your goals.",
      icon: "🎯"
    },
    {
      title: "Use Case Discovery & Prioritization",
      desc: "Identify high-impact use cases that deliver measurable results.",
      icon: "🔍"
    },
    {
      title: "Data Strategy & Engineering",
      desc: "Build robust data foundations for effective AI implementation.",
      icon: "📊"
    },
    {
      title: "Model Development & Integration",
      desc: "Custom AI/ML models built and integrated into your workflows.",
      icon: "⚙️"
    },
    {
      title: "MLOps & Deployment",
      desc: "Deploy models securely and monitor performance at scale.",
      icon: "☁️"
    },
    {
      title: "AI Optimization & Scaling",
      desc: "Continuously improve models and scale AI across your organization.",
      icon: "📈"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discover",
      desc: "Understand your business, challenges & opportunities.",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Define",
      desc: "Prioritize use cases and define success metrics.",
      icon: "🎯"
    },
    {
      step: "3",
      title: "Design",
      desc: "Build solution architecture & data strategy.",
      icon: "📝"
    },
    {
      step: "4",
      title: "Develop",
      desc: "Build, train and validate AI models.",
      icon: "💻"
    },
    {
      step: "5",
      title: "Deploy",
      desc: "Integrate & deploy into production environment.",
      icon: "🚀"
    },
    {
      step: "6",
      title: "Optimize",
      desc: "Monitor, learn and continuously improve.",
      icon: "📈"
    }
  ];

  const stats = [
    { value: "40%+", label: "Increase in Productivity" },
    { value: "30%+", label: "Cost Reduction" },
    { value: "2X", label: "Faster Time to Market" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  const stories = [
    {
      title: "AI-Powered Recommendation Engine",
      desc: "Increased conversion rate by 35% and average order value by 22%.",
      type: "E-Commerce",
      icon: "🛍️"
    },
    {
      title: "Intelligent Patient Risk Prediction",
      desc: "Built an AI model that improved early risk detection accuracy by 45%.",
      type: "Healthcare",
      icon: "🏥"
    },
    {
      title: "Predictive Maintenance Solution",
      desc: "Reduced downtime by 30% and maintenance costs by 25%.",
      type: "Manufacturing",
      icon: "🏭"
    }
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Solutions</span>
            <span>&gt;</span>
            <span className="text-text-base">AI Consulting</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                AI CONSULTING THAT CREATES VALUE
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Turn AI Potential <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Into Real Business Value.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help businesses strategy, implement and scale AI solutions that drive growth, enhance efficiency and create a competitive advantage.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/contact/book-a-consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-colors"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Stats/Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 border-t border-border-custom/50 pt-6 w-full">
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
                    <span>Smarter Decisions</span><span className="text-primary font-bold">Data & AI-Driven</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Operational Efficiency</span><span className="text-primary font-bold">↑ 40% Increase</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Cost Optimization</span><span className="text-primary">↓ 30% Saved</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Revenue Growth</span>
                    <span className="font-bold font-serif text-white mt-1">Status: Scaling & Growing</span>
                  </div>
                  <span className="text-lg">🤖</span>
                </div>
              </div>
            </div>

          </section>

          {/* Client Logos strip */}
          <section className="py-4 border-y border-border-custom/15 text-center">
            <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest block mb-6">Trusted by Innovative Companies</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-serif text-sm font-bold text-text-muted/60 hover:text-text-base transition-colors select-none">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          {/* Our AI Consulting Services */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our AI Consulting Services
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                End-to-end AI consulting to help you build, integrate and scale intelligent solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {services.map((sol, idx) => (
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

          {/* Real Impact. Measurable Results. */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Real Impact. Measurable Results.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-primary">{item.value}</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Our Proven AI Consulting Process */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Proven AI Consulting Process
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                A collaborative approach from strategy to scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left relative"
                >
                  <span className="absolute -top-3 -right-3 size-7 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-xs font-mono font-bold text-primary">
                    {step.step}
                  </span>
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                    {step.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{step.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Success Stories
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                See how we help businesses transform with AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-6 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left"
                >
                  <span className="text-2xl">{story.icon}</span>
                  <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-wider">{story.type}</span>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug mt-1">{story.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{story.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Block */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-8 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Transform Your Business with AI?
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Let&apos;s discuss how AI can solve your biggest challenges and drive real results.
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
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>Talk to an AI Expert</span>
                  </Link>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-4 flex flex-col gap-3 text-white text-[10px] font-mono">
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Custom AI Strategy Roadmap</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Use-Case Discovery Audits</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Scalable Architecture Design</span>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
