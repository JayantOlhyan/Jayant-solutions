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
    <div className="hog-grid min-h-screen pb-16">
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-6 pt-16 flex flex-col gap-20 overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Credibility Proof Strip */}
        <div className="border-y-2 border-border-custom py-6 bg-card-bg/60">
          <ProofStrip />
        </div>

        {/* Dynamic / Interactive Problem Solver */}
        <div className="border-2 border-border-custom rounded-[32px] p-6 bg-card-bg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <ProblemSolver />
        </div>

        {/* Unique Selling Proposition Highlight Panel */}
        <div className="hog-card rounded-[28px] p-8 md:p-12 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Our USP</span>
          <p className="font-serif text-xl md:text-2xl font-bold text-text-base leading-snug">
            &ldquo;{USP}&rdquo;
          </p>
        </div>

        {/* Quick Route Shortcuts to New Pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hog-card rounded-3xl p-6 flex flex-col justify-between items-start">
            <div>
              <span className="font-mono text-[9px] bg-primary/20 text-primary border border-primary/30 px-2.5 py-0.5 rounded">Capabilities</span>
              <h3 className="font-serif text-2xl font-bold text-text-base mt-3 mb-2">Our Capabilities</h3>
              <p className="text-xs md:text-sm text-text-muted mb-4 font-mono">
                Explore our full list of services including WhatsApp automations, custom CRM pipelines, and intelligent chatbots.
              </p>
            </div>
            <Link href="/services" className="text-xs font-mono font-bold text-primary flex items-center gap-1 hover:underline">
              Explore Services <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="hog-card rounded-3xl p-6 flex flex-col justify-between items-start">
            <div>
              <span className="font-mono text-[9px] bg-primary/20 text-primary border border-primary/30 px-2.5 py-0.5 rounded">Pricing</span>
              <h3 className="font-serif text-2xl font-bold text-text-base mt-3 mb-2">Outcome Packages</h3>
              <p className="text-xs md:text-sm text-text-muted mb-4 font-mono">
                We believe in packaging outcomes, not billing hourly. Review our starting pricing packages.
              </p>
            </div>
            <Link href="/pricing" className="text-xs font-mono font-bold text-primary flex items-center gap-1 hover:underline">
              View Pricing Tiers <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        {/* FAQ Segment */}
        <div className="border-2 border-border-custom rounded-[32px] p-6 bg-card-bg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <FAQ />
        </div>
      </main>
    </div>
  );
}
