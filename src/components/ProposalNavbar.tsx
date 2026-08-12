"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ExternalLink, Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080C16] border-b border-[#1E2638] font-sans antialiased text-[#FAF7EE]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
        
        {/* Left: Agency Monogram & Client Metadata */}
        <div className="flex items-center gap-3.5 shrink-0 text-left">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-9 rounded-lg bg-[#121827] border border-[#2A344A] flex items-center justify-center text-[#C5A880] transition-colors group-hover:border-[#C5A880]">
              <svg viewBox="0 0 200 200" className="w-5 h-5">
                <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#C5A880" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm font-semibold text-[#FAF7EE] leading-tight">
                Jayant Web & AI Systems
              </span>
              <span className="text-[11px] text-[#A0A8B8] font-normal tracking-wide">
                Private Proposal &bull; {clientName}
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Proposal Step Navigation (01 Strategy & Roadmap → 02 Commercial Plan) */}
        <div className="hidden md:flex items-center gap-2 font-sans text-xs tracking-wide">
          <Link
            href={`/proposal/${clientSlug}`}
            className={`px-3.5 py-1.5 rounded-md transition-all ${
              !isCommercialPage
                ? "bg-[#182032] text-[#C5A880] font-semibold border border-[#2A3650]"
                : "text-[#A0A8B8] hover:text-[#FAF7EE]"
            }`}
          >
            01 Strategy & Roadmap
          </Link>

          <span className="text-[#4A556B] text-xs font-mono">&rarr;</span>

          <Link
            href={`/proposal/${clientSlug}/commercials`}
            className={`px-3.5 py-1.5 rounded-md transition-all ${
              isCommercialPage
                ? "bg-[#182032] text-[#C5A880] font-semibold border border-[#2A3650]"
                : "text-[#A0A8B8] hover:text-[#FAF7EE]"
            }`}
          >
            02 Commercial Plan
          </Link>
        </div>

        {/* Right: Back to Agency ↗ */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-sans">
          <Link
            href="/"
            target="_blank"
            className="text-[#A0A8B8] hover:text-[#FAF7EE] transition-colors inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md hover:bg-[#121827]"
          >
            <span>Back to Agency</span>
            <ExternalLink className="size-3.5 text-[#C5A880]" />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#A0A8B8] hover:text-[#FAF7EE] p-2 rounded-lg bg-[#121827] border border-[#2A344A]"
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
            className="absolute top-20 left-0 right-0 bg-[#080C16] border-b border-[#1E2638] p-6 flex flex-col space-y-4 shadow-2xl md:hidden text-left"
          >
            <div className="pb-3 border-b border-[#1E2638] flex items-center justify-between">
              <span className="text-xs font-mono text-[#C5A880] font-semibold uppercase tracking-wider">
                Private Proposal &bull; {clientName}
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-1 font-sans text-xs">
              <span className="text-[10px] text-[#A0A8B8] uppercase tracking-widest block font-mono">
                Proposal Steps:
              </span>
              <Link
                href={`/proposal/${clientSlug}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-lg border text-left ${
                  !isCommercialPage
                    ? "bg-[#182032] text-[#C5A880] font-semibold border-[#2A3650]"
                    : "bg-[#0E1424] text-[#FAF7EE] border-[#1E2638]"
                }`}
              >
                01 Strategy & Roadmap
              </Link>
              <Link
                href={`/proposal/${clientSlug}/commercials`}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-lg border text-left ${
                  isCommercialPage
                    ? "bg-[#182032] text-[#C5A880] font-semibold border-[#2A3650]"
                    : "bg-[#0E1424] text-[#FAF7EE] border-[#1E2638]"
                }`}
              >
                02 Commercial Plan
              </Link>
            </div>

            {sectionNavItems && sectionNavItems.length > 0 && onScrollToSection && (
              <div className="flex flex-col gap-1 pt-3 border-t border-[#1E2638]">
                <span className="text-[10px] font-mono text-[#A0A8B8] uppercase tracking-widest block mb-1">
                  On-Page Sections:
                </span>
                {sectionNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onScrollToSection(item.id);
                    }}
                    className={`text-left text-xs py-2 px-3 rounded-md ${
                      activeSection === item.id ? "text-[#C5A880] bg-[#182032] font-semibold" : "text-[#A0A8B8] hover:text-[#FAF7EE]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}

            <div className="pt-3 border-t border-[#1E2638]">
              <Link
                href="/"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-lg bg-[#0E1424] text-[#FAF7EE] border border-[#1E2638] flex items-center justify-between text-xs"
              >
                <span>Back to Agency</span>
                <ExternalLink className="size-4 text-[#C5A880]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
