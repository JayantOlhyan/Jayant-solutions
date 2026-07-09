"use client";

import React, { useState } from "react";
import { faqItems } from "../data/content";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Clear Logistics
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Everything you need to know about timelines, support commitments, and remote operations.
          </p>
        </div>

        {/* FAQ Accordion Stack */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-border-custom overflow-hidden transition-all duration-300"
              >
                {/* Header Toggle Click Zone */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-base md:text-lg font-bold text-text-base focus:outline-none cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span className="p-1 rounded-full border border-border-custom bg-card-bg shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="size-4 text-primary" />
                    ) : (
                      <Plus className="size-4 text-text-base" />
                    )}
                  </span>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-text-muted border-t border-border-custom/50 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
