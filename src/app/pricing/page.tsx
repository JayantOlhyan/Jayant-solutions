"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { createPricingSchema, createFAQSchema } from "@/lib/seo/schema";
import { Check, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import CallToAction from "@/components/CallToAction";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plans = [
    {
      index: "01",
      name: "Starter",
      desc: "High-converting responsive design, SEO setup, performance optimization.",
      price: "₹40,000",
      billing: "One-time cost",
      features: [
        "High-converting responsive design",
        "SEO setup & search visibility",
        "Speed & performance optimization",
        "Contact / lead form integration",
        "CMS setup for content management",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      index: "02",
      name: "Growth",
      desc: "Custom web application/dashboard, CRM integration, lead qualification workflows.",
      price: "₹90,000",
      billing: "One-time cost",
      features: [
        "Custom web application / dashboard",
        "CRM pipeline integration",
        "Lead qualification workflows",
        "Automated email follow-ups",
        "Analytics setup & dashboard",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      index: "03",
      name: "Scale",
      desc: "Complete AI Business System: custom software, chatbot, and WhatsApp automation.",
      price: "₹2,00,000",
      billing: "One-time cost",
      features: [
        "End-to-end custom business software",
        "AI chatbot (trained on company data)",
        "WhatsApp automation workflows",
        "Multi-platform CRM syncing",
        "Custom dashboards",
        "Priority ongoing support",
      ],
      cta: "Get Started",
      popular: false,
    },
  ];

  const addons = [
    { index: "01", title: "Content Writing", price: "₹4,999 /project" },
    { index: "02", title: "Logo & Branding", price: "₹6,999 /project" },
    { index: "03", title: "E-commerce Setup", price: "₹14,999 /project" },
    { index: "04", title: "Website Maintenance", price: "₹4,999 /month" },
    { index: "05", title: "UI/UX Design", price: "₹9,999 /project" },
  ];

  const pricingSteps = [
    {
      id: "01",
      name: "Discuss Requirements",
      desc: "Share your business goals, workflows, and technical constraints.",
    },
    {
      id: "02",
      name: "Written Estimate",
      desc: "Receive a transparent architecture blueprint, scope, and timeline.",
    },
    {
      id: "03",
      name: "Milestone Agreement",
      desc: "Lock in fixed deliverables and milestone payment checkpoints.",
    },
    {
      id: "04",
      name: "Build & Verify",
      desc: "Iterative engineering with live staging links for your inspection.",
    },
    {
      id: "05",
      name: "Handover & Support",
      desc: "Production launch, 100% code transfer, and post-launch warranty.",
    },
  ];

  const faqs = [
    {
      q: "Can I upgrade or customize my package?",
      a: "Yes. Every engagement can be tailored to your exact workflow, integrations, and operational requirements after our initial discovery call.",
    },
    {
      q: "Are these prices one-time or recurring?",
      a: "All website and software development prices shown above are one-time project investments governed by milestone completion. Optional ongoing maintenance retainers are billed monthly.",
    },
    {
      q: "Will my website or system be mobile-friendly?",
      a: "Yes. Every interface we engineer is responsive and tested across mobile, tablet, and desktop viewports prior to deployment.",
    },
    {
      q: "Do you provide support after delivery?",
      a: "Yes. Every package includes post-launch warranty and technical support (30 to 90 days depending on scope), plus optional ongoing maintenance retainers.",
    },
  ];

  return (
    <PageTransition>
      <JsonLd schema={[createPricingSchema(plans), createFAQSchema(faqs)]} />
      <div className="hog-grid min-h-screen pb-24 pt-10 text-left">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col gap-20 md:gap-28">
          {/* Editorial Pricing Hero */}
          <section className="pt-8 border-b border-border-custom pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-primary font-bold block mb-4">
                  JAYANT SYSTEMS &bull; TRANSPARENT INVESTMENT
                </span>
                <h1 className="metalab-headline text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-text-base">
                  Clear scope.{" "}
                  <span className="text-primary">Predictable pricing.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start gap-6">
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  Reference packages for standard website, web application, and AI system engagements. Need a custom architecture? We scope fixed milestone proposals after a 15-minute discovery call.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-3 text-xs font-display font-bold transition-all"
                >
                  <span>Request Custom Scope</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* 3-Tier Editorial Architectural Ledger */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "bg-[#0A0E17] text-white border border-slate-800 shadow-2xl"
                    : "bg-card-bg text-text-base border border-border-custom"
                }`}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold ${
                        plan.popular ? "text-[#FF8A00]" : "text-primary"
                      }`}
                    >
                      /{plan.index}
                    </span>
                    {plan.popular && (
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary text-white">
                        Most Selected
                      </span>
                    )}
                  </div>

                  <div>
                    <h2
                      className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 ${
                        plan.popular ? "text-white" : "text-text-base"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        plan.popular ? "text-slate-300" : "text-text-muted"
                      }`}
                    >
                      {plan.desc}
                    </p>
                  </div>

                  <div
                    className={`py-5 border-t border-b ${
                      plan.popular ? "border-white/10" : "border-border-custom"
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
                          plan.popular ? "text-white" : "text-text-base"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`font-mono text-xs ${
                          plan.popular ? "text-slate-400" : "text-text-muted"
                        }`}
                      >
                        / {plan.billing}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 leading-snug ${
                          plan.popular ? "text-slate-200" : "text-text-base"
                        }`}
                      >
                        <Check
                          className={`size-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-[#FF8A00]" : "text-primary"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-xs font-display font-bold transition-all mt-10 ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-white"
                      : "bg-text-base text-bg-base hover:bg-primary hover:text-white"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </section>

          {/* Semantic Specification Comparison Table */}
          <section className="pt-8 border-t border-border-custom">
            <div className="mb-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-2">
                Deliverables Matrix
              </span>
              <h2 className="metalab-subheadline text-3xl sm:text-4xl font-extrabold text-text-base">
                Side-by-side capability breakdown.
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border-custom bg-card-bg">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border-custom bg-card-subtle">
                    <th
                      scope="col"
                      className="p-4 sm:p-6 font-display font-bold text-text-base"
                    >
                      Deliverable &amp; Scope
                    </th>
                    <th
                      scope="col"
                      className="p-4 sm:p-6 font-display font-bold text-text-base text-center"
                    >
                      Starter
                      <span className="block text-primary font-mono text-xs mt-0.5">
                        ₹40,000
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="p-4 sm:p-6 font-display font-bold text-text-base text-center bg-primary/5"
                    >
                      Growth
                      <span className="block text-primary font-mono text-xs mt-0.5">
                        ₹90,000
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="p-4 sm:p-6 font-display font-bold text-text-base text-center"
                    >
                      Scale
                      <span className="block text-primary font-mono text-xs mt-0.5">
                        ₹2,00,000
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom font-mono text-xs">
                  <tr>
                    <td className="p-4 sm:p-6 font-sans font-semibold text-text-base">
                      Primary System Deliverable
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-muted">
                      High-Converting Website
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-base bg-primary/5">
                      Custom Web App / Portal
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-base">
                      Complete AI Business System
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-sans font-semibold text-text-base">
                      Target Delivery Window
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-muted">
                      1–2 Weeks
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-base bg-primary/5">
                      2–4 Weeks
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-base">
                      4–8 Weeks
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-sans font-semibold text-text-base">
                      AI &amp; LLM Integration
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-muted">
                      &mdash;
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-base bg-primary/5">
                      Automated Lead Triage
                    </td>
                    <td className="p-4 sm:p-6 text-center text-primary font-bold">
                      Custom RAG &amp; Agentic Workflows
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-sans font-semibold text-text-base">
                      WhatsApp &amp; CRM Automation
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-muted">
                      &mdash;
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-base bg-primary/5">
                      CRM &amp; Email Pipelines
                    </td>
                    <td className="p-4 sm:p-6 text-center text-primary font-bold">
                      Full WhatsApp + Multi-CRM Sync
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-sans font-semibold text-text-base">
                      Post-Launch Support Included
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-muted">
                      30 Days
                    </td>
                    <td className="p-4 sm:p-6 text-center text-text-base bg-primary/5">
                      60 Days
                    </td>
                    <td className="p-4 sm:p-6 text-center text-primary font-bold">
                      90 Days Priority
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Optional Add-ons Hairline Row + 5-Step Pricing Sequence */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-border-custom items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-2">
                Modular Extensions
              </span>
              <h2 className="metalab-subheadline text-2xl sm:text-3xl font-extrabold text-text-base mb-4">
                Optional Add-Ons
              </h2>
              <div className="divide-y divide-border-custom border-t border-b border-border-custom">
                {addons.map((addon) => (
                  <div
                    key={addon.index}
                    className="py-4 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-primary font-bold">
                        /{addon.index}
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-text-base">
                        {addon.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-2">
                Engagement Sequence
              </span>
              <h2 className="metalab-subheadline text-2xl sm:text-3xl font-extrabold text-text-base mb-4">
                How We Scope &amp; Price Projects
              </h2>
              <div className="divide-y divide-border-custom border-t border-b border-border-custom">
                {pricingSteps.map((step) => (
                  <div
                    key={step.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-bold text-primary">
                        /{step.id}
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-text-base">
                        {step.name}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-text-muted">
                      {step.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing FAQs */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-border-custom items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-bold block mb-2">
                Commercial Clarity
              </span>
              <h2 className="metalab-subheadline text-3xl sm:text-4xl font-extrabold text-text-base mb-4">
                Pricing Questions
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Every project is backed by a written scope and milestone schedule so you have complete cost visibility before development begins.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-border-custom border-t border-b border-border-custom">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                    >
                      <span className="font-display text-base sm:text-lg font-bold text-text-base">
                        {faq.q}
                      </span>
                      <Plus
                        className={`size-4 text-primary shrink-0 transition-transform ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-5 text-sm text-text-muted leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Bottom CTA */}
          <CallToAction />
        </main>
      </div>
    </PageTransition>
  );
}
