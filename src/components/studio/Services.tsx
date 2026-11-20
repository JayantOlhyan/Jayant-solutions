import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { divisionHref, liveDivisions } from "@/data/framework";

/** Homepage: the six divisions. Primary three large, supporting ones smaller (framework section 15). */
export default function Services() {
  const live = liveDivisions();
  const primary = live.filter((d) => d.priority === "primary");
  const supporting = live.filter((d) => d.priority === "supporting");
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 bg-[var(--sand)] py-24 md:py-36">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="services-title" className="display-soft" style={{ fontSize: "clamp(42px, 6.4vw, 104px)", lineHeight: 0.98, fontWeight: 700 }}>
            What we<br />
            <span className="text-[var(--flame-ink)]">can handle</span>
          </h2>
          <p className="max-w-sm text-[16px] leading-relaxed text-[var(--muted)]">
            Six connected divisions, one partner. Start with the one you need today and add the rest when you&apos;re ready.
          </p>
        </div>
        <ol className="mt-14 flex flex-col gap-2">
          {primary.map((d) => (
            <li key={d.slug} className="svc-row border-t border-[var(--hair)]">
              <Link
                href={divisionHref(d.slug)}
                className="grid gap-4 px-2 py-8 md:grid-cols-[64px_1.2fr_1fr_48px] md:items-center md:px-6 md:py-10"
              >
                <span className="eyebrow text-[var(--muted)]">{d.num}</span>
                <h3 className="display-soft text-[30px] md:text-[48px]" style={{ fontWeight: 700, lineHeight: 1 }}>
                  {d.short}
                </h3>
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] leading-relaxed">{d.intro}</p>
                  <p className="text-[14px] text-[var(--muted)]">{d.promise}</p>
                </div>
                <span className="hidden size-12 place-items-center rounded-full bg-[var(--paper)] md:grid" aria-hidden="true">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
        {supporting.length > 0 && (
          <ul className={`mt-8 grid gap-4 ${supporting.length > 2 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {supporting.map((d) => (
              <li key={d.slug}>
                <Link
                  href={divisionHref(d.slug)}
                  className="group flex h-full flex-col justify-between gap-8 rounded-[24px] bg-[var(--paper)] p-6 transition-colors duration-300 hover:bg-[var(--ink)] hover:text-[var(--paper)] md:p-8"
                >
                  <span className="eyebrow opacity-60">
                    {d.num} · {d.verb}
                  </span>
                  <span>
                    <span className="block text-[24px] font-medium tracking-[-0.015em]">{d.short}</span>
                    <span className="mt-1 block text-[15px] opacity-70">{d.promise}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link href="/services" className="draw mt-10 inline-block text-[16px] font-medium">
          See every service
        </Link>
      </div>
    </section>
  );
}
