import { pageMeta } from "@/lib/seo/page";
import { CONTACT_INFO } from "@/data/contact";
import { CtaBand, PageHero, Section, StudioPage } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Careers & Collaboration",
  description: "Jayant Systems has no open positions right now. Developers, designers and editors can still introduce themselves for future projects.",
  path: "/company/careers",
});

export default function CareersPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Careers" }]}
          eyebrow="Careers"
          title={["No open roles right now.", "Introductions are welcome."]}
          lead="We don't have open positions at the moment. If you're a developer, designer or video editor who cares about practical, well-made work, send a short note with links to things you've built."
        />
        <Section kicker="How to reach us" title="Send an introduction" tone="sand">
          <p className="max-w-[62ch] text-[17px] leading-[1.6] text-[var(--muted)]">
            Email{" "}
            <a className="draw text-[var(--ink)]" href={`mailto:${CONTACT_INFO.email}?subject=Introduction`}>
              {CONTACT_INFO.email}
            </a>{" "}
            with your portfolio or GitHub. We read every message and reply when a suitable project comes up.
          </p>
        </Section>
        <CtaBand />
      </main>
    </StudioPage>
  );
}
