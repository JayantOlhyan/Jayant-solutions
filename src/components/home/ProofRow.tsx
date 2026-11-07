import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";

const facts = [
  {
    value: "Live",
    badge: "Production Systems",
    title: "Shipped Applications",
    desc: "Active deployments across EdTech, healthcare & civic workflows",
    href: "#work",
    isExternal: false,
  },
  {
    value: "GitHub",
    badge: "Inspectable Source",
    title: "Public Repositories",
    desc: "Production code in Next.js, TypeScript, Python, and modern AI APIs",
    href: "https://github.com/JayantOlhyan",
    isExternal: true,
  },
  {
    value: "100%",
    badge: "Direct Delivery",
    title: "Founder Accountability",
    desc: "Direct communication with the engineer writing your code",
    href: "#about",
    isExternal: false,
  },
  {
    value: "CS & AI",
    badge: "Academic Foundation",
    title: "Ongoing Technical Studies",
    desc: "MSIT New Delhi (CS) · IIT Guwahati (Data Science & AI)",
    href: "#about",
    isExternal: false,
  },
];

export default function ProofRow() {
  return (
    <section aria-label="Core Capabilities and Engineering Evidence" className="border-y border-neutral-200 bg-neutral-50/50">
      <Container>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => {
            const Content = (
              <div
                className={`group flex flex-col justify-between py-6 sm:py-7 px-4 sm:px-6 transition-colors hover:bg-white h-full ${
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
                className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                aria-label={`${f.title} (${f.desc}) - opens in new window`}
              >
                {Content}
              </a>
            ) : (
              <Link
                key={f.title}
                href={f.href}
                className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
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
