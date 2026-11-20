import { pageMeta } from "@/lib/seo/page";
import { industries, industryHref, workItems } from "@/data/framework";
import { CtaBand, LinkCards, PageHero, PrimaryCta, Section, StudioPage, WorkGrid } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Industries We Work With",
  description:
    "Digital solutions for schools, clinics, restaurants, retail brands, startups, local businesses, organisations and creators. Jayant Systems.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
          eyebrow="Who we work with"
          title={["Built around your business,", "not our templates."]}
          lead="Every industry has its own customers, workflows and constraints. Pick yours to see the problems we solve and the services that fit."
        >
          <PrimaryCta>Book a 15-min call</PrimaryCta>
        </PageHero>

        <Section kicker="Industries" title="Eight places we can help" tone="sand">
          <LinkCards
            cols={4}
            items={industries.map((i) => ({ href: industryHref(i.slug), title: i.name, desc: i.summary }))}
          />
        </Section>

        <Section kicker="Live work" title="Shipped across sectors" intro="Real products across education, healthcare, agriculture and civic tech.">
          <WorkGrid items={workItems.slice(0, 6)} />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
