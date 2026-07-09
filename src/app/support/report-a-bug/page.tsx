"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Upload, Mail, ShieldAlert, Cpu, Heart, CheckCircle2 } from "lucide-react";

export default function ReportBugPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "Select product or service",
    url: "",
    title: "",
    description: "",
    severity: "Select severity level",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { id: "1", name: "We Review", desc: "Our team will review your report." },
    { id: "2", name: "We Investigate", desc: "We'll investigate and identify the issue." },
    { id: "3", name: "We Fix", desc: "We resolve the issue and test thoroughly." },
    { id: "4", name: "We Notify You", desc: "We'll update you once it's fixed." },
  ];

  const checklists = [
    "Make sure the issue hasn't already been reported",
    "Try refreshing the page or clearing cache",
    "Check if you're using the latest version",
    "Provide clear steps to reproduce the issue",
  ];

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
            <span className="text-text-base">Report a Bug</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                SUPPORT
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Report a Bug, <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Help Us Improve
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Found something that isn&apos;t working as expected? Let us know so we can fix it and make our products even better.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">🐞 Quick Resolution</span>
                <span className="flex items-center gap-1">🛡️ Better Quality</span>
                <span className="flex items-center gap-1">🤝 Your Feedback Matters</span>
                <span className="flex items-center gap-1">🔄 Continuous Improvement</span>
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <span className="text-4xl mb-4">🔍</span>
                  <h4 className="font-serif text-lg font-bold mb-1">Bug Tracking System</h4>
                  <p className="text-xs text-white/70">Submit your ticket and our developer team will look into it instantly.</p>
                </div>
              </div>
            </div>

          </section>

          {/* Form and info split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left form */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
              {submitted ? (
                <div className="border border-border-custom bg-card-bg/60 p-8 rounded-3xl text-center flex flex-col items-center gap-4 max-w-lg mx-auto w-full">
                  <CheckCircle2 className="size-16 text-primary" />
                  <h3 className="font-serif text-2xl font-bold text-text-base">Bug Report Submitted!</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Thank you for your report. Our engineering team will review it and investigate the issue. We&apos;ll keep you updated on the progress.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-xs font-mono font-bold transition-all shadow-md mt-4"
                  >
                    <span>Submit Another Report</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-border-custom bg-card-bg/60 p-6 md:p-8 rounded-3xl space-y-6">
                  <div className="border-b border-border-custom/50 pb-3 mb-6">
                    <h3 className="font-serif text-lg font-bold text-text-base">Bug Report Form</h3>
                    <p className="text-[10px] text-text-muted">Please provide as much detail as possible to help us resolve the issue quickly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Your Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Product / Service *</label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      >
                        <option>Select product or service</option>
                        <option>AI Development</option>
                        <option>Custom Software</option>
                        <option>Web Development</option>
                        <option>Mobile Apps</option>
                        <option>Automation</option>
                        <option>Cloud & DevOps</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Page / URL (if applicable)</label>
                      <input
                        type="text"
                        placeholder="https://example.com/page"
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-text-base">Bug Title *</label>
                    <input
                      required
                      type="text"
                      placeholder="Briefly describe the issue"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-text-base">Describe the Bug *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Provide detailed steps to reproduce the issue, what you expected to happen, and what actually happened."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Severity *</label>
                      <select
                        value={formData.severity}
                        onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      >
                        <option>Select severity level</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Attachments (Optional)</label>
                      <div className="border border-dashed border-border-custom rounded-xl p-3 text-center flex flex-col items-center justify-center gap-1 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                        <Upload className="size-4 text-text-muted" />
                        <span className="text-[9px] font-mono text-text-base"><span className="text-primary font-bold">Upload Files</span> or drag and drop</span>
                        <span className="text-[8px] text-text-muted font-mono leading-none mt-0.5">Screenshots, recordings or any relevant files (Max 10MB)</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                  >
                    <span>Submit Bug Report</span>
                    <ArrowRight className="size-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
              
              {/* Before you submit */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  Before You Submit
                </h3>
                <div className="space-y-3">
                  {checklists.map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[10px] md:text-xs text-text-muted leading-relaxed">
                      <Check className="size-3.5 text-primary shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What happens next */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                  What Happens Next?
                </h3>
                
                <div className="flex flex-col gap-5 relative before:absolute before:inset-y-0 before:left-3 before:w-[1px] before:bg-border-custom/50">
                  {steps.map((step) => (
                    <div key={step.id} className="flex gap-4 relative pl-8">
                      <div className="absolute left-[10px] top-1 size-2 rounded-full bg-primary border-4 border-white dark:border-[#0f172a]" />
                      <div>
                        <h5 className="font-serif text-xs font-bold text-text-base leading-none mb-1">{step.name}</h5>
                        <p className="text-[10px] text-text-muted leading-tight mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Need Immediate help */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-[#0B0F19] border border-white/10 flex flex-col gap-4 text-white">
                <div className="flex items-start gap-3">
                  <Mail className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">Need Immediate Help?</h4>
                    <p className="text-[10px] text-white/70 leading-relaxed mt-1">
                      If this is a critical issue affecting your business operations, please contact our support team directly.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white py-2 text-xs font-mono font-bold transition-all shadow-sm mt-4"
                >
                  <span>Contact Support</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

            </div>

          </section>

        </main>
      </div>
    </PageTransition>
  );
}
