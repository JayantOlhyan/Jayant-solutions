import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo/page";
import {
  divisionHref,
  getIndustry,
  industries,
  industryBuilds,
  industryDivisions,
  industryHref,
  industryProblems,
  workFor,
} from "@/data/framework";
import {
  CtaBand,
  LinkCards,
  PageHero,
  PrimaryCta,
  Section,
  SecondaryCta,
  SolutionRows,
  StudioPage,
  TagList,
  WorkGrid,
} from "@/components/framework/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) return {};
  return pageMeta({ title: i.name.length > 24 ? i.name : `${i.name} — Digital Solutions`, description: i.metaDescription, path: industryHref(i.slug) });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = getIndustry(slug);
  if (!i) notFound();

  const work = workFor({ industry: i.slug });
  const divs = industryDivisions(i);
  const others = industries.filter((x) => x.slug !== i.slug).slice(0, 4);

  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: i.name }]}
          eyebrow={i.name}
          title={[i.headline]}
          lead={i.lead}
        >
          <PrimaryCta href={`/contact?industry=${i.slug}`}>Discuss your project</PrimaryCta>
          <SecondaryCta href="/industries">All industries</SecondaryCta>
        </PageHero>

        <Section kicker="How we help" title="Common problems, practical fixes" tone="sand">
          <SolutionRows items={industryProblems(i).map((p) => ({ ...p, href: divisionHref(p.division) }))} />
        </Section>

        <Section kicker="What we build" title="Typical solutions">
          <TagList items={industryBuilds(i).map((b) => b.name)} />
          <div className="mt-10">
            <LinkCards
              items={divs.map((d) => ({ href: divisionHref(d.slug), title: d.name, desc: d.promise, meta: `${d.num} · ${d.verb}` }))}
            />
          </div>
        </Section>

        {work.length > 0 ? (
          <Section kicker="Live work" title="Built and shipped in this space" tone="sand">
            <WorkGrid items={work} />
          </Section>
        ) : (
          <Section kicker="Example solutions" title="No case study here yet" tone="sand">
            <p className="max-w-[62ch] text-[17px] leading-[1.6] text-[var(--muted)]">
              We haven&apos;t published work in this sector yet, so we won&apos;t show you anything that isn&apos;t real. The
              solutions above are examples of what we build. On a short call we can show related live projects and talk through yours.
            </p>
          </Section>
        )}

        <Section kicker="Other industries" title="Also working with">
          <LinkCards cols={4} items={others.map((x) => ({ href: industryHref(x.slug), title: x.name, desc: x.summary }))} />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
