import { pageMeta } from "@/lib/seo/page";
import { caseStudyEntries, projectGroups } from "@/data/framework";
import { CtaBand, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage } from "@/components/framework/blocks";
import CaseStudyIndex from "@/components/work/CaseStudyIndex";

export const metadata = pageMeta({
  title: "Case Studies — Problem, Build, Live Product",
  description:
    "Real products in education, healthcare, agriculture, civic tech and security: the problem, what Jayant Systems built, and a link to each live product.",
  path: "/resources/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Work", href: "/portfolio" }, { name: "Case studies" }]}
          eyebrow="Case studies"
          title={["Your ideas.", "Our digital execution."]}
          lead="An interactive case study for every live project: the problem, what we built and the product itself. We don't publish usage or growth figures we can't verify."
        >
          <PrimaryCta>Discuss your project</PrimaryCta>
          <SecondaryCta href="/portfolio">Full portfolio</SecondaryCta>
        </PageHero>

        <Section tone="sand" kicker="Every kind of project" title="Pick one and explore it." intro="Client sites, our own products, hackathon builds and college work. Each case study walks through the problem, the build and the result, with the live product to try.">
          <CaseStudyIndex
            groups={projectGroups}
            items={caseStudyEntries.map((e) => ({ id: e.id, name: e.name, kind: e.kind, line: e.line, group: e.group, industry: e.study.industry, image: e.study.image }))}
          />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
