import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisionHref, visibleSolutions } from "@/data/framework";

/** Framework section 03 — six problem → solution pairs on the homepage; all 14 on /services. */
export default function HowWeHelp() {
  const items = visibleSolutions().filter((s) => s.home).slice(0, 6);
  return (
    <section aria-labelledby="help-title" className="py-24 md:py-36">
      <div className="container-x">
        <p className="eyebrow text-[var(--muted)]">How we help</p>
        <h2 id="help-title" className="display-soft mt-4 max-w-[16ch]" style={{ fontSize: "clamp(38px, 5.4vw, 88px)", lineHeight: 1, fontWeight: 700 }}>
          Digital solutions built around <span className="text-[var(--flame-ink)]">your business</span>
        </h2>
        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <li key={s.problem} data-rise>
              <Link
                href={s.href ?? divisionHref(s.division)}
                className="group flex h-full flex-col justify-between gap-10 rounded-[24px] border border-[var(--hair)] p-6 transition-colors duration-300 hover:border-[var(--ink)] md:p-8"
              >
                <span className="text-[17px] leading-snug text-[var(--muted)]">&ldquo;{s.problem}&rdquo;</span>
                <span className="flex items-end justify-between gap-4">
                  <span className="text-[22px] font-medium leading-tight tracking-[-0.015em]">{s.help}</span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--sand)] transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[var(--flame)]" aria-hidden="true">
                    <ArrowUpRight className="size-5" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/services#solutions" className="draw mt-10 inline-block text-[16px] font-medium">
          See all the problems we solve
        </Link>
      </div>
    </section>
  );
}
