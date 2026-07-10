"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle2, Lock, ShieldAlert, Cpu, Heart, CheckCircle } from "lucide-react";

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    title: "",
    type: "Select project type",
    desc: "",
    budget: "Select budget range",
    timeline: "Select timeline",
    source: "Select an option",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { num: 1, label: "Project Details", active: true },
    { num: 2, label: "Requirements", active: false },
    { num: 3, label: "Contact Info", active: false },
    { num: 4, label: "Review & Submit", active: false },
  ];

  const whatNext = [
    { title: "We Review Your Request", desc: "Our team will carefully review your requirements." },
    { title: "We Prepare Your Quote", desc: "We&apos;ll create a customized proposal for your project." },
    { title: "We Get In Touch", desc: "We&apos;ll reach out to discuss the proposal and next steps." },
    { title: "You Decide", desc: "Review, ask questions, and choose what works best." },
  ];

  const benefits = [
    "Expert team with proven experience",
    "Scalable and future-ready solutions",
    "Transparent pricing, no hidden costs",
    "On-time delivery, every time",
    "Ongoing support and maintenance",
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <span>&gt;</span>
            <span className="text-text-base">Request a Quote</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                REQUEST A QUOTE
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Request a <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Quote
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Tell us about your project and we&apos;ll provide a customized proposal tailored to your needs.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">🎯 Customized Solutions</span>
                <span className="flex items-center gap-1">⚡ Quick Turnaround</span>
                <span className="flex items-center gap-1">🎁 No Obligation</span>
                <span className="flex items-center gap-1">🔒 Confidential</span>
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <span className="text-3xl mb-4">📊</span>
                  <h4 className="font-serif text-lg font-bold mb-1">Proposal Builder</h4>
                  <p className="text-xs text-white/70">Customized scopes and accurate timelines for your custom software.</p>
                </div>
              </div>
            </div>

          </section>

          {/* Split Content & Sidebar */}
          {submitted ? (
            <div className="border border-border-custom bg-card-bg/60 p-12 rounded-3xl text-center flex flex-col items-center gap-4 max-w-lg mx-auto w-full py-16">
              <CheckCircle2 className="size-16 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-text-base">Quote Request Submitted!</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Thank you for your request. Our team will review your project details and prepare a customized proposal within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-xs font-mono font-bold transition-all shadow-md mt-6"
              >
                <span>Submit Another Request</span>
              </button>
            </div>
          ) : (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
              
              {/* Left Column Form */}
              <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
                
                {/* Process timeline stepper */}
                <div className="flex justify-between items-center bg-card-bg/30 border border-border-custom/80 p-4 rounded-2xl">
                  {steps.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className={`size-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold border ${
                        s.active ? "bg-primary border-primary text-white" : "border-border-custom text-text-muted bg-white dark:bg-card-bg"
                      }`}>
                        {s.num}
                      </span>
                      <span className={`text-[10px] font-mono font-bold hidden sm:inline ${
                        s.active ? "text-text-base" : "text-text-muted"
                      }`}>
                        {s.label}
                      </span>
                      {idx < steps.length - 1 && <span className="text-text-muted/30 text-xs hidden sm:inline">&gt;</span>}
                    </div>
                  ))}
                </div>

                {/* Form box */}
                <form onSubmit={handleSubmit} className="border border-border-custom bg-card-bg/60 p-6 md:p-8 rounded-3xl space-y-6">
                  <div className="border-b border-border-custom/50 pb-3 mb-6">
                    <h3 className="font-serif text-lg font-bold text-text-base">Tell Us About Your Project</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Project Title *</label>
                      <input
                        required
                        type="text"
                        placeholder="Enter a short title for your project"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">What type of project is this? *</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      >
                        <option>Select project type</option>
                        <option>AI Development</option>
                        <option>Custom Software</option>
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>Automation</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-text-base">Project Description *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, goals, and what you want to achieve..."
                      value={formData.desc}
                      onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Estimated Budget Range *</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      >
                        <option>Select budget range</option>
                        <option>Under ₹1,00,000</option>
                        <option>₹1,00,000 - ₹5,00,000</option>
                        <option>₹5,00,000 - ₹15,00,000</option>
                        <option>₹15,00,000+</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Preferred Timeline *</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      >
                        <option>Select timeline</option>
                        <option>Under 1 month</option>
                        <option>1 - 3 months</option>
                        <option>3 - 6 months</option>
                        <option>6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-text-base">How did you hear about us?</label>
                    <select
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    >
                      <option>Select an option</option>
                      <option>Search Engine</option>
                      <option>Social Media</option>
                      <option>Referral</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98]"
                  >
                    <span>Next: Requirements</span>
                    <ArrowRight className="size-4" />
                  </button>
                </form>

                {/* confidentiality note */}
                <div className="flex items-start gap-3 bg-primary/5 border border-primary/10 rounded-2xl p-4">
                  <Lock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold text-text-base">Your information is secure</span>
                    <p className="text-[9px] text-text-muted mt-1 leading-normal">
                      We value your privacy. All information you provide will be kept confidential and used only to process your quote request.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
                
                {/* What happens next */}
                <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                  <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                    What Happens Next?
                  </h3>
                  
                  <div className="flex flex-col gap-5 relative before:absolute before:inset-y-0 before:left-3 before:w-[1px] before:bg-border-custom/50">
                    {whatNext.map((step, idx) => (
                      <div key={idx} className="flex gap-4 relative pl-8">
                        <div className="absolute left-[10px] top-1 size-2 rounded-full bg-primary border-4 border-white dark:border-[#0f172a]" />
                        <div>
                          <h5 className="font-serif text-xs font-bold text-text-base leading-none mb-1">{step.title}</h5>
                          <p className="text-[10px] text-text-muted leading-tight mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why choose us checkmarks */}
                <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                  <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-3">
                    {benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[10px] md:text-xs text-text-muted leading-relaxed">
                        <CheckCircle className="size-4 text-primary shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Talk to someone block */}
                <div className="hog-card rounded-3xl p-6 md:p-8 bg-[#0B0F19] border border-white/10 flex flex-col gap-4 text-white">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <h4 className="font-serif text-base font-bold text-white">Prefer to talk to someone?</h4>
                      <p className="text-[10px] text-white/70 leading-relaxed mt-1">
                        Call us at +91 96673 44125 (Mon - Sat: 10:00 AM - 7:00 PM IST)
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white py-2 text-xs font-mono font-bold transition-all shadow-sm mt-4"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>

              </div>

            </section>
          )}

        </main>
      </div>
    </PageTransition>
  );
}
