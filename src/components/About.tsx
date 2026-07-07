import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Column: Visual Profile Placeholder */}
          <div className="w-full md:w-2/5 aspect-[4/5] max-w-[320px] rounded-3xl relative overflow-hidden glass-card flex flex-col justify-center items-center shadow-lg border-2 border-border-custom">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-80" />
            
            {/* Monogram Silhouette (Sleek Fallback) */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="size-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-3xl font-serif font-bold">
                JO
              </div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted mt-2">
                Jayant Olhyan
              </span>
              <span className="font-sans text-[11px] text-text-muted text-center px-4">
                Founder, Jayant&apos;s Studio
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
              <p className="text-text-base font-semibold">
                I help businesses build websites and AI systems that solve real operational problems.
              </p>
              <p>
                Whether it is streamlining customer bookings, automating repetitive daily tracking spreadsheets, or launching custom client portals, I translate your manual bottlenecks into automated software outcomes.
              </p>
              <p>
                I work with a trusted network of specialists when projects require additional custom expertise, ensuring you receive robust delivery while retaining a single point of communication.
              </p>
              <p className="text-xs text-text-muted border-t border-border-custom pt-3 font-mono">
                Background: B.Tech Computer Science (MSIT Delhi) & IIT Guwahati student credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
