import { notFound } from "next/navigation";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";
import { pageMeta } from "@/lib/seo/page";
import {
  divisions,
  divisionIsLive,
  getDivision,
  getIndustry,
  industryHref,
  visibleOfferings,
  visibleSolutions,
  workFor,
} from "@/data/framework";
import { subServicesFor } from "@/data/subservices";
import {
  CtaBand,
  LinkCards,
  OfferingGrid,
  PageHero,
  PrimaryCta,
  Section,
  SecondaryCta,
  SolutionRows,
  StudioPage,
  WorkGrid,
} from "@/components/framework/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return divisions.filter(divisionIsLive).map((d) => ({ division: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ division: string }> }): Promise<Metadata> {
  const { division } = await params;
  const d = getDivision(division);
  if (!d) return {};
  return pageMeta({ title: d.metaTitle, description: d.metaDescription, path: `/services/${d.slug}` });
}

export default async function DivisionPage({ params }: { params: Promise<{ division: string }> }) {
  const { division } = await params;
  const d = getDivision(division);
  if (!d || !divisionIsLive(d)) notFound();

  const offerings = visibleOfferings(d);
  const subs = subServicesFor(d.slug);
  const work = workFor({ division: d.slug }).slice(0, 3);
  const solutions = visibleSolutions().filter((s) => s.division === d.slug);
  const inds = d.industries.map(getIndustry).filter((i): i is NonNullable<typeof i> => !!i);

  return (
    <StudioPage>
      <JsonLd schema={createServiceSchema({ name: d.name, description: d.metaDescription, url: `/services/${d.slug}`, serviceType: d.name })} />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: d.short }]}
          eyebrow={`${d.num} · ${d.verb} · ${d.name}`}
          title={[d.headline]}
          lead={d.intro}
        >
          <PrimaryCta href={`/contact?service=${d.slug}`}>Discuss your project</PrimaryCta>
          <SecondaryCta href="/contact/book-a-consultation">Book a 15-min call</SecondaryCta>
        </PageHero>

        <Section kicker="What we deliver" title={d.tagline} tone="sand">
          <OfferingGrid offerings={offerings} />
        </Section>

        {subs.length > 0 && (
          <Section kicker="In detail" title="Explore the services">
            <LinkCards items={subs.map((s) => ({ href: `/services/${s.slug}`, title: s.name, desc: s.lead, meta: d.short }))} />
          </Section>
        )}

        {solutions.length > 0 && (
          <Section kicker="How we help" title="Problems we solve here">
            <SolutionRows items={solutions} />
          </Section>
        )}

        {work.length > 0 && (
          <Section kicker="Live work" title="Built and shipped" intro="Real products you can open today." tone="sand">
            <WorkGrid items={work} />
          </Section>
        )}

        <Section kicker="Who it's for" title="Industries we build this for">
          <LinkCards cols={4} items={inds.map((i) => ({ href: industryHref(i.slug), title: i.name, desc: i.summary }))} />
        </Section>

        <CtaBand service={d.slug} />
      </main>
    </StudioPage>
  );
}
