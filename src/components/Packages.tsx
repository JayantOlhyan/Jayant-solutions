"use client";

import React from "react";
import { packages } from "../data/content";
import { Check, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 relative">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Pricing & Offers
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Outcome-Based Packages
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            No endless hourly billing. Choose the package that aligns with your current business goals.
          </p>
        </div>

        {/* 6-Column Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`hog-card rounded-[32px] p-6 md:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.isPopular || pkg.featured ? "border-primary" : "border-border-custom"
              }`}
            >
              {/* Highlight Tag */}
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
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-normal min-h-[32px]">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-3xl font-bold text-text-base">{pkg.price}</span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
