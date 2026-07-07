import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 aspect-[4/5] max-w-[320px] rounded-3xl relative overflow-hidden flex flex-col justify-center items-center shadow-lg border-2 border-border-custom">
            <img
              src="/jayant.jpg"
              alt="Jayant Olhyan"
              className="absolute inset-0 w-full h-full object-cover"
            />
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
                Background: B.Tech Computer Science (MSIT Delhi) & IIT Guwahati student credentials • 35+ Professional Certifications • 33 Hackathon selections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
