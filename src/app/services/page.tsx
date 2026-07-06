import React from "react";
import { aiServices, webDevelopmentServices } from "@/data/content";
import { Check, Cpu, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
          Services
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
          What We Build
        </h1>
        <p className="text-sm md:text-base text-text-muted">
          High-performance AI automations and bespoke custom websites built to yield measurable business outcomes.
        </p>
      </div>

      {/* AI Automation Suite */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <Cpu className="size-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary">Intelligence</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-base">AI Automation Suite</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiServices.map((service) => (
            <div key={service.title} className="glass-card rounded-3xl border border-border-custom p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-text-base mb-2">{service.title}</h3>
                <p className="text-xs md:text-sm text-text-muted mb-4">{service.description}</p>
              </div>
              <ul className="space-y-2 border-t border-border-custom pt-4">
                {service.points.map((pt, i) => (
                  <li key={i} className="text-xs text-text-muted flex items-start gap-2">
                    <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Web Development & Custom Systems */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <Terminal className="size-6" />
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-primary">Development</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-base">Websites & Custom Systems</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webDevelopmentServices.map((service) => (
            <div key={service.title} className="glass-card rounded-[28px] border border-border-custom p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-text-base mb-3">{service.title}</h3>
                <p className="text-xs md:text-sm text-text-muted mb-6">{service.description}</p>
              </div>
              <ul className="space-y-3 border-t border-border-custom pt-6">
                {service.points.map((pt, i) => (
                  <li key={i} className="text-xs md:text-sm text-text-muted flex items-start gap-2.5">
                    <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-card rounded-[28px] border border-border-custom p-8 md:p-12 text-center max-w-3xl mx-auto mt-20">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-4">
          Need a Custom System Built?
        </h3>
        <p className="text-xs md:text-sm text-text-muted mb-6 max-w-md mx-auto">
          Schedule a strategy consult session. We will map out your flow and define exact outcomes.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200"
        >
          Book Consultation <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
