"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Calendar, Clock, CheckCircle2, ShieldCheck, Heart, Laptop, Globe } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Select a subject",
    message: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const bottomIndicators = [
    { label: "Quick Response", desc: "We reply within 24 hours", icon: <Clock className="size-5 text-primary" /> },
    { label: "Secure & Confidential", desc: "Your information is safe with us", icon: <ShieldCheck className="size-5 text-primary" /> },
    { label: "Expert Support", desc: "Get help from our experts", icon: <Heart className="size-5 text-primary" /> },
    { label: "Global Reach", desc: "We serve clients worldwide", icon: <Globe className="size-5 text-primary" /> },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "Twitter / X", href: "https://x.com/JayantSystems" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" }
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-base">Contact</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                GET IN TOUCH
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Let&apos;s Build Something <br /> Amazing{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Together
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl">
                Have a project in mind or want to learn more about our services? We&apos;d love to hear from you. Drop us a message and our team will get back to you as soon as possible.
              </p>
            </div>

            {/* Right: Graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[24px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl">
                    💬
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white leading-none">Let&apos;s Build</span>
                    <span className="text-[9px] text-white/50 mt-1 uppercase tracking-widest leading-none">something great together</span>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Form and sidebar split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
            
            {/* Left Form */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
              {submitted ? (
                <div className="border border-border-custom bg-card-bg/60 p-8 rounded-3xl text-center flex flex-col items-center gap-4 max-w-lg mx-auto w-full">
                  <CheckCircle2 className="size-16 text-primary" />
                  <h3 className="font-serif text-2xl font-bold text-text-base">Message Sent!</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Thank you for reaching out. We have received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-xs font-mono font-bold transition-all shadow-md mt-4"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border border-border-custom bg-card-bg/60 p-6 md:p-8 rounded-3xl space-y-6">
                  <div className="border-b border-border-custom/50 pb-3 mb-6">
                    <h3 className="font-serif text-lg font-bold text-text-base">Send Us a Message</h3>
                    <p className="text-[10px] text-text-muted">Fill out the form below and we&apos;ll get back to you.</p>
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
                      <label className="text-[10px] font-mono font-bold text-text-base">Phone Number</label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-base">Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                      >
                        <option>Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Project Request</option>
                        <option>Support Request</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-text-base">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="px-4 py-2.5 rounded-xl border border-border-custom bg-white dark:bg-card-bg text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      required
                      type="checkbox"
                      id="agree"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="rounded border-border-custom text-primary focus:ring-primary size-4"
                    />
                    <label htmlFor="agree" className="text-[10px] font-mono text-text-muted">
                      I agree to the <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>.
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md active:scale-[0.98] w-full sm:w-auto shrink-0"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="size-4" />
                    </button>
                    <span className="text-[8px] font-mono text-text-muted leading-tight">🛡️ We respect your privacy. Your information is safe with us.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
              
              {/* Contact info */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <div className="border-b border-border-custom/50 pb-2">
                  <h3 className="font-serif text-sm font-bold text-text-base">Contact Information</h3>
                  <p className="text-[9px] text-text-muted">Reach out to us through any of the following.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="size-4.5 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Call Us</span>
                      <a href="tel:+919876543210" className="text-[11px] font-bold text-text-base mt-1 hover:underline">
                        +91 98765 43210
                      </a>
                      <span className="text-[9px] text-text-muted mt-0.5">Mon - Sat: 10:00 AM - 7:00 PM (IST)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="size-4.5 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Email Us</span>
                      <a href="mailto:hello@jayantwebai.com" className="text-[11px] font-bold text-text-base mt-1 hover:underline">
                        hello@jayantwebai.com
                      </a>
                      <span className="text-[9px] text-text-muted mt-0.5">We usually reply within a few hours.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="size-4.5 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Our Location</span>
                      <span className="text-[11px] font-bold text-text-base mt-1">New Delhi, India</span>
                      <span className="text-[9px] text-text-muted mt-0.5">Serving clients globally.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="size-4.5 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Book a Meeting</span>
                      <span className="text-[9px] text-text-muted mt-1">Schedule a free consultation call</span>
                      <Link href="/contact/book-a-consultation" className="text-[10px] font-mono font-bold text-primary hover:underline mt-1.5 inline-flex items-center gap-1">
                        <span>Book Now</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect with us socials */}
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
                <h3 className="font-serif text-sm font-bold text-text-base border-b border-border-custom pb-2">Connect With Us</h3>
                <p className="text-[10px] text-text-muted">Follow us on social media to stay updated.</p>
                
                <div className="flex flex-wrap gap-4 text-xs font-mono mt-2">
                  {socials.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary transition-colors border border-border-custom px-3 py-1.5 rounded-lg bg-white dark:bg-card-bg"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </section>

          {/* Bottom Indicators strip */}
          <section className="border-t border-border-custom/25 pt-12 pb-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
              {bottomIndicators.map((ind, i) => (
                <div key={i} className="flex gap-4 text-left">
                  <div className="size-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                    {ind.icon}
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-bold text-text-base leading-none mb-1">{ind.label}</h5>
                    <p className="text-[10px] text-text-muted mt-1 leading-tight">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
