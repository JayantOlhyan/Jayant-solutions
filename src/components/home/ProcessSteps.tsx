import { devProcessSteps } from "@/data/content";
import Container from "./Container";

export default function ProcessSteps() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-24 bg-neutral-950 py-16 md:py-24 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="process-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em]">
              How a project runs
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-neutral-400">
              Milestone-based, with a live preview link from the first week. You see progress, not status reports.
            </p>
          </div>
          <ol className="md:col-span-8 grid gap-px overflow-hidden rounded-[10px] bg-white/10 sm:grid-cols-2">
            {devProcessSteps.map((s) => (
              <li key={s.step} className="flex flex-col gap-3 bg-neutral-950 p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm text-neutral-500">{s.step}</span>
                  <span className="text-sm text-neutral-400">{s.timeline}</span>
                </div>
                <h3 className="text-lg font-medium tracking-[-0.015em]">{s.name}</h3>
                <p className="text-[15px] leading-relaxed text-neutral-400">{s.desc}</p>
                <p className="mt-auto pt-2 text-sm text-neutral-500">{s.deliverables.join(" · ")}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
