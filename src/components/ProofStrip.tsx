import React from "react";
import { GraduationCap, Heart, Shield, Landmark, Eye, HelpCircle, Sparkles, Terminal, Award } from "lucide-react";

export default function ProofStrip() {
  const companies = [
    { name: "Healthkinator", icon: <Heart className="size-3.5 text-primary" /> },
    { name: "Teacher Sathi", icon: <GraduationCap className="size-3.5 text-primary" /> },
    { name: "WeAct", icon: <Shield className="size-3.5 text-primary" /> },
    { name: "KhelClan", icon: <Landmark className="size-3.5 text-primary" /> },
    { name: "FarmIQ", icon: <Eye className="size-3.5 text-primary" /> },
    { name: "CivicSetu", icon: <HelpCircle className="size-3.5 text-primary" /> },
  ];

  // Duplicate list for infinite seamless marquee loop
  const marqueeItems = [...companies, ...companies];

  return (
    <section aria-label="Verified Credentials" className="w-full py-6 border-y border-border-custom bg-card-bg/40 backdrop-blur-md relative overflow-hidden">
      {/* Side Vignette Fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-base to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-base to-transparent pointer-events-none z-10" />

      <div className="w-full flex flex-col items-center gap-4 relative z-0">
        <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted font-bold text-center">
          VERIFIED CREDENTIALS
        </span>

        {/* Marquee Scroller */}
        <div className="w-full overflow-hidden flex items-center">
          <div className="marquee-rail flex items-center gap-3 md:gap-4 px-4">
            {marqueeItems.map((item, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-card-bg border border-border-custom hover:border-primary/50 shadow-sm transition-all duration-200 group cursor-default"
              >
                <div className="size-5 rounded-md bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="font-mono text-xs font-semibold text-text-muted group-hover:text-text-base transition-colors whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
