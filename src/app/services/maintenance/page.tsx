"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Heart, Clock, Laptop, Settings, Database, Cloud, AlertTriangle } from "lucide-react";

export default function MaintenanceServicesPage() {
  const indicators = [
    { label: "Proactive Monitoring", icon: <ShieldCheck className="size-4 text-primary" /> },
    { label: "Timely Updates", icon: <RefreshIcon className="size-4 text-primary" /> },
    { label: "Security First", icon: <LockIcon className="size-4 text-primary" /> },
    { label: "Performance Optimization", icon: <PerformanceIcon className="size-4 text-primary" /> },
  ];

  const maintanList = [
    { title: "Websites", desc: "Keep your website updated, secure, and running seamlessly.", icon: "🌐" },
    { title: "Web Applications", desc: "Ensure your applications are stable, secure, and up-to-date.", icon: "💻" },
    { title: "Mobile Apps", desc: "Bug fixes, updates, and performance improvements for iOS & Android.", icon: "📱" },
    { title: "Servers & Cloud", desc: "Monitor, optimize, and maintain your servers and cloud infrastructure.", icon: "☁️" },
    { title: "Databases", desc: "Database optimization, backup, and performance monitoring.", icon: "🗄️" },
    { title: "Security", desc: "Regular security scans, vulnerability fixes, and threat monitoring.", icon: "🛡️" },
  ];

  const plans = [
    {
      name: "Standard",
      price: "₹4,999",
      billing: "/month",
      desc: "Ideal for small websites and startups.",
      cta: "View Details",
      popular: false,
    },
    {
      name: "Professional",
      price: "₹9,999",
      billing: "/month",
      desc: "Perfect for growing businesses.",
      cta: "View Details",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "",
      desc: "Tailored for large-scale applications.",
      cta: "Contact Us",
      popular: false,
    },
  ];

  const benefits = [
    "24/7 monitoring & proactive issue resolution",
    "Regular backups and disaster recovery",
    "Security updates & vulnerability fixes",
    "Performance optimization & uptime assurance",
    "Dedicated support from our expert team",
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>&gt;</span>
            <span className="text-text-base">Maintenance</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                MAINTENANCE SERVICES
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                We Keep Your Digital <br /> Products{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Secure, Fast & Reliable.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Our maintenance and support services ensure your websites, applications, and systems run smoothly, stay updated, and perform at their best—so you can focus on growing your business.
              </p>

              {/* Stats/Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {indicators.map((ind, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shrink-0">
                      {ind.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-text-base leading-none">{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mockup Dashboard panel */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-between text-white/95">
                <div className="flex flex-col gap-4 text-[10px] font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Uptime</span><span className="text-primary font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Response Time</span><span>220ms</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Security</span><span>Secure</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Updates</span><span>Up to date</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex justify-between items-center text-[10px] mt-4">
                  <div className="flex flex-col text-left">
                    <span className="text-white/40 uppercase tracking-widest font-mono">Website Backup</span>
                    <span className="font-bold font-serif text-white mt-1">Last Backup: Today, 02:30 AM</span>
                  </div>
                  <span className="text-lg">💾</span>
                </div>
              </div>
            </div>

          </section>

          {/* What We Maintain */}
          <section className="py-8 border-t border-border-custom/20 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHAT WE MAINTAIN
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Comprehensive Maintenance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {maintanList.map((item, idx) => (
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

          {/* Why Choose Our Maintenance Services & Flexible Maintenance Plans Split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left: Why Choose us */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                  WHY CHOOSE US
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base leading-tight">
                  Why Choose Our Maintenance Services?
                </h3>
              </div>

              <div className="space-y-3.5">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-text-muted">
                    <Check className="size-4 text-primary shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Plans */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                  MAINTENANCE PLANS
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base leading-tight">
                  Flexible Maintenance Plans
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {plans.map((p, idx) => (
                  <div
                    key={idx}
                    className={`hog-card rounded-2xl p-5 border flex flex-col justify-between text-left min-h-[220px] ${
                      p.popular ? "border-primary bg-primary/5 shadow-md" : "border-border-custom bg-card-bg/40"
                    }`}
                  >
                    <div>
                      {p.popular && (
                        <span className="font-mono text-[8px] text-white bg-primary px-2.5 py-0.5 rounded uppercase tracking-wider self-start inline-block mb-3">
                          Most Popular
                        </span>
                      )}
                      <h4 className="font-serif text-xs md:text-sm font-bold text-text-base leading-none mb-1">{p.name}</h4>
                      <p className="text-[10px] text-text-muted mt-2">{p.desc}</p>
                      
                      <div className="flex items-baseline gap-1 mt-4">
                        <span className="text-xl md:text-2xl font-serif font-black text-text-base">{p.price}</span>
                        <span className="text-[10px] text-text-muted font-sans">{p.billing}</span>
                      </div>
                    </div>

                    <Link
                      href="/pricing/maintenance-plans"
                      className={`w-full text-center py-2.5 text-xs font-mono font-bold rounded-xl block transition-all mt-6 active:scale-[0.98] ${
                        p.popular
                          ? "bg-primary hover:bg-primary-hover text-white shadow-md"
                          : "border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-text-base"
                      }`}
                    >
                      {p.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Need Immediate Assistance? <br />
                  <span className="text-primary">Our Support Team is Available 24/7.</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Get immediate assistance to keep your business running smoothly without interruptions.
                </p>
              </div>

              {/* Right buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 w-full justify-end">
                <Link
                  href="/support/report-a-bug"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  <span>Create a Support Ticket</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                >
                  <span>Talk to an Expert</span>
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

// Simple icons replacement helpers
function RefreshIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PerformanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
