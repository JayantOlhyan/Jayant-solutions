import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 aspect-[4/5] max-w-[320px] rounded-3xl relative overflow-hidden flex flex-col justify-center items-center shadow-lg border-2 border-border-custom">
            <Image
              src="/jayant.webp"
              alt="Jayant Olhyan - Founder of Jayant Web & AI Systems"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>

          {/* Right Column: Founder Copy */}
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start text-left">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-primary mb-2">
              Founder's Note
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-6">
              My Philosophy
            </h2>
            
            <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed">
              <p className="text-text-base font-semibold">
                I believe great software should solve real problems, not just showcase technology. Every product we build is designed with scalability, usability, and long-term value in mind.
              </p>
              <p>
                Whether it is streamlining customer bookings, automating repetitive daily tracking spreadsheets, or launching custom client portals, I translate your manual bottlenecks into automated software outcomes.
              </p>
              <p>
                Jayant Web & AI Systems is founded and led by me. For larger engagements, we collaborate with trusted specialists across design, backend engineering, and cloud infrastructure, ensuring you receive robust delivery while retaining a single point of communication.
              </p>
              <p className="text-xs text-text-muted border-t border-border-custom pt-3 font-mono">
                Background: B.Tech Computer Science (MSIT Delhi) • Participated in hackathons hosted by IITs and leading universities • 33 Hackathon selections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
