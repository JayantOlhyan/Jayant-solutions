"use client";

import React, { useState } from "react";
import { Plus, ArrowRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface PurchasingFAQItem {
  question: string;
  category: string;
  answer: string;
}

const PURCHASING_FAQS: PurchasingFAQItem[] = [
  {
    question: "What types of projects do you accept?",
    category: "Scope & Fit",
    answer:
      "We accept business website design and development, custom web applications (client portals, operational dashboards, educator or service workspaces), practical AI integrations (LLM-assisted triage, RAG knowledge assistants, document processing), business workflow automation (CRM, email, and WhatsApp pipelines), and modernization of outdated websites.",
  },
  {
    question: "How does the project engagement process work?",
    category: "Process",
    answer:
      "Every engagement follows five structured stages: (1) Discover — understanding your business problem, users, and constraints; (2) Plan — defining a written scope, architecture blueprint, and milestone schedule; (3) Design and Build — iterative implementation with staging preview links and direct founder communication; (4) Test and Refine — cross-device usability, security, and acceptance testing; and (5) Launch and Support — production deployment, code transfer, and agreed post-launch support.",
  },
  {
    question: "How is project pricing determined?",
    category: "Pricing & Terms",
    answer:
      "Pricing is determined by the specific scope, technical complexity, required integrations, and delivery timeline of your project. After our initial discovery conversation, we provide a written proposal with a transparent, fixed milestone payment structure (commonly split across project kickoff, core milestone review, and final deployment) so you know the exact investment before work begins.",
  },
  {
    question: "What happens if requirements change during development?",
    category: "Scope & Fit",
    answer:
      "Minor refinements within the agreed scope are handled naturally during milestone reviews. If your business needs evolve and you want to add new features or change core workflows mid-project, we document the impact on timeline and budget in writing and get your explicit approval before implementing the change—never surprising you with unapproved charges.",
  },
  {
    question: "How do you handle testing and quality assurance?",
    category: "Quality & Support",
    answer:
      "Before any system goes live, we verify functional requirements on a staging environment, test responsive layouts across desktop, tablet, and mobile viewports, validate form submissions and API error states, check accessibility and page performance, and walk through the build with you for sign-off.",
  },
  {
    question: "What support is available after launch?",
    category: "Quality & Support",
    answer:
      "Every completed project includes post-launch technical support as agreed in your project scope to ensure a smooth transition into production and resolve any post-deployment issues. For clients who want ongoing feature development, dependency updates, or server monitoring, we also offer optional maintenance retainers.",
  },
  {
    question: "How can a prospective client start a project?",
    category: "Getting Started",
    answer:
      "Use the project inquiry form below, schedule a discovery call directly, or reach out via email or WhatsApp with a brief summary of what you are building or trying to fix. We will review your requirements, respond within 12–24 business hours, and determine together whether we are the right fit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 md:py-24 border-b border-border-custom relative"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: FAQ Context & Direct Question Prompt */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start text-left">
            <span className="font-mono text-[11px] tracking-wider uppercase text-primary font-semibold block mb-2">
              Section 07 &bull; Process and FAQs
            </span>
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-text-base mb-4"
            >
              Engagement Process &amp; FAQs
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
              Clear, direct answers to common questions about project fit, scoping, pricing, requirement changes, testing, and post-launch support at JAYANT SYSTEMS.
            </p>

            <div className="hog-card p-5 bg-card-bg border border-border-custom w-full flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-display font-bold text-text-base">
                <MessageSquare className="size-4 text-primary" />
                <span>Have a specific technical question?</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                Reach out directly with your architecture or scope question. You will receive a direct response from Jayant.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:underline"
                >
                  <span>Ask via Contact Section</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <span className="text-border-custom">&bull;</span>
                <Link
                  href="/faq"
                  className="text-xs font-mono font-semibold text-text-muted hover:text-text-base hover:underline"
                >
                  All FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Core Purchasing Questions Accordion */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {PURCHASING_FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.question}
                  className={`hog-card overflow-hidden transition-colors ${
                    isOpen
                      ? "border-primary/50 bg-card-bg"
                      : "border-border-custom bg-card-bg/80 hover:border-primary/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    id={`faq-trigger-${idx}`}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none group"
                  >
                    <div className="flex flex-col gap-1 pr-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                        {item.category}
                      </span>
                      <span className="font-display text-base sm:text-lg font-bold text-text-base group-hover:text-primary transition-colors leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`size-8 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-primary text-white border-primary"
                          : "bg-card-subtle text-text-muted border-border-custom group-hover:border-primary/40 group-hover:text-primary"
                      }`}
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 text-sm text-text-muted border-t border-border-custom/60 leading-relaxed text-left">
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
      </div>
    </section>
  );
}
