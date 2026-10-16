"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQSchema } from "@/lib/seo/schema";
import { Search, Plus, Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import CallToAction from "@/components/CallToAction";

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
      q: "What services does JAYANT SYSTEMS offer?",
      a: "We offer custom website design and development, full-stack web applications, AI/LLM integrations, SaaS product engineering, business workflow automation, API development, and post-launch technical support.",
      category: "Services",
    },
    {
      q: "How long does it take to complete a project?",
      a: "Timelines depend on scope and integrations. High-converting websites typically take 1–3 weeks, custom web applications take 3–6 weeks, and comprehensive AI/automation systems take 4–8 weeks. Every proposal includes a written milestone schedule.",
      category: "Process",
    },
    {
      q: "How do you ensure the security of my data?",
      a: "Security is engineered into every layer: HTTPS/SSL encryption, role-based access control, environment-isolated API keys, strict input validation, and NDA protection when required.",
      category: "Policies",
    },
    {
      q: "Will my website or application be responsive?",
      a: "Yes. Every interface we build is tested across mobile, tablet, laptop, and desktop viewports prior to production launch.",
      category: "Services",
    },
    {
      q: "Do you provide SEO setup?",
      a: "Yes. Every website includes technical SEO foundations: semantic HTML headings, structured JSON-LD schema, OpenGraph metadata, sitemap generation, and Core Web Vitals optimization.",
      category: "Services",
    },
    {
      q: "What technologies do you work with?",
      a: "Our core production stack includes Next.js, React, TypeScript, Tailwind CSS, Node.js, Python, FastAPI, PostgreSQL, Supabase, Firebase, MongoDB, Docker, and LLM APIs (Google Gemini, OpenAI, Claude).",
      category: "General",
    },
    {
      q: "How is project pricing calculated?",
      a: "Pricing is transparent and tied to written scope deliverables. We provide fixed milestone proposals for defined projects and optional monthly retainers for ongoing maintenance.",
      category: "Pricing & Payments",
    },
    {
      q: "Do you offer maintenance and support after delivery?",
      a: "Yes. Every completed project includes an agreed post-launch support window to ensure smooth production operation, plus optional monthly retainers for continuous updates.",
      category: "Maintenance",
    },
    {
      q: "Can I request changes during or after the project?",
      a: "Refinements within the agreed scope are handled during milestone reviews. New feature additions are scoped clearly in writing before implementation so there are never surprise charges.",
      category: "Process",
    },
    {
      q: "How do I get started with my project?",
      a: "Book a 15-minute discovery call or send a written project brief through our contact page. You will speak directly with founder Jayant Olhyan within 12–24 business hours.",
      category: "General",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "All Questions" || faq.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <PageTransition>
      <JsonLd schema={createFAQSchema(faqs)} />
      <div className="hog-grid min-h-screen pb-24 pt-10 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-16 md:gap-24">
          {/* Editorial FAQ Hero */}
          <section className="pt-8 border-b border-border-custom pb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-4">
                  JAYANT SYSTEMS &bull; KNOWLEDGE BASE &amp; FAQS
                </span>
                <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-base">
                  Direct answers to{" "}
                  <span className="text-primary">common questions.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-5">
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  Everything you need to know about our engineering capabilities, milestone process, pricing structure, and code handover standards.
                </p>

                {/* Search Input */}
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-text-muted" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search frequently asked questions"
                    className="w-full pl-11 pr-4 py-3 rounded-full border border-border-custom bg-card-bg text-xs font-mono text-text-base focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-text-base text-bg-base font-bold"
                      : "bg-transparent border border-border-custom text-text-muted hover:text-text-base"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </section>

          {/* Main Hairline Accordion + Direct Founder Contact Sidebar */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 divide-y divide-border-custom border-t border-b border-border-custom">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  const num = String(idx + 1).padStart(2, "0");
                  return (
                    <div key={faq.q}>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full py-6 flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none group"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs font-bold text-primary shrink-0">
                            /{num}
                          </span>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-1">
                              {faq.category}
                            </span>
                            <span className="font-display text-lg sm:text-xl font-extrabold text-text-base group-hover:text-primary transition-colors">
                              {faq.q}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`size-8 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all ${
                            isOpen
                              ? "bg-primary border-primary text-white rotate-45"
                              : "border-border-custom text-text-muted group-hover:border-primary group-hover:text-primary"
                          }`}
                        >
                          <Plus className="size-4" />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-6 pl-0 sm:pl-9 text-sm sm:text-base text-text-muted leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <p className="text-xs font-mono text-text-muted">
                    No matching questions found.
                  </p>
                </div>
              )}
            </div>

            {/* Right Dark Editorial Contact Box */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 rounded-2xl bg-[#0A0E17] border border-slate-800 p-6 sm:p-8 text-white flex flex-col gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF8A00] font-bold block mb-2">
                  Direct Access
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                  Have a specific technical question?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Reach out directly. Every inquiry is answered personally by founder Jayant Olhyan.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <Mail className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Email</span>
                    <a
                      href="mailto:jayantwebaisystems@gmail.com"
                      className="text-white hover:text-[#FF8A00] transition-colors break-all"
                    >
                      jayantwebaisystems@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Phone / WhatsApp</span>
                    <a
                      href="tel:+919667344125"
                      className="text-white hover:text-[#FF8A00] transition-colors"
                    >
                      +91 96673 44125
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Hours</span>
                    <span className="text-slate-200">
                      Mon – Sat: 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-[#FF8A00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block">Studio Base</span>
                    <span className="text-slate-200">
                      Dwarka, New Delhi &bull; Remote Globally
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white py-3 text-xs font-display font-bold transition-all"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </section>

          <CallToAction />
        </main>
      </div>
    </PageTransition>
  );
}
