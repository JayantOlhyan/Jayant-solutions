"use client";

import React from "react";
import { packages } from "../data/content";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Packages() {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="packages" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
            Pricing & Offers
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Clear, Predictable Pricing
          </h2>
          <p className="text-sm md:text-base text-text-muted">
            No endless hourly billing. Choose the package that aligns with your current business goals.
          </p>
        </div>

        {/* 3-Column Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-[24px] p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                pkg.isPopular
                  ? "border-primary/40 shadow-md shadow-primary/5 ring-1 ring-primary/20 md:-translate-y-2 scale-[1.02]"
                  : "border-border-custom hover:border-text-muted/30"
              }`}
            >
              {/* Highlight Tag */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] tracking-wider uppercase font-semibold px-4 py-1.5 rounded-bl-[16px]">
                  Most Popular
                </div>
              )}

              <div>
                {/* Name */}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-text-base mb-1">
                  {pkg.name}
                </h3>
                {/* Tagline */}
                <p className="text-xs text-text-muted mb-6 leading-normal min-h-[32px]">
                  {pkg.tagline}
                </p>

                {/* Price Anchor */}
                <div className="flex items-baseline gap-1 mb-8 border-b border-border-custom pb-6">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-text-base">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-text-muted">starting rate</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-base">
                      <Check className="size-4.5 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Call to Action */}
              <button
                onClick={handleScrollToContact}
                className={`w-full text-center py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  pkg.isPopular
                    ? "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow active:scale-[0.98]"
                    : "border border-border-custom text-text-base hover:bg-card-bg hover:border-text-muted active:scale-[0.98]"
                }`}
              >
                Choose {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
