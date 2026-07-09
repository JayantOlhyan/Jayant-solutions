"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Clock, Calendar, Mail } from "lucide-react";

export default function ServiceStatusPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const stats = [
    { label: "Overall Uptime (30d)", value: "100%" },
    { label: "Active Incidents", value: "0" },
    { label: "Scheduled Maintenance", value: "0" },
    { label: "Services Operational", value: "100%" },
  ];

  const services = [
    { name: "Website Hosting", desc: "Hosting & CDN", status: "Operational", uptime: "100%", latency: "125 ms" },
    { name: "Cloud Servers", desc: "Compute Infrastructure", status: "Operational", uptime: "100%", latency: "98 ms" },
    { name: "Database Services", desc: "Managed Databases", status: "Operational", uptime: "100%", latency: "112 ms" },
    { name: "Application Services", desc: "APIs & Backend Services", status: "Operational", uptime: "99.99%", latency: "146 ms" },
    { name: "Security Services", desc: "WAF, SSL & Security", status: "Operational", uptime: "100%", latency: "87 ms" },
    { name: "Email Services", desc: "Transactional Emails", status: "Operational", uptime: "100%", latency: "103 ms" },
  ];

  const historyMetrics = [
    { label: "Operational", value: "100%", color: "bg-green-500" },
    { label: "Degraded", value: "0%", color: "bg-yellow-500" },
    { label: "Partial Outage", value: "0%", color: "bg-orange-500" },
    { label: "Major Outage", value: "0%", color: "bg-red-500" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
            <span>&gt;</span>
            <span className="text-text-base">Service Status</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                SUPPORT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Service Status
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Real-time status and performance of our systems and services.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> Last updated: 12 May 2025, 10:30 AM IST</span>
                <span className="flex items-center gap-1 text-green-500 font-bold">● All Systems Operational</span>
              </div>
            </div>

            {/* Right: Server graphics */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[16/9] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 font-serif text-lg">
                    ✔
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white leading-none">100%</span>
                    <span className="text-[9px] text-white/50 mt-1 uppercase tracking-widest leading-none">Uptime guarantee</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Overall Uptime status box */}
          <section className="py-2">
            <div className="w-full rounded-3xl border border-border-custom bg-card-bg/60 p-6 md:p-8 flex flex-col gap-6 shadow-md text-left">
              <div className="flex items-center gap-4 border-b border-border-custom/50 pb-5">
                <CheckCircle2 className="size-8 text-green-500 shrink-0" />
                <div>
                  <h3 className="font-serif text-base font-bold text-text-base leading-none mb-1">All Systems Operational</h3>
                  <p className="text-[10px] md:text-xs text-text-muted">Everything is running smoothly. No active incidents at this time.</p>
                </div>
              </div>

              {/* stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col text-left gap-1">
                    <span className="text-xl font-serif font-black text-text-base">{stat.value}</span>
                    <span className="text-[10px] font-mono text-text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Split lists & sidebar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left Services operational status list */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-left w-full">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-text-base">
                Services Status
              </h2>

              <div className="border border-border-custom bg-card-bg/40 rounded-3xl p-6 overflow-x-auto w-full">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border-custom/50 text-text-muted">
                      <th className="py-2.5 font-bold text-left">Service</th>
                      <th className="py-2.5 font-bold text-left">Status</th>
                      <th className="py-2.5 font-bold text-left">Uptime (30d)</th>
                      <th className="py-2.5 font-bold text-left">Response Time</th>
                      <th className="py-2.5 font-bold text-left">History</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom/30">
                    {services.map((s, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
                        <td className="py-3 pr-4 text-left">
                          <span className="font-bold text-text-base block">{s.name}</span>
                          <span className="text-[9px] text-text-muted mt-0.5 block">{s.desc}</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-green-500/10 text-green-500 border border-green-500/20">
                            {s.status}
                          </span>
                        </td>
                        <td className="py-3 pr-4 font-mono text-[10px] text-text-muted">{s.uptime}</td>
                        <td className="py-3 pr-4 font-mono text-[10px] text-text-base">{s.latency}</td>
                        <td className="py-3 font-mono text-[10px] text-green-500">📈</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full">
              
              {/* Subscribe to updates */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Subscribe to Updates
                </h3>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  Get notified about incidents, maintenance, and status updates.
                </p>
                
                {subscribed ? (
                  <span className="text-xs text-green-500 font-bold">Successfully subscribed!</span>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2 w-full mt-2">
                    <input
                      required
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-3 py-2.5 rounded-lg border border-border-custom bg-white dark:bg-card-bg/60 text-[10px] text-text-base focus:outline-none focus:border-primary shadow-sm flex-1"
                    />
                    <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-[10px] font-mono font-bold shadow-sm transition-colors shrink-0">
                      Subscribe
                    </button>
                  </form>
                )}
                <span className="text-[8px] font-mono text-text-muted">We respect your privacy. Unsubscribe anytime.</span>
              </div>

              {/* Upcoming maintenance */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Upcoming Maintenance
                </h3>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  No maintenance scheduled. We&apos;ll notify you in advance of any planned maintenance.
                </p>
              </div>

              {/* Status History (30 days) */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Status History (30 Days)
                </h3>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-text-base">100% Uptime</span>
                  </div>

                  <div className="space-y-2 mt-2">
                    {historyMetrics.map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] font-mono">
                        <div className="flex items-center gap-2">
                          <span className={`size-2 rounded-full ${m.color}`} />
                          <span className="text-text-muted">{m.label}</span>
                        </div>
                        <span className="text-text-base font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </section>

          {/* Bottom CTA banner */}
          <section className="border border-border-custom bg-card-bg/40 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-serif text-sm md:text-base font-bold text-text-base mb-1">Having Issues?</h4>
              <p className="text-[10px] md:text-xs text-text-muted">If you are experiencing issues that are not reflected on this page, please contact our support team.</p>
            </div>
            <Link
              href="/support/report-a-bug"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-xs font-mono font-bold text-white transition-colors shrink-0 shadow-md"
            >
              <span>Report an Issue</span>
              <ArrowRight className="size-4" />
            </Link>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
