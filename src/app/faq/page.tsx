"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Search, ChevronDown, ChevronUp, Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All Questions");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tabs = [
    "All Questions",
    "Services",
    "Process",
    "Pricing & Payments",
    "Maintenance",
    "Policies",
    "General",
  ];

  const faqs = [
    {
      q: "What services does Jayant Web & AI Systems offer?",
      a: "We offer a wide range of services including custom web development, mobile app development, AI/ML solutions, SaaS development, automation, UI/UX design, API development, and ongoing maintenance & support.",
      category: "Services",
    },
    {
      q: "How long does it take to complete a project?",
      a: "It depends on the size and complexity of the project. Starter projects typically take 2-3 weeks, Standard projects take 3-6 weeks, and Custom or Enterprise systems can take 6-12 weeks. We always provide a clear timeline in our proposal.",
      category: "Process",
    },
    {
      q: "How do you ensure the security of my data?",
      a: "Security is built into every project. We follow industry best practices, implement SSL certificates, use secure server configurations, encrypt sensitive data, and run vulnerability scans. We can also sign non-disclosure agreements (NDAs) if requested.",
      category: "Policies",
    },
    {
      q: "Will my website or application be responsive?",
      a: "Yes, absolutely. Every solution we build is fully responsive and optimized for mobile, tablet, laptop, and desktop screens to ensure a seamless user experience.",
      category: "Services",
    },
    {
      q: "Do you provide SEO services?",
      a: "Yes, all our websites include basic SEO setup (meta tags, sitemap, clean URL structure, speed optimization). We also offer advanced SEO plans for ongoing ranking and organic growth.",
      category: "Services",
    },
    {
      q: "What technologies do you work with?",
      a: "We work with a wide range of modern technologies including Next.js, React, Node.js, TypeScript, Python, AWS, Google Cloud, Docker, Kubernetes, PostgreSQL, MongoDB, Stripe, and WebSockets.",
      category: "General",
    },
    {
      q: "How is the pricing calculated?",
      a: "Our pricing is transparent and outcome-based. We offer fixed pricing packages for predefined scopes, monthly subscriptions for maintenance and retaining work, and customized estimates for large-scale enterprise systems.",
      category: "Pricing & Payments",
    },
    {
      q: "Do you offer maintenance and support after delivery?",
      a: "Yes, every project includes free post-launch support (ranging from 30 to 180 days based on the plan). We also offer dedicated monthly maintenance plans to keep your platform updated, fast, and secure.",
      category: "Maintenance",
    },
    {
      q: "Can I request changes after the project is completed?",
      a: "Yes. Any minor tweaks during the support period are handled free of charge. For major features or updates after completion, we can provide a flat quote or handle it through our maintenance plans.",
      category: "Process",
    },
    {
      q: "How do I get started with my project?",
      a: "The easiest way is to book a free 15-minute consultation call or send us a message through our contact form. We'll discuss your requirements, goals, and outline the next steps.",
      category: "General",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All Questions" || faq.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-base">FAQ</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                FAQ
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Frequently Asked{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Questions
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                Find answers to the most common questions about our services, process, pricing, and policies.
              </p>

              {/* Search Bar */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border-custom bg-white dark:bg-card-bg/60 text-xs text-text-base focus:outline-none focus:border-primary shadow-sm"
                />
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <span className="text-6xl font-serif font-black text-primary/20 mb-2">?</span>
                  <h4 className="font-serif text-lg font-bold mb-1">We&apos;re here to help.</h4>
                  <p className="text-xs text-white/70">Can&apos;t find the answer you&apos;re looking for?</p>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline mt-4">
                    <span>Contact us</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </section>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center py-4 border-t border-border-custom/20 pt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                  activeTab === tab
                    ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-950 shadow-sm"
                    : "bg-white border-border-custom text-text-muted hover:text-text-base dark:bg-card-bg/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Split List & Sidebar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
            
            {/* Left FAQs Accordion */}
            <div className="lg:col-span-8 flex flex-col gap-4 text-left w-full">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-border-custom bg-card-bg/40 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">
                        {idx + 1}. {faq.q}
                      </span>
                      {openIndex === idx ? (
                        <ChevronUp className="size-4 text-primary shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="size-4 text-text-muted shrink-0 ml-4" />
                      )}
                    </button>
                    {openIndex === idx && (
                      <div className="px-6 pb-5 text-xs text-text-muted leading-relaxed border-t border-border-custom/30 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 border border-dashed border-border-custom rounded-2xl">
                  <p className="text-xs text-text-muted font-mono">No matching questions found.</p>
                </div>
              )}
            </div>

            {/* Right Contact Card Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full">
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-text-base">
                    Still have questions?
                  </h3>
                  <p className="text-[10px] text-text-muted leading-relaxed mt-1">
                    We&apos;d love to hear from you. Our team is ready to help!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Email Us</span>
                      <a href="mailto:jayantwebaisystems@gmail.com" className="text-[10px] text-text-muted mt-1 hover:underline">
                        jayantwebaisystems@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Call / WhatsApp</span>
                      <a href="tel:+919667344125" className="text-[10px] text-text-muted mt-1 hover:underline">
                        +91 96673 44125
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Business Hours</span>
                      <span className="text-[10px] text-text-muted mt-1">
                        Mon - Sat: 10:00 AM - 7:00 PM (IST)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-text-base leading-none">Our Location</span>
                      <span className="text-[10px] text-text-muted mt-1">
                        New Delhi, India
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white py-2.5 text-xs font-mono font-bold transition-all shadow-sm"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

          </section>

          {/* Bottom Banner */}
          <section className="border border-border-custom bg-card-bg/40 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-serif text-sm md:text-base font-bold text-text-base mb-1">Can&apos;t find the answer you&apos;re looking for?</h4>
              <p className="text-[10px] md:text-xs text-text-muted">We&apos;re just a message away. Reach out to us and we&apos;ll get back to you as soon as possible.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-xs font-mono font-bold text-text-base transition-colors shrink-0"
            >
              <span>Ask Your Question</span>
              <ArrowRight className="size-4" />
            </Link>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
