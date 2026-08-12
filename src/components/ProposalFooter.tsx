"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Lock } from "lucide-react";

interface ProposalFooterProps {
  clientSlug: string;
  clientName: string;
}

export default function ProposalFooter({ clientSlug, clientName }: ProposalFooterProps) {
  return (
    <footer className="w-full bg-[#05070E] border-t border-slate-800/80 pt-16 pb-12 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Col 1: Brand & Proposal Notice (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="size-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#C5A880] group-hover:border-[#C5A880] transition-all">
                <svg viewBox="0 0 200 200" className="w-5 h-5">
                  <rect x="10" y="10" width="180" height="180" rx="42" fill="none" stroke="currentColor" strokeWidth="16" />
                  <path d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z" fill="currentColor" />
                  <path d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z" fill="#C5A880" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-slate-100 leading-tight">
                  Jayant Web & AI Systems
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  AI & Software Development Agency
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-md">
              We design and execute custom digital systems that turn business experience into a clear presence and predictable growth channel.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-[#C5A880]">
              <Lock className="size-3 text-[#C5A880]" />
              <span>Confidential Private Client Proposal &bull; {clientName}</span>
            </div>
          </div>

          {/* Col 2: Proposal Navigation (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-1">
              Proposal Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-slate-300">
              <li>
                <Link href={`/proposal/${clientSlug}`} className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5">
                  <span>1. Strategy & 90-Day Roadmap</span>
                </Link>
              </li>
              <li>
                <Link href={`/proposal/${clientSlug}/commercials`} className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5">
                  <span>2. Commercial Proposal & Pricing</span>
                </Link>
              </li>
              <li>
                <Link href={`/proposal/${clientSlug}/pricing`} className="hover:text-[#C5A880] transition-colors flex items-center gap-1.5">
                  <span>3. Package Comparison</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Main Website Links (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-[#C5A880] uppercase tracking-wider block mb-1">
              Main Agency Website
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-slate-300">
              <li>
                <Link href="/" target="_blank" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  <span>Agency Homepage</span>
                  <ArrowUpRight className="size-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" target="_blank" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  <span>Agency Pricing & Services</span>
                  <ArrowUpRight className="size-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/services" target="_blank" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  <span>All Software & AI Services</span>
                  <ArrowUpRight className="size-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/portfolio" target="_blank" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  <span>Portfolio & Case Studies</span>
                  <ArrowUpRight className="size-3 text-slate-500" />
                </Link>
              </li>
              <li>
                <Link href="/contact" target="_blank" className="hover:text-[#C5A880] transition-colors inline-flex items-center gap-1">
                  <span>Contact & Book Strategy Call</span>
                  <ArrowUpRight className="size-3 text-slate-500" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <p>&copy; {new Date().getFullYear()} Jayant Web & AI Systems. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" target="_blank" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" target="_blank" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/contact" target="_blank" className="hover:text-slate-400 transition-colors">Contact Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
