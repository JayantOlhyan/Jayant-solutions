import React from "react";
import { agencyServices } from "@/data/content";
import { Check, Cpu, Clock, Tag } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
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
                {/* Header Lockup */}
                <div className="border-b border-border-custom pb-4 mb-4">
                  <h3 className="font-serif text-xl font-bold text-text-base mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits Banner */}
                <div className="mb-4 bg-emerald-500/5 border border-emerald-500/10 px-3 py-2 rounded-xl text-xs text-emerald-700 dark:text-emerald-500 font-medium">
                  💡 {service.benefits}
                </div>

                {/* Scope Deliverables List */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] uppercase text-text-muted block mb-2">Scope Deliverables:</span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                        <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Details: Timeline, Price, Tech details */}
              <div className="border-t border-border-custom pt-4">
                <div className="flex items-center justify-between text-xs text-text-base mb-3 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="size-3 text-primary" /> {service.timeline}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-primary">
                    <Tag className="size-3" /> Starting {service.price}
                  </span>
                </div>

                {/* Tech Badge details below */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono text-text-muted bg-neutral-100 dark:bg-neutral-900 px-1.5 py-0.5 rounded border border-border-custom/30"
                    >
                      {t}
                    </span>
                  ))}
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
  );
}
