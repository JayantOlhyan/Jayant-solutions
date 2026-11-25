"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type IndexItem = { id: string; name: string; kind: string; line: string; group: string; industry: string; image: string };

/** Filterable grid of every case study, grouped by the kind of project. */
export default function CaseStudyIndex({ items, groups }: { items: IndexItem[]; groups: string[] }) {
  const [g, setG] = useState("All");
  const shown = g === "All" ? items : items.filter((i) => i.group === g);
  const tabs = ["All", ...groups.filter((x) => items.some((i) => i.group === x))];
  return (
    <div>
      <div role="group" aria-label="Filter by kind of project" className="mb-10 flex flex-wrap gap-2">
        {tabs.map((t) => {
          const n = t === "All" ? items.length : items.filter((i) => i.group === t).length;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={g === t}
              onClick={() => setG(t)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-[15px] font-medium transition-colors ${
                g === t ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]" : "border-[var(--hair)] hover:border-[var(--ink)]"
              }`}
            >
              {t}
              <span className={g === t ? "text-white/60" : "text-[var(--muted)]"}>{n}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} case studies shown</p>
      <ul className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((w) => (
          <li key={w.id} className="cs-fade">
            <Link href={`/work/${w.id}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[var(--sand)]">
                <Image src={w.image} alt={`${w.name} — screenshot`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <p className="eyebrow mt-4 text-[var(--muted)]">{w.kind} · {w.industry}</p>
              <p className="mt-1 flex items-center gap-2 text-[20px] font-medium tracking-[-0.01em]">
                <span className="draw">{w.name}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </p>
              <p className="mt-1 text-[15px] text-[var(--muted)]">{w.line}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
