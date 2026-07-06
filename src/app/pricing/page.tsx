import React from "react";
import { packages, industryPackages } from "@/data/content";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
          Pricing
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
          Outcome Packages
        </h1>
        <p className="text-sm md:text-base text-text-muted">
          Transparent, upfront pricing models built for scale. No surprise hourly invoices.
        </p>
      </div>

      {/* Main Core Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`glass-card rounded-[28px] border p-6 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
              pkg.isPopular ? "border-primary shadow-lg shadow-primary/5" : "border-border-custom"
            }`}
          >
            {pkg.isPopular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest uppercase text-white bg-primary px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <div>
              <span className="font-mono text-xs text-text-muted">{pkg.tagline}</span>
              <h3 className="font-serif text-2xl font-bold text-text-base mt-2 mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 my-4">
                <span className="text-3xl md:text-4xl font-bold text-text-base">{pkg.price}</span>
                <span className="text-xs text-text-muted">starting price</span>
              </div>
              <ul className="space-y-3 border-t border-border-custom pt-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-text-muted flex items-start gap-2">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4">
              <Link
                href="/contact"
                className={`w-full py-2.5 rounded-full text-xs md:text-sm font-semibold inline-flex justify-center items-center gap-1.5 transition-all duration-200 ${
                  pkg.isPopular
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "bg-white/5 text-text-base hover:bg-white/10 border border-border-custom"
                }`}
              >
                Choose Package <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Special Industry Packages */}
      <div className="mb-20">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-base text-center mb-10">
          Special Industry Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industryPackages.map((indPkg) => (
            <div key={indPkg.title} className="glass-card rounded-3xl border border-border-custom p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-text-base mb-2">{indPkg.title}</h3>
                <p className="text-xs md:text-sm text-text-muted mb-4">{indPkg.desc}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border-custom pt-4 mt-4">
                <span className="text-xs font-mono uppercase text-primary tracking-wider">{indPkg.price}</span>
                <Link href="/contact" className="text-xs font-semibold text-text-base hover:text-primary flex items-center gap-1 transition-colors">
                  Inquire <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee Panel */}
      <div className="glass-card rounded-[28px] border border-border-custom p-8 md:p-10 flex flex-col md:flex-row gap-6 items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
            <ShieldCheck className="size-8" />
          </div>
          <div>
            <h4 className="font-serif text-lg md:text-xl font-bold text-text-base">Our Quality Guarantee</h4>
            <p className="text-xs md:text-sm text-text-muted">
              We stand fully behind our builds. Zero templates, custom high-performance code, and 30 days support.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-full bg-white/5 border border-border-custom hover:bg-white/10 px-5 py-2.5 text-xs md:text-sm font-semibold text-text-base transition-all"
        >
          Have questions? Ask us
        </Link>
      </div>
    </section>
  );
}
