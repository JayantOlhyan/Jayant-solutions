import React from "react";
import { GraduationCap, Trophy, Code, Laptop, Cpu } from "lucide-react";

export default function ProofStrip() {
  const credentials = [
    { text: "12+ Projects Shipped", icon: <Laptop className="size-4 text-primary/80" /> },
    { text: "Hackathon Finalist (ET GenAI Hackathon 2025)", icon: <Trophy className="size-4 text-primary/80" /> },
    { text: "MSIT Delhi (B.Tech CSE)", icon: <GraduationCap className="size-4 text-primary/80" /> },
    { text: "IIT Guwahati (B.Sc. Data Science & AI)", icon: <Cpu className="size-4 text-primary/80" /> },
    { text: "Open Source Contributor", icon: <Code className="size-4 text-primary/80" /> },
  ];

  return (
    <section className="w-full py-8 border-y border-border-custom bg-card-bg/20 backdrop-blur-sm">
      <div className="w-full flex flex-col items-center gap-4">
        <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted font-bold text-center">
          VERIFIED CREDENTIALS
        </span>
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 md:gap-x-12 px-6">
          {credentials.map((cred, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-text-muted hover:text-text-base transition-colors duration-300"
            >
              {cred.icon}
              <span className="font-serif text-sm font-bold tracking-tight">
                {cred.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
