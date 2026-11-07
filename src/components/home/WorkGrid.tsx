import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/content";
import Container from "./Container";

/**
 * Homepage work grid. Only projects with a real, live deployment and a real
 * screenshot are shown here. `kind` states plainly what each project is.
 */
const featured: { id: string; kind: string; summary: string; tint: string }[] = [
  { id: "healthkinator", kind: "Own product · Conference talk", summary: "AI symptom checker in English and Hindi, presented at the MRIIRS International AI Conference.", tint: "#E3EBF5" },
  { id: "khelclan", kind: "Own project", summary: "Community platform for an offline sports club in Delhi NCR.", tint: "#E9EFD6" },
  { id: "farmiq", kind: "Hackathon winner", summary: "AI crop and weather guidance for farmers, in multiple Indian languages. Won Elite Hack 1.0.", tint: "#F3ECD9" },
  { id: "sentinelai", kind: "Hackathon build", summary: "Real-time scam detection for SMS, email and URLs with an AI risk score.", tint: "#ECE7F7" },
  { id: "civicsetu", kind: "Hackathon build", summary: "Civic grievance platform linking citizens, authorities, contractors and NGOs.", tint: "#EFE6E1" },
  { id: "msitwebsite", kind: "Academic project", summary: "Rebuilt college website with 30+ department, faculty and admissions pages.", tint: "#E6E9EE" },
];

export default function WorkGrid() {
  const items = featured
    .map((f) => {
      const cs = caseStudies.find((c) => c.id === f.id);
      return cs ? { ...f, cs } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="work-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
            Selected work
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-neutral-600">
            Every project is labelled for what it is — my own product, a hackathon build or academic work — and links
            to the live deployment.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {items.map(({ cs, kind, summary, tint }, i) => {
            const [name] = cs.title.split(" — ");
            return (
              <li key={cs.id} className={i % 2 === 1 ? "md:mt-28" : ""}>
                <article className="flex flex-col gap-5">
                  <div className="rounded-[10px] p-5 sm:p-8" style={{ backgroundColor: tint }}>
                    <div className="overflow-hidden rounded-md shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
                      <Image
                        src={cs.image}
                        alt={`${name} — screenshot of the live site`}
                        width={1440}
                        height={900}
                        sizes="(min-width: 768px) 560px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-medium tracking-[-0.015em] text-neutral-950">{name}</h3>
                      <span className="font-mono text-xs text-neutral-500">
                        {kind}
                      </span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-neutral-700">{summary}</p>
                    {cs.tech && cs.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {cs.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-[15px] font-medium pt-1">
                      {cs.liveWebsite && (
                        <a
                          href={cs.liveWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-1 text-neutral-950 underline underline-offset-4 hover:text-neutral-500"
                        >
                          Live site <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                      )}
                      {cs.githubLink && (
                        <a
                          href={cs.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-1 text-neutral-950 underline underline-offset-4 hover:text-neutral-500"
                        >
                          Source code <ArrowUpRight className="size-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-neutral-300 px-6 text-[15px] font-medium text-neutral-950 transition-colors hover:border-neutral-950"
          >
            All {caseStudies.length} projects <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
