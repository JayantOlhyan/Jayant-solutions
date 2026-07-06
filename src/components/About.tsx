import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column: Visual Profile Placeholder */}
          <div className="w-full md:w-2/5 aspect-[4/5] max-w-[320px] rounded-3xl relative overflow-hidden glass-card flex flex-col justify-center items-center shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-80" />
            
            {/* Monogram Silhouette (Sleek Fallback) */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="size-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-3xl font-serif font-bold">
                JO
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted mt-2">
                Jayant Olhyan
              </span>
              <span className="font-sans text-[11px] text-text-muted">
                MSIT CSE & IIT Guwahati AI Student
              </span>
            </div>
          </div>

          {/* Right Column: Founder Copy */}
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start text-left">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary mb-2">
              Who is speaking
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-6">
              Hi, I&apos;m Jayant.
            </h2>
            
            <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed">
              <p>
                I&apos;m a Computer Science student at MSIT, New Delhi, building websites, AI automation systems, and digital products for businesses.
              </p>
              <p>
                I work directly with every client—from discovery to launch—to ensure clear communication and high-quality execution.
              </p>
              <p className="border-l-2 border-primary/40 pl-4 italic text-text-base">
                For specialized requirements outside my expertise, I collaborate with trusted professionals while remaining your single point of contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
