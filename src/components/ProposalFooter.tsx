"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink, Lock } from "lucide-react";

interface ProposalFooterProps {
  clientSlug: string;
  clientName: string;
}

export default function ProposalFooter({ clientSlug, clientName }: ProposalFooterProps) {
  return (
    <footer className="w-full bg-[#050810] border-t border-[#182032] pt-16 pb-12 font-sans antialiased text-[#FAF7EE] relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#182032]">
          
          {/* Col 1: Brand & Confidential Notice (6 cols) */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <Link href={`/proposal/${clientSlug}`} className="flex items-center gap-3 group">
              <div className="size-9 rounded-lg bg-[#0E1424] border border-[#2A344A] flex items-center justify-center text-[#C5A880]">
                <svg viewBox="0 0 200 200" className="w-5 h-5">
                  <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                  <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                  <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#C5A880" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-semibold text-[#FAF7EE] leading-tight">
                  Jayant Web & AI Systems
                </span>
                <span className="text-[11px] font-mono text-[#A0A8B8]">
                  Digital Systems & AI Engineering
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A0A8B8] font-light leading-relaxed max-w-md">
              Custom strategic execution converting client expertise into a high-converting digital presence and growth system.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0A0F1D] border border-[#1E2638] text-[11px] font-mono text-[#C5A880]">
              <Lock className="size-3 text-[#C5A880]" />
              <span>Confidential Executive Proposal &bull; {clientName}</span>
            </div>
          </div>

          {/* Col 2: Proposal Navigation (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold text-[#C5A880] uppercase tracking-wider block mb-1">
              Proposal Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#FAF7EE]/90">
              <li>
                <Link href={`/proposal/${clientSlug}`} className="hover:text-[#C5A880] transition-colors">
                  01 Strategy & 90-Day Roadmap
                </Link>
              </li>
              <li>
                <Link href={`/proposal/${clientSlug}/commercials`} className="hover:text-[#C5A880] transition-colors">
                  02 Commercial Plan & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Support (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono font-semibold text-[#C5A880] uppercase tracking-wider block mb-1">
              Contact & Support
            </span>
            <ul className="space-y-2.5 text-xs text-[#FAF7EE]/90">
              <li>
                <a
                  href="mailto:jayantwebaisystems@gmail.com"
                  className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1"
                >
                  <span>Email Support</span>
                  <ExternalLink className="size-3 text-[#C5A880]" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919667344125?text=Hi%20Jayant,%20I'm%20reviewing%20the%20private%20proposal%20and%20had%20some%20questions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="size-3 text-[#C5A880]" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#7A8499] text-[11px] font-mono">
          <p>&copy; {new Date().getFullYear()} Jayant Web & AI Systems. All rights reserved.</p>
          <p className="tracking-wide">Private Executive Document &bull; Strictly Confidential</p>
        </div>

      </div>
    </footer>
  );
}
