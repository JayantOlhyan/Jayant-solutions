"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle, Shield, Clock, Plus, Minus } from "lucide-react";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for startups & small businesses",
      price: "₹24,999",
      billing: "One-time cost",
      features: [
        "Up to 5 Pages Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact / Inquiry Form",
        "1 Round of Revisions",
        "Email Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth",
      desc: "Ideal for growing businesses looking to scale",
      price: "₹49,999",
      billing: "One-time cost",
      features: [
        "Up to 15 Pages Website",
        "Custom Design",
        "Advanced SEO Setup",
        "CMS Integration",
        "2 Integration (e.g. API, Chat, etc.)",
        "2 Rounds of Revisions",
        "Priority Support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Business",
      desc: "Best for established businesses",
      price: "₹99,999",
      billing: "One-time cost",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "Advanced Integrations",
        "Performance Optimization",
        "3rd Party Integrations",
        "3 Rounds of Revisions",
        "Priority Support",
        "Monthly Maintenance",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Enterprise",
      desc: "For large organizations with complex needs",
      price: "Custom",
      billing: "Tailored to your requirements",
      features: [
        "Everything in Business Plan",
        "Dedicated Project Manager",
        "Custom Integrations",
        "Scalable Architecture",
        "Security & Compliance",
        "Ongoing Support & Maintenance",
        "SLA & Priority Support",
      ],
      cta: "Talk to Us",
      popular: false,
    },
  ];

  const addons = [
    { title: "Content Writing", price: "₹4,999 /project" },
    { title: "Logo & Branding", price: "₹6,999 /project" },
    { title: "E-commerce Setup", price: "₹14,999 /project" },
    { title: "Website Maintenance", price: "₹4,999 /month" },
    { title: "UI/UX Design", price: "₹9,999 /project" },
  ];

  const pricingSteps = [
    { id: "1", name: "Discuss", desc: "Tell us your requirements and goals." },
    { id: "2", name: "Get Estimate", desc: "We provide a transparent proposal & timeline." },
    { id: "3", name: "Plan & Agreement", desc: "We finalize the plan that works for you." },
    { id: "4", name: "Build & Deliver", desc: "We build, test, and deliver high-quality solutions." },
    { id: "5", name: "Support & Grow", desc: "We provide ongoing support to help you grow." },
  ];

  const faqs = [
    { q: "Can I upgrade or customize my package?", a: "Yes! You can customize any package or add specific features based on your project requirements." },
    { q: "Are these prices one-time or recurring?", a: "All website and software development prices shown above are one-time costs. Only our ongoing website maintenance plans (optional) are billed monthly or yearly." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. All our websites are 100% responsive and optimized for mobile, tablet, and desktop screens." },
    { q: "Do you provide support after delivery?", a: "Yes, we provide ongoing support and maintenance plans to keep your website secure and updated." },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-base">Pricing</span>
          </nav>

          {/* Pricing Split Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                PRICING
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Simple. Transparent.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Built for Value.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl">
                Choose a plan that fits your business needs. Whether you&apos;re a startup, growing business, or enterprise — we have the right solution for you.
              </p>
            </div>

            {/* Right: Custom Request card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="w-full max-w-[420px] rounded-3xl border border-border-custom bg-card-bg/60 p-6 flex flex-col gap-4 text-left shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-serif text-lg">
                    🏷️
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-serif font-bold text-text-base leading-none">Need something custom?</h4>
                    <p className="text-[10px] text-text-muted mt-1 leading-normal">We understand that every business is unique. Let&apos;s build a solution tailored to your goals.</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 border border-border-custom py-2.5 text-xs font-mono font-bold text-text-base transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

          </section>

          {/* Pricing Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`hog-card rounded-3xl p-6 bg-card-bg/60 border flex flex-col justify-between transition-all duration-300 ${
                  plan.popular 
                    ? "border-primary shadow-lg ring-1 ring-primary/20 scale-[1.02]" 
                    : "border-border-custom"
                }`}
              >
                <div className="flex flex-col gap-5 text-left">
                  {plan.popular && (
                    <span className="font-mono text-[9px] font-bold text-white bg-primary px-2.5 py-0.5 rounded-full uppercase tracking-wider self-start">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-serif text-base font-bold text-text-base leading-none mb-1">{plan.name}</h3>
                    <p className="text-[10px] text-text-muted leading-tight">{plan.desc}</p>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl md:text-3xl font-serif font-black text-text-base">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-xs text-text-muted font-sans">one-time</span>}
                    </div>
                    <span className="text-[9px] font-mono text-text-muted mt-0.5">{plan.billing}</span>
                  </div>

                  <div className="h-[1px] bg-border-custom/50 w-full" />

                  <ul className="space-y-2 text-xs">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-text-muted leading-snug">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-1.5 rounded-xl py-3 text-xs font-mono font-bold transition-all mt-8 active:scale-[0.98] ${
                    plan.popular
                      ? "bg-primary hover:bg-primary-hover text-white shadow-md"
                      : "border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-text-base"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </section>

          {/* Add-ons segment */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                ADD-ONS (OPTIONAL)
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Custom Add-ons
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
              {addons.map((addon, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[110px]">
                  <div className="flex flex-col gap-3 text-left">
                    <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{addon.title}</h5>
                    <p className="text-xs font-serif font-black text-primary leading-none mt-1">{addon.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Simple Pricing Process */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                PRICING PROCESS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Simple Pricing Process
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
              {pricingSteps.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center text-center relative group">
                  <div className="relative z-10 size-12 rounded-full border border-border-custom bg-card-bg shadow-sm flex items-center justify-center mb-4 text-xs font-mono font-bold text-primary">
                    {step.id}
                  </div>
                  
                  {idx < pricingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-[1px] border-t border-dashed border-border-custom/80 z-0 pointer-events-none" />
                  )}

                  <div className="flex flex-col gap-1">
                    <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-none mt-1">{step.name}</h5>
                    <p className="text-[10px] text-text-muted leading-tight mt-2 px-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Segment & CTA banner split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/30 pt-16">
            
            {/* Left FAQ Accordion */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left w-full">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                  FAQ
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-text-base leading-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-border-custom bg-card-bg/40 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-serif text-xs md:text-sm font-bold text-text-base">{faq.q}</span>
                      <span className="text-text-muted text-lg leading-none">{openFaq === idx ? "−" : "+"}</span>
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 text-xs text-text-muted leading-relaxed border-t border-border-custom/30 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA Box: Ready to get started? */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left w-full">
              <div className="hog-card rounded-3xl p-6 md:p-8 bg-card-bg/60 border border-border-custom relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-xl font-bold text-text-base">
                    Ready to get started?
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Let&apos;s build something amazing together. Reach out to schedule your free consultation call.
                  </p>

                  <div className="flex flex-col gap-2 mt-4 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">Call / WhatsApp:</span>
                      <span className="text-text-base font-bold">+91 96673 44125</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover text-white py-3 text-xs font-mono font-bold transition-all shadow-md mt-8"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

          </section>

        </main>
      </div>
    </PageTransition>
  );
}
