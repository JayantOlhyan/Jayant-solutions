import Link from "next/link";
import { approach, divisionHref, getDivision, divisionIsLive } from "@/data/framework";

/** Framework section 05 as four stacked cards (pure CSS sticky — no JS needed). */
export default function ProcessStack() {
  return (
    <section aria-labelledby="process-title" className="bg-[var(--ink)] py-24 text-[var(--paper)] md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="process-title" className="display-soft" style={{ fontSize: "clamp(42px, 6vw, 96px)", lineHeight: 0.98, fontWeight: 700 }}>
              From idea<br />
              <span className="text-[var(--flame)]">to execution</span>
            </h2>
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-white/65">
              Clear process. Transparent execution. No unnecessary complexity.
            </p>
            <Link href="/process" className="draw mt-6 inline-block text-[16px] font-medium">
              See our 7-step process
            </Link>
          </div>
        </div>
        <ol className="flex flex-col gap-6 lg:col-span-7">
          {approach.map((a, i) => {
            const divs = a.divisions.map(getDivision).filter((d): d is NonNullable<typeof d> => !!d && divisionIsLive(d));
            return (
              <li key={a.verb} className="sticky rounded-[24px] border border-white/10 bg-[#211D19] p-7 md:p-10" style={{ top: `${96 + i * 24}px` }}>
                <span className="eyebrow text-[var(--flame)]">0{i + 1}</span>
                <h3 className="display-soft mt-10 text-[44px] md:text-[64px]" style={{ fontWeight: 700, lineHeight: 1 }}>
                  {a.verb}.
                </h3>
                <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-white/70">{a.line}</p>
                {divs.length > 0 && (
                  <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
                    {divs.map((d) => (
                      <Link key={d.slug} href={divisionHref(d.slug)} className="draw text-white/85">
                        {d.short}
                      </Link>
                    ))}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
