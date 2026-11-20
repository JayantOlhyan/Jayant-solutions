import { pageMeta } from "@/lib/seo/page";
import { commitments, headlines } from "@/data/framework";
import { CommitmentGrid, CtaBand, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Our Commitments — Why Work With Us",
  description:
    "Transparent pricing, defined scope, direct communication, documented handover and founder-led execution. The commitments Jayant Systems makes on every project.",
  path: "/company/why-choose-us",
});

const wontDo = [
  "Guarantee revenue or Google rankings",
  "Promise unlimited revisions",
  "Promise lifetime support or 100% uptime",
  "Hide hosting, subscription or third-party costs",
  "Recommend features your business doesn't need",
];

export default function WhyChooseUsPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Our commitments" }]}
          eyebrow="Our commitments"
          title={[headlines.philosophy[0], headlines.philosophy[1]]}
          lead="Commitments we can honour in a contract, not performance guarantees we can't control."
        >
          <PrimaryCta>Book a 15-min call</PrimaryCta>
          <SecondaryCta href="/process">See how we work</SecondaryCta>
        </PageHero>

        <Section kicker="Twelve commitments" title="What you can hold us to" tone="sand">
          <CommitmentGrid items={commitments} />
        </Section>

        <Section kicker="And what we won't do" title="Promises we don't make">
          <ul className="grid gap-3 md:grid-cols-2">
            {wontDo.map((w) => (
              <li key={w} className="rounded-[20px] border border-[var(--hair)] p-5 text-[17px]">
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.6] text-[var(--muted)]">
            Anything we do promise is written into the project agreement before work begins.
          </p>
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
