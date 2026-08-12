"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  Shield,
  Clock,
  ChevronRight
} from "lucide-react";

interface CommercialsContentProps {
  clientSlug: string;
  clientName: string;
}

export default function CommercialsContent({ clientSlug, clientName }: CommercialsContentProps) {
  const [selectedPackage, setSelectedPackage] = useState<"FOUNDATION" | "GROWTH" | "SCALE">("GROWTH");

  const getPackageMailto = (pkg: "FOUNDATION" | "GROWTH" | "SCALE") => {
    const prices = {
      FOUNDATION: "₹69,000",
      GROWTH: "₹1,45,000",
      SCALE: "₹2,25,000"
    };
    const subject = encodeURIComponent(`Commercial Proposal Choice: ${pkg} Package - ${clientName}`);
    const body = encodeURIComponent(
      `Hi Jayant,\n\nI have reviewed the commercial proposal and would like to choose the ${pkg} package (${prices[pkg]} / 90 days) for ${clientName}.\n\nLet's schedule our confirmation session to align details and confirm direction.\n\nPreferred Days/Times:\n\nRegards,\n${clientName}`
    );
    return `mailto:jayantwebaisystems@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="commercials-page relative min-h-screen bg-[#070A13] text-slate-100 selection:bg-[#C5A880]/20 selection:text-[#C5A880] font-sans antialiased overflow-x-hidden">
      
      {/* Persistent top navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070A13]/90 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={`/proposal/${clientSlug}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#C5A880] transition-colors py-1 px-3 rounded-lg border border-slate-800 hover:border-[#C5A880]/30"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to Proposal Strategy</span>
            </Link>
            <div className="hidden md:flex flex-col border-l border-slate-800 pl-4">
              <span className="proposal-eyebrow text-[#C5A880] text-[10px] font-bold font-mono uppercase tracking-widest">
                Commercial & Payment Proposal
              </span>
              <span className="text-xs font-serif font-bold text-slate-200">
                Client: {clientName}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={getPackageMailto("GROWTH")}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 text-xs font-bold rounded-lg bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 transition-all duration-200 active:scale-95 shadow-md hover:shadow-[#C5A880]/10 font-mono"
            >
              <span>Choose Recommended (Growth)</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-16 md:gap-24">

        {/* Header section */}
        <section className="relative pt-6 border-b border-slate-800/40 pb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="inline-flex flex-col mb-6">
            <span className="proposal-eyebrow text-xs font-bold tracking-widest text-[#C5A880] uppercase">
              Jayant Web & AI Systems &bull; Commercial Options
            </span>
            <span className="text-xs font-mono text-slate-400 mt-1">
              Private Executive Proposal for {clientName}
            </span>
          </div>

          <h1 className="h1-proposal mb-6 max-w-4xl">
            Three Ways to Build the Digital Growth System
          </h1>

          <p className="proposal-body-text text-slate-300 max-w-3xl font-light text-base md:text-lg">
            “Choose the level of digital execution that matches how much of the growth process you want us to handle.”
          </p>
        </section>

        {/* Commercial Logic Visual Flow */}
        <section className="p-8 rounded-2xl bg-[#0C1225]/60 border border-slate-800/80">
          <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-4">
            Commercial Execution Logic
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-[#1E2544] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-1">FOUNDATION</span>
                <h4 className="font-serif font-bold text-lg text-slate-200 mb-1">Presence</h4>
                <p className="text-xs text-slate-400 font-light mt-1">Build the digital presence.</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-[#0E152B] border border-[#C5A880]/50 flex flex-col justify-between relative shadow-lg">
              <div>
                <span className="text-xs font-mono font-bold text-[#C5A880] block mb-1">GROWTH &bull; RECOMMENDED</span>
                <h4 className="font-serif font-bold text-lg text-[#C5A880] mb-1">Presence + Conversations + Meetings</h4>
                <p className="text-xs text-slate-300 font-light mt-1">Build the presence + create and manage meaningful business conversations.</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/40 border border-[#1E2544] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-1">SCALE</span>
                <h4 className="font-serif font-bold text-lg text-slate-200 mb-1">Higher-Volume + Broader Execution</h4>
                <p className="text-xs text-slate-400 font-light mt-1">Build the presence + manage broader and higher-volume digital growth execution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Three-Tier Pricing Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: FOUNDATION */}
          <div className="rounded-3xl p-8 bg-[#0C1225]/40 border border-slate-800 flex flex-col justify-between relative transition-all duration-300 hover:border-slate-700">
            <div>
              <div className="border-b border-slate-800/80 pb-6 mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  Build the foundation
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-100 mb-3">
                  FOUNDATION
                </h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-slate-100">₹69,000</span>
                  <span className="text-xs text-slate-400 font-mono">/ 90 days</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed min-h-[48px] mt-2">
                  “For businesses that want a professional digital presence and content foundation while keeping more of the day-to-day business development in-house.”
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A880] font-bold block mb-3">
                    WHAT IS INCLUDED:
                  </span>
                  <ul className="space-y-2.5">
                    {[
                      "Personal-brand positioning",
                      "Instagram profile setup and optimisation",
                      "Content strategy",
                      "8 short-form videos per month",
                      "Captions and publishing guidance",
                      "Basic content calendar",
                      "Basic enquiry pathway",
                      "Monthly performance review"
                    ].map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5 font-light leading-snug">
                        <CheckCircle className="size-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/60">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold block mb-3">
                    DOES NOT INCLUDE:
                  </span>
                  <ul className="space-y-2">
                    {[
                      "Active outbound prospecting",
                      "Prospect qualification management",
                      "Appointment-setting management",
                      "Follow-up management",
                      "Advanced reporting",
                      "Multi-channel growth",
                      "Intensive audience development"
                    ].map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-500 flex items-start gap-2.5 font-light leading-snug">
                        <span className="text-slate-600 shrink-0 font-mono text-sm leading-none">&mdash;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 mb-6 text-center">
                <p className="text-[11px] text-slate-400 font-light italic leading-snug">
                  “Best for establishing the presence. More business-development execution remains with the client.”
                </p>
              </div>

              <a
                href={getPackageMailto("FOUNDATION")}
                onClick={() => setSelectedPackage("FOUNDATION")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-mono font-bold text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200"
              >
                <span>Build the Foundation &rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 2: GROWTH (MOST RECOMMENDED) */}
          <div className="rounded-3xl p-8 bg-[#0E152B] border-2 border-[#C5A880] flex flex-col justify-between relative transition-all duration-300 shadow-2xl shadow-[#C5A880]/10 lg:-translate-y-2">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase text-slate-950 bg-[#C5A880] px-4 py-1 rounded-full font-bold shadow-md">
              MOST RECOMMENDED
            </span>

            <div>
              <div className="border-b border-slate-800 pb-6 mb-6">
                <span className="font-mono text-xs text-[#C5A880] font-bold uppercase tracking-wider block mb-1">
                  The strongest value package
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-100 mb-3">
                  GROWTH
                </h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-[#C5A880]">₹1,45,000</span>
                  <span className="text-xs text-slate-400 font-mono">/ 90 days</span>
                </div>
                <p className="text-xs text-slate-200 font-light leading-relaxed min-h-[48px] mt-2">
                  “For businesses that want a complete 90-day digital presence and business-development program — from positioning and content to meaningful enquiries, meetings and ongoing optimisation.”
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A880] font-bold block mb-3">
                    INCLUDES EVERYTHING IN FOUNDATION, PLUS:
                  </span>
                  <ul className="space-y-2.5">
                    {[
                      "20 short-form videos per month",
                      "Professional content production",
                      "Full personal-brand content system",
                      "Audience development",
                      "Enquiry handling support",
                      "Serious-prospect qualification support",
                      "Appointment-setting process",
                      "Follow-up support",
                      "Performance reporting",
                      "Monthly strategy review",
                      "Ongoing optimisation",
                      "Full 90-day acquisition roadmap"
                    ].map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-200 flex items-start gap-2.5 font-light leading-snug">
                        <CheckCircle className="size-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 mb-6 text-center">
                <p className="text-[11px] text-[#C5A880] font-light italic leading-snug">
                  “Best for building the presence and turning it into a structured business-development channel.”
                </p>
              </div>

              <a
                href={getPackageMailto("GROWTH")}
                onClick={() => setSelectedPackage("GROWTH")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 px-4 text-xs font-mono font-bold text-slate-950 bg-[#C5A880] hover:bg-[#D8B992] transition-all duration-200 shadow-xl hover:shadow-[#C5A880]/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Choose Growth &rarr;</span>
              </a>
            </div>
          </div>

          {/* Card 3: SCALE */}
          <div className="rounded-3xl p-8 bg-[#0C1225]/40 border border-slate-800 flex flex-col justify-between relative transition-all duration-300 hover:border-slate-700">
            <div>
              <div className="border-b border-slate-800/80 pb-6 mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  Higher-touch growth partnership
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-100 mb-3">
                  SCALE
                </h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-slate-100">₹2,25,000</span>
                  <span className="text-xs text-slate-400 font-mono">/ 90 days</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed min-h-[48px] mt-2">
                  “For businesses that want a higher-touch digital growth partnership with greater content volume, broader distribution and more active business-development support.”
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A880] font-bold block mb-3">
                    INCLUDES EVERYTHING IN GROWTH, PLUS:
                  </span>
                  <ul className="space-y-2.5">
                    {[
                      "30 short-form videos per month",
                      "Higher-touch creative direction",
                      "More intensive personal-brand production",
                      "Multi-channel content distribution",
                      "Active outbound prospecting",
                      "Priority enquiry management",
                      "More intensive meeting-setting support",
                      "Weekly strategy review",
                      "Advanced performance analysis",
                      "Conversion-path optimisation",
                      "Additional campaign testing",
                      "Quarterly growth strategy",
                      "Priority turnaround",
                      "Dedicated content / strategy days"
                    ].map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5 font-light leading-snug">
                        <CheckCircle className="size-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 mb-6 text-center">
                <p className="text-[11px] text-slate-400 font-light italic leading-snug">
                  “Best for a higher-touch growth partnership with broader execution and greater volume.”
                </p>
              </div>

              <a
                href={getPackageMailto("SCALE")}
                onClick={() => setSelectedPackage("SCALE")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-mono font-bold text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200"
              >
                <span>Explore Scale &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="mb-8">
          <div className="mb-8 text-left">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold uppercase">
              Detailed Scope Breakdown
            </span>
            <h3 className="h3-proposal text-2xl mt-1">
              Feature Comparison Across Packages
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-[#0C1225]/40">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-300 font-mono">
                  <th className="p-4.5 font-bold uppercase tracking-wider w-2/5">Feature</th>
                  <th className="p-4.5 font-bold uppercase tracking-wider text-center w-1/5">Foundation</th>
                  <th className="p-4.5 font-bold uppercase tracking-wider text-center text-[#C5A880] w-1/5 bg-[#C5A880]/10">Growth</th>
                  <th className="p-4.5 font-bold uppercase tracking-wider text-center w-1/5">Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 text-slate-300 font-light">
                {[
                  { feature: "Brand positioning", f: "✓", g: "✓", s: "✓" },
                  { feature: "Instagram setup", f: "✓", g: "✓", s: "✓" },
                  { feature: "Content strategy", f: "✓", g: "✓", s: "✓" },
                  { feature: "Short-form videos", f: "8/mo", g: "20/mo", s: "30/mo" },
                  { feature: "Content production", f: "Basic", g: "Professional", s: "High-touch" },
                  { feature: "Audience development", f: "—", g: "✓", s: "✓" },
                  { feature: "Enquiry support", f: "Basic", g: "✓", s: "Priority" },
                  { feature: "Prospect qualification", f: "—", g: "✓", s: "Advanced" },
                  { feature: "Appointment setting", f: "—", g: "✓", s: "Priority" },
                  { feature: "Follow-up", f: "—", g: "✓", s: "Advanced" },
                  { feature: "Outbound prospecting", f: "—", g: "—", s: "✓" },
                  { feature: "Multi-channel distribution", f: "—", g: "—", s: "✓" },
                  { feature: "Reporting", f: "Basic", g: "Full", s: "Advanced" },
                  { feature: "Strategy reviews", f: "Monthly", g: "Monthly", s: "Weekly" },
                  { feature: "Optimisation", f: "Basic", g: "✓", s: "Advanced" },
                  { feature: "Priority turnaround", f: "—", g: "—", s: "✓" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/20" : "bg-transparent"}>
                    <td className="p-4.5 font-medium text-slate-200">{row.feature}</td>
                    <td className="p-4.5 text-center font-mono">{row.f}</td>
                    <td className="p-4.5 text-center font-mono font-bold text-[#C5A880] bg-[#C5A880]/[0.03]">{row.g}</td>
                    <td className="p-4.5 text-center font-mono">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Growth Is Recommended Section */}
        <section className="p-8 rounded-2xl bg-[#C5A880]/[0.04] border border-[#C5A880]/30 relative overflow-hidden">
          <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold uppercase block mb-2">
            Strategic Rationale
          </span>
          <h3 className="h3-proposal text-2xl text-slate-100 mb-4">
            Why Growth Is the Recommended Option
          </h3>
          <p className="proposal-body-text text-slate-300 font-light leading-relaxed max-w-4xl">
            “Foundation establishes the professional presence. Growth adds the business-development layer. Scale is designed for higher-volume, broader execution. For the current objective, Growth provides the strongest balance between depth of execution, content consistency, business-development support and strategic attention.”
          </p>
        </section>

        {/* Commercial Framework & Scope Notes Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why 90 Days */}
          <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
            <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-3">
              TIMELINE STRUCTURE
            </span>
            <h3 className="h3-proposal text-xl mb-3">
              WHY 90 DAYS?
            </h3>
            <p className="proposal-body-text text-slate-300 font-light text-xs leading-relaxed">
              “The first month establishes the foundation. The second month puts the system into active use. The third month gives us meaningful response data to improve what is working and define the next stage.”
            </p>
          </div>

          {/* All Packages Include */}
          <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
            <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-3">
              CORE STANDARDS
            </span>
            <h3 className="h3-proposal text-xl mb-3">
              ALL PACKAGES INCLUDE:
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {[
                "Strategic direction",
                "Clear deliverables",
                "Structured content planning",
                "Performance visibility",
                "Defined client responsibilities",
                "Responsible communication standards"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-[#C5A880]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <span className="text-[10px] text-slate-400 font-mono block mt-4">
              Note: The amount of execution varies by package.
            </span>
          </div>

          {/* Client Contribution */}
          <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
            <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-3">
              PARTNERSHIP REQUIREMENT
            </span>
            <h3 className="h3-proposal text-xl mb-3">
              YOUR CONTRIBUTION
            </h3>
            <p className="text-xs text-slate-400 mb-3 font-light">All packages require the client to:</p>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {[
                "provide accurate business information",
                "share experience and stories",
                "participate in agreed recording sessions",
                "review important public-facing content",
                "participate in serious business conversations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <span className="text-[10px] text-slate-400 font-mono block mt-4">
              Note: The amount of client involvement may vary by package.
            </span>
          </div>

          {/* Scope Notes & Taxes */}
          <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544] flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-3">
                TERMS & DISBURSEMENTS
              </span>
              <h3 className="h3-proposal text-xl mb-3">
                THIRD-PARTY COSTS
              </h3>
              <p className="proposal-body-text text-slate-300 font-light text-xs leading-relaxed mb-6">
                “Third-party costs such as advertising spend, paid platforms, travel, external production expenses or other external services are not included unless explicitly agreed in writing.”
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800">
              <span className="text-[11px] text-slate-400 font-mono">
                “Applicable taxes, if any, will be handled as required by the final invoice.”
              </span>
            </div>
          </div>
        </section>

        {/* Realistic Expectations Disclaimer */}
        <section className="p-6 rounded-xl bg-slate-900/30 border border-slate-800 text-left">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
            REALISTIC EXPECTATIONS
          </span>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            “This engagement covers strategy, execution and continuous improvement. It does not guarantee a specific number of leads, meetings, customers, revenue, income or business partners. Results depend on audience response, the underlying offer, sales conversations, follow-up, market conditions and other factors outside the scope of digital execution.”
          </p>
        </section>

        {/* Action Plan Bottom Section */}
        <section className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 bg-[#0C1225]/40 border border-slate-800 rounded-3xl p-8 md:p-16">
            <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold uppercase">
              Action Plan
            </span>
            <h2 className="h2-proposal text-slate-100 leading-tight">
              READY TO CHOOSE YOUR LEVEL OF EXECUTION?
            </h2>
            <p className="proposal-body-text text-slate-300 font-light max-w-2xl mx-auto">
              “Select the approach that best matches your current goals and how much of the digital growth process you want us to handle.”
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={getPackageMailto("FOUNDATION")}
                onClick={() => setSelectedPackage("FOUNDATION")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-4 text-xs font-mono font-bold transition-all duration-200"
              >
                <span>START WITH FOUNDATION</span>
              </a>

              <a
                href={getPackageMailto("GROWTH")}
                onClick={() => setSelectedPackage("GROWTH")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4.5 text-sm font-bold transition-all duration-200 shadow-xl hover:shadow-[#C5A880]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>CHOOSE GROWTH</span>
                <ArrowRight className="size-4" />
              </a>

              <a
                href={getPackageMailto("SCALE")}
                onClick={() => setSelectedPackage("SCALE")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-4 text-xs font-mono font-bold transition-all duration-200"
              >
                <span>EXPLORE SCALE</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-center gap-3">
              <Link
                href={`/proposal/${clientSlug}`}
                className="text-xs text-slate-400 hover:text-[#C5A880] font-mono flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="size-3.5" />
                <span>Review Strategy Proposal Again</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer copyright */}
      <footer className="w-full py-12 border-t border-slate-800/40 text-center relative z-10">
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Jayant Web & AI Systems. All rights reserved. Confidential commercial proposal.
        </p>
      </footer>

    </div>
  );
}
