"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PromoAutomationSolutionsPage() {
  const indicators = [
    { label: "Save Time (Eliminate Repetitive Tasks)", icon: "⏰" },
    { label: "Reduce Operating Costs", icon: "💸" },
    { label: "Increase Team Productivity", icon: "📈" },
    { label: "Scale Systems Seamlessly", icon: "⚙️" },
  ];

  const clientLogos = [
    "StackCode TRAINING", "Healthkinator", "FlowForge", "MONEY PULSE", "SMART SURVEILLANCE", "JanGanana DIGITAL"
  ];

  const solutions = [
    {
      title: "Workflow Automation",
      desc: "Automate business processes and approvals to eliminate manual work.",
      icon: "⚙️"
    },
    {
      title: "System Integrations",
      desc: "Connect your tools and platforms for seamless data flow.",
      icon: "🔌"
    },
    {
      title: "Marketing Automation",
      desc: "Automate email campaigns, lead nurturing and customer engagement.",
      icon: "📧"
    },
    {
      title: "CRM Automation",
      desc: "Streamline your sales pipeline and customer management.",
      icon: "👥"
    },
    {
      title: "Document Automation",
      desc: "Generate, manage and auto-fill documents intelligently.",
      icon: "📄"
    },
    {
      title: "Analytics & Reporting",
      desc: "Get real-time insights and make data-driven decisions.",
      icon: "📊"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discover",
      desc: "We understand your business and identify key opportunities.",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Plan",
      desc: "We design a custom automation strategy for your needs.",
      icon: "📝"
    },
    {
      step: "3",
      title: "Build",
      desc: "We build, integrate and configure automation workflows.",
      icon: "⚙️"
    },
    {
      step: "4",
      title: "Test",
      desc: "We test thoroughly to ensure everything works perfectly.",
      icon: "🛡️"
    },
    {
      step: "5",
      title: "Deploy",
      desc: "We deploy the solution and ensure smooth adoption.",
      icon: "🚀"
    },
    {
      step: "6",
      title: "Optimize",
      desc: "We continuously monitor and optimize for better results.",
      icon: "📈"
    }
  ];

  const stats = [
    { value: "80%", label: "Time Saved" },
    { value: "60%", label: "Cost Reduction" },
    { value: "2X", label: "Increase in Productivity" },
    { value: "99%", label: "Process Accuracy" }
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
            <span className="text-text-base">Business Automation Solutions</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                AUTOMATE. OPTIMIZE. GROW.
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Business Automation Solutions <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  That Save Time & Reduce Costs.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help businesses automate repetitive tasks, streamline workflows and integrate powerful tools so you can focus on what truly matters.
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
                  <span>View Our Solutions</span>
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
                    <span>Tasks Automated</span><span className="text-primary font-bold">125,000+</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Hours Saved</span><span className="text-primary font-bold">15,000+</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Integrations Connected</span><span className="text-primary">Lead Capture & Data Sync</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Real-time Reporting</span>
                    <span className="font-bold font-serif text-white mt-1">Status: Workflow Automation Active</span>
                  </div>
                  <span className="text-lg">⚙️</span>
                </div>
              </div>
            </div>

          </section>

          {/* Client Logos strip */}
          <section className="py-4 border-y border-border-custom/15 text-center">
            <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest block mb-6">Trusted by Businesses & Startups</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-serif text-sm font-bold text-text-muted/60 hover:text-text-base transition-colors select-none">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          {/* Our Automation Solutions */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Automation Solutions
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                End-to-end automation services to streamline your business operations.
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

          {/* Real Results. Measurable Impact. */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Real Results. Measurable Impact.
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                Automation that delivers bottom-line results.
              </p>
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

          {/* Our Proven Automation Process */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Proven Automation Process
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                A simple, transparent process to automate your business.
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

          {/* Bottom CTA Block */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-8 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Ready to Automate Your Business?
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Let&apos;s build smart automation solutions that save you time, reduce costs and help you scale.
                </p>
                
                <div className="flex flex-wrap gap-4 text-white/80">
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                  >
                    <span>Get a Free Consultation</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>Talk to an Expert</span>
                  </Link>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-4 flex flex-col gap-3 text-white text-[10px] font-mono">
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Workflow Audits Included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Custom Tools Integrations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Post-Deployment Monitoring</span>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
