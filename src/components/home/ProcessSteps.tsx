import Container from "./Container";

interface ProcessStep {
  step: string;
  name: string;
  desc: string;
  deliverables: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    name: "Discovery & Alignment",
    desc: "We discuss your business requirements, user needs, integrations, and technical constraints to confirm feasibility and architectural approach.",
    deliverables: "Requirements summary · Technical consultation",
  },
  {
    step: "02",
    name: "Written Scope & Milestones",
    desc: "You receive a fixed-price proposal detailing milestones, specific deliverables, and acceptance criteria before any code is written.",
    deliverables: "Scope specification · Milestone roadmap · Fixed pricing",
  },
  {
    step: "03",
    name: "Direct Build & Staging Demos",
    desc: "Development proceeds with direct engineer communication. You get private staging preview links to test features as milestones complete.",
    deliverables: "Private staging link · Weekly milestone demos",
  },
  {
    step: "04",
    name: "Production Launch & Handover",
    desc: "Final deployment to your cloud environment, domain and DNS configuration, followed by 100% source code transfer and setup guides.",
    deliverables: "Production deployment · Full source code ownership · Documentation",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-24 bg-neutral-950 py-16 md:py-24 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-2">
              Process
            </span>
            <h2 id="process-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em]">
              How a project runs
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-neutral-400">
              Four structured phases from initial consultation to final source code handover. You see working software early and communicate directly with the engineer writing your code.
            </p>
          </div>
          <ol className="md:col-span-8 grid gap-px overflow-hidden rounded-[10px] bg-white/10 sm:grid-cols-2">
            {processSteps.map((s) => (
              <li key={s.step} className="flex flex-col gap-3 bg-neutral-950 p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs font-semibold text-neutral-500">{s.step}</span>
                </div>
                <h3 className="text-lg font-medium tracking-[-0.015em] text-white">{s.name}</h3>
                <p className="text-[14px] leading-relaxed text-neutral-400">{s.desc}</p>
                <div className="mt-auto pt-3 border-t border-neutral-800">
                  <span className="text-xs font-mono text-neutral-400 block">{s.deliverables}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
