import JsonLd from "@/components/seo/JsonLd";
import { createFAQSchema } from "@/lib/seo/schema";
import { pageMeta } from "@/lib/seo/page";
import { extraFaqs, faqs } from "@/data/framework";
import { CtaBand, FaqList, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Answers about services, cost, timelines, ownership, support, payments and confidentiality when working with Jayant Systems.",
  path: "/faq",
});

export default function FAQPage() {
  const all = [...faqs, ...extraFaqs];
  return (
    <StudioPage>
      <JsonLd schema={createFAQSchema(all)} />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
          eyebrow="Frequently asked questions"
          title={["Straight answers,", "before you ask."]}
          lead="If your question isn't here, ask us directly. We reply within one working day."
        >
          <PrimaryCta>Book a 15-min call</PrimaryCta>
          <SecondaryCta href="/contact">Ask a question</SecondaryCta>
        </PageHero>
        <Section kicker="Working with us" title="The essentials" tone="sand">
          <FaqList items={faqs} />
        </Section>
        <Section kicker="Practical details" title="Payments, hosting and more">
          <FaqList items={extraFaqs} />
        </Section>
        <CtaBand />
      </main>
    </StudioPage>
  );
}
