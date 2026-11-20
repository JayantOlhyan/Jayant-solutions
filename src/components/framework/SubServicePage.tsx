import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQSchema, createServiceSchema } from "@/lib/seo/schema";
import { pageMeta } from "@/lib/seo/page";
import { getSubService, subServicesFor } from "@/data/subservices";
import { divisionHref, divisionIsLive, getDivision, industryHref, getIndustry, workFor } from "@/data/framework";
import {
  CtaBand,
  FaqList,
  LinkCards,
  PageHero,
  PrimaryCta,
  Section,
  SecondaryCta,
  StudioPage,
  TagList,
  WorkGrid,
} from "./blocks";

export function subServiceMetadata(slug: string): Metadata {
  const s = getSubService(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default function SubServicePage({ slug }: { slug: string }) {
  const s = getSubService(slug);
  if (!s) notFound();
  const d = getDivision(s.division)!;
  const divLive = divisionIsLive(d);
  const work = workFor({ ids: s.work });
  const siblings = subServicesFor(s.division).filter((x) => x.slug !== s.slug);
  const related = siblings.length
    ? siblings.slice(0, 3).map((x) => ({ href: `/services/${x.slug}`, title: x.name, desc: x.lead, meta: d.short }))
    : [];
  const industryCards = d.industries
    .map((i) => getIndustry(i))
    .filter((i): i is NonNullable<typeof i> => !!i)
    .slice(0, 3)
    .map((i) => ({ href: industryHref(i.slug), title: i.name, desc: i.summary, meta: "Industry" }));

  return (
    <StudioPage>
      <JsonLd
        schema={[
          createServiceSchema({ name: s.name, description: s.metaDescription, url: `/services/${s.slug}`, serviceType: d.name }),
          ...(s.faqs.length ? [createFAQSchema(s.faqs)] : []),
        ]}
      />
      <main>
        <PageHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            ...(divLive ? [{ name: d.short, href: divisionHref(d.slug) }] : []),
            { name: s.name },
          ]}
          eyebrow={`${d.num} · ${d.short}`}
          title={[s.h1]}
          lead={s.lead}
        >
          <PrimaryCta>Book a 15-min call</PrimaryCta>
          <SecondaryCta href={`/contact?service=${s.slug}`}>Send a project brief</SecondaryCta>
        </PageHero>

        <Section kicker="What's included" title={`${s.name}, scoped to what you need`} tone="sand">
          <ul className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--hair)] bg-[var(--hair)] sm:grid-cols-2 lg:grid-cols-3">
            {s.includes.map((x) => (
              <li key={x.name} className="bg-[var(--sand)] p-6">
                <p className="text-[18px] font-medium">{x.name}</p>
                <p className="mt-1 text-[15px] leading-[1.55] text-[var(--muted)]">{x.detail}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section kicker="A good fit when" title="Sound familiar?">
          <TagList items={s.fits} />
        </Section>

        {work.length > 0 && (
          <Section kicker="Live work" title="Built and shipped" intro="Real products you can open today. No mock-ups.">
            <WorkGrid items={work} />
          </Section>
        )}

        {s.faqs.length > 0 && (
          <Section kicker="Questions" title="Before you ask">
            <FaqList items={s.faqs} />
          </Section>
        )}

        <Section kicker="Related" title={divLive ? `More from ${d.short}` : "Related services"} tone="sand">
          <LinkCards
            items={[
              ...(divLive ? [{ href: divisionHref(d.slug), title: d.name, desc: d.promise, meta: `Division ${d.num}` }] : []),
              ...related,
              ...industryCards,
            ].slice(0, 6)}
          />
        </Section>

        <CtaBand service={s.slug} />
      </main>
    </StudioPage>
  );
}
