import { pageMeta } from "@/lib/seo/page";
import { commitments, processSteps, processTagline } from "@/data/framework";
import { CommitmentGrid, CtaBand, PageHero, PrimaryCta, Section, StudioPage } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "How We Work — Our 7-Step Process",
  description:
    "Discover, define, design, build, verify, launch, support and improve: how Jayant Systems runs every project, from the first conversation to the final delivery.",
  path: "/process",
});

const detail: Record<string, string> = {
  Discover: "A short call, then questions about your customers, your current tools and what success looks like.",
  Define: "A written proposal: deliverables, budget, timeline, responsibilities and what is out of scope.",
  Design: "Screens, flows and the technical plan, reviewed with you before development starts.",
  Build: "Development in agreed milestones, with a preview link so you see progress as it happens.",
  Verify: "Testing on real devices and against the acceptance criteria we agreed in step two.",
  Launch: "Deployment, documentation and handover of the agreed files, credentials and access.",
  "Support & improve": "Fixes and improvements continue under a support plan, if you choose one.",
};

export default function ProcessPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Process" }]}
          eyebrow="How we work"
          title={["From idea to execution.", "And everything in between."]}
          lead="From the first conversation to the final delivery, we keep things simple."
        >
          <PrimaryCta>Start with step one</PrimaryCta>
        </PageHero>

        <Section kicker={processTagline} title="Seven steps" tone="sand">
          <ol className="border-t border-[var(--hair)]">
            {processSteps.map((s) => (
              <li key={s.n} className="grid gap-3 border-b border-[var(--hair)] py-8 md:grid-cols-12 md:gap-8">
                <span className="eyebrow text-[var(--flame-ink)] md:col-span-1">{s.n}</span>
                <h2 className="display-soft text-[28px] md:col-span-4 md:text-[40px]" style={{ fontWeight: 700, lineHeight: 1.05 }}>
                  {s.name}
                </h2>
                <div className="md:col-span-7">
                  <p className="text-[18px] font-medium">{s.line}</p>
                  <p className="mt-2 text-[16px] leading-[1.6] text-[var(--muted)]">{detail[s.name]}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section kicker="What you can expect" title="Commitments at every step" tone="ink">
          <CommitmentGrid items={commitments} />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
