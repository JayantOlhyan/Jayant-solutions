import Link from "next/link";
import { industries, industryHref } from "@/data/framework";

/** Framework section 04 — compact: one row of chips linking to the industry pages. */
export default function IndustriesRow() {
  return (
    <section aria-labelledby="industries-title" className="pb-24 md:pb-36">
      <div className="container-x grid gap-10 border-t border-[var(--hair)] pt-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow text-[var(--muted)]">Who we work with</p>
          <h2 id="industries-title" className="display-soft mt-4 text-[34px] md:text-[44px]" style={{ fontWeight: 700, lineHeight: 1.04 }}>
            Built for how your sector works.
          </h2>
          <Link href="/industries" className="draw mt-6 inline-block text-[16px] font-medium">
            All industries
          </Link>
        </div>
        <ul className="flex flex-wrap content-start gap-2 lg:col-span-8">
          {industries.map((i) => (
            <li key={i.slug}>
              <Link href={industryHref(i.slug)} className="pill !min-h-12 !px-5 !text-[16px]">
                {i.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
