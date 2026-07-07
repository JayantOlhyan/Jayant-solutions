import React from "react";
import { CheckCircle, Award, GraduationCap, Code } from "lucide-react";

export default function ProofStrip() {
  const credentials = [
    { label: "14+ Projects Shipped", icon: CheckCircle },
    { label: "33 Hackathons Selected", icon: Award },
    { label: "10+ Universities (IITs)", icon: GraduationCap },
    { label: "50+ Open Source Commits", icon: Code },
  ];

  return (
    <section className="w-full border-y border-border-custom py-6 bg-card-bg/20 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-8 text-center">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 text-text-muted hover:text-text-base transition-colors duration-300"
              >
                <Icon className="size-4 text-primary opacity-80" />
                <span className="font-mono text-[11px] md:text-xs tracking-wider uppercase">
                  {cred.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
