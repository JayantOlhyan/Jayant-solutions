"use client";

import React, { useState, useMemo } from "react";
import { faqItems } from "../data/content";
import { Plus, Search, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQCategory = "All" | "Pricing & Scopes" | "AI & Architecture" | "Delivery & Support" | "Security & IP";

const CATEGORY_MAP: Record<string, FAQCategory> = {
  "How much does a project cost?": "Pricing & Scopes",
  "What payment methods do you accept?": "Pricing & Scopes",
  "Can you redesign my existing website or software?": "Pricing & Scopes",
  "Can you integrate Artificial Intelligence into my business?": "AI & Architecture",
  "Can you integrate third-party APIs and business tools?": "AI & Architecture",
  "What technologies do you work with?": "AI & Architecture",
  "How long does it take to complete a project?": "Delivery & Support",
  "Do you provide support after the project is launched?": "Delivery & Support",
  "Can you handle hosting and deployment?": "Delivery & Support",
  "Do you offer website and software maintenance?": "Delivery & Support",
  "Will my website be mobile-friendly?": "Delivery & Support",
  "How do I get started?": "Delivery & Support",
  "Who owns the source code and intellectual property?": "Security & IP",
  "How do you ensure project security?": "Security & IP",
  "Do you sign NDAs and keep project information confidential?": "Security & IP",
};

const CATEGORIES: FAQCategory[] = [
  "All",
  "Pricing & Scopes",
  "AI & Architecture",
  "Delivery & Support",
  "Security & IP",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return faqItems
      .map((item, originalIndex) => ({ ...item, originalIndex }))
      .filter((item) => {
        const matchesCategory =
          activeCategory === "All" || CATEGORY_MAP[item.question] === activeCategory;
        const matchesSearch =
          searchQuery.trim() === "" ||
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
  }, [activeCategory, searchQuery]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
            Clear answers to your questions
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Everything you need to know about working with us, our process, and our policies.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-8 space-y-4">
          {/* Instant Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-text-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter questions (e.g. payment, AI, timeline, IP)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs md:text-sm rounded-xl border border-border-custom bg-card-bg/80 text-text-base placeholder:text-text-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-text-base"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenIndex(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-sm font-semibold"
                      : "bg-card-bg/60 text-text-muted border border-border-custom hover:border-primary/40 hover:text-text-base"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="space-y-3.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 glass-card rounded-2xl border border-border-custom">
              <p className="text-sm text-text-muted mb-2">No matching questions found for &ldquo;{searchQuery}&rdquo;</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-xs text-primary font-semibold hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openIndex === item.originalIndex;
              return (
                <div
                  key={item.originalIndex}
                  className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-primary/50 shadow-[0_8px_25px_rgba(255,138,0,0.08)] bg-card-bg"
                      : "border-border-custom/80 hover:border-border-custom bg-card-bg/70"
                  }`}
                >
                  {/* Header Toggle Click Zone */}
                  <button
                    onClick={() => toggleFAQ(item.originalIndex)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.originalIndex}`}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left font-sans text-base md:text-lg font-bold text-text-base focus:outline-none cursor-pointer group"
                  >
                    <span className="group-hover:text-primary transition-colors pr-4 leading-snug">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`size-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary text-white border-primary"
                          : "bg-card-bg text-text-muted border-border-custom group-hover:border-primary/40 group-hover:text-primary"
                      }`}
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>

                  {/* Answer Content Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div
                          id={`faq-answer-${item.originalIndex}`}
                          role="region"
                          className="px-5 pb-5 md:px-6 md:pb-6 pt-1 text-sm md:text-base text-text-muted border-t border-border-custom/40 leading-relaxed"
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Fallback Question Assistance Bar */}
        <div className="mt-12 p-6 glass-card rounded-2xl border border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-gradient-to-r from-primary/5 via-card-bg to-card-bg">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-base">Have a unique technical question?</h4>
              <p className="text-xs text-text-muted">Ask me directly. I typically respond within 12 hours.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919667344125?text=Hi%20Jayant,%20I%20have%20a%20question%20regarding%20a%20project"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
            >
              <MessageCircle className="size-3.5" /> WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-all shadow-sm"
            >
              <Calendar className="size-3.5" /> Book Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
