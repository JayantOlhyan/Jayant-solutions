import { pageMeta } from "@/lib/seo/page";
import { caseStudies } from "@/data/content";
import { workItems } from "@/data/framework";
import { CtaBand, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage, TagList, WorkGrid } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Case Studies — Problem, Build, Live Product",
  description:
    "Real products in education, healthcare, agriculture, civic tech and security: the problem, what Jayant Systems built, and a link to each live product.",
  path: "/resources/case-studies",
});

export default function CaseStudiesPage() {
  const ids = workItems.map((w) => w.id);
  const studies = caseStudies.filter((c) => ids.includes(c.id) && c.liveWebsite);
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Work", href: "/portfolio" }, { name: "Case studies" }]}
          eyebrow="Case studies"
          title={["Your ideas.", "Our digital execution."]}
          lead="The problem, what we built and the live product. We don't publish usage or growth figures we can't verify."
        >
          <PrimaryCta>Discuss your project</PrimaryCta>
          <SecondaryCta href="/portfolio">Full portfolio</SecondaryCta>
        </PageHero>

        <Section tone="sand">
          <ol className="flex flex-col gap-6">
            {studies.map((c) => (
              <li key={c.id} id={c.id} className="scroll-mt-24 rounded-[24px] bg-[var(--paper)] p-6 md:p-10">
                <p className="eyebrow text-[var(--muted)]">
                  {c.industry} · {c.client}
                </p>
                <h2 className="display-soft mt-3 text-[28px] md:text-[40px]" style={{ fontWeight: 700, lineHeight: 1.05 }}>
                  {c.title}
                </h2>
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-[15px] font-medium">The problem</p>
                    <p className="mt-1 text-[16px] leading-[1.6] text-[var(--muted)]">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-[15px] font-medium">What was built</p>
                    <p className="mt-1 text-[16px] leading-[1.6] text-[var(--muted)]">{c.solution}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <TagList items={c.tech.slice(0, 6)} />
                  <a href={c.liveWebsite} target="_blank" rel="noopener noreferrer" className="draw text-[16px] font-medium">
                    Open the live product ↗
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section kicker="At a glance" title="Live products">
          <WorkGrid items={workItems} />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
