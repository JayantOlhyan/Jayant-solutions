"use client";

import React, { useState } from "react";
import {
  Check,
  ShieldCheck,
  Calendar,
  Send
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
  const [proposalId, setProposalId] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch proposal data on mount
  React.useEffect(() => {
    async function loadProposal() {
      try {
        const res = await fetch(`/api/proposal/${clientSlug}`);
        const data = await res.json();
        if (data.success && data.proposal) {
          setProposalId(data.proposal.id);
          if (data.existingSelection && data.existingSelection.packages) {
            setSelectedPackage(data.existingSelection.packages.code as "FOUNDATION" | "GROWTH" | "SCALE");
            setSubmitted(true);
          }
        }
      } catch (err) {
        console.error("Failed to load proposal details:", err);
      }
    }
    loadProposal();
  }, [clientSlug]);

  const packagesData = {
    FOUNDATION: {
      name: "FOUNDATION",
      price: "₹69,000",
      displayPrice: "₹79,000",
      period: "90-day engagement",
      tagline: "Build the Presence",
      summary: "For businesses that want a professional digital presence and content foundation while keeping day-to-day business development in-house.",
    },
    GROWTH: {
      name: "GROWTH",
      price: "₹1,45,000",
      displayPrice: "₹1,59,000",
      period: "90-day engagement",
      badge: "MOST RECOMMENDED",
      tagline: "Build the Presence + Business Development",
      summary: "For businesses that want a complete 90-day digital presence and business-development program — from positioning to qualified conversations and meetings.",
    },
    SCALE: {
      name: "SCALE",
      price: "₹2,25,000",
      displayPrice: "₹2,49,000",
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

  const handleSubmitConfirmation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalId) {
      setError("Proposal context not initialized. Please refresh the page.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/proposal/select-package", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          proposal_id: proposalId,
          package_code: selectedPackage,
          client_notes: clientNotes,
          kickoff_timeline: kickoffTimeline,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(typeof data.error === "string" ? data.error : "Failed to record selection.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
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
                <div className="flex items-baseline gap-2.5 my-3 flex-wrap">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF7EE]">
                    {packagesData.FOUNDATION.price}
                  </span>
                  <span className="font-serif text-base text-[#7A8499] line-through">
                    {packagesData.FOUNDATION.displayPrice}
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
                      "Personal brand positioning",
                      "Profile/bio optimisation",
                      "Instagram setup/optimisation",
                      "Booking link setup",
                      "Contact/enquiry pathway",
                      "Initial audience research",
                      "Content-pillar strategy",
                      "8 short-form videos/month",
                      "Script outlines & monthly planning",
                      "Captions/copy for posts",
                      "Basic video editing & graphic assets",
                      "Publishing calendar",
                      "One monthly recording session",
                      "Basic DM / call-to-action structure",
                      "Basic monthly report & reviews"
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
                      "Outbound prospecting",
                      "Advanced lead qualification",
                      "Appointment-setting management",
                      "Active follow-up management",
                      "Multichannel distribution",
                      "Priority turnaround",
                      "Weekly strategy calls"
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
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest uppercase text-[#080C16] bg-[#C5A880] px-4 py-1.5 rounded-full font-bold">
              RECOMMENDED FOR MOST CLIENTS
            </span>

            <div>
              <div className="border-b border-[#1E2638] pb-6 mb-6">
                <span className="font-mono text-xs text-[#C5A880] uppercase tracking-wider block mb-1 font-semibold">
                  {packagesData.GROWTH.tagline}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FAF7EE] mb-3">
                  GROWTH
                </h2>
                <div className="flex items-baseline gap-2.5 my-3 flex-wrap">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#C5A880]">
                    {packagesData.GROWTH.price}
                  </span>
                  <span className="font-serif text-base text-[#FAF7EE]/50 line-through">
                    {packagesData.GROWTH.displayPrice}
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
                      "1-2 recording sessions per month",
                      "Up to 2 content revisions per asset",
                      "2-3 publishing platforms",
                      "Professional editing & motion graphics treatment",
                      "Advanced scripting & captions",
                      "Topic/format testing & audience growth strategy",
                      "Structured qualification questions & criteria",
                      "Lead categorization & prospect tracking database",
                      "Booking workflow & scheduling management",
                      "Confirmation & reminder flows",
                      "Follow-up templates & track cadence",
                      "Full monthly reporting & reviews",
                      "Bi-weekly performance updates"
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
                <div className="flex items-baseline gap-2.5 my-3 flex-wrap">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF7EE]">
                    {packagesData.SCALE.price}
                  </span>
                  <span className="font-serif text-base text-[#7A8499] line-through">
                    {packagesData.SCALE.displayPrice}
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
                      "2 recording sessions per month",
                      "2 revisions + priority revision handling per asset",
                      "3+ agreed publishing platforms",
                      "Outbound prospecting (up to 100 qualified prospects/mo)",
                      "Follow-up (up to 3 touches per qualified prospect)",
                      "Lead qualification (up to 100 active prospects/mo)",
                      "Appointment setting (management of meeting requests)",
                      "High-touch editing & advanced motion graphics",
                      "Priority content requests & turnaround",
                      "Multi-platform distribution & audience growth",
                      "Weekly strategy review & conversion analysis",
                      "Funnel optimisation & scaling recommendations"
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

          <div className="overflow-x-auto rounded-xl border border-[#1E2638] bg-[#0D1322] mb-8">
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
                  { feature: "Monthly short-form videos", f: "8", g: "20", s: "30" },
                  { feature: "Content production", f: "Basic", g: "Professional", s: "High-touch" },
                  { feature: "Scriptwriting", f: "Basic", g: "Advanced", s: "Advanced" },
                  { feature: "Caption / copywriting", f: "✓", g: "✓", s: "✓" },
                  { feature: "Graphic / thumbnail assets", f: "Basic", g: "Professional", s: "High-touch" },
                  { feature: "Publishing management", f: "✓", g: "✓", s: "✓" },
                  { feature: "Content calendar", f: "✓", g: "✓", s: "✓" },
                  { feature: "Audience development", f: "—", g: "✓", s: "✓" },
                  { feature: "Enquiry support", f: "Basic", g: "✓", s: "Priority" },
                  { feature: "Prospect qualification", f: "—", g: "✓", s: "Advanced (Up to 100/mo)" },
                  { feature: "Appointment setting", f: "—", g: "✓", s: "Priority (Inbound/Outbound)" },
                  { feature: "Follow-up", f: "—", g: "✓", s: "Advanced (Up to 3 touches)" },
                  { feature: "Lead tracking / pipeline", f: "—", g: "✓", s: "✓" },
                  { feature: "Outbound prospecting", f: "—", g: "—", s: "✓ (Up to 100/mo)" },
                  { feature: "Multi-channel distribution", f: "—", g: "—", s: "✓ (3+ platforms)" },
                  { feature: "Reporting", f: "Basic", g: "Full", s: "Advanced" },
                  { feature: "Strategy reviews", f: "Monthly", g: "Monthly", s: "Weekly" },
                  { feature: "Optimisation", f: "Basic", g: "✓", s: "Advanced" },
                  { feature: "Priority turnaround", f: "—", g: "—", s: "✓" },
                  { feature: "Revisions per content asset", f: "1", g: "2", s: "2 + Priority" },
                  { feature: "Recording sessions/month", f: "1", g: "1-2", s: "2+" },
                  { feature: "Publishing platforms", f: "1", g: "2-3", s: "3+" },
                  { feature: "Community management", f: "—", g: "Basic", s: "Advanced" },
                  { feature: "WhatsApp workflow", f: "—", g: "✓", s: "Advanced" },
                  { feature: "Email follow-up", f: "—", g: "Basic", s: "Advanced" },
                  { feature: "CRM / lead sheet", f: "Basic", g: "✓", s: "Advanced" },
                  { feature: "Performance dashboard", f: "Basic", g: "✓", s: "Advanced" }
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

          {/* 3.5. Why the Packages Differ & Not Included List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E2638] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-[#C5A880] uppercase tracking-wider block mb-3">
                  Why the packages differ
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#FAF7EE] mb-3">Investment Difference</h3>
                <p className="font-sans text-xs sm:text-sm text-[#B0B8C8] font-light leading-relaxed">
                  The packages are not priced by content volume alone. Each tier increases the level of strategic execution, lead handling, business-development support and operational responsibility taken on by Jayant Web & AI Systems.
                </p>
              </div>
              <div className="pt-4 border-t border-[#1E2638]/60 mt-4">
                <p className="text-[11px] font-mono text-[#7A8499] leading-relaxed">
                  &ldquo;Foundation builds the digital machine. Growth is where we operate the business-development layer around the content. Scale is where we take substantially more responsibility for the acquisition process.&rdquo;
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#0D1322] border border-[#1E2638]">
              <span className="font-mono text-xs font-semibold text-red-400/80 uppercase tracking-wider block mb-3">
                Not Included Unless Specifically Agreed
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#FAF7EE] mb-3">Exclusions & Scope Limits</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#B0B8C8] font-light mt-3">
                {[
                  "Paid advertising spend",
                  "Influencer fees",
                  "Travel/on-site filming expenses",
                  "Third-party software subscriptions",
                  "Paid prospect databases",
                  "CRM subscription fees",
                  "Platform verification fees",
                  "External media/PR placement costs",
                  "Website redevelopment beyond agreed scope",
                  "Photography/travel production expenses",
                  "Unplanned high-volume revisions",
                  "Guaranteed lead volume",
                  "Guaranteed revenue",
                  "Guaranteed follower growth"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 leading-snug">
                    <span className="text-red-400 font-bold font-mono text-[9px] mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                TAXES & DISBURSEMENTS
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#FAF7EE] mb-3">Invoicing Treatment</h3>
              <p className="font-sans text-xs sm:text-sm text-[#B0B8C8] font-light leading-relaxed mb-4">
                All prices quoted are project rates for the 90-day engagement scope. Any applicable local taxes (e.g., GST) will be itemized on the final invoice as required.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1E2638]">
              <span className="text-[11px] font-mono text-[#7A8499]">
                Terms: Selected package is locked for the 90-day execution period.
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
                {error && (
                  <div className="p-3.5 bg-red-950/40 border border-red-800/50 rounded-xl text-xs text-red-300 flex items-start gap-2 font-mono">
                    <span>&bull;</span>
                    <p>{error}</p>
                  </div>
                )}

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
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D4B996] text-[#080C16] px-8 py-4 text-xs font-mono font-bold transition-all duration-200 active:scale-[0.99] disabled:opacity-50"
                  >
                    <Send className="size-4" />
                    <span>{submitting ? "Confirming..." : `Confirm ${currentPkg.name} (${currentPkg.price}) & Request Kickoff`}</span>
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
