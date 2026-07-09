"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Calendar, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export default function BookConsultationPage() {
  const [selectedDate, setSelectedDate] = useState<number>(13);
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    helpWith: "Select a service",
    details: "",
  });

  const indicators = [
    { label: "30-60 Min Session Duration", icon: "⏱️" },
    { label: "1:1 Meeting With Our Experts", icon: "👥" },
    { label: "No Obligation 100% Free", icon: "🎁" },
    { label: "Quick Response Within 24 Hours", icon: "⚡" },
  ];

  const whyPoints = [
    { title: "Understand Your Goals", desc: "We listen to your ideas and understand your business objectives." },
    { title: "Explore Solutions", desc: "Our experts suggest the best technologies and strategies for you." },
    { title: "Get Clarity & Roadmap", desc: "Receive a clear roadmap, timeline, and estimated investment." },
    { title: "Start with Confidence", desc: "Make informed decisions and start your journey with confidence." },
  ];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span className="text-text-base">Book a Consultation</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                CONSULTATION
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Book a <br />
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Free Consultation
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Let&apos;s discuss your ideas, goals, and how we can help you build something great together.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-border-custom/50 pt-6 w-full max-w-lg">
                {indicators.map((ind, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-mono font-bold text-text-muted">
                    <span className="text-sm leading-none shrink-0">{ind.icon}</span>
                    <span>{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex flex-col justify-end text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="z-20 text-left">
                  <h4 className="font-serif text-sm font-bold text-white">Coffee & Code</h4>
                  <p className="text-[9px] font-mono text-white/50 mt-1 uppercase tracking-widest leading-none">Let&apos;s build together</p>
                </div>
              </div>
            </div>

          </section>

          {/* Booking split */}
          {submitted ? (
            <div className="border border-border-custom bg-card-bg/60 p-12 rounded-3xl text-center flex flex-col items-center gap-4 max-w-lg mx-auto w-full py-16">
              <CheckCircle2 className="size-16 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-text-base">Consultation Booked!</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Your consultation has been scheduled for <strong>May {selectedDate}, 2025 at {selectedTime} (IST)</strong>. We have sent a calendar invite and confirmation details to your email.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-xs font-mono font-bold transition-all shadow-md mt-6"
              >
                <span>Book Another Session</span>
              </button>
            </div>
          ) : (
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start py-8 border-t border-border-custom/20 pt-16">
              
              {/* Left: Why book */}
              <div className="lg:col-span-3 flex flex-col gap-6 text-left w-full">
                <h3 className="font-serif text-lg font-bold text-text-base border-b border-border-custom/50 pb-2">Why Book a Consultation?</h3>
                <p className="text-[10px] text-text-muted leading-relaxed">
                  We&apos;ll understand your requirements and provide the right solution tailored to your business.
                </p>
                
                <div className="space-y-4">
                  {whyPoints.map((p, i) => (
                    <div key={i} className="flex gap-2.5 text-left">
                      <Check className="size-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-serif text-[11px] font-bold text-text-base leading-none mb-1">{p.title}</h5>
                        <p className="text-[10px] text-text-muted leading-normal mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mt-2">
                  <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-wider block mb-1">Security & Privacy</span>
                  <span className="text-[9px] text-text-muted leading-normal block">Your information is safe with us. We respect your privacy and never share your details.</span>
                </div>
              </div>

              {/* Center: Calendar selection */}
              <div className="lg:col-span-5 border border-border-custom bg-card-bg/40 p-5 rounded-3xl flex flex-col gap-6 w-full">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom/30 pb-2">1. Select a Date & Time</h3>
                
                {/* May 2025 Mock Calendar */}
                <div className="flex flex-col gap-4 text-xs font-mono">
                  <div className="flex justify-between items-center px-2">
                    <span className="font-serif font-bold text-text-base">May 2025</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center font-bold text-text-muted text-[10px] border-b border-border-custom/20 pb-2">
                    <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1.5 text-center font-mono">
                    {/* Days padding before May 1st (Thursday) */}
                    <span className="text-text-muted/20 py-2">27</span>
                    <span className="text-text-muted/20 py-2">28</span>
                    <span className="text-text-muted/20 py-2">29</span>
                    <span className="text-text-muted/20 py-2">30</span>

                    {[...Array(31)].map((_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDate(day)}
                          className={`py-2 rounded-lg font-bold transition-all text-[11px] ${
                            isSelected
                              ? "bg-primary text-white shadow-sm"
                              : "hover:bg-neutral-100 dark:hover:bg-neutral-900 text-text-base"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Available time list */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono font-bold text-text-muted">Available Time (IST)</span>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 rounded-lg text-[10px] font-mono font-bold transition-all border ${
                          selectedTime === time
                            ? "bg-primary border-primary text-white"
                            : "border-border-custom bg-white dark:bg-card-bg text-text-base hover:border-primary/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-text-muted mt-1 leading-none">🌐 All times are in India Standard Time (IST)</span>
                </div>
              </div>

              {/* Right: details form */}
              <div className="lg:col-span-4 border border-border-custom bg-card-bg/40 p-5 rounded-3xl flex flex-col gap-4 w-full">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom/30 pb-2">2. Your Details</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono font-bold text-text-base">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono font-bold text-text-base">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono font-bold text-text-base">Phone Number *</label>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-2 border border-border-custom bg-white dark:bg-card-bg text-xs rounded-lg font-mono text-text-muted shrink-0">+91</span>
                      <input
                        required
                        type="text"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="px-3 py-2 rounded-lg border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm flex-1"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono font-bold text-text-base">Company Name</label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono font-bold text-text-base">What Do You Need Help With? *</label>
                    <select
                      value={formData.helpWith}
                      onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    >
                      <option>Select a service</option>
                      <option>Web Development</option>
                      <option>AI & ML Solutions</option>
                      <option>Mobile Apps</option>
                      <option>SaaS Development</option>
                      <option>Automation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[9px] font-mono font-bold text-text-base">Tell Us More (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your project or goals..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white py-2.5 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98] mt-2"
                  >
                    <span>Book My Consultation</span>
                    <ArrowRight className="size-4" />
                  </button>
                  <span className="text-[8px] font-mono text-text-muted block text-center leading-none mt-1">💳 No payment required. It&apos;s completely free!</span>
                </form>
              </div>

            </section>
          )}

          {/* Bottom strip banner */}
          <section className="border border-border-custom bg-card-bg/40 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-serif text-sm md:text-base font-bold text-text-base mb-1">Prefer to talk right away?</h4>
              <p className="text-[10px] md:text-xs text-text-muted">Call us at +91 98765 43210 or email hello@jayantwebai.com</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-xs font-mono font-bold text-white transition-colors shrink-0 shadow-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="size-4" />
            </Link>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
