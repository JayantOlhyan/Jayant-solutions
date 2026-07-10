"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Settings, Users, ClipboardList } from "lucide-react";

export default function EnterprisePlansPage() {
  const plans = [
    {
      name: "Scale",
      desc: "For growing businesses with evolving needs",
      price: "₹49,999",
      billing: "one-time",
      features: [
        "Everything in Business Plan",
        "Unlimited Pages",
        "Advanced Integrations",
        "Performance Optimization",
        "Priority Support (24-48 hrs)",
        "Monthly Maintenance Report",
        "1 Dedicated Point of Contact",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Advanced",
      desc: "For high-growth companies needing more power",
      price: "₹99,999",
      billing: "one-time",
      features: [
        "Everything in Scale Plan",
        "Custom Web / App Development",
        "API Development & Integrations",
        "Advanced Security (WAF, DDoS)",
        "Cloud Infrastructure Management",
        "Priority Support (12-24 hrs)",
        "Bi-monthly Strategy Review",
        "2 Dedicated Experts",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "For large organizations with mission-critical systems",
      price: "₹1,99,999",
      billing: "one-time",
      features: [
        "Everything in Advanced Plan",
        "Multi-Environment Management",
        "DevOps & CI/CD Implementation",
        "Advanced Analytics & Reporting",
        "SLA & Uptime Guarantee (99.9%)",
        "Priority Support (6-12 hrs)",
        "Quarterly Business Review",
        "3-5 Dedicated Experts",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Custom",
      desc: "Tailored solutions for unique enterprise needs",
      price: "Custom",
      billing: "Bespoke pricing",
      features: [
        "Everything You Need",
        "100% Custom Solutions",
        "Dedicated Development Team",
        "On-premise / Hybrid Solutions",
        "Enterprise Security & Compliance",
        "24/7 Premium Support",
        "Strategic Partnership Model",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const featuresList = [
    { title: "24/7 System Monitoring", desc: "Proactive monitoring to ensure maximum uptime." },
    { title: "Regular Backups", desc: "Automated backups & disaster recovery." },
    { title: "Security First", desc: "Advanced threat detection & vulnerability scans." },
    { title: "Timely Updates", desc: "Software, plugins & security updates handled." },
    { title: "Detailed Reporting", desc: "Clear insights and reports every month." },
  ];

  const whyChoose = [
    { title: "Built for Scale", desc: "Infrastructure and code that handle growth effortlessly." },
    { title: "Enhanced Security", desc: "Enterprise-grade security to protect what matters." },
    { title: "High Performance", desc: "Optimized for speed, reliability, and uptime." },
    { title: "Cost Efficiency", desc: "Reduce downtime and operational costs with proactive care." },
    { title: "Expert Partnership", desc: "Work with a team that understands your business." },
    { title: "Business Continuity", desc: "Stay ahead with regular updates, backups & disaster recovery." },
  ];

  const processSteps = [
    { id: "1", name: "Discover", desc: "We understand your business, challenges, and goals." },
    { id: "2", name: "Plan", desc: "We create a tailored roadmap aligned with your objectives." },
    { id: "3", name: "Build", desc: "Our experts build, integrate, and configure your solution." },
    { id: "4", name: "Optimize", desc: "We test, optimize, and ensure everything runs at peak." },
    { id: "5", name: "Support & Grow", desc: "We provide ongoing support and scale with your growth." },
  ];

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <span>&gt;</span>
            <span className="text-text-base">Enterprise Plans</span>
          </nav>

          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                ENTERPRISE PLANS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Built for Scale.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Engineered for You.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-6">
                Our enterprise plans are designed for organizations that demand performance, security, flexibility, and dedicated partnership. Let&apos;s build a digital foundation that grows with your business.
              </p>
              
              <div className="flex flex-wrap gap-4 text-[10px] font-mono font-bold text-text-muted">
                <span className="flex items-center gap-1">🌐 Scalable Architecture</span>
                <span className="flex items-center gap-1">🛡️ Enterprise Security</span>
                <span className="flex items-center gap-1">💬 Dedicated Support</span>
                <span className="flex items-center gap-1">⚙️ Custom Solutions</span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 select-none">
                <div className="w-full h-[85%] rounded-2xl bg-[#0B0F19] border-2 border-white/10 shadow-2xl p-6 flex flex-col justify-center text-left text-white/90">
                  <h3 className="font-serif text-2xl font-black text-primary leading-tight mb-2">We partner with ambitious organizations</h3>
                  <p className="text-xs text-white/70">to solve complex challenges with technology that delivers real business impact.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-primary hover:underline mt-6"
                  >
                    <span>Talk to Our Enterprise Experts</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
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

                  <div className="flex flex-baseline gap-1.5">
                    <span className="text-2xl md:text-3xl font-serif font-black text-text-base">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-xs text-text-muted font-sans">{plan.billing}</span>}
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

          {/* Included in all enterprise plans */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-text-base">
                What&apos;s Included in All Enterprise Plans
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {featuresList.map((f, idx) => (
                <div key={idx} className="flex gap-3 text-left">
                  <div className="size-6 rounded-full border border-border-custom bg-card-bg flex items-center justify-center text-primary shrink-0">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-bold text-text-base leading-none mb-1">{f.title}</h5>
                    <p className="text-[10px] text-text-muted leading-tight">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Our Enterprise Plans */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Why Choose Our Enterprise Plans?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[110px]">
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base mb-1">{item.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enterprise Engagement Process */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR PROCESS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Enterprise Engagement Process
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
              {processSteps.map((step, idx) => (
                <div key={step.id} className="flex flex-col items-center text-center relative group">
                  <div className="relative z-10 size-12 rounded-full border border-border-custom bg-card-bg shadow-sm flex items-center justify-center mb-4 text-xs font-mono font-bold text-primary">
                    {step.id}
                  </div>
                  
                  {idx < processSteps.length - 1 && (
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

          {/* Bottom CTA */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Let&apos;s Build Something <br />
                  <span className="text-primary">Extraordinary Together.</span>
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed max-w-lg">
                  Get a custom enterprise solution that drives growth, innovation, and long-term success.
                </p>
              </div>

              {/* Right buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 w-full justify-end">
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                >
                  <span>Schedule a Call</span>
                  <ArrowRight className="size-3.5" />
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                >
                  <span>Contact Enterprise Sales</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
