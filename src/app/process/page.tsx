import React from "react";
import { devProcessSteps } from "@/data/content";
import { Check, Clock, Calendar } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function ProcessPage() {
  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10">
        <main className="max-w-4xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            Process
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Our Development Process
          </h1>
          <p className="text-sm md:text-base text-text-muted">
            A transparent, 6-step engineering methodology that takes your digital product from concept to production.
          </p>
        </div>

        {/* 6 Steps Timeline Vertical Flow */}
        <div className="relative border-l-2 border-border-custom ml-4 md:ml-6 pl-6 md:pl-10 space-y-12 max-w-2xl mx-auto w-full">
          {devProcessSteps.map((step) => (
            <div key={step.step} className="relative">
              {/* Outer circle indicator */}
              <div className="absolute -left-[43px] md:-left-[59px] top-1.5 bg-background-base border-2 border-border-custom size-10 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-sm font-mono font-bold text-primary">{step.step}</span>
              </div>

              {/* Step Card block */}
              <div className="hog-card rounded-[28px] p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-3 border-b border-border-custom/30 pb-3">
                  <span className="text-xl md:text-2xl">{step.icon}</span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-text-base">
                    {step.name}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Sub-details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-custom/25 pt-4">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1.5">
                      ⏳ Phase Timeline:
                    </span>
                    <span className="text-xs text-text-base font-mono flex items-center gap-1">
                      <Clock className="size-3 text-primary" /> {step.timeline}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1.5">
                      📦 Deliverables:
                    </span>
                    <ul className="space-y-1">
                      {step.deliverables.map((item) => (
                        <li key={item} className="text-xs text-text-muted flex items-start gap-1">
                          <Check className="size-3 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA booking section */}
        <div className="hog-card rounded-[28px] p-8 md:p-12 text-center max-w-3xl mx-auto mt-6 w-full">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base mb-4">
            Ready to Scope Your Project?
          </h3>
          <p className="text-xs md:text-sm text-text-muted mb-6 max-w-md mx-auto">
            Book a strategy consultation. We will detail requirements, timeline bounds, and provide a transparent proposal.
          </p>
          <a
            href="https://cal.com/jayant-web-and-ai-systems/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="hog-btn px-6 py-3 text-xs rounded-xl inline-block"
          >
            Schedule Strategy Call
          </a>
        </div>
      </main>
    </div>
  </PageTransition>
  );
}
