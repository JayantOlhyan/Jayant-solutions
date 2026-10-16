"use client";

import React, { useState } from "react";
import { Plus, ArrowRight, ArrowUpRight } from "lucide-react";
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
      className="py-20 md:py-32 border-b border-border-custom relative"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky FAQ Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start text-left">
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-3">
              07 / Engagement Questions
            </span>
            <h2
              id="faq-heading"
              className="metalab-subheadline text-3xl sm:text-5xl font-extrabold text-text-base mb-5"
            >
              Clear answers before we begin.
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-8">
              Direct answers to common questions about project fit, scoping, pricing, requirement changes, testing, and post-launch support at JAYANT SYSTEMS.
            </p>

            <div className="border-t border-b border-border-custom py-6 w-full flex flex-col gap-3">
              <span className="font-display text-base font-bold text-text-base">
                Have a specific technical or architecture question?
              </span>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Reach out directly with your brief. You will receive a direct response from Jayant within 12–24 business hours.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-primary hover:underline"
                >
                  <span>Ask via Contact Section</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1 font-mono text-xs text-text-muted hover:text-text-base"
                >
                  <span>Complete FAQ Directory</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Hairline Editorial Accordion */}
          <div className="lg:col-span-7 divide-y divide-border-custom border-t border-b border-border-custom">
            {PURCHASING_FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const num = String(idx + 1).padStart(2, "0");
              return (
                <div key={item.question} className="group">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    id={`faq-trigger-${idx}`}
                    className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-baseline gap-4 pr-2">
                      <span className="font-mono text-xs font-bold text-primary shrink-0">
                        /{num}
                      </span>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-1">
                          {item.category}
                        </span>
                        <span
                          className={`font-display text-lg sm:text-xl font-extrabold transition-colors leading-snug block ${
                            isOpen
                              ? "text-primary"
                              : "text-text-base group-hover:text-primary"
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`size-9 rounded-full border flex items-center justify-center shrink-0 transition-colors mt-1 ${
                        isOpen
                          ? "bg-primary text-white border-primary"
                          : "border-border-custom text-text-muted group-hover:border-primary group-hover:text-primary"
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
                        transition={{
                          duration: 0.22,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-0 sm:pl-9 pr-4 text-sm sm:text-base text-text-muted leading-relaxed text-left">
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
