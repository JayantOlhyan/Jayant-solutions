"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Activity, ShieldAlert, Cpu, Heart, CheckCircle2 } from "lucide-react";

export default function AIStartupsPage() {
  const indicators = [
    { label: "Faster Time to Market", icon: "🚀" },
    { label: "Smarter Products with AI", icon: "🧠" },
    { label: "Scalable & Cost Efficient", icon: "💸" },
  ];

  const clientLogos = [
    "zepto", "Razorpay", "meesho", "Pocket FM", "CRED", "innovaccer", "dunzo"
  ];

  const solutions = [
    {
      title: "AI Product Strategy",
      desc: "Validate ideas and define AI opportunities to build the right product from day one.",
      icon: "🎯"
    },
    {
      title: "MVP Development",
      desc: "Build AI-powered MVPs quickly and iterate based on real user feedback.",
      icon: "💻"
    },
    {
      title: "Intelligent Automation",
      desc: "Automate operations and workflows to save time, reduce costs, and scale without limits.",
      icon: "⚙️"
    },
    {
      title: "Data & AI Engineering",
      desc: "Build robust data pipelines, train models, and integrate AI seamlessly into your product.",
      icon: "📊"
    },
    {
      title: "AI Integrations",
      desc: "Integrate powerful AI capabilities like LLMs, NLP, computer vision, and more into your platform.",
      icon: "🔌"
    },
    {
      title: "Scaling & Optimization",
      desc: "Optimize performance, reduce costs, and scale your AI product for massive growth.",
      icon: "📈"
    }
  ];

  const useCases = [
    {
      title: "AI Chatbots & Assistants",
      desc: "Improve user engagement and support with intelligent conversational AI.",
      icon: "💬"
    },
    {
      title: "Personalization Engines",
      desc: "Deliver personalized experiences that increase retention and conversion.",
      icon: "👤"
    },
    {
      title: "Predictive Analytics",
      desc: "Make data-driven decisions and predict trends to stay ahead of the competition.",
      icon: "📈"
    },
    {
      title: "Content Generation",
      desc: "Automate content creation using AI for blogs, emails, social media, and more.",
      icon: "📝"
    },
    {
      title: "Fraud Detection",
      desc: "Detect anomalies and prevent fraud in real-time with AI models.",
      icon: "🛡️"
    },
    {
      title: "Recommendation Systems",
      desc: "Boost engagement and revenue with AI-powered recommendations.",
      icon: "⭐️"
    }
  ];

  const pillars = [
    "Startup-Focused Approach",
    "Agile & Lean Development",
    "Investor-Ready Solutions",
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
            <span className="text-text-base">AI for Startups</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                GET IN TOUCH
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                AI-Powered Products. <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Built for Scale.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We help startups ideate, build, and scale AI-powered products faster. From MVP to intelligent automation, we&apos;re your technical co-founder in the journey of growth.
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
                    <span>User Growth</span><span className="text-primary font-bold">↑ 68% This Month</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Cost Optimization</span><span className="text-primary font-bold">40% Saved</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Savings</span><span className="text-primary">3x Savings</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">AI Insights</span>
                    <span className="font-bold font-serif text-white mt-1">Status: Scaling</span>
                  </div>
                  <span className="text-lg">🚀</span>
                </div>
              </div>
            </div>

          </section>

          {/* Client Logos strip */}
          <section className="py-4 border-y border-border-custom/15 text-center">
            <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest block mb-6">Trusted by Innovative Startups</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-serif text-sm font-bold text-text-muted/60 hover:text-text-base transition-colors select-none">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          {/* Our AI Solutions for Startups */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our AI Solutions for Startups
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                We combine the power of AI and modern engineering to create products that your users love and investors back.
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

          {/* Use Cases That Drive Success */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Use Cases That Drive Success
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
                  Let&apos;s Build Something <br />
                  <span className="text-primary">Extraordinary Together</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  From idea to impact, we help startups build intelligent products that scale, impress users, and attract investment.
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
