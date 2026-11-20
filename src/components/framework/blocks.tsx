import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { CONTACT_INFO } from "@/data/contact";
import { finalCta, type Offering, type WorkItem } from "@/data/framework";

/* Page shell: applies the v2 studio tokens (DESIGN.md). */
export function StudioPage({ children }: { children: ReactNode }) {
  return <div className="studio">{children}</div>;
}

export type Crumb = { name: string; href?: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--muted)]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {c.href ? (
              <Link href={c.href} className="draw hover:text-[var(--ink)]">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--ink)]">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Two-tone sentence-case headline: first line ink, second line flame-ink. */
export function TwoTone({ a, b }: { a: string; b?: string }) {
  return (
    <>
      <span className="block">{a}</span>
      {b && <span className="block text-[var(--flame-ink)]">{b}</span>}
    </>
  );
}

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  children,
}: {
  crumbs?: Crumb[];
  eyebrow?: string;
  title: [string, string?];
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="container-x pb-16 pt-10 md:pb-24 md:pt-16">
      {crumbs && <Crumbs items={crumbs} />}
      {eyebrow && <p className="eyebrow mt-10 text-[var(--muted)] md:mt-14">{eyebrow}</p>}
      <h1
        className="display-soft mt-4 max-w-[18ch] text-[var(--ink)]"
        style={{ fontSize: "clamp(40px, 6.4vw, 96px)", lineHeight: 1, fontWeight: 700 }}
      >
        <TwoTone a={title[0]} b={title[1]} />
      </h1>
      {lead && <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.6] text-[var(--muted)] md:text-[19px]">{lead}</p>}
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </header>
  );
}

