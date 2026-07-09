import React from "react";
import { GraduationCap, Heart, Shield, Landmark, Eye, HelpCircle } from "lucide-react";

export default function ProofStrip() {
  const companies = [
    { name: "Healthkinator", icon: <Heart className="size-4 text-primary/80" /> },
    { name: "Teacher Sathi", icon: <GraduationCap className="size-4 text-primary/80" /> },
    { name: "WeAct", icon: <Shield className="size-4 text-primary/80" /> },
    { name: "KhelClan", icon: <Landmark className="size-4 text-primary/80" /> },
    { name: "FarmIQ", icon: <Eye className="size-4 text-primary/80" /> },
    { name: "CivicSetu", icon: <HelpCircle className="size-4 text-primary/80" /> },
  ];

  return (
    <section className="w-full py-8 border-y border-border-custom bg-card-bg/20 backdrop-blur-sm">
      <div className="w-full flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted font-bold text-center">
          TRUSTED BY INNOVATIVE COMPANIES
        </span>
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 md:gap-x-12 px-6">
          {companies.map((company, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-text-muted hover:text-text-base transition-colors duration-300"
            >
              {company.icon}
              <span className="font-serif text-sm font-bold tracking-tight">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
