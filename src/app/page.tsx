import React from "react";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ProblemSolver from "@/components/ProblemSolver";
import CaseStudies from "@/components/CaseStudies";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, Check } from "lucide-react";
import { USP, whyWorkWithMe, projectInclusions, frequentlyBuilt } from "@/data/content";

export default function Home() {
  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-16 md:pb-28">
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 flex flex-col gap-16 md:gap-28 overflow-x-hidden">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Logos / Credentials Proof Strip */}
          <div className="border-y border-border-custom/50 py-6 bg-card-bg/60">
            <ProofStrip />
          </div>

          {/* Why Work With Me Section (B2B Trust Builder) */}
          <div className="border border-border-custom rounded-3xl p-6 sm:p-8 md:p-10 bg-card-bg shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Value Partner</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-text-base mb-8">Why Businesses Choose Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyWorkWithMe.map((item, idx) => (
                <div key={idx} className="border border-border-custom p-5 rounded-2xl bg-background-base/50">
                  <h4 className="font-bold text-text-base text-sm md:text-base flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-text-muted mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Built Solutions Section */}
          <div className="border border-border-custom rounded-3xl p-6 sm:p-8 md:p-10 bg-card-bg shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Our Scope</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-text-base mb-8">Frequently Shipped Solutions</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {frequentlyBuilt.map((item, idx) => (
                <div key={idx} className="border border-border-custom p-4 rounded-xl text-center bg-background-base/50 flex items-center justify-center font-mono text-xs font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Problems We Solve (Interactive Bottleneck / Solution Selector) */}
          <div className="border border-border-custom rounded-3xl p-6 sm:p-8 md:p-10 bg-card-bg shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <ProblemSolver />
          </div>

          {/* 4. Unique Selling Proposition Highlight Panel */}
          <div className="hog-card rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto w-full">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Our USP</span>
            <p className="font-serif text-xl md:text-2xl font-bold text-text-base leading-snug">
              &ldquo;{USP}&rdquo;
            </p>
          </div>

          {/* 5. Case Studies */}
          <div className="border-t border-border-custom/50 pt-8">
            <CaseStudies />
          </div>

          {/* 6. Pricing Packages */}
          <div>
            <Packages />
            
            {/* Risk Reversal Checklist under Packages */}
            <div className="mt-12 border border-border-custom rounded-3xl p-6 md:p-8 bg-card-bg shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-w-3xl mx-auto">
              <h4 className="font-serif text-lg md:text-xl font-bold text-text-base mb-4 text-center">Every Automated Project Includes:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectInclusions.map((inclusion, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs md:text-sm text-text-muted">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Capabilities Shortcuts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="hog-card rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start gap-4">
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

            <div className="hog-card rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start gap-4">
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

          {/* 7. Stepper Process Timeline */}
          <Process />

          {/* 8. About the Founder */}
          <About />

          {/* 9. FAQ Segment */}
          <div className="border border-border-custom rounded-3xl p-6 sm:p-8 md:p-10 bg-card-bg shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <FAQ />
          </div>

          {/* Call to Action (CTA) block */}
          <CallToAction />

          {/* 10. Contact / Scheduler Audit Hook */}
          <div className="border-t border-border-custom/50 pt-8">
            <Contact />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
