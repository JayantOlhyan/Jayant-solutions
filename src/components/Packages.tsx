"use client";

import React from "react";
import { packages } from "../data/content";
import { Check, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            pricing & offers
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-base mb-4 mt-2">
            Transparent pricing. Predictable scopes.
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            Choose the level of engagement that fits your requirements and budget.
          </p>
        </div>

        {/* 3-Column Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const isHighlighted = pkg.isPopular || pkg.featured;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className={`hog-card rounded-[32px] p-7 md:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isHighlighted
                    ? "border-primary/90 bg-card-bg shadow-[0_12px_40px_rgba(255,138,0,0.12)] dark:shadow-[0_12px_40px_rgba(255,138,0,0.18)]"
                    : "border-border-custom bg-card-bg/80 backdrop-blur-md"
                }`}
              >
                {/* Highlight Tag */}
                {pkg.isPopular && (
                  <span className="absolute -top-3 left-6 font-mono text-[9px] tracking-widest uppercase text-white bg-primary px-3 py-1 rounded-full flex items-center gap-1.5 font-bold shadow-md shadow-primary/30">
                    <Star className="size-2.5 fill-white" /> Popular
                  </span>
                )}
                {pkg.featured && (
                  <span className="absolute -top-3 left-6 font-mono text-[9px] tracking-widest uppercase text-white bg-primary px-3 py-1 rounded-full flex items-center gap-1.5 font-bold shadow-md shadow-primary/30">
                    🔥 Featured
                  </span>
                )}

                <div>
                  <div className="border-b border-border-custom/80 pb-5 mb-5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1 font-semibold">
                      Ideal for: {pkg.idealFor}
                    </span>
                    <h3 className="font-sans text-2xl md:text-3xl font-bold text-text-base mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed min-h-[36px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1.5 my-5">
                    <span className="text-3xl md:text-4xl font-extrabold text-text-base tracking-tight">{pkg.price}</span>
                    <span className="text-xs text-text-muted font-mono">starting price</span>
                  </div>

                  {/* Scope items */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] uppercase text-text-muted block mb-3 font-bold tracking-wider">Deliverables:</span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-text-muted flex items-start gap-2.5">
                          <div className="size-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="size-2.5 text-primary" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline and addons */}
                  <div className="mb-6 border-t border-border-custom/40 pt-4">
                    <div className="flex items-center gap-1.5 text-xs text-text-base font-mono mb-3 font-semibold">
                      <Clock className="size-3.5 text-primary" /> Delivery: {pkg.timeline}
                    </div>
                    <span className="font-mono text-[10px] uppercase text-text-muted block mb-2 font-bold tracking-wider">Optional Add-ons:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.addons.map((add) => (
                        <span
                          key={add}
                          className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 border border-border-custom/40 px-2 py-0.5 rounded-md"
                        >
                          +{add}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border-custom/60">
                  <a
                    href={`https://cal.com/jayant-web-and-ai-systems/strategy-call?notes=${encodeURIComponent("Interested in " + pkg.name + " package")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Choose ${pkg.name} package`}
                    className={`w-full text-center py-3 text-xs font-mono font-bold rounded-xl transition-all block active:scale-[0.98] ${
                      isHighlighted
                        ? "bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/25"
                        : "bg-card-bg text-text-base border border-border-custom hover:border-primary/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 shadow-sm"
                    }`}
                  >
                    Select {pkg.name} Package
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link to Full Pricing & Comparison Table */}
        <div className="text-center mt-12">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-custom bg-card-bg hover:border-primary/40 text-xs font-mono font-bold text-text-base transition-all shadow-sm"
          >
            <span>Compare full package matrix & enterprise scopes</span>
            <span className="text-primary">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
