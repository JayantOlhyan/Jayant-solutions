import React from "react";
import { Check, ShieldCheck, DollarSign, RefreshCw, FileText } from "lucide-react";

export default function PricingPolicyPage() {
  const inclusions = [
    "Discovery & consultation",
    "Responsive design",
    "Clean, scalable code",
    "SEO-friendly implementation (where applicable)",
    "Basic security best practices",
    "Performance optimization",
    "Testing & quality assurance",
    "Deployment assistance",
    "Project documentation",
    "Post-launch support period"
  ];

  const supportPlans = [
    { name: "Basic Support", price: "₹2,500/month", includes: "Bug fixes, backups, security updates, email support" },
    { name: "Growth Support", price: "₹7,500/month", includes: "Everything in Basic, plus performance optimization, monthly reports, and priority support" },
    { name: "Business Support", price: "₹15,000/month", includes: "Everything in Growth, plus feature enhancements, API maintenance, cloud monitoring, and faster response times" },
    { name: "Enterprise Support", price: "Custom Quote", includes: "Dedicated technical support, SLA, DevOps monitoring, infrastructure management, AI model maintenance, and continuous improvements" }
  ];

  const additionalServices = [
    { name: "AI Chatbot Integration", price: "₹20,000" },
    { name: "Custom AI Agent", price: "₹50,000" },
    { name: "Mobile App Development", price: "₹80,000" },
    { name: "Admin Dashboard", price: "₹25,000" },
    { name: "Payment Gateway Integration", price: "₹10,000" },
    { name: "WhatsApp Business Integration", price: "₹15,000" },
    { name: "API Development", price: "₹20,000" },
    { name: "Cloud Deployment & DevOps", price: "₹15,000" },
    { name: "UI/UX Design", price: "₹20,000" },
    { name: "Website Redesign", price: "₹25,000" },
    { name: "SEO Setup", price: "₹10,000" },
    { name: "Performance Optimization", price: "₹10,000" }
  ];

  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            Legal & Billing
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Pricing Policy
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Transparent, milestone-based billing guidelines for our software and AI services.
          </p>
        </div>

        {/* Section 1: Billing and Payments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-[32px] p-8 flex flex-col gap-4">
            <h3 className="font-serif text-2xl font-bold text-text-base flex items-center gap-2">
              <DollarSign className="size-6 text-primary" /> Payment Terms
            </h3>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed">
              We follow a milestone-based payment model to ensure transparency and trust. Standard terms are:
            </p>
            <ul className="space-y-3 font-mono text-xs text-text-muted pt-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">40%</span>
                <span>Upfront payment to initiate requirements and begin the project</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">30%</span>
                <span>Upon completion of the agreed system development milestone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">30%</span>
                <span>Paid prior to production deployment, server launch, and handoff</span>
              </li>
            </ul>
            <p className="text-[11px] text-text-muted italic border-t border-border-custom/30 pt-3 mt-2">
              * For long-term or enterprise projects, custom payment schedules can be arranged.
            </p>
          </div>

          <div className="hog-card rounded-[32px] p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-text-base flex items-center gap-2">
                <ShieldCheck className="size-6 text-primary" /> Refund Policy
              </h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-2">
                Refunds are considered only for work that has not yet been started. Payments for completed milestones are non-refundable, as they cover development hours and resource allocation already invested.
                <br /><br />
                If a project is cancelled midway, any completed code, layouts, and deliverables up to that point will be shared with the client after settling remaining work dues.
              </p>
            </div>
            <div className="border-t border-border-custom/30 pt-4 mt-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">Starting Rates:</span>
              <p className="text-xs text-text-base leading-relaxed">
                Websites start from <strong className="text-primary">₹15,000</strong>. AI-powered applications and custom software systems typically start from <strong className="text-primary">₹75,000</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Milestones */}
        <div className="hog-card rounded-[32px] p-8">
          <h3 className="font-serif text-2xl font-bold text-text-base mb-6 flex items-center gap-2">
            <RefreshCw className="size-5 text-primary" /> Standard Project Milestones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: "01", name: "Discovery & Planning", desc: "Requirements gathering and project planning." },
              { num: "02", name: "Design Approval", desc: "Wireframes and UI/UX finalized." },
              { num: "03", name: "Development", desc: "Core features implemented." },
              { num: "04", name: "Testing & QA", desc: "Bug fixing and quality assurance." },
              { num: "05", name: "Deployment & Handoff", desc: "Production deployment, documentation, and delivery." }
            ].map((m) => (
              <div key={m.num} className="border border-border-custom/40 p-4 rounded-2xl bg-background-base">
                <span className="font-mono text-xs font-bold text-primary block mb-1">{m.num}</span>
                <h4 className="font-serif font-bold text-text-base text-sm mb-1">{m.name}</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Maintenance & Annual Contract (AMC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-3">Maintenance Billing</h3>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
              Starting at <strong className="text-primary">₹2,500/month</strong> for websites. Includes security updates, bug fixes, uptime monitoring, backups, minor content updates, and email support.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Larger web applications and complex AI systems are quoted based on specific complexity requirements.
            </p>
          </div>

          <div className="hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-3">Annual Maintenance Contract (AMC)</h3>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
              Starting at <strong className="text-primary">₹25,000/year</strong>. Includes regular maintenance, security patches, performance optimization, backups, server monitoring, priority technical support, and a predefined number of enhancement hours.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Custom AMC blueprints are designed for enterprise applications demanding 24/7 SLAs.
            </p>
          </div>
        </div>

        {/* Section 4: Optional Support Plans & Additional Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Support Plans */}
          <div className="lg:col-span-2 hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-6">Optional Support Plans</h3>
            <div className="space-y-4">
              {supportPlans.map((plan) => (
                <div key={plan.name} className="border-b border-border-custom/30 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between font-mono text-xs mb-1">
                    <span className="font-bold text-text-base">{plan.name}</span>
                    <span className="text-primary font-bold">{plan.price}</span>
                  </div>
                  <p className="text-[11px] text-text-muted leading-relaxed">{plan.includes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services starting prices */}
          <div className="lg:col-span-1 hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-xl font-bold text-text-base mb-6">Additional Services</h3>
            <div className="space-y-2.5 font-mono text-xs">
              {additionalServices.map((service) => (
                <div key={service.name} className="flex justify-between border-b border-border-custom/20 pb-1.5 last:border-0">
                  <span className="text-text-muted text-[11px]">{service.name}</span>
                  <span className="text-text-base font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Included in Every Project */}
        <div className="hog-card rounded-[32px] p-8 bg-card-bg">
          <h3 className="font-serif text-2xl font-bold text-text-base mb-6 flex items-center gap-2">
            <FileText className="size-5 text-primary" /> What's Included in Every Project
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {inclusions.map((inc) => (
              <div key={inc} className="flex items-center gap-2 text-xs text-text-muted">
                <Check className="size-4 text-primary shrink-0" />
                <span>{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
