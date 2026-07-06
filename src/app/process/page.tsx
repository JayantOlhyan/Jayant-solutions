import React from "react";
import { funnelSteps, clientJourneyDays } from "@/data/content";
import { ArrowDown, Briefcase, Zap } from "lucide-react";

export default function ProcessPage() {
  return (
    <section className="py-20 md:py-28 max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
          Process
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
          How We Work
        </h1>
        <p className="text-sm md:text-base text-text-muted">
          Our standard operating procedure from initial outreach to system launch and retainer upsells.
        </p>
      </div>

      {/* Sales Funnel Pipeline */}
      <div className="mb-24">
        <div className="flex items-center gap-2.5 mb-8 justify-center">
          <Zap className="size-5 text-primary" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-base">Sales Funnel Pipeline</h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {funnelSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full glass-card rounded-2xl border border-border-custom p-5 flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  Stage {idx + 1}
                </span>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="font-bold text-text-base text-sm md:text-base">{step.stage}</h4>
                  <p className="text-xs text-text-muted">{step.desc}</p>
                </div>
              </div>
              {idx < funnelSteps.length - 1 && (
                <ArrowDown className="size-5 text-text-muted/40 my-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Client Onboarding Journey */}
      <div className="mb-16">
        <div className="flex items-center gap-2.5 mb-10 justify-center">
          <Briefcase className="size-5 text-primary" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-base">Client Onboarding Journey</h2>
        </div>

        <div className="relative border-l border-border-custom ml-4 md:ml-6 pl-6 space-y-10 max-w-2xl mx-auto">
          {clientJourneyDays.map((journey) => (
            <div key={journey.day} className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] top-1 bg-background-base border border-border-custom size-4 rounded-full flex items-center justify-center">
                <div className="size-2 rounded-full bg-primary" />
              </div>
              <div>
                <span className="font-mono text-xs text-primary font-semibold">{journey.day}</span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-text-base mt-1 mb-2">
                  {journey.title}
                </h3>
                <p className="text-xs md:text-sm text-text-muted">{journey.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
