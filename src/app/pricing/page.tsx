import React from "react";
import { packages, recommendedAddons } from "@/data/content";
import { Check, ShieldCheck, Clock, Layers, Star } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            Pricing
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Outcome Packages
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            Predictable flat-fee pricing options aligned directly with your business goals.
          </p>
        </div>

        {/* 6 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`hog-card rounded-[32px] p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.isPopular || pkg.featured ? "border-primary" : "border-border-custom"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3 left-6 font-mono text-[9px] tracking-widest uppercase text-white bg-primary px-3 py-0.5 rounded-full flex items-center gap-1 font-bold">
                  <Star className="size-2.5 fill-white" /> Popular
                </span>
              )}
              {pkg.featured && (
                <span className="absolute -top-3 left-6 font-mono text-[9px] tracking-widest uppercase text-white bg-primary px-3 py-0.5 rounded-full flex items-center gap-1 font-bold">
                  🔥 Featured
                </span>
              )}

              <div>
                <div className="border-b border-border-custom pb-4 mb-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">
                    Ideal for: {pkg.idealFor}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-text-base mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl md:text-4xl font-bold text-text-base">{pkg.price}</span>
                  <span className="text-xs text-text-muted">starting price</span>
                </div>

                {/* Scope items */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] uppercase text-text-muted block mb-2">Deliverables:</span>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                        <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline and addons */}
                <div className="mb-6 border-t border-border-custom/30 pt-4">
                  <div className="flex items-center gap-1 text-xs text-text-base font-mono mb-2">
                    <Clock className="size-3 text-primary" /> Delivery: {pkg.timeline}
                  </div>
                  <span className="font-mono text-[10px] uppercase text-text-muted block mb-1.5">Optional Add-ons:</span>
                  <div className="flex flex-wrap gap-1">
                    {pkg.addons.map((add) => (
                      <span
                        key={add}
                        className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 border border-border-custom/20 px-1.5 py-0.5 rounded"
                      >
                        +{add}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border-custom">
                <a
                  href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-mono font-bold rounded-xl bg-background-base text-text-base border-2 border-border-custom hover:border-primary transition-colors block"
                >
                  Choose Package
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Add-ons segment */}
        <div className="hog-card rounded-[32px] p-6 md:p-8 bg-card-bg mt-8">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Optional Upgrades</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-6">Recommended Add-ons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {recommendedAddons.map((addon) => (
              <div
                key={addon}
                className="border border-border-custom/40 p-3 rounded-2xl text-center bg-background-base text-xs font-mono font-bold hover:border-primary transition-colors flex items-center justify-center"
              >
                {addon}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Guarantee Panel */}
        <div className="hog-card rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center justify-between max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 shrink-0">
              <ShieldCheck className="size-8" />
            </div>
            <div>
              <h4 className="font-serif text-lg md:text-xl font-bold text-text-base">Our Quality Guarantee</h4>
              <p className="text-xs md:text-sm text-text-muted">
                We stand fully behind our builds. Zero templates, custom high-performance code, and 30 days support.
              </p>
            </div>
          </div>
          <a
            href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-white/5 border-2 border-border-custom hover:bg-white/10 px-5 py-2.5 text-xs font-mono font-bold text-text-base transition-all"
          >
            Have questions? Ask us
          </a>
        </div>
      </main>
    </div>
  );
}
