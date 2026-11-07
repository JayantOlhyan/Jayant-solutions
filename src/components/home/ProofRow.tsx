import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const facts = [
  {
    value: "Winner",
    badge: "National Hackathon",
    title: "Elite Hack 1.0 — FarmIQ",
    desc: "AI crop intelligence for Indian farmers",
    href: "https://farm-iq.netlify.app",
    isExternal: true,
  },
  {
    value: "Speaker",
    badge: "AI Conference 2026",
    title: "MRIIRS International Conf",
    desc: "Healthkinator AI clinical triage systems",
    href: "https://healthkinator-1.netlify.app",
    isExternal: true,
  },
  {
    value: "MSIT & IIT",
    badge: "CS & Data Science",
    title: "Dual Engineering Pedigree",
    desc: "B.Tech CS (MSIT) · BSc DS & AI (IIT Guwahati)",
    href: "#about",
    isExternal: false,
  },
  {
    value: "30+",
    badge: "Public Repositories",
    title: "National Selections",
    desc: "Former Lead, MSIT Web Dev Society",
    href: "https://github.com/JayantOlhyan",
    isExternal: true,
  },
];

export default function ProofRow() {
  return (
    <section aria-label="Authenticated Track Record & Credentials" className="border-y border-neutral-200 bg-neutral-50/50">
      <Container>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => {
            const Content = (
              <div
                className={`group flex flex-col justify-between py-7 px-4 sm:px-6 transition-colors hover:bg-white ${
                  i > 0 ? "border-t border-neutral-200 sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 font-medium">
                      {f.badge}
                    </span>
                    <ArrowUpRight
                      className="size-3.5 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950"
                      aria-hidden="true"
                    />
                  </div>
                  <dd className="mt-2 text-2xl md:text-[28px] font-medium tracking-[-0.02em] text-neutral-950">
                    {f.value}
                  </dd>
                </div>
                <dt className="mt-3 flex flex-col gap-0.5">
                  <span className="text-[14px] font-medium text-neutral-950 group-hover:text-neutral-700">
                    {f.title}
                  </span>
                  <span className="text-[13px] leading-snug text-neutral-500">
                    {f.desc}
                  </span>
                </dt>
              </div>
            );

            return f.isExternal ? (
              <a
                key={f.title}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                aria-label={`${f.title} (${f.desc}) - opens in new window`}
              >
                {Content}
              </a>
            ) : (
              <Link
                key={f.title}
                href={f.href}
                className="block focus-visible:outline-2 focus-visible:outline-[#E8590C]"
                aria-label={`${f.title} (${f.desc})`}
              >
                {Content}
              </Link>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
