import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";
import { pageMeta } from "@/lib/seo/page";
import {
  approach,
  divisionHref,
  divisions,
  divisionIsLive,
  engagementModels,
  getDivision,
  headlines,
  visibleOfferings,
  visibleSolutions,
} from "@/data/framework";
import { subServices } from "@/data/subservices";
import {
  CtaBand,
  LinkCards,
  PageHero,
  PrimaryCta,
  Section,
  SecondaryCta,
  SolutionRows,
  StudioPage,
  UnconfirmedBadge,
} from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Services — Websites, Software, AI, Design & Growth",
  description:
    "Six connected service divisions under one partner: websites and e-commerce, custom software, AI and automation, design and branding, content, and SEO and support.",
  path: "/services",
});

export default function ServicesPage() {
  const live = divisions.filter(divisionIsLive);
  const primary = live.filter((d) => d.priority === "primary");
  const supporting = live.filter((d) => d.priority === "supporting");
  const card = (d: (typeof divisions)[number]) => ({
    href: divisionHref(d.slug),
    title: d.name,
    desc: `${d.intro}`,
    meta: `${d.num} · ${d.verb}`,
    badge: d.offerings.every((x) => !x.confirmed) ? <UnconfirmedBadge /> : undefined,
  });

  return (
    <StudioPage>
      <JsonLd
        schema={live.map((d) =>
          createServiceSchema({ name: d.name, description: d.metaDescription, url: divisionHref(d.slug), serviceType: d.name }),
        )}
      />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
          eyebrow="Services"
          title={[headlines.partnership[0], headlines.partnership[1]]}
          lead="Websites, software, AI, design and ongoing support, planned and delivered by one coordinated team. Start with one service or combine several."
        >
          <PrimaryCta>Book a 15-min call</PrimaryCta>
          <SecondaryCta href="#solutions">Start from your problem</SecondaryCta>
        </PageHero>

        <Section kicker="What we can handle" title="Six divisions. One digital partner." tone="sand">
          <LinkCards items={primary.map(card)} />
          {supporting.length > 0 && (
            <div className="mt-4">
              <LinkCards items={supporting.map(card)} />
            </div>
          )}
        </Section>

        <Section id="solutions" kicker="How we help" title="Digital solutions built around your business" intro="Start from the problem, not the technology.">
          <SolutionRows
            items={visibleSolutions().map((s) => ({
              ...s,
              href: s.href ?? divisionHref(s.division),
            }))}
          />
        </Section>

        <Section kicker="Our approach" title="Build. Automate. Create. Grow." tone="ink">
          <ol className="grid gap-px overflow-hidden rounded-[24px] bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <li key={a.verb} className="bg-[var(--ink)] p-6">
                <p className="eyebrow text-[var(--flame)]">0{i + 1}</p>
                <p className="display-soft mt-3 text-[32px] font-bold">{a.verb}.</p>
                <p className="mt-2 text-[15px] leading-[1.55] text-white/70">{a.line}</p>
                <p className="mt-4 text-[14px] text-white/60">
                  {a.divisions
                    .map(getDivision)
                    .filter((d): d is NonNullable<typeof d> => !!d && divisionIsLive(d))
                    .map((d) => d.short)
                    .join(" · ")}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section kicker="Every service" title="The full index" intro="Each service page explains what's included and links to live work.">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {live.map((d) => {
              const subs = subServices.filter((s) => s.division === d.slug);
              return (
                <div key={d.slug}>
                  <p className="eyebrow text-[var(--flame-ink)]">{d.num}</p>
                  <a href={divisionHref(d.slug)} className="draw mt-2 inline-block text-[20px] font-medium">
                    {d.short}
                  </a>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-[var(--muted)]">
                    {subs.map((s) => (
                      <li key={s.slug}>
                        <a href={`/services/${s.slug}`} className="draw text-[var(--ink)]">
                          {s.name}
                        </a>
                      </li>
                    ))}
                    {visibleOfferings(d)
                      .filter((x) => !subs.some((s) => s.name.toLowerCase().startsWith(x.name.toLowerCase())))
                      .slice(0, 6)
                      .map((x) => (
                        <li key={x.name}>
                          {x.name}
                          {!x.confirmed && <UnconfirmedBadge />}
                        </li>
                      ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>

        <Section kicker="Ways to work with us" title="Pick the engagement that fits" tone="sand">
          <LinkCards
            items={engagementModels.map((m) => ({ href: m.href, title: m.name, desc: m.line, meta: m.from }))}
          />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
