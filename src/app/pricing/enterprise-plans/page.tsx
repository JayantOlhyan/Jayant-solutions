import { pageMeta } from "@/lib/seo/page";
import { divisionHref, liveDivisions } from "@/data/framework";
import { CtaBand, LinkCards, PageHero, PrimaryCta, ProcessList, Section, SecondaryCta, StudioPage } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "End-to-End Digital Partnership",
  description:
    "One coordinated engagement covering web, software, automation, design and growth for organisations with several digital needs. Scoped and quoted after discovery.",
  path: "/pricing/enterprise-plans",
});

const how = [
  { n: "01", name: "Discovery", line: "We map your current tools, teams and priorities." },
  { n: "02", name: "Roadmap", line: "A phased plan with costs for each phase, agreed in writing." },
  { n: "03", name: "Delivery", line: "Work runs in milestones with one point of contact." },
  { n: "04", name: "Review", line: "Regular reviews to reprioritise as the business changes." },
];

export default function EnterprisePlansPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }, { name: "End-to-end partnership" }]}
          eyebrow="End-to-end digital partnership"
          title={["Multiple digital needs.", "One reliable partner."]}
          lead="A coordinated engagement covering several digital requirements through one partner, instead of managing separate vendors."
        >
          <PrimaryCta href="/contact/request-a-quote">Request a proposal</PrimaryCta>
          <SecondaryCta href="/contact/book-a-consultation">Book a 15-min call</SecondaryCta>
        </PageHero>

        <Section kicker="How it works" title="Scoped in phases, quoted per phase" tone="sand">
          <ProcessList steps={how} />
          <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.6] text-[var(--muted)]">
            Response times, support hours and ownership terms are defined in the agreement. We don&apos;t promise round-the-clock
            staffing or uptime figures we can&apos;t contract for.
          </p>
        </Section>

        <Section kicker="What it can cover" title="Any combination of our divisions">
          <LinkCards items={liveDivisions().map((d) => ({ href: divisionHref(d.slug), title: d.short, desc: d.promise, meta: `${d.num} · ${d.verb}` }))} />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
