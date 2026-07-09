"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Check, ArrowRight, Shield, RefreshCw, Star, Heart, Lock, Layout } from "lucide-react";

export default function MaintenancePlansPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Essential",
      desc: "Basic care for small websites and business sites",
      price: billingPeriod === "yearly" ? "₹2,549" : "₹2,999",
      billing: "/month",
      features: [
        "Uptime Monitoring",
        "Monthly Backups",
        "Core & Plugin Updates",
        "Security Scans",
        "Bug Fixes (Minor)",
        "Email Support",
      ],
      cta: "Choose Plan",
      popular: false,
    },
    {
      name: "Professional",
      desc: "Perfect for growing websites and businesses",
      price: billingPeriod === "yearly" ? "₹5,949" : "₹6,999",
      billing: "/month",
      features: [
        "Everything in Essential",
        "Weekly Backups",
        "Performance Monitoring",
        "Security Updates & Patches",
        "Content Updates (Up to 5)",
        "Bug Fixes (Standard)",
        "Priority Email & Chat Support",
      ],
      cta: "Choose Plan",
      popular: true,
    },
    {
      name: "Business",
      desc: "For business-critical websites and web applications",
      price: billingPeriod === "yearly" ? "₹11,049" : "₹12,999",
      billing: "/month",
      features: [
        "Everything in Professional",
        "Daily Backups",
        "Advanced Performance Optimization",
        "Malware Removal & Protection",
        "Content Updates (Up to 15)",
        "Bug Fixes (Priority)",
        "Priority Support (24-48 hrs)",
        "Monthly Maintenance Report",
      ],
      cta: "Choose Plan",
      popular: false,
    },
    {
      name: "Enterprise",
      desc: "For large applications and high-traffic platforms",
      price: billingPeriod === "yearly" ? "₹21,249" : "₹24,999",
      billing: "/month",
      features: [
        "Everything in Business",
        "Real-time Monitoring",
        "Custom Development Support",
        "Content Updates (Unlimited)",
        "Bug Fixes (Critical Priority)",
        "Dedicated Support Manager",
        "SLA & Guaranteed Response",
        "Quarterly Strategy Review",
      ],
      cta: "Talk to Us",
      popular: false,
    },
  ];

  const coreFeatures = [
    { title: "24/7 Uptime Monitoring", desc: "We keep an eye on your website 24/7." },
    { title: "Regular Backups", desc: "Your data is safe with scheduled backups." },
    { title: "Security First", desc: "Proactive scans and threat detection." },
    { title: "Quick Support", desc: "We're here when you need us." },
    { title: "Detailed Reporting", desc: "Transparent reports every month." },
  ];

  const addons = [
    { title: "Extra Content Updates", desc: "(Per 5 updates)", price: "₹1,500 /month" },
    { title: "Speed Optimization", desc: "(One-time setup)", price: "₹2,000 /month" },
    { title: "Advanced Security", desc: "(WAF, Malware Protection)", price: "₹2,500 /month" },
    { title: "Landing Page Design", desc: "(Custom Design)", price: "₹3,999 /page" },
    { title: "Emergency Support", desc: "(Priority Handling)", price: "₹1,999 /incident" },
  ];

  const benefits = [
    "Prevent downtime and data loss",
    "Improve website performance",
    "Enhance security & user trust",
    "Save time and reduce costs",
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <span>&gt;</span>
            <span className="text-text-base">Maintenance Plans</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                MAINTENANCE PLANS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Keep Your Website.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Secure, Fast & Reliable.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Our maintenance plans ensure your website, application, or platform runs smoothly 24/7 — so you can focus on growing your business.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">🛡️ Proactive Monitoring</span>
                <span className="flex items-center gap-1">🔄 Timely Updates</span>
                <span className="flex items-center gap-1">💬 Priority Support</span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <h4 className="font-serif text-lg font-bold mb-3">We don&apos;t just build.</h4>
                  <h3 className="font-serif text-2xl font-black text-primary leading-tight">We take care of what we build.</h3>
                </div>
              </div>
            </div>

          </section>

          {/* Toggle Switch */}
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="inline-flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 border border-border-custom rounded-xl select-none">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white dark:bg-card-bg text-text-base shadow-sm"
                    : "text-text-muted hover:text-text-base"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-white dark:bg-card-bg text-text-base shadow-sm"
                    : "text-text-muted hover:text-text-base"
                }`}
              >
                Yearly
              </button>
            </div>
            <span className="text-[10px] font-mono text-primary font-bold bg-primary/10 border border-primary/25 px-2.5 py-0.5 rounded-full">
              Save 15% with Yearly Billing
            </span>
          </div>

          {/* Pricing Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`hog-card rounded-3xl p-6 bg-card-bg/60 border flex flex-col justify-between transition-all duration-300 ${
                  plan.popular 
                    ? "border-primary shadow-lg ring-1 ring-primary/20 scale-[1.02]" 
                    : "border-border-custom"
                }`}
              >
                <div className="flex flex-col gap-5 text-left">
                  {plan.popular && (
                    <span className="font-mono text-[9px] font-bold text-white bg-primary px-2.5 py-0.5 rounded-full uppercase tracking-wider self-start">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-serif text-base font-bold text-text-base leading-none mb-1">{plan.name}</h3>
                    <p className="text-[10px] text-text-muted leading-tight">{plan.desc}</p>
                  </div>

                  <div className="flex flex-baseline gap-1">
                    <span className="text-2xl md:text-3xl font-serif font-black text-text-base">{plan.price}</span>
                    <span className="text-xs text-text-muted font-sans">{plan.billing}</span>
                  </div>

                  <div className="h-[1px] bg-border-custom/50 w-full" />

                  <ul className="space-y-2 text-xs">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-text-muted leading-snug">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-1.5 rounded-xl py-3 text-xs font-mono font-bold transition-all mt-8 active:scale-[0.98] ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-white shadow-md"
                      : "border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-text-base"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </section>

          {/* Included in all plans */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-text-base">
                Included in All Plans
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {coreFeatures.map((f, idx) => (
                <div key={idx} className="flex gap-3 text-left">
                  <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-bold text-text-base leading-none mb-1">{f.title}</h5>
                    <p className="text-[10px] text-text-muted leading-tight">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add-on Services */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                ADD-ON SERVICES
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Add-on Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {addons.map((addon, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[120px]">
                  <div className="flex flex-col gap-3 text-left">
                    <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{addon.title}</h5>
                    <span className="text-[9px] text-text-muted leading-none -mt-1">{addon.desc}</span>
                    <p className="text-xs font-serif font-black text-primary leading-none mt-1">{addon.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Maintenance Matters */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-8 border-t border-border-custom/30 pt-16">
            <div className="lg:col-span-5 text-left">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4">
                Why Maintenance Matters?
              </h2>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                A well-maintained website is secure, fast, and always available. It improves user experience, boosts SEO, and protects your brand reputation.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-text-muted leading-snug p-4 rounded-xl border border-border-custom bg-card-bg/40">
                  <Check className="size-4 text-primary shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Let Us Handle the Maintenance, <br />
                  <span className="text-primary">You Focus on Growth.</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Choose the perfect plan and leave the rest to us. Get in touch to get started!
                </p>
              </div>

              {/* Right buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 w-full justify-end">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  <span>Choose a Plan</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
