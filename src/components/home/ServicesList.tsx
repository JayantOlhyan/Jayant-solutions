import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import Container from "./Container";

interface ServiceGroup {
  title: string;
  problem: string;
  deliverables: string[];
  tech: string[];
  timeline: string;
}

const serviceGroups: ServiceGroup[] = [
  {
    title: "Websites & Web Applications",
    problem: "Outdated, slow, or template-limited websites fail to establish credibility and convert visitors into qualified inquiries.",
    deliverables: [
      "Custom Next.js & React applications",
      "High-converting marketing sites",
      "Responsive mobile-first interfaces",
      "CMS and headless content setup",
      "Core Web Vitals & SEO optimization",
      "Production deployment & SSL",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Netlify"],
    timeline: "2–4 weeks typical delivery",
  },
  {
    title: "Practical AI Integrations",
    problem: "Teams spend hours manually reviewing unstructured text, answering repetitive inquiries, and extracting information from documents.",
    deliverables: [
      "Intelligent customer & support chatbots",
      "RAG document search across private files",
      "Automated document & invoice data extraction",
      "OpenAI & Google Gemini API pipelines",
      "Structured JSON output validation",
      "Secure backend API endpoints",
    ],
    tech: ["Python", "FastAPI", "OpenAI API", "Google Gemini", "PostgreSQL", "LangChain"],
    timeline: "2–6 weeks typical delivery",
  },
  {
    title: "Business Workflow Automation",
    problem: "Disconnected software, manual data copying across spreadsheets, and delayed notifications create costly operational drag.",
    deliverables: [
      "CRM, email, and webhook sync automations",
      "Automated WhatsApp & Slack alerts",
      "Custom internal admin dashboards",
      "Scheduled background sync jobs",
      "Third-party API connectors",
      "Data pipeline monitoring & error alerts",
    ],
    tech: ["Node.js", "Python", "PostgreSQL", "REST APIs", "Cloud Functions", "Docker"],
    timeline: "1–3 weeks typical delivery",
  },
];

export default function ServicesList() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 bg-neutral-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-2">
              Capabilities
            </span>
            <h2 id="services-title" className="text-[32px] md:text-[44px] font-medium leading-[1.08] tracking-[-0.03em] text-neutral-950">
              Services
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-neutral-600">
              Three focused service areas. Every project begins with an agreed written scope, fixed milestone pricing, and direct engineer communication before any code is written.
            </p>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-neutral-950 underline underline-offset-4 hover:text-neutral-600"
              >
                <span>View all specialized offerings</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col">
            {serviceGroups.map((s, index) => (
              <details
                key={s.title}
                open={index === 0}
                className="group border-b border-neutral-300 first:border-t"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden">
                  <span className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-neutral-950">
                    {s.title}
                  </span>
                  <Plus
                    className="size-5 shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <div className="grid gap-8 pb-8 sm:grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                        Problem Addressed
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-700">
                        {s.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                        Typical Timeline
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 font-mono">
                        {s.timeline}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                        Typical Deliverables
                      </h3>
                      <ul className="mt-2 grid grid-cols-1 gap-y-1.5 text-[14px] text-neutral-700">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="text-neutral-400 select-none">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                        Technologies
                      </h3>
                      <p className="mt-1.5 text-xs font-mono leading-relaxed text-neutral-600">
                        {s.tech.join(" · ")}
                      </p>
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
