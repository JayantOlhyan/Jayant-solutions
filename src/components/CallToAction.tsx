import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A0E17] p-8 sm:p-12 md:p-16 text-left shadow-2xl">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#FF8A00] font-semibold block mb-3">
            Start a Conversation &bull; JAYANT SYSTEMS
          </span>
          <h2 className="metalab-subheadline text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Have a system to build or a workflow to modernize?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Tell us about your business, your technical requirements, and the problem you want to solve. You will speak directly with founder Jayant Olhyan to scope the right engineering approach.
          </p>
        </div>

        {/* Buttons Action Group */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-end gap-3.5">
          <Link
            href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-7 py-3.5 text-xs font-display font-bold text-white shadow-md transition-all duration-200"
          >
            <span>Book a 15-Min Discovery Call</span>
            <ArrowUpRight className="size-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 hover:bg-white/5 px-7 py-3.5 text-xs font-mono font-semibold text-white transition-all duration-200"
          >
            <span>Send a Written Project Brief</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
