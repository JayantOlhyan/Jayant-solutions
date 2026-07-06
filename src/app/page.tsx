import React from "react";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ProblemSolver from "@/components/ProblemSolver";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { USP } from "@/data/content";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-6 pt-16 flex flex-col gap-20 overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Credibility Proof Strip */}
        <ProofStrip />

        {/* Dynamic / Interactive Problem Solver */}
        <ProblemSolver />

        {/* Unique Selling Proposition Highlight Panel */}
        <div className="glass-card rounded-[28px] border border-border-custom p-8 md:p-12 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Our USP</span>
          <p className="font-serif text-xl md:text-2xl font-bold text-text-base leading-snug">
            &ldquo;{USP}&rdquo;
          </p>
        </div>

        {/* Quick Route Shortcuts to New Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card rounded-3xl border border-border-custom p-6 flex flex-col justify-between items-start">
            <div>
              <h3 className="font-serif text-xl font-bold text-text-base mb-2">Our Capabilities</h3>
              <p className="text-xs md:text-sm text-text-muted mb-4">
                Explore our full list of services including WhatsApp automations, custom CRM pipelines, and intelligent chatbots.
              </p>
            </div>
            <Link href="/services" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
              Explore Services <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="glass-card rounded-3xl border border-border-custom p-6 flex flex-col justify-between items-start">
            <div>
              <h3 className="font-serif text-xl font-bold text-text-base mb-2">Outcome Packages</h3>
              <p className="text-xs md:text-sm text-text-muted mb-4">
                We believe in packaging outcomes, not billing hourly. Review our starting pricing packages.
              </p>
            </div>
            <Link href="/pricing" className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
              View Pricing Tiers <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        {/* FAQ Segment */}
        <FAQ />
      </main>
    </>
  );
}
