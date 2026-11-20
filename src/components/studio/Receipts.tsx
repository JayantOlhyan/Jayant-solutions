import { ArrowUpRight } from "lucide-react";
import { projectCount } from "./data";
import { commitments } from "@/data/framework";

/**
 * Social proof without testimonials: only facts a visitor can check.
 * Add real client quotes here only with the client's written permission.
 */
const receipts = [
  { big: "Winner", label: "Elite Hack 1.0", body: "FarmIQ — AI crop guidance for farmers in 11 languages.", href: "https://farm-iq.netlify.app", cta: "Open FarmIQ" },
  { big: "Presented", label: "MRIIRS International AI Conference, 2026", body: "Presented Healthkinator, an AI symptom checker in English and Hindi.", href: "https://healthkinator-1.netlify.app", cta: "Open Healthkinator" },
  { big: String(projectCount), label: "Live products you can open", body: "No mockups, no Dribbble shots. Every project on this page is deployed and clickable.", href: "/portfolio", cta: "See them all" },
  { big: "Founder", label: "Led, start to finish", body: "Jayant Olhyan is involved in every project and accountable for what ships.", href: "/company/founder", cta: "Meet the founder" },
];

export default function Receipts() {
  return (
    <section aria-labelledby="receipts-title" className="py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[var(--muted)]">Our commitments</p>
            <h2 id="receipts-title" className="display-soft mt-4" style={{ fontSize: "clamp(40px, 5.6vw, 88px)", lineHeight: 0.98, fontWeight: 700 }}>
              Promises we can <span className="text-[var(--flame-ink)]">actually keep</span>
            </h2>
            <a href="/company/why-choose-us" className="draw mt-6 inline-block text-[16px] font-medium">All 12 commitments</a>
          </div>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-7">
            {commitments.filter((c) => c.home).map((c) => (
              <li key={c.name} className="border-t border-[var(--hair)] pt-4">
                <p className="text-[18px] font-medium">{c.name}</p>
                <p className="mt-1 text-[15px] leading-[1.55] text-[var(--muted)]">{c.line}</p>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="eyebrow mt-24 text-[var(--muted)]">Proof you can check</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {receipts.map((r) => (
            <li key={r.label} data-rise>
              <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex h-full flex-col justify-between gap-10 rounded-[24px] bg-[var(--sand)] p-7 transition-colors duration-300 hover:bg-[var(--ink)] hover:text-[var(--paper)] md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="display text-[40px] uppercase leading-none sm:text-[56px] md:text-[76px]">{r.big}</span>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--flame)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45" aria-hidden="true"><ArrowUpRight className="size-5" /></span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[20px] font-medium">{r.label}</span>
                  <span className="text-[15px] leading-relaxed opacity-75">{r.body}</span>
                  <span className="draw mt-2 self-start text-[15px] font-medium">{r.cta}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
