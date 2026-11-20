import Link from "next/link";
import { pageMeta } from "@/lib/seo/page";
import { approach, BRAND, divisionHref, liveDivisions, processSteps } from "@/data/framework";
import Statement from "@/components/studio/Statement";
import StudioMotion from "@/components/studio/StudioMotion";
import { CtaBand, LinkCards, PageHero, PrimaryCta, ProcessList, Section, SecondaryCta, StudioPage } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "About — The Digital Team Behind Your Work",
  description:
    "Jayant Systems is a founder-led digital agency bringing technology, design and creative execution together under one roof.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
          eyebrow="About Jayant Systems"
          title={["One partner.", "Your entire digital ecosystem."]}
          lead="Jayant Systems is a founder-led digital agency bringing technology, design and creative execution together under one roof."
        >
          <PrimaryCta>Book a 15-min call</PrimaryCta>
          <SecondaryCta href="/company/founder">Meet the founder</SecondaryCta>
        </PageHero>

        <Statement />

        <Section kicker="Our story" title="Understand the problem. Build the right solution." tone="sand">
          <div className="grid gap-8 text-[17px] leading-[1.65] text-[var(--muted)] md:grid-cols-2">
            <p>
              We work with businesses, institutions, founders and professionals to build digital solutions around their actual
              needs — from their first website to custom business software, intelligent automation and ongoing support.
            </p>
            <p>
              Our approach is simple: understand the problem, build the right solution and make technology work for the business.
              <span className="mt-4 block text-[var(--ink)]">
                You focus on what you do best. {BRAND.taglineB}
              </span>
            </p>
          </div>
        </Section>

        <Section kicker="Our philosophy" title="Build. Automate. Create. Grow.">
          <ol className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--hair)] bg-[var(--hair)] md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <li key={a.verb} className="bg-[var(--paper)] p-6">
                <p className="eyebrow text-[var(--flame-ink)]">0{i + 1}</p>
                <p className="display-soft mt-3 text-[30px] font-bold">{a.verb}.</p>
                <p className="mt-2 text-[15px] leading-[1.55] text-[var(--muted)]">{a.line}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section kicker="Our process" title="From idea to execution. And everything in between." tone="sand">
          <ProcessList steps={processSteps} />
          <Link href="/process" className="draw mt-8 inline-block text-[16px] font-medium">
            How each step works
          </Link>
        </Section>

        <Section kicker="What we do" title="Six divisions, one team">
          <LinkCards items={liveDivisions().map((d) => ({ href: divisionHref(d.slug), title: d.short, desc: d.promise, meta: `${d.num} · ${d.verb}` }))} />
        </Section>

        <CtaBand />
      </main>
      <StudioMotion />
    </StudioPage>
  );
}
