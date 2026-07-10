"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PromoStartupMVPPage() {
  const indicators = [
    { label: "Fast Delivery (2-6 Weeks)", icon: "⚡" },
    { label: "Scalable Codebase", icon: "⚙️" },
    { label: "Investor Ready", icon: "🏢" },
  ];

  const clientLogos = [
    "StackCode TRAINING", "Healthkinator", "FlowForge", "MONEY PULSE", "SMART SURVEILLANCE", "JanGanana DIGITAL"
  ];

  const needs = [
    {
      title: "Lightning Fast",
      desc: "We build and deliver your MVP in 2-6 weeks, not months.",
      icon: "⚡"
    },
    {
      title: "Modern Tech Stack",
      desc: "Using the latest technologies for performance, security, and scalability.",
      icon: "💻"
    },
    {
      title: "Focus on Validation",
      desc: "Test your idea, gather real user feedback, and iterate faster.",
      icon: "🎯"
    },
    {
      title: "Investor Ready",
      desc: "Clean architecture, analytics, and metrics to impress investors.",
      icon: "🏢"
    },
    {
      title: "Secure & Scalable",
      desc: "Best practices for security, scalability, and data protection.",
      icon: "🔒"
    },
    {
      title: "Post Launch Support",
      desc: "Ongoing support and maintenance to help you grow and scale.",
      icon: "🛠️"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Ideation",
      desc: "We understand your idea, goals, and target users.",
      icon: "💡"
    },
    {
      step: "2",
      title: "Planning",
      desc: "We define features, tech stack, and timeline.",
      icon: "📝"
    },
    {
      step: "3",
      title: "Development",
      desc: "We build your MVP with clean, scalable code.",
      icon: "💻"
    },
    {
      step: "4",
      title: "Testing",
      desc: "Rigorous testing to ensure quality and performance.",
      icon: "🔍"
    },
    {
      step: "5",
      title: "Launch",
      desc: "We deploy your MVP to the market.",
      icon: "🚀"
    },
    {
      step: "6",
      title: "Iterate & Grow",
      desc: "We analyze, iterate, and help you scale.",
      icon: "📈"
    }
  ];

  const stats = [
    { value: "150+", label: "MVPs Delivered" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "2-6 Weeks", label: "Average Delivery" },
    { value: "50M+", label: "Raised by Our Clients" }
  ];

  const benefits = [
    "No Upfront Payment Required",
    "Agile Development Process",
    "100% Focused on Your Success",
    "Dedicated Project Manager"
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
            <span className="text-text-base">Build Your Startup MVP</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                VALIDATE. LAUNCH. GROW.
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Build Your Startup MVP <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Fast & Investor-Ready.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help founders turn ideas into powerful MVPs—fast. Validate your product, attract early users, and raise funding with confidence.
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
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-colors"
                >
                  <span>View Our Work</span>
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

            {/* Right: Startup dashboard mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-between text-white/95">
                <div className="flex flex-col gap-3 font-mono text-[9px] text-white/60">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Users</span><span className="text-primary font-bold">12,350 (+24.5%)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Revenue</span><span className="text-primary font-bold">$24,580 (+32.1%)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Retention Rate</span><span className="text-primary">68.5% (+12.4%)</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">MVP Status</span>
                    <span className="font-bold font-serif text-white mt-1">Status: Active & Scaling</span>
                  </div>
                  <span className="text-lg">🚀</span>
                </div>
              </div>
            </div>

          </section>

          {/* Client Logos strip */}
          <section className="py-4 border-y border-border-custom/15 text-center">
            <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest block mb-6">Trusted by Founders & Startups</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-serif text-sm font-bold text-text-muted/60 hover:text-text-base transition-colors select-none">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          {/* Everything You Need to Build Your MVP */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Everything You Need to Build Your MVP
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                From idea to MVP in days, not months.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {needs.map((item, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left"
                >
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-xl shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{item.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Proven MVP Development Process */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Proven MVP Development Process
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                A simple, transparent process to turn your idea into reality.
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

          {/* Stats strip */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border-custom/20 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary">{item.value}</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">{item.label}</span>
              </div>
            ))}
          </section>

          {/* Bottom CTA Block */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-8 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Build Your MVP?
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Book a free consultation call with our experts and take the first step toward launching your startup.
                </p>
                
                <div className="flex flex-wrap gap-4 text-white/80">
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                  >
                    <span>Book a Free Call</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>View Pricing</span>
                  </Link>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-4 flex flex-col gap-3 text-white text-[10px] font-mono">
                {benefits.map((item, idx) => (
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
