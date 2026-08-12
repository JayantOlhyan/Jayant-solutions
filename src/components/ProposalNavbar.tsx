"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, ExternalLink, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProposalNavbarProps {
  clientSlug: string;
  clientName: string;
  sectionNavItems?: { label: string; id: string }[];
  activeSection?: string;
  onScrollToSection?: (id: string) => void;
}

export default function ProposalNavbar({
  clientSlug,
  clientName,
  sectionNavItems,
  activeSection,
  onScrollToSection,
}: ProposalNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCommercialPage = pathname.endsWith("/commercials");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070A14]/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Left: Agency Logo & Client Proposal Tag */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="size-9 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#C5A880] group-hover:border-[#C5A880] transition-all shadow-sm">
              <svg viewBox="0 0 200 200" className="w-5 h-5">
                <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#C5A880" />
              </svg>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-serif text-sm font-bold text-slate-100 leading-tight">
                Jayant Web & AI Systems
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                Private Proposal &bull; {clientName}
              </span>
            </div>
          </Link>

          <span className="h-5 w-px bg-slate-800 hidden md:block" />

          {/* Client badge */}
          <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 text-[11px] font-mono text-[#C5A880]">
            <ShieldCheck className="size-3.5" />
            <span>Client: {clientName}</span>
          </div>
        </div>

        {/* Center: Main Proposal Tabs & Page Sections */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <Link
            href={`/proposal/${clientSlug}`}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              !isCommercialPage
                ? "bg-[#C5A880] text-slate-950 font-bold shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            1. Strategy & Roadmap
          </Link>
          <Link
            href={`/proposal/${clientSlug}/commercials`}
            className={`px-3.5 py-1.5 rounded-lg transition-all ${
              isCommercialPage
                ? "bg-[#C5A880] text-slate-950 font-bold shadow-md"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            2. Commercial Proposal & Pricing
          </Link>
        </div>

        {/* Right: Site Navigation Links */}
        <div className="hidden sm:flex items-center gap-3 text-xs font-mono">
          <Link
            href="/"
            target="_blank"
            className="text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-md transition-colors flex items-center gap-1"
          >
            <span>Agency Home</span>
            <ExternalLink className="size-3 text-slate-500" />
          </Link>

          <Link
            href="/pricing"
            target="_blank"
            className="text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-md transition-colors flex items-center gap-1"
          >
            <span>Agency Pricing</span>
            <ExternalLink className="size-3 text-slate-500" />
          </Link>

          <Link
            href={isCommercialPage ? `/proposal/${clientSlug}` : `/proposal/${clientSlug}/commercials`}
            className="inline-flex items-center gap-1.5 px-4 py-2 font-bold rounded-lg bg-[#C5A880] hover:bg-[#D8B992] text-slate-950 transition-all duration-200 active:scale-95 shadow-md font-mono"
          >
            <span>{isCommercialPage ? "View Strategy" : "View Commercials"}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-400 hover:text-slate-200 p-2 rounded-lg bg-slate-900 border border-slate-800"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 bg-[#070A14] border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl z-40 lg:hidden text-left"
          >
            <div className="pb-3 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-[#C5A880] font-bold uppercase tracking-wider">
                Private Proposal &bull; {clientName}
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-1 font-mono text-xs">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Proposal Pages:</span>
              <Link
                href={`/proposal/${clientSlug}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl border text-left ${
                  !isCommercialPage
                    ? "bg-[#C5A880] text-slate-950 font-bold border-[#C5A880]"
                    : "bg-slate-900 text-slate-200 border-slate-800"
                }`}
              >
                1. Strategy & 90-Day Roadmap
              </Link>
              <Link
                href={`/proposal/${clientSlug}/commercials`}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl border text-left ${
                  isCommercialPage
                    ? "bg-[#C5A880] text-slate-950 font-bold border-[#C5A880]"
                    : "bg-slate-900 text-slate-200 border-slate-800"
                }`}
              >
                2. Commercial Proposal & Pricing
              </Link>
            </div>

            {sectionNavItems && sectionNavItems.length > 0 && onScrollToSection && (
              <div className="flex flex-col gap-1 pt-3 border-t border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1">
                  On-Page Sections:
                </span>
                {sectionNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onScrollToSection(item.id);
                    }}
                    className={`text-left text-xs font-mono py-2 px-3 rounded-lg ${
                      activeSection === item.id ? "text-[#C5A880] bg-[#C5A880]/10 font-bold" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-2 pt-3 border-t border-slate-800 text-xs font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Website Links:</span>
              <Link
                href="/"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 flex items-center justify-between"
              >
                <span>Agency Home</span>
                <ExternalLink className="size-3.5 text-slate-500" />
              </Link>
              <Link
                href="/pricing"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 flex items-center justify-between"
              >
                <span>Agency Pricing</span>
                <ExternalLink className="size-3.5 text-slate-500" />
              </Link>
              <Link
                href="/contact"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 flex items-center justify-between"
              >
                <span>Contact Agency</span>
                <ExternalLink className="size-3.5 text-slate-500" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
