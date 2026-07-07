import React from "react";
import { agencyServices } from "@/data/content";
import { Check, Cpu, Clock, Tag } from "lucide-react";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10">
        <main className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
              Services
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
              Services & Scope
            </h1>
            <p className="text-sm md:text-base text-text-muted">
              High-performance AI automations, custom software systems, and bespoke design assets built for business growth.
            </p>
          </div>

          {/* 6 Services Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencyServices.map((service) => (
              <div
                key={service.title}
                className="hog-card rounded-[32px] p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-border-custom/30 pb-3">
                    <span className="text-xl md:text-2xl text-primary">⚡</span>
                    <h3 className="font-serif text-lg md:text-xl font-bold text-text-base leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">
                        📦 Scope Deliverables:
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="text-xs text-text-muted flex items-start gap-1.5 leading-snug">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">
                        🚀 Business Benefit:
                      </span>
                      <p className="text-xs text-text-base leading-relaxed">
                        {service.benefits}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border-custom/25 pt-4 mt-6">
                  <div className="flex justify-between items-center font-mono text-xs mb-3">
                    <span className="text-[11px] text-text-muted">⏳ Est. Timeline:</span>
                    <span className="text-text-base font-bold flex items-center gap-1">
                      <Clock className="size-3.5 text-primary" /> {service.timeline}
                    </span>
                  </div>

                  <div className="flex justify-between items-center font-mono text-xs mb-4">
                    <span className="text-[11px] text-text-muted">💰 Pricing Model:</span>
                    <span className="text-text-base font-bold flex items-center gap-0.5">
                      Starting {service.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-2 text-[10px] font-mono font-bold bg-primary hover:bg-primary-hover text-white rounded-xl transition-colors shadow-sm"
                    >
                      Book Session
                    </a>
                    <Link
                      href="/pricing"
                      className="w-full text-center py-2 text-[10px] font-mono font-bold border border-border-custom hover:border-primary hover:text-primary text-text-base rounded-xl transition-colors"
                    >
                      View Packages
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card Section */}
          <div className="hog-card rounded-[28px] p-8 md:p-12 text-center max-w-3xl mx-auto mt-12 w-full">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-4">
              Need a Custom System Built?
            </h3>
            <p className="text-xs md:text-sm text-text-muted mb-6 max-w-md mx-auto">
              Schedule a strategy consult session. We will map out your flow and define exact outcomes.
            </p>
            <a
              href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="hog-btn px-6 py-3 text-xs rounded-xl inline-block"
            >
              Book Strategy Call
            </a>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
