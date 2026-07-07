import React from "react";
import { Mail, ShieldAlert, Cpu, Heart, CheckCircle2, XCircle, Clock, Zap } from "lucide-react";

export default function SupportPage() {
  const maintenancePlans = [
    {
      name: "1. Basic Care",
      price: "₹2,500/month",
      bestFor: "Portfolio websites, landing pages, and small business websites.",
      features: [
        "Website uptime monitoring",
        "Security updates",
        "Monthly backups",
        "Minor bug fixes",
        "Content updates (up to 2 requests/month)",
        "Email support"
      ]
    },
    {
      name: "2. Growth Care",
      price: "₹7,500/month",
      bestFor: "Business websites, dashboards, and SaaS products.",
      features: [
        "Everything in Basic, plus:",
        "Weekly backups",
        "Performance optimization",
        "Database maintenance",
        "Monthly health reports",
        "Priority support",
        "Up to 5 support requests/month",
        "Basic SEO maintenance"
      ]
    },
    {
      name: "3. Business Care",
      price: "₹15,000/month",
      bestFor: "Growing startups and business-critical applications.",
      features: [
        "Everything in Growth, plus:",
        "API monitoring",
        "Security audits",
        "Feature enhancements (up to 10 hours/month)",
        "Server monitoring",
        "Database optimization",
        "Quarterly performance reviews",
        "Faster response times"
      ]
    },
    {
      name: "4. Enterprise Support",
      price: "Custom Quote",
      bestFor: "Enterprise applications, large SaaS platforms, and mission-critical systems.",
      features: [
        "Dedicated technical support",
        "Service Level Agreement (SLA)",
        "DevOps monitoring",
        "AI model maintenance",
        "Infrastructure management",
        "Performance optimization",
        "Security compliance assistance",
        "Unlimited support requests",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            Support Center
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Support & Maintenance
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Reliable support SLAs, maintenance contracts, and issue resolution protocols for your business systems.
          </p>
        </div>

        {/* Section 1: Support Channels & Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-[32px] p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-text-base mb-4 flex items-center gap-2">
                <Mail className="size-6 text-primary" /> Support Channels
              </h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
                Reach out to our engineering desk for help. General inquiries and support issues are monitored during standard business hours.
              </p>
              <div className="space-y-4">
                <div className="border-b border-border-custom/20 pb-3 last:border-b-0">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">General & Technical Email:</span>
                  <a href="mailto:jayantwebaisystems@gmail.com" className="text-sm font-serif font-bold text-primary hover:underline">
                    jayantwebaisystems@gmail.com
                  </a>
                </div>
                <div className="border-b border-border-custom/20 pb-3 last:border-b-0">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">Estimated Responses:</span>
                  <ul className="space-y-1 text-xs text-text-muted">
                    <li>🚨 Critical Issues: <strong className="text-text-base font-semibold">4–8 business hours</strong></li>
                    <li>📨 General Support: <strong className="text-text-base font-semibold">Within 24 business hours</strong></li>
                    <li>💡 Feature Requests: <strong className="text-text-base font-semibold">2–3 business days</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="hog-card rounded-[32px] p-8">
            <h3 className="font-serif text-2xl font-bold text-text-base mb-4 flex items-center gap-2">
              <ShieldAlert className="size-6 text-primary" /> Emergency Desk
            </h3>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
              Emergency support pathways are reserved exclusively for critical production level issues directly affecting workflow operations.
            </p>
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-4 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-wider text-red-500 font-bold block mb-1.5">Emergency Thresholds Include:</span>
              <ul className="space-y-1 text-xs text-text-muted">
                <li>• Live website outages or application down events</li>
                <li>• Active security incidents or credential leaks</li>
                <li>• Production deployment blockers</li>
                <li>• Payment gateway integration failure</li>
              </ul>
            </div>
            <p className="text-[11px] text-text-muted leading-relaxed">
              Availability and response bounds are mapped to your active support plan or custom SLA agreements.
            </p>
          </div>
        </div>

        {/* Section 2: Maintenance Plans Grid */}
        <div>
          <div className="text-center mb-10 max-w-xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-text-base mb-2">Maintenance Plans</h2>
            <p className="text-xs md:text-sm text-text-muted">
              Choose the right tier to keep your system fast, safe, and up-to-date.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenancePlans.map((plan) => (
              <div key={plan.name} className="hog-card rounded-3xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-text-base mb-1">{plan.name}</h4>
                  <span className="text-primary font-mono font-bold text-base block mb-3">{plan.price}</span>
                  <p className="text-[10px] font-mono text-text-muted leading-relaxed bg-neutral-100 dark:bg-neutral-900 border border-border-custom/20 p-2 rounded mb-4">
                    Best For: {plan.bestFor}
                  </p>
                  <ul className="space-y-1.5 border-t border-border-custom/25 pt-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-[11px] text-text-muted leading-snug flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: SLA Priority Matrix */}
        <div className="hog-card rounded-[32px] p-8">
          <h3 className="font-serif text-2xl font-bold text-text-base mb-6">Service Level Agreement (SLA) Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono text-text-muted border-collapse">
              <thead>
                <tr className="border-b border-border-custom text-text-base">
                  <th className="py-2.5 font-bold">Priority</th>
                  <th className="py-2.5 font-bold">Scope Examples</th>
                  <th className="py-2.5 font-bold">Response Goal</th>
                  <th className="py-2.5 font-bold">Resolution Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom/30">
                <tr>
                  <td className="py-3 font-bold text-text-base">Critical (P1)</td>
                  <td className="py-3">Outage, security incident, server down</td>
                  <td className="py-3 text-red-500">4–8 business hours</td>
                  <td className="py-3">As quickly as possible</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-text-base">High (P2)</td>
                  <td className="py-3">Core feature unavailable, payment failure</td>
                  <td className="py-3">1 business day</td>
                  <td className="py-3">1–3 business days</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-text-base">Medium (P3)</td>
                  <td className="py-3">Minor layout error, partial bug</td>
                  <td className="py-3">1 business day</td>
                  <td className="py-3">3–5 business days</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-text-base">Low (P4)</td>
                  <td className="py-3">Cosmetic bugs, enhancement request</td>
                  <td className="py-3">2 business days</td>
                  <td className="py-3">Scheduled updates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Support Scope Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-[32px] p-8 border-t-4 border-t-primary">
            <h3 className="font-serif text-xl font-bold text-text-base mb-4 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-primary" /> Included in Scope
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-text-muted">
              <li className="flex items-start gap-2">✔ Bug fixing & patches</li>
              <li className="flex items-start gap-2">✔ Performance optimizations</li>
              <li className="flex items-start gap-2">✔ Server stability monitoring</li>
              <li className="flex items-start gap-2">✔ Scheduled data backups & restoration checks</li>
              <li className="flex items-start gap-2">✔ Security certificate maintenance</li>
            </ul>
          </div>

          <div className="hog-card rounded-[32px] p-8 border-t-4 border-t-neutral-400">
            <h3 className="font-serif text-xl font-bold text-text-base mb-4 flex items-center gap-2">
              <XCircle className="size-5 text-text-muted" /> Out of Support Scope
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-text-muted">
              <li className="flex items-start gap-2">✖ Creating new features or sections from scratch</li>
              <li className="flex items-start gap-2">✖ Major interface redesign modifications</li>
              <li className="flex items-start gap-2">✖ Third-party licensing costs & integration fees</li>
              <li className="flex items-start gap-2">✖ Core system hosting, domains or database billing dues</li>
              <li className="flex items-start gap-2">✖ Scope changes outside signed SLA blueprints</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Bug Reporting Procedures */}
        <div className="hog-card rounded-[32px] p-8">
          <h3 className="font-serif text-2xl font-bold text-text-base mb-4 flex items-center gap-2">
            <Clock className="size-5 text-primary" /> Bug Reporting Guidelines
          </h3>
          <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
            Help us debug your platform quickly. When reporting an issue, please send an email formatted with these guidelines:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs text-text-muted bg-neutral-100 dark:bg-neutral-900/60 p-6 rounded-2xl border border-border-custom/30">
            <div>
              <span className="font-bold text-text-base block mb-2">Subject Title Schema:</span>
              <span className="bg-background-base px-2 py-1 rounded border border-border-custom text-primary block">
                [BUG] Project Name - Short Issue Description
              </span>
              <span className="block mt-2 italic text-[11px]">
                Example: [BUG] Teacher Sathi - Login Button Not Working
              </span>
            </div>
            <div>
              <span className="font-bold text-text-base block mb-2">Required Information:</span>
              <ul className="space-y-0.5 text-[11px] list-disc pl-4">
                <li>Your name, project name, and contact</li>
                <li>Clear description of the bug and steps to reproduce</li>
                <li>Actual vs expected behaviors</li>
                <li>Browser model, device, and viewport sizes</li>
                <li>Screenshots/Screen recordings if available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
