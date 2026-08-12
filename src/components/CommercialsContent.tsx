"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Send,
  Lock,
  ArrowLeft
} from "lucide-react";
import ProposalNavbar from "@/components/ProposalNavbar";
import ProposalFooter from "@/components/ProposalFooter";

interface CommercialsContentProps {
  clientSlug: string;
  clientName: string;
}

export default function CommercialsContent({ clientSlug, clientName }: CommercialsContentProps) {
  const [selectedPackage, setSelectedPackage] = useState<"FOUNDATION" | "GROWTH" | "SCALE">("GROWTH");
  const [submitted, setSubmitted] = useState(false);
  const [clientNotes, setClientNotes] = useState("");
  const [kickoffTimeline, setKickoffTimeline] = useState("Immediately (Next 7 Days)");

  const packagesData = {
    FOUNDATION: {
      name: "FOUNDATION",
      price: "₹69,000",
      period: "90-day engagement",
      tagline: "Build the Presence",
      summary: "For businesses that want a professional digital presence and content foundation while keeping day-to-day business development in-house.",
    },
    GROWTH: {
      name: "GROWTH",
      price: "₹1,45,000",
      period: "90-day engagement",
      badge: "MOST RECOMMENDED",
      tagline: "Build the Presence + Business Development",
      summary: "For businesses that want a complete 90-day digital presence and business-development program — from positioning to qualified conversations and meetings.",
    },
    SCALE: {
      name: "SCALE",
      price: "₹2,25,000",
      period: "90-day engagement",
      tagline: "Full Digital Growth Partnership",
      summary: "For businesses that want a higher-touch digital growth partnership with greater content volume, broader distribution and intensive business-development support.",
    }
  };

  const handleSelectPackage = (pkg: "FOUNDATION" | "GROWTH" | "SCALE") => {
    setSelectedPackage(pkg);
    const targetElement = document.getElementById("confirm-package");
    if (targetElement) {
      const navHeight = 90;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  const handleSubmitConfirmation = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const currentPkg = packagesData[selectedPackage];

  return (
    <div className="commercials-page relative min-h-screen bg-[#080C16] text-[#FAF7EE] font-sans antialiased selection:bg-[#C5A880]/20 selection:text-[#C5A880] overflow-x-hidden">
      
      {/* Header */}
      <ProposalNavbar clientSlug={clientSlug} clientName={clientName} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-20 md:gap-28 bg-[#080C16]">

        {/* 1. Proposal Eyebrow, Main Headline & Short Explanatory Sentence */}
        <section className="pt-6 border-b border-[#1E2638] pb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              COMMERCIAL PROPOSAL
            </span>
            <span className="text-xs text-[#7A8499] font-mono">&bull; Confidential</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF7EE] leading-[1.1] mb-6 max-w-4xl">
            Choose the Level of Growth You Want to Build
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#B0B8C8] font-light max-w-3xl leading-relaxed">
            Select the digital execution scope that matches how much of the growth process you want us to handle.
          </p>
        </section>

        {/* 2. Three Pricing Cards (Immediately Visible - Growth visually dominant) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
          
          {/* Tier 1: FOUNDATION */}
          <div 
            className={`rounded-2xl p-8 bg-[#0D1322] border flex flex-col justify-between transition-all duration-200 ${
              selectedPackage === "FOUNDATION"
                ? "border-[#C5A880]"
                : "border-[#1E2638] hover:border-[#2A3650]"
            }`}
          >
            <div>
              <div className="border-b border-[#1E2638] pb-6 mb-6">
                <span className="font-mono text-xs text-[#A0A8B8] uppercase tracking-wider block mb-1 font-medium">
                  {packagesData.FOUNDATION.tagline}
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#FAF7EE] mb-3">
                  FOUNDATION
                </h2>
                <div className="flex items-baseline gap-2 my-3">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF7EE]">
                    {packagesData.FOUNDATION.price}
                  </span>
                  <span className="font-mono text-xs text-[#7A8499]">
                    / {packagesData.FOUNDATION.period}
                  </span>
                </div>
                <p className="text-xs text-[#B0B8C8] font-light leading-relaxed min-h-[48px] mt-3">
                  {packagesData.FOUNDATION.summary}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold block mb-3">
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
                      <li key={idx} className="text-xs text-[#D0D6E2] flex items-start gap-2.5 font-light leading-snug">
                        <Check className="size-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1E2638]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6B758B] font-semibold block mb-3">
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
                      <li key={idx} className="text-xs text-[#6B758B] flex items-start gap-2.5 font-light leading-snug">
                        <span className="text-[#4A556B] shrink-0 font-mono text-sm leading-none">&mdash;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2638] mb-6 text-center">
                <p className="text-[11px] text-[#A0A8B8] font-light leading-snug">
                  Establishes presence. Business development execution remains in-house.
                </p>
              </div>

              <button
                onClick={() => handleSelectPackage("FOUNDATION")}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-mono font-semibold transition-all duration-200 ${
                  selectedPackage === "FOUNDATION"
                    ? "bg-[#C5A880] text-[#080C16]"
                    : "text-[#FAF7EE] border border-[#2A3650] bg-[#121827] hover:bg-[#182032]"
                }`}
              >
                <span>Select Foundation Tier &rarr;</span>
              </button>
            </div>
          </div>

          {/* Tier 2: GROWTH (Slightly larger & visually dominant) */}
          <div 
            className="rounded-2xl p-8 sm:p-9 bg-[#101A32] border-2 border-[#C5A880] flex flex-col justify-between relative transition-all duration-200 lg:-translate-y-2 shadow-2xl"
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase text-[#080C16] bg-[#C5A880] px-4 py-1 rounded-full font-bold">
              MOST RECOMMENDED
            </span>

            <div>
              <div className="border-b border-[#1E2638] pb-6 mb-6">
                <span className="font-mono text-xs text-[#C5A880] uppercase tracking-wider block mb-1 font-semibold">
                  {packagesData.GROWTH.tagline}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FAF7EE] mb-3">
                  GROWTH
                </h2>
                <div className="flex items-baseline gap-2 my-3">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#C5A880]">
                    {packagesData.GROWTH.price}
                  </span>
                  <span className="font-mono text-xs text-[#A0A8B8]">
                    / {packagesData.GROWTH.period}
                  </span>
                </div>
                <p className="text-xs text-[#FAF7EE] font-light leading-relaxed min-h-[48px] mt-3">
                  {packagesData.GROWTH.summary}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold block mb-3">
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
                      <li key={idx} className="text-xs text-[#FAF7EE] flex items-start gap-2.5 font-light leading-snug">
                        <Check className="size-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-[#091024] border border-[#C5A880]/40 mb-6 text-center">
                <p className="text-[11px] text-[#C5A880] font-light leading-snug">
                  Builds presence and turns it into a structured business-development channel.
                </p>
              </div>

              <button
                onClick={() => handleSelectPackage("GROWTH")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 px-4 text-xs font-mono font-bold text-[#080C16] bg-[#C5A880] hover:bg-[#D4B996] transition-all duration-200 active:scale-[0.99]"
              >
                <span>Choose Growth (Recommended) &rarr;</span>
              </button>
            </div>
          </div>

          {/* Tier 3: SCALE */}
          <div 
            className={`rounded-2xl p-8 bg-[#0D1322] border flex flex-col justify-between transition-all duration-200 ${
              selectedPackage === "SCALE"
                ? "border-[#C5A880]"
                : "border-[#1E2638] hover:border-[#2A3650]"
            }`}
          >
            <div>
              <div className="border-b border-[#1E2638] pb-6 mb-6">
                <span className="font-mono text-xs text-[#A0A8B8] uppercase tracking-wider block mb-1 font-medium">
                  {packagesData.SCALE.tagline}
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#FAF7EE] mb-3">
                  SCALE
                </h2>
                <div className="flex items-baseline gap-2 my-3">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF7EE]">
                    {packagesData.SCALE.price}
                  </span>
                  <span className="font-mono text-xs text-[#7A8499]">
                    / {packagesData.SCALE.period}
                  </span>
                </div>
                <p className="text-xs text-[#B0B8C8] font-light leading-relaxed min-h-[48px] mt-3">
                  {packagesData.SCALE.summary}
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold block mb-3">
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
                      <li key={idx} className="text-xs text-[#D0D6E2] flex items-start gap-2.5 font-light leading-snug">
                        <Check className="size-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-[#070B14] border border-[#1E2638] mb-6 text-center">
                <p className="text-[11px] text-[#A0A8B8] font-light leading-snug">
                  Higher-touch growth partnership with broader execution and higher volume.
                </p>
              </div>

              <button
                onClick={() => handleSelectPackage("SCALE")}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-mono font-semibold transition-all duration-200 ${
                  selectedPackage === "SCALE"
                    ? "bg-[#C5A880] text-[#080C16]"
                    : "text-[#FAF7EE] border border-[#2A3650] bg-[#121827] hover:bg-[#182032]"
                }`}
              >
                <span>Select Scale Tier &rarr;</span>
              </button>
            </div>
          </div>

        </section>

        {/* 3. Feature Comparison Matrix */}
        <section className="text-left">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
              DETAILED SCOPE BREAKDOWN
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF7EE]">
              Feature Comparison Across Packages
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#1E2638] bg-[#0D1322]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#1E2638] bg-[#121827] text-[#FAF7EE] font-mono">
                  <th className="p-4 font-semibold uppercase tracking-wider w-2/5">Feature</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-center w-1/5">Foundation</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-center text-[#C5A880] w-1/5 bg-[#C5A880]/10">Growth</th>
                  <th className="p-4 font-semibold uppercase tracking-wider text-center w-1/5">Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2638]/60 text-[#D0D6E2] font-light">
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
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[#080C16]/50" : "bg-transparent"}>
                    <td className="p-4 font-medium text-[#FAF7EE]">{row.feature}</td>
                    <td className="p-4 text-center font-mono">{row.f}</td>
                    <td className="p-4 text-center font-mono font-bold text-[#C5A880] bg-[#C5A880]/[0.03]">{row.g}</td>
                    <td className="p-4 text-center font-mono">{row.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Why Growth Is Recommended Section */}
        <section className="p-8 sm:p-10 rounded-2xl bg-[#101A32] border border-[#C5A880]/40 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
            STRATEGIC RATIONALE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF7EE] mb-4">
            Why Growth Is Recommended
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#D0D6E2] font-light leading-relaxed max-w-4xl">
            Foundation establishes the professional presence. Growth adds the business-development layer. Scale is designed for higher-volume, broader execution. For the current objective, Growth provides the strongest balance between depth of execution, content consistency, business-development support and strategic attention.
          </p>
        </section>

        {/* 5. 90-Day Commitment & Scope / Exclusions Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E2638]">
            <span className="font-mono text-xs font-semibold text-[#C5A880] uppercase tracking-wider block mb-3">
              TIMELINE STRUCTURE
            </span>
            <h3 className="font-serif text-xl font-semibold text-[#FAF7EE] mb-3">Why 90 Days?</h3>
            <p className="font-sans text-xs sm:text-sm text-[#B0B8C8] font-light leading-relaxed">
              The first month establishes the foundation. The second month puts the system into active use. The third month gives us meaningful response data to improve what is working and define the next stage.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E2638] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-[#C5A880] uppercase tracking-wider block mb-3">
                DISBURSEMENTS & TAXES
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#FAF7EE] mb-3">Third-Party Costs</h3>
              <p className="font-sans text-xs sm:text-sm text-[#B0B8C8] font-light leading-relaxed mb-4">
                Third-party costs such as advertising spend, paid platforms, travel, external production expenses or other external services are not included unless explicitly agreed in writing.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1E2638]">
              <span className="text-[11px] font-mono text-[#7A8499]">
                Applicable taxes, if any, will be handled as required by the final invoice.
              </span>
            </div>
          </div>
        </section>

        {/* 6. Realistic Expectations Disclaimer */}
        <section className="p-6 rounded-xl bg-[#0D1322] border border-[#1E2638] text-left">
          <span className="font-mono text-[10px] font-semibold text-[#7A8499] uppercase tracking-widest block mb-2">
            REALISTIC EXPECTATIONS
          </span>
          <p className="font-sans text-xs text-[#909AB0] font-light leading-relaxed">
            This engagement covers strategy, execution and continuous improvement. It does not guarantee a specific number of leads, meetings, customers, revenue, income or business partners. Results depend on audience response, the underlying offer, sales conversations, follow-up, market conditions and other factors outside the scope of digital execution.
          </p>
        </section>

        {/* 7. Final Package Selection CTA / Confirmation Section */}
        <section id="confirm-package" className="scroll-mt-24 text-left relative">
          <div className="bg-[#101A32] border-2 border-[#C5A880]/60 rounded-2xl p-8 sm:p-12 space-y-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#1E2638] pb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
                  PACKAGE SELECTION & NEXT STEPS
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#FAF7EE]">
                  Confirm Direction for {clientName}
                </h2>
                <p className="text-xs text-[#A0A8B8] font-mono mt-1">
                  Selected Tier: <strong className="text-[#C5A880]">{currentPkg.name} ({currentPkg.price} / {currentPkg.period})</strong>
                </p>
              </div>

              {/* Package Quick Selector */}
              <div className="flex items-center gap-1 bg-[#080C16] p-1.5 rounded-xl border border-[#1E2638] font-mono text-xs">
                {(["FOUNDATION", "GROWTH", "SCALE"] as const).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`px-3.5 py-2 rounded-lg transition-all ${
                      selectedPackage === pkg
                        ? "bg-[#C5A880] text-[#080C16] font-bold"
                        : "text-[#A0A8B8] hover:text-[#FAF7EE]"
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Package Overview Card */}
            <div className="p-6 rounded-xl bg-[#080C16] border border-[#C5A880]/30 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                    {currentPkg.name} TIER
                  </span>
                  <span className="size-1 rounded-full bg-[#3A455A]" />
                  <span className="font-mono text-xs text-[#7A8499]">
                    {currentPkg.period}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#FAF7EE]">
                  {currentPkg.name} &mdash; {currentPkg.price}
                </h3>
                <p className="text-xs text-[#B0B8C8] font-light max-w-xl">
                  {currentPkg.summary}
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-start md:items-end gap-1 border-t md:border-t-0 md:border-l border-[#1E2638] pt-4 md:pt-0 md:pl-6">
                <span className="text-[11px] font-mono text-[#7A8499]">Tax Treatment:</span>
                <span className="text-xs text-[#D0D6E2] font-mono">Applicable taxes on final invoice.</span>
              </div>
            </div>

            {/* Submission Form or Success State */}
            {submitted ? (
              <div className="p-8 rounded-xl bg-[#0D162D] border border-[#C5A880] text-center space-y-4">
                <div className="size-12 rounded-full bg-[#C5A880] text-[#080C16] flex items-center justify-center mx-auto">
                  <Check className="size-6 stroke-[3]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#FAF7EE]">
                  Direction Confirmed for {currentPkg.name} Package
                </h3>
                <p className="text-xs text-[#D0D6E2] font-light max-w-lg mx-auto leading-relaxed">
                  Thank you, {clientName}. Your selection of the <strong className="text-[#C5A880]">{currentPkg.name} ({currentPkg.price})</strong> package has been logged. We will reach out to confirm your onboarding documentation.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A880] text-[#080C16] font-bold text-xs font-mono hover:bg-[#D4B996] transition-all"
                  >
                    <Calendar className="size-4" />
                    <span>Book Strategy & Kickoff Call</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#A0A8B8] hover:text-[#FAF7EE] underline font-mono"
                  >
                    Modify Selection
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitConfirmation} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#A0A8B8] mb-2 uppercase tracking-wider">
                      Client / Company Name
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={clientName}
                      className="w-full rounded-xl bg-[#080C16] border border-[#1E2638] px-4 py-3 text-xs text-[#FAF7EE] font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A0A8B8] mb-2 uppercase tracking-wider">
                      Preferred Kickoff Timeline
                    </label>
                    <select
                      value={kickoffTimeline}
                      onChange={(e) => setKickoffTimeline(e.target.value)}
                      className="w-full rounded-xl bg-[#080C16] border border-[#1E2638] px-4 py-3 text-xs text-[#FAF7EE] font-mono focus:border-[#C5A880] focus:outline-none"
                    >
                      <option value="Immediately (Next 7 Days)">Immediately (Next 7 Days)</option>
                      <option value="Next 14 Days">Next 14 Days</option>
                      <option value="Beginning of Next Month">Beginning of Next Month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A0A8B8] mb-2 uppercase tracking-wider">
                    Additional Priorities or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    placeholder="Mention any specific focus areas or preferred kickoff details..."
                    className="w-full rounded-xl bg-[#080C16] border border-[#1E2638] px-4 py-3 text-xs text-[#FAF7EE] font-mono focus:border-[#C5A880] focus:outline-none placeholder:text-[#505A6E]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[#A0A8B8] text-xs font-mono">
                    <ShieldCheck className="size-4 text-[#C5A880]" />
                    <span>No upfront payment required to confirm direction.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B996] text-[#080C16] px-8 py-4 text-xs font-mono font-bold transition-all duration-200 active:scale-[0.99]"
                  >
                    <Send className="size-4" />
                    <span>Confirm {currentPkg.name} ({currentPkg.price}) & Request Kickoff</span>
                  </button>
                </div>
              </form>
            )}

            {/* Direct Booking Link */}
            <div className="pt-6 border-t border-[#1E2638] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A0A8B8]">
              <span>Or schedule a direct strategy discussion with Jayant:</span>
              <a
                href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C5A880] hover:underline"
              >
                <Calendar className="size-3.5" />
                <span>Book Direct Strategy Call on Cal.com &rarr;</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <ProposalFooter clientSlug={clientSlug} clientName={clientName} />

    </div>
  );
}
