import { pageMeta } from "@/lib/seo/page";
import { workItems } from "@/data/framework";
import { CtaBand, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage, WorkGrid } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Verified Delivery — Live Work, Not Reviews",
  description:
    "Instead of testimonials, every product Jayant Systems lists is live and clickable. Client quotes are published only with written permission.",
  path: "/company/testimonials",
});

export default function TestimonialsPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Verified delivery" }]}
          eyebrow="Verified delivery"
          title={["Don't take our word for it.", "Open the work."]}
          lead="We don't publish testimonials we can't verify. Every product below is live; open it and judge for yourself. Client quotes will appear here only with the client's written permission."
        >
          <PrimaryCta>Book a 15-min call</PrimaryCta>
          <SecondaryCta href="/portfolio">Full portfolio</SecondaryCta>
        </PageHero>
        <Section kicker="Live products" title="Built and shipped" tone="sand">
          <WorkGrid items={workItems} />
        </Section>
        <CtaBand />
      </main>
    </StudioPage>
  );
}