export function Section({
  id,
  kicker,
  title,
  intro,
  tone = "paper",
  children,
}: {
  id?: string;
  kicker?: string;
  title?: string;
  intro?: string;
  tone?: "paper" | "sand" | "ink";
  children: ReactNode;
}) {
  const bg = tone === "sand" ? "bg-[var(--sand)]" : tone === "ink" ? "bg-[var(--ink)] text-[var(--paper)]" : "";
  return (
    <section id={id} className={`${bg} scroll-mt-24 py-16 md:py-24`}>
      <div className="container-x">
        {(kicker || title || intro) && (
          <div className="mb-10 max-w-[760px] md:mb-14">
            {kicker && <p className={`eyebrow ${tone === "ink" ? "text-white/60" : "text-[var(--muted)]"}`}>{kicker}</p>}
            {title && (
              <h2 className="display-soft mt-3" style={{ fontSize: "clamp(30px, 4vw, 56px)", lineHeight: 1.04, fontWeight: 700 }}>
                {title}
              </h2>
            )}
            {intro && <p className={`mt-4 text-[17px] leading-[1.6] ${tone === "ink" ? "text-white/70" : "text-[var(--muted)]"}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PrimaryCta({ href = CONTACT_INFO.bookingPath, children }: { href?: string; children: ReactNode }) {
  return (
    <Link href={href} className="btn-ink">
      {children}
      <span className="dot" aria-hidden="true">
        <ArrowUpRight className="size-5" />
      </span>
    </Link>
  );
}

export function SecondaryCta({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="btn-line">
      {children}
    </Link>
  );
}

export function UnconfirmedBadge() {
  return (
    <span
      className="eyebrow ml-2 inline-flex items-center rounded-full border border-dashed border-[var(--flame-ink)] px-2 py-0.5 align-middle text-[10px] text-[var(--flame-ink)]"
      title="Not yet confirmed. Hidden in the production build."
    >
      Unconfirmed
    </span>
  );
}

export function OfferingGrid({ offerings }: { offerings: Offering[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--hair)] bg-[var(--hair)] sm:grid-cols-2 lg:grid-cols-3">
      {offerings.map((x) => (
        <li key={x.name} className="bg-[var(--paper)] p-6">
          <p className="text-[18px] font-medium tracking-[-0.01em]">
            {x.name}
            {!x.confirmed && <UnconfirmedBadge />}
          </p>
          <p className="mt-1 text-[15px] text-[var(--muted)]">{x.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export type CardLink = { href: string; title: string; desc?: string; meta?: string; badge?: ReactNode };

export function LinkCards({ items, cols = 3 }: { items: CardLink[]; cols?: 2 | 3 | 4 }) {
  const grid = cols === 2 ? "md:grid-cols-2" : cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid gap-4 ${grid}`}>
      {items.map((c) => (
        <li key={c.href + c.title}>
          <Link
            href={c.href}
            className="group flex h-full flex-col justify-between gap-8 rounded-[24px] border border-[var(--hair)] bg-[var(--paper)] p-6 transition-colors duration-300 hover:border-[var(--ink)] md:p-7"
          >
            <div>
              {c.meta && <p className="eyebrow text-[var(--muted)]">{c.meta}</p>}
              <p className="mt-2 text-[22px] font-medium leading-tight tracking-[-0.015em]">
                {c.title}
                {c.badge}
              </p>
              {c.desc && <p className="mt-2 text-[15px] leading-[1.55] text-[var(--muted)]">{c.desc}</p>}
            </div>
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--sand)] transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[var(--flame)]">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function WorkGrid({ items }: { items: WorkItem[] }) {
  if (!items.length) return null;
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((w) => (
        <li key={w.id}>
          <a href={w.href} target="_blank" rel="noopener noreferrer" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[var(--sand)]">
              <Image
                src={w.image}
                alt={`${w.name} — live product screenshot`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <p className="eyebrow mt-4 text-[var(--muted)]">{w.kind}</p>
            <p className="mt-1 flex items-center gap-2 text-[20px] font-medium tracking-[-0.01em]">
              <span className="draw">{w.name}</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens live product in a new tab)</span>
            </p>
            <p className="mt-1 text-[15px] text-[var(--muted)]">{w.line}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SolutionRows({ items }: { items: { problem: string; help: string; href?: string }[] }) {
  return (
    <ul className="border-t border-[var(--hair)]">
      {items.map((s) => {
        const inner = (
          <>
            <span className="text-[17px] text-[var(--muted)] md:col-span-5">&ldquo;{s.problem}&rdquo;</span>
            <span className="text-[19px] font-medium tracking-[-0.01em] md:col-span-6">{s.help}</span>
            <span className="hidden justify-self-end md:col-span-1 md:block" aria-hidden="true">
              {s.href && <ArrowUpRight className="size-5" />}
            </span>
          </>
        );
        const cls = "grid gap-1 border-b border-[var(--hair)] py-5 md:grid-cols-12 md:items-center md:gap-6";
        return (
          <li key={s.problem}>
            {s.href ? (
              <Link href={s.href} className={`${cls} transition-colors hover:bg-[var(--sand)] md:px-3`}>
                {inner}
              </Link>
            ) : (
              <div className={`${cls} md:px-3`}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ProcessList({ steps }: { steps: { n: string; name: string; line: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--hair)] bg-[var(--hair)] md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <li key={s.n} className="bg-[var(--paper)] p-6">
          <p className="eyebrow text-[var(--flame-ink)]">{s.n}</p>
          <p className="mt-3 text-[20px] font-medium">{s.name}</p>
          <p className="mt-1 text-[15px] leading-[1.55] text-[var(--muted)]">{s.line}</p>
        </li>
      ))}
    </ol>
  );
}

export function CommitmentGrid({ items }: { items: { name: string; line: string }[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <li key={c.name} className="border-t border-current/15 pt-4">
          <p className="text-[18px] font-medium">{c.name}</p>
          <p className="mt-1 text-[15px] leading-[1.55] opacity-70">{c.line}</p>
        </li>
      ))}
    </ul>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-[var(--hair)]">
      {items.map((f) => (
        <details key={f.q} className="faq group border-b border-[var(--hair)]">
          <summary className="flex min-h-[64px] items-center justify-between gap-6 py-5 text-[19px] font-medium tracking-[-0.01em]">
            {f.q}
            <span className="faq-icon inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--ink)]" aria-hidden="true">
              <Plus className="size-5" />
            </span>
          </summary>
          <p className="max-w-[68ch] pb-6 text-[16px] leading-[1.65] text-[var(--muted)]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full bg-[var(--sand)] px-3 py-1 text-[14px]">
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Framework section 14 — the closing call to action used on every framework page. */
export function CtaBand({ service }: { service?: string }) {
  const brief = service ? `${CONTACT_INFO.inquiryPath}?service=${encodeURIComponent(service)}` : CONTACT_INFO.inquiryPath;
  return (
    <section className="bg-[var(--ink)] py-20 text-[var(--paper)] md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-white/60">Let&apos;s build something together</p>
          <h2 className="display-soft mt-4" style={{ fontSize: "clamp(34px, 5vw, 72px)", lineHeight: 1.02, fontWeight: 700 }}>
            <span className="block">{finalCta.title[0]}</span>
            <span className="block text-[var(--flame)]">{finalCta.title[1]}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <p className="text-[17px] leading-[1.6] text-white/70">{finalCta.body}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={CONTACT_INFO.bookingPath} className="btn-ink !bg-[var(--paper)] !text-[var(--ink)]">
              {finalCta.primary}
              <span className="dot" aria-hidden="true">
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
            <Link href={brief} className="btn-line !border-white/40 !text-[var(--paper)] hover:!bg-[var(--paper)] hover:!text-[var(--ink)]">
              Send a project brief
            </Link>
          </div>
          <p className="text-[15px] text-white/60">
            Or{" "}
            <a className="draw text-[var(--paper)]" href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
              connect on WhatsApp
            </a>{" "}
            · {CONTACT_INFO.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
