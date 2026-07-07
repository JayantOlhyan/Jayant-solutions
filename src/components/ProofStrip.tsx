import React from "react";
import { CheckCircle, Award, Shield, Layers } from "lucide-react";

export default function ProofStrip() {
  const credentials = [
    { label: "14+ Projects", icon: CheckCircle },
    { label: "33 Hackathons", icon: Award },
    { label: "5+ Industries", icon: Layers },
    { label: "100% Custom Development", icon: Shield }
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
                className="flex items-center gap-2.5 text-text-muted hover:text-text-base transition-colors duration-300 animate-pulse"
              >
                <Icon className="size-4 text-primary opacity-80" />
                <span className="font-mono text-[11px] md:text-xs tracking-wider uppercase font-bold">
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
