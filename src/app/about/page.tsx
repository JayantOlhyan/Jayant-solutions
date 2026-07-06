import React from "react";
import { coreValues, MISSION, VISION, USP } from "@/data/content";
import { Check } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="py-20 md:py-28 max-w-4xl mx-auto px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
          About Us
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
          Mission & Vision
        </h1>
        <p className="text-sm md:text-base text-text-muted">
          We help Indian businesses build high-converting digital solutions and deploy AI infrastructure.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="glass-card rounded-[28px] border border-border-custom p-8 flex flex-col gap-4">
          <span className="font-mono text-xs tracking-widest uppercase text-primary">Our Mission</span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base">{MISSION}</h3>
          <p className="text-sm text-text-muted">
            We aim to empower small and medium enterprises in India by integrating intelligent automations into their operational workflows.
          </p>
        </div>

        <div className="glass-card rounded-[28px] border border-border-custom p-8 flex flex-col gap-4">
          <span className="font-mono text-xs tracking-widest uppercase text-primary">Our Vision</span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-base">{VISION}</h3>
          <p className="text-sm text-text-muted">
            Becoming the standard of trust, quality, and quick turnaround execution for AI agent deployment and modern Web development.
          </p>
        </div>
      </div>

      {/* Core USP */}
      <div className="glass-card rounded-[28px] border border-border-custom p-8 md:p-12 mb-16 text-center max-w-3xl mx-auto">
        <span className="font-mono text-xs tracking-widest uppercase text-primary mb-2 block">Our Core USP</span>
        <p className="font-serif text-xl md:text-2xl font-semibold text-text-base">
          &ldquo;{USP}&rdquo;
        </p>
      </div>

      {/* Core Values Section */}
      <div className="mb-16">
        <h2 className="font-serif text-3xl font-bold text-text-base text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coreValues.map((val) => (
            <div key={val.name} className="glass-card rounded-2xl border border-border-custom p-6 flex flex-col gap-2">
              <h4 className="font-bold text-text-base flex items-center gap-2">
                <Check className="size-4 text-primary" /> {val.name}
              </h4>
              <p className="text-xs md:text-sm text-text-muted">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
