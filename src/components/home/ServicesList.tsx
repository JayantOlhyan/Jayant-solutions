import { Plus } from "lucide-react";
import { agencyServices } from "@/data/content";
import Container from "./Container";

export default function ServicesList() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="services-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
              Services
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-neutral-600">
              Six things I build. Each project starts with a written scope, so you know exactly what you&apos;re getting before any code is written.
            </p>
          </div>
          <div className="md:col-span-8">
            {agencyServices.map((s) => (
              <details key={s.title} className="group border-b border-neutral-300 first:border-t">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-neutral-950">{s.title}</span>
                  <Plus className="size-5 shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                </summary>
                <div className="grid gap-8 pb-8 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] leading-relaxed text-neutral-700">{s.description}</p>
                    <p className="text-[15px] leading-relaxed text-neutral-700">
                      <span className="font-medium text-neutral-950">Why it matters: </span>
                      {s.benefits}.
                    </p>
                    <p className="text-sm text-neutral-500">Typical timeline: {s.timeline}</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-950">What I deliver</h3>
                      <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[15px] text-neutral-700">
                        {s.deliverables.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-neutral-950">Tools</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.tech.join(" · ")}</p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
