"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, Phone, MessageSquare, MapPin, Clock, ShieldCheck, Star, Users, Lock, Send, Plus, Minus, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting contact form data:", formData);
    setFormSubmitted(true);
  };

  const trustStats = [
    { title: "Client-Focused", desc: "We prioritize your goals and business success.", icon: <Users className="size-5 text-primary" /> },
    { title: "Secure & Reliable", desc: "Your data and ideas are always protected.", icon: <Lock className="size-5 text-primary" /> },
    { title: "Results-Driven", desc: "We build solutions that deliver real impact.", icon: <ShieldCheck className="size-5 text-primary" /> },
    { title: "Long-Term Partner", desc: "We grow with you and support your journey.", icon: <Star className="size-5 text-primary" /> },
  ];

  const offices = [
    {
      country: "India (Head Office)",
      location: "New Delhi, India",
      address: "123, Tech Park, Dwarka, New Delhi - 110075",
      flag: "🇮🇳",
      img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80",
    },
    {
      country: "USA (Partner Office)",
      location: "San Francisco, CA, USA",
      address: "585 Market Street, Suite 300, San Francisco, CA 94105",
      flag: "🇺🇸",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
    },
    {
      country: "UAE (Partner Office)",
      location: "Dubai, UAE",
      address: "Business Bay, Bay Square, Dubai, UAE",
      flag: "🇦🇪",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const faqItems = [
    { q: "How quickly will you respond?", a: "I typically respond within 24 hours to all inquiries received through the contact form or email." },
    { q: "Do you offer a free consultation?", a: "Yes, absolutely! We can schedule a free 30-minute consultation call to map your operational bottlenecks and explore AI/software ideas." },
    { q: "What information should I include in my message?", a: "Include details about your business, the manual workflows you want to automate, timeline expectations, and target budget range if known." },
    { q: "What industries do you work with?", a: "I focus primarily on Education, Healthcare, and Professional Services, but I build custom systems for any business vertical." },
    { q: "Do you work with startups?", a: "Yes, I regularly partner with startup founders to build MVPs, scalable web platforms, and automated lead generation pipelines." },
    { q: "Can you sign an NDA?", a: "Yes, we can sign a standard Mutual NDA before discussing proprietary requirements, ensuring your business ideas remain secure." },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                GET IN TOUCH
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Let&apos;s Build Something Amazing{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Together
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Have a project in mind or want to explore how we can help your business grow? I&apos;d love to hear from you.
              </p>

              {/* Three Bullets */}
              <div className="flex flex-col gap-4 text-xs md:text-sm text-text-muted">
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-text-base block">Quick Response</span>
                    <span className="text-[11px]">I reply within 24 hours.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-text-base block">Confidential</span>
                    <span className="text-[11px]">Your information is completely safe.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <span className="font-bold text-text-base block">Expert Consultation</span>
                    <span className="text-[11px]">Get tech and automation advice tailored to your needs.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map graphic */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border-custom relative bg-neutral-950 shadow-lg">
                {/* World map background overlay grid pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
                
                {/* Visual bubble */}
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white dark:bg-[#111827] text-text-base p-4 border border-border-custom shadow-2xl max-w-xs flex gap-3 items-start">
                  <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-serif font-bold">
                      I work with clients <span className="text-primary">worldwide</span> and am available for new projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form & Reach split grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Form */}
            <div className="lg:col-span-7 hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom">
              <h3 className="font-serif text-2xl font-bold text-text-base mb-2">Send Us a Message</h3>
              <p className="text-xs text-text-muted mb-6">Fill out the form and I will get back to you shortly.</p>

              {formSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="size-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <Check className="size-8 stroke-[3px]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-text-muted max-w-sm">
                    Thank you for reaching out. I have received your message and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-muted uppercase">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="rounded-xl border border-border-custom bg-background-base px-4 py-2.5 text-xs text-text-base focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-muted uppercase">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="rounded-xl border border-border-custom bg-background-base px-4 py-2.5 text-xs text-text-base focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-muted uppercase">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99999 99999"
                        className="rounded-xl border border-border-custom bg-background-base px-4 py-2.5 text-xs text-text-base focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-text-muted uppercase">Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Corp"
                        className="rounded-xl border border-border-custom bg-background-base px-4 py-2.5 text-xs text-text-base focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-text-muted uppercase">I&apos;m interested in</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="rounded-xl border border-border-custom bg-background-base px-4 py-2.5 text-xs text-text-base focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="ai">AI Solutions & Chatbots</option>
                      <option value="web">Web & Software Development</option>
                      <option value="automation">WhatsApp & CRM Automation</option>
                      <option value="other">Other Scope</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-text-muted uppercase">Tell us about your project *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe what workflows or systems you want to build..."
                      className="rounded-xl border border-border-custom bg-background-base px-4 py-2.5 text-xs text-text-base focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md"
                    >
                      <span>Send Message</span>
                      <Send className="size-3.5" />
                    </button>
                    <span className="flex items-center gap-1.5 text-[10px] text-text-muted">
                      <Lock className="size-3.5 text-primary" /> We never share your information.
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Reach Info */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <h3 className="font-serif text-xl font-bold text-text-base border-b border-border-custom pb-3 mb-2">
                  Other Ways to Reach Us
                </h3>
                
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Mail className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Email Us</span>
                    <a href="mailto:hello@jayantwebai.com" className="text-xs md:text-sm font-bold text-text-base hover:text-primary transition-colors">
                      hello@jayantwebai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Phone className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Call Us</span>
                    <a href="tel:+919999999999" className="text-xs md:text-sm font-bold text-text-base hover:text-primary transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <MessageSquare className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase font-bold text-text-muted">WhatsApp</span>
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-bold text-text-base hover:text-primary transition-colors">
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <MapPin className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Location</span>
                    <span className="text-xs md:text-sm font-bold text-text-base">
                      New Delhi, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Clock className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase font-bold text-text-muted">Business Hours</span>
                    <span className="text-xs md:text-sm font-bold text-text-base">
                      Monday - Saturday <br />
                      <span className="text-[10px] text-text-muted font-normal">10:00 AM - 8:00 PM IST</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust stats Counter */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-border-custom bg-card-bg/30">
                <div className="size-10 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-serif text-sm font-bold text-text-base leading-none mb-1.5">{stat.title}</h4>
                  <p className="text-[11px] text-text-muted leading-relaxed">{stat.desc}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Where We Work */}
          <section className="py-8 relative border-t border-border-custom/50 pt-16">
            <div className="text-left mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR OFFICES
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Where We Work
              </h2>
              <p className="text-sm md:text-base text-text-muted mt-2">
                We have a strong presence and serve clients across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office) => (
                <div key={office.country} className="hog-card rounded-2xl overflow-hidden border border-border-custom bg-card-bg/40 flex flex-col h-full">
                  <div className="w-full aspect-video relative overflow-hidden">
                    <img src={office.img} alt={office.location} className="absolute inset-0 w-full h-full object-cover brightness-[0.9] dark:brightness-[0.7]" />
                    <span className="absolute top-4 left-4 text-2xl leading-none bg-black/45 backdrop-blur-sm p-1.5 rounded-lg">
                      {office.flag}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-2">
                    <h4 className="font-serif text-base font-bold text-text-base">{office.country}</h4>
                    <span className="text-[10px] font-mono text-primary font-bold">{office.location}</span>
                    <p className="text-xs text-text-muted leading-relaxed mt-2">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="py-8 relative border-t border-border-custom/50 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                FAQ
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-border-custom/60 rounded-2xl overflow-hidden bg-card-bg/40 backdrop-blur-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif text-sm md:text-base font-bold text-text-base hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition-colors"
                  >
                    <span>{item.q}</span>
                    {openFaqIndex === idx ? (
                      <Minus className="size-4 text-primary shrink-0 ml-4" />
                    ) : (
                      <Plus className="size-4 text-primary shrink-0 ml-4" />
                    )}
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-5 pt-0 border-t border-border-custom/30 text-xs md:text-sm text-text-muted leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] px-8 py-16 md:py-20 text-center shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,138,0,0.04),transparent)] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Ready to Start Your Project?
              </h2>

              <p className="text-xs md:text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
                Let&apos;s turn your ideas into powerful digital solutions that drive growth and success.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-7 py-3 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  Book a Free Consultation <ArrowRight className="size-3.5" />
                </a>
                
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-7 py-3 text-xs font-mono font-bold text-white transition-all duration-200"
                >
                  View Our Work <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
