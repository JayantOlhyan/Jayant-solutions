"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function PromoAIChatbotPage() {
  const indicators = [
    { label: "No Credit Card Required", icon: "💳" },
    { label: "Setup in 2 Minutes", icon: "⚡" },
    { label: "Cancel Anytime", icon: "🔄" },
  ];

  const clientLogos = [
    "StackCode TRAINING", "Healthkinator", "FlowForge", "MONEY PULSE", "SMART SURVEILLANCE", "JanGanana DIGITAL"
  ];

  const features = [
    {
      title: "AI-Powered Responses",
      desc: "Advanced AI understands and replies like a human, instantly.",
      icon: "🧠"
    },
    {
      title: "Custom Knowledge",
      desc: "Train your chatbot with your own content, docs, URLs and more.",
      icon: "📖"
    },
    {
      title: "Lead Generation",
      desc: "Capture leads, qualify prospects and collect valuable data.",
      icon: "👤"
    },
    {
      title: "Easy Integrations",
      desc: "Connect with your favorite tools and platforms seamlessly.",
      icon: "🔌"
    },
    {
      title: "Analytics & Insights",
      desc: "Track performance, user interactions and improve conversions.",
      icon: "📊"
    },
    {
      title: "24/7 Availability",
      desc: "Engage visitors and support customers around the clock.",
      icon: "⏰"
    }
  ];

  const benefits = [
    {
      title: "Improve Customer Support",
      desc: "Instantly answer questions and resolve issues.",
      icon: "👥"
    },
    {
      title: "Increase Conversions",
      desc: "Guide visitors, capture leads and close more deals.",
      icon: "📈"
    },
    {
      title: "Save Time & Costs",
      desc: "Automate repetitive tasks and reduce workload.",
      icon: "⚡"
    },
    {
      title: "Better User Experience",
      desc: "Personalized conversations that users love.",
      icon: "😊"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Chatbots" },
    { value: "2M+", label: "Conversations / Month" },
    { value: "35%", label: "Avg. Increase in Leads" },
    { value: "98%", label: "Customer Satisfaction" }
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
            <span className="text-text-base">Build an AI Chatbot</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                #1 AI CHATBOT FOR BUSINESSES
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Build an AI Chatbot That <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Converts, Engages & Delights
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Create a smart AI assistant for your website in minutes. Generate leads, answer questions, and close more deals — 24/7. No coding required.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/contact/book-a-consultation"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-colors"
                >
                  <span>Watch Demo</span>
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

            {/* Right: Interactive chat mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full max-w-[380px] rounded-[24px] border border-border-custom bg-[#0B0F19] text-white shadow-2xl p-5 flex flex-col justify-between aspect-[3/4]">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-full bg-primary/25 border border-primary flex items-center justify-center text-sm">🤖</div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold font-serif leading-none">AI Assistant</span>
                      <span className="text-[9px] text-green-400 font-mono mt-1">● Online</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 py-4 flex flex-col gap-3 overflow-y-auto text-[10px]">
                  <div className="self-start max-w-[80%] bg-white/5 border border-white/5 p-2.5 rounded-xl rounded-tl-none text-left leading-relaxed">
                    Hi 👋 I&apos;m your AI Assistant. How can I help you today?
                  </div>
                  <div className="self-end max-w-[80%] bg-primary text-white p-2.5 rounded-xl rounded-tr-none text-left leading-relaxed">
                    I want to integrate this with my website.
                  </div>
                  <div className="self-start max-w-[80%] bg-white/5 border border-white/5 p-2.5 rounded-xl rounded-tl-none text-left leading-relaxed">
                    Great! It&apos;s super easy. You can integrate in less than 5 minutes. Would you like a step-by-step guide?
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-primary/50"
                  />
                  <button className="bg-primary hover:bg-primary-hover rounded-xl px-4 py-2 text-xs font-bold transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </div>

          </section>

          {/* Client Logos strip */}
          <section className="py-4 border-y border-border-custom/15 text-center">
            <span className="text-[9px] font-mono font-bold text-text-muted uppercase tracking-widest block mb-6">Trusted by 1000+ Businesses Worldwide</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {clientLogos.map((logo) => (
                <span key={logo} className="font-serif text-sm font-bold text-text-muted/60 hover:text-text-base transition-colors select-none">
                  {logo}
                </span>
              ))}
            </div>
          </section>

          {/* Powerful Features to Grow Your Business */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Powerful Features to Grow Your Business
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                Everything you need to build, train and scale your AI chatbot.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {features.map((item, idx) => (
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

          {/* Why Businesses Love Our AI Chatbot */}
          <section className="py-8 border-t border-border-custom/25 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Why Businesses Love Our AI Chatbot
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-4">
                Better engagement. More leads. Higher conversions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="hog-card rounded-2xl p-6 border border-border-custom bg-[#0B0F19] text-white flex flex-col gap-3 text-left"
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <h5 className="font-serif text-xs md:text-sm font-bold leading-snug">{benefit.title}</h5>
                  <p className="text-[10px] md:text-xs text-white/70 leading-relaxed">{benefit.desc}</p>
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
                  Ready to Build Your AI Chatbot?
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Join thousands of businesses using AI to engage, convert and grow — every single day.
                </p>
                
                <div className="flex flex-wrap gap-4 text-white/80">
                  <Link
                    href="/contact/book-a-consultation"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                  >
                    <span>Get Started Free</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>Book a Demo</span>
                  </Link>
                </div>
              </div>

              {/* Right list */}
              <div className="lg:col-span-4 flex flex-col gap-3 text-white text-[10px] font-mono">
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-3.5 text-primary shrink-0" />
                  <span>Cancel Anytime</span>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
