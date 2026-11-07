import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "./Container";

interface FeaturedProject {
  id: string;
  name: string;
  type: string;
  problem: string;
  contribution: string;
  tint: string;
  image: string;
  imageAlt: string;
  tech: string[];
  liveWebsite?: string;
  githubLink?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "healthkinator",
    name: "Healthkinator",
    type: "Personal Product · AI Prototype",
    problem: "Patients struggle to assess symptom severity and understand when to seek urgent medical care, often leading to unguided anxiety.",
    contribution: "Architected bilingual (English/Hindi) symptom assessment tool using Next.js, FastAPI, and the Gemini API with structured risk indicators.",
    tint: "#E3EBF5",
    image: "/projects/healthkinator.webp",
    imageAlt: "Healthkinator bilingual AI symptom triage web interface",
    tech: ["Next.js", "FastAPI", "Python", "Gemini API", "PostgreSQL"],
    liveWebsite: "https://healthkinator-1.netlify.app",
    githubLink: "https://github.com/JayantOlhyan/healthkinator-1-",
  },
  {
    id: "civicsetu",
    name: "CivicSetu",
    type: "Civic Tech · Workflow Prototype",
    problem: "Municipal issue reporting and infrastructure repair requests are frequently fragmented across offline offices and lost in queues.",
    contribution: "Built unified civic grievance platform with citizen ticket submissions, role-based departmental routing, and automated status tracking.",
    tint: "#EFE6E1",
    image: "/projects/civicsetu.webp",
    imageAlt: "CivicSetu municipal ticket routing and grievance tracking dashboard",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    liveWebsite: "https://civicsetu-1.netlify.app/",
  },
  {
    id: "msitwebsite",
    name: "MSIT College Portal",
    type: "Academic Project · Institutional Redesign",
    problem: "College students and faculty struggled with an outdated, non-responsive portal with scattered links and no feedback channel.",
    contribution: "Led frontend architecture, responsive navigation, and component design system for 30+ departmental pages as Web Dev Society lead.",
    tint: "#E6E9EE",
    image: "/projects/msitwebsite.webp",
    imageAlt: "MSIT college portal homepage and departmental directory screenshot",
    tech: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    liveWebsite: "https://msit-website.netlify.app",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-2">
              Portfolio
            </span>
            <h2 id="work-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
              Selected work
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-neutral-600">
            Three real systems with live deployments and inspectable code. Each project is clearly labelled for what it is: personal product, civic prototype, or academic redesign.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p, i) => (
            <li key={p.id} className={i === 2 ? "md:col-span-2 lg:col-span-1" : ""}>
              <article className="flex h-full flex-col justify-between rounded-[10px] border border-neutral-200 bg-white p-5 sm:p-6 transition-colors hover:border-neutral-300 shadow-sm">
                <div>
                  <div className="overflow-hidden rounded-md p-4 sm:p-6" style={{ backgroundColor: p.tint }}>
                    <div className="overflow-hidden rounded shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        width={1440}
                        height={900}
                        sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full transition-transform duration-500 hover:scale-[1.01]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-1.5">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                      {p.type}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-neutral-950">{p.name}</h3>
                  </div>

                  <div className="mt-3 flex flex-col gap-2.5 text-[14px] leading-relaxed text-neutral-700">
                    <p>
                      <span className="font-medium text-neutral-950">Problem: </span>
                      {p.problem}
                    </p>
                    <p>
                      <span className="font-medium text-neutral-950">Contribution: </span>
                      {p.contribution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] text-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
                    {p.liveWebsite && (
                      <a
                        href={p.liveWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1 text-neutral-950 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                      >
                        Live site <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    )}
                    {p.githubLink && (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-1 text-neutral-950 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                      >
                        Source code <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-neutral-300 px-6 text-[15px] font-medium text-neutral-950 transition-colors hover:border-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
          >
            <span>View all projects in portfolio</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
