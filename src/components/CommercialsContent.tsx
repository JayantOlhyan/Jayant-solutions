"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Calendar,
  Sparkles,
  Send,
  Lock,
  Check,
  ChevronDown
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
      period: "/ 90 days",
      badge: "PRESENCE FOUNDATION",
      headline: "For establishing a clean digital presence and content foundation.",
      summary: "Establishes personal brand positioning, Instagram setup, 8 videos/mo, and basic enquiry pathway.",
      mailtoSubject: `Commercial Selection: FOUNDATION Package - ${clientName}`,
    },
    GROWTH: {
      name: "GROWTH",
      price: "₹1,45,000",
      period: "/ 90 days",
      badge: "MOST RECOMMENDED",
      headline: "For complete 90-day digital presence and active business-development execution.",
      summary: "Includes 20 videos/mo, full content system, prospect qualification, appointment setting, and strategy reviews.",
      mailtoSubject: `Commercial Selection: GROWTH Package (Recommended) - ${clientName}`,
    },
    SCALE: {
      name: "SCALE",
      price: "₹2,25,000",
      period: "/ 90 days",
      badge: "HIGH-TOUCH PARTNERSHIP",
      headline: "For higher-volume digital growth, broader distribution and intensive execution.",
      summary: "Includes 30 videos/mo, multi-channel distribution, active outbound prospecting, and weekly strategy reviews.",
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
    <div className="commercials-page relative min-h-screen bg-[#070A13] text-slate-100 selection:bg-[#C5A880]/20 selection:text-[#C5A880] font-sans antialiased overflow-x-hidden">
      
      {/* 1. Shared Proposal Navbar */}
      <ProposalNavbar clientSlug={clientSlug} clientName={clientName} />

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-16 md:gap-24">

        {/* Header section */}
        <section className="relative pt-6 border-b border-slate-800/40 pb-16 text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="proposal-eyebrow text-xs font-bold tracking-widest text-[#C5A880] uppercase font-mono">
              Jayant Web & AI Systems &bull; Commercial Proposal
            </span>
            <span className="text-xs font-mono text-slate-400">
              &bull; Prepared for {clientName}
            </span>
          </div>

          <h1 className="h1-proposal mb-6 max-w-4xl leading-tight">
            Three Ways to Build the Digital Growth System
          </h1>

          <p className="proposal-body-text text-slate-300 max-w-3xl font-light text-base md:text-lg">
            “Choose the level of digital execution that matches how much of the growth process you want us to handle.”
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
            <Link
              href={`/proposal/${clientSlug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#C5A880]/40 text-slate-300 hover:text-white transition-all"
            >
              <ArrowLeft className="size-3.5 text-[#C5A880]" />
              <span>Review Strategy & 90-Day Roadmap</span>
            </Link>

            <button
              onClick={() => handleSelectPackage("GROWTH")}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#C5A880] text-slate-950 font-bold hover:bg-[#D8B992] transition-all shadow-md"
            >
              <span>Jump to Recommended (Growth Tier)</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </section>

        {/* Commercial Logic Visual Flow */}
        <section className="p-8 rounded-2xl bg-[#0C1225]/60 border border-slate-800/80 text-left">
          <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-4">
            Commercial Execution Logic
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div 
              onClick={() => handleSelectPackage("FOUNDATION")}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedPackage === "FOUNDATION"
                  ? "bg-slate-900/90 border-[#C5A880] shadow-lg"
                  : "bg-slate-900/40 border-[#1E2544] hover:border-slate-700"
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-1">FOUNDATION</span>
                <h4 className="font-serif font-bold text-lg text-slate-200 mb-1">Presence</h4>
                <p className="text-xs text-slate-400 font-light mt-1">Build the digital presence.</p>
              </div>
            </div>

            <div 
              onClick={() => handleSelectPackage("GROWTH")}
              className={`p-5 rounded-xl border transition-all cursor-pointer relative shadow-lg ${
                selectedPackage === "GROWTH"
                  ? "bg-[#0E152B] border-2 border-[#C5A880]"
                  : "bg-[#0E152B]/80 border border-[#C5A880]/50 hover:border-[#C5A880]"
              }`}
            >
              <span className="absolute -top-3 right-4 font-mono text-[9px] uppercase tracking-wider bg-[#C5A880] text-slate-950 px-2.5 py-0.5 rounded-full font-bold">
                RECOMMENDED
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#C5A880] block mb-1">GROWTH &bull; RECOMMENDED</span>
                <h4 className="font-serif font-bold text-lg text-[#C5A880] mb-1">Presence + Conversations + Meetings</h4>
                <p className="text-xs text-slate-300 font-light mt-1">Build the presence + create and manage meaningful business conversations.</p>
              </div>
            </div>

            <div 
              onClick={() => handleSelectPackage("SCALE")}
              className={`p-5 rounded-xl border transition-all cursor-pointer ${
                selectedPackage === "SCALE"
                  ? "bg-slate-900/90 border-[#C5A880] shadow-lg"
                  : "bg-slate-900/40 border-[#1E2544] hover:border-slate-700"
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block mb-1">SCALE</span>
                <h4 className="font-serif font-bold text-lg text-slate-200 mb-1">Higher-Volume + Broader Execution</h4>
                <p className="text-xs text-slate-400 font-light mt-1">Build the presence + manage broader and higher-volume digital growth execution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid (Good / Better / Best) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
          
          {/* Card 1: FOUNDATION */}
          <div className={`rounded-3xl p-8 bg-[#0C1225]/40 border flex flex-col justify-between relative transition-all duration-300 ${
            selectedPackage === "FOUNDATION" ? "border-2 border-[#C5A880] shadow-xl" : "border-slate-800 hover:border-slate-700"
          }`}>
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

              <button
                onClick={() => handleSelectPackage("FOUNDATION")}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-mono font-bold transition-all duration-200 ${
                  selectedPackage === "FOUNDATION"
                    ? "bg-[#C5A880] text-slate-950"
                    : "text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800"
                }`}
              >
                <span>Select Foundation Tier &rarr;</span>
              </button>
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

              <button
                onClick={() => handleSelectPackage("GROWTH")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 px-4 text-xs font-mono font-bold text-slate-950 bg-[#C5A880] hover:bg-[#D8B992] transition-all duration-200 shadow-xl hover:shadow-[#C5A880]/20 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Choose Growth (Recommended) &rarr;</span>
              </button>
            </div>
          </div>

          {/* Card 3: SCALE */}
          <div className={`rounded-3xl p-8 bg-[#0C1225]/40 border flex flex-col justify-between relative transition-all duration-300 ${
            selectedPackage === "SCALE" ? "border-2 border-[#C5A880] shadow-xl" : "border-slate-800 hover:border-slate-700"
          }`}>
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

              <button
                onClick={() => handleSelectPackage("SCALE")}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-mono font-bold transition-all duration-200 ${
                  selectedPackage === "SCALE"
                    ? "bg-[#C5A880] text-slate-950"
                    : "text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800"
                }`}
              >
                <span>Select Scale Tier &rarr;</span>
              </button>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="mb-8 text-left">
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
        <section className="p-8 rounded-2xl bg-[#C5A880]/[0.04] border border-[#C5A880]/30 text-left relative overflow-hidden">
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

        {/* Terms & Guidelines Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
            <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-3">
              TIMELINE STRUCTURE
            </span>
            <h3 className="h3-proposal text-xl mb-3">WHY 90 DAYS?</h3>
            <p className="proposal-body-text text-slate-300 font-light text-xs leading-relaxed">
              “The first month establishes the foundation. The second month puts the system into active use. The third month gives us meaningful response data to improve what is working and define the next stage.”
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/20 border border-[#1E2544]">
            <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-3">
              CORE STANDARDS
            </span>
            <h3 className="h3-proposal text-xl mb-3">ALL PACKAGES INCLUDE:</h3>
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
          </div>
        </section>

        {/* Dynamic Package Confirmation & Kickoff Discovery Section */}
        <section id="confirm-package" className="scroll-mt-24 relative text-left">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 bg-[#0C1225]/80 border-2 border-[#C5A880]/60 rounded-3xl p-8 md:p-14 shadow-2xl space-y-8">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-8">
              <div>
                <span className="proposal-eyebrow text-xs tracking-widest text-[#C5A880] font-bold uppercase block mb-2">
                  Package Confirmation & Next Steps
                </span>
                <h2 className="h2-proposal text-slate-100 text-3xl">
                  Confirm Direction for {clientName}
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Selected Tier: <strong className="text-[#C5A880]">{currentPkg.name} ({currentPkg.price} / 90 days)</strong>
                </p>
              </div>

              {/* Package Quick Selector */}
              <div className="flex items-center gap-1 bg-slate-900 p-1.5 rounded-xl border border-slate-800 font-mono text-xs">
                {(["FOUNDATION", "GROWTH", "SCALE"] as const).map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`px-3.5 py-2 rounded-lg transition-all ${
                      selectedPackage === pkg
                        ? "bg-[#C5A880] text-slate-950 font-bold"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {pkg}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Package Details Box */}
            <div className="p-6 rounded-2xl bg-[#0E152B] border border-[#C5A880]/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#C5A880] uppercase tracking-wider">
                    {currentPkg.badge}
                  </span>
                  <span className="size-1 rounded-full bg-slate-700" />
                  <span className="font-mono text-xs text-slate-400">
                    90-Day Engagement
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-100">
                  {currentPkg.name} Tier &mdash; {currentPkg.price}
                </h3>
                <p className="text-xs text-slate-300 font-light max-w-xl">
                  {currentPkg.headline}
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-start md:items-end gap-2 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
                <span className="text-[11px] font-mono text-slate-400">Tax Treatment:</span>
                <span className="text-xs text-slate-300 font-mono">Applicable taxes on final invoice.</span>
              </div>
            </div>

            {/* Confirmation Form or Success State */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-[#C5A880]/10 border border-[#C5A880] text-center space-y-4"
              >
                <div className="size-14 rounded-full bg-[#C5A880] text-slate-950 flex items-center justify-center mx-auto">
                  <Check className="size-8 stroke-[3]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-100">
                  Direction Confirmed for {currentPkg.name} Package!
                </h3>
                <p className="text-xs text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
                  Thank you, {clientName}. Your selection of the <strong className="text-[#C5A880]">{currentPkg.name} ({currentPkg.price})</strong> package has been recorded. Our team will reach out directly to confirm your 90-day onboarding documentation.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A880] text-slate-950 font-bold text-xs font-mono hover:bg-[#D8B992] transition-all"
                  >
                    <Calendar className="size-4" />
                    <span>Book Strategy & Kickoff Call</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-slate-200 underline font-mono"
                  >
                    Modify Selection
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitConfirmation} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Client / Company Name
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={clientName}
                      className="w-full rounded-xl bg-slate-900/80 border border-slate-800 px-4 py-3 text-xs text-slate-200 font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Preferred Kickoff Timeline
                    </label>
                    <select
                      value={kickoffTimeline}
                      onChange={(e) => setKickoffTimeline(e.target.value)}
                      className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-xs text-slate-200 font-mono focus:border-[#C5A880] focus:outline-none"
                    >
                      <option value="Immediately (Next 7 Days)">Immediately (Next 7 Days)</option>
                      <option value="Next 14 Days">Next 14 Days</option>
                      <option value="Beginning of Next Month">Beginning of Next Month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                    Additional Priorities or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    placeholder="Mention any specific focus areas, upcoming events, or preferred meeting times..."
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-xs text-slate-200 font-mono focus:border-[#C5A880] focus:outline-none placeholder:text-slate-600"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <ShieldCheck className="size-4 text-[#C5A880]" />
                    <span>No upfront payment required to confirm direction.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 px-8 py-4 text-xs font-mono font-bold transition-all duration-200 shadow-xl hover:shadow-[#C5A880]/20 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="size-4" />
                    <span>Confirm {currentPkg.name} ({currentPkg.price}) & Request Kickoff</span>
                  </button>
                </div>
              </form>
            )}

            {/* Direct Booking Fallback */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
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

      {/* 2. Shared Proposal Footer */}
      <ProposalFooter clientSlug={clientSlug} clientName={clientName} />

    </div>
  );
}
