import JsonLd from "@/components/seo/JsonLd";
import { createFAQSchema } from "@/lib/seo/schema";
import { pageMeta } from "@/lib/seo/page";
import { engagementModels, faqs } from "@/data/framework";
import { CtaBand, FaqList, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage, TagList } from "@/components/framework/blocks";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = pageMeta({
  title: "Pricing — Ways to Work With Us",
  description:
    "Project-based development, monthly digital partnerships, startup MVP partnerships, technology consulting and end-to-end engagements. Defined quotations before work begins.",
  path: "/pricing",
});

const quoteIncludes = [
  "Agreed deliverables and what's out of scope",
  "Milestones and a delivery schedule",
  "Payment terms tied to milestones",
  "Ownership, source-code access and licences",
  "Support options after launch",
];

const separate = ["Domain and hosting", "Paid plugins and SaaS subscriptions", "Third-party APIs and AI usage", "Stock assets and paid fonts"];

export default function PricingPage() {
  const pricingFaqs = faqs.filter((f) => /cost|long|own|support/i.test(f.q));
  return (
    <StudioPage>
      <JsonLd schema={createFAQSchema(pricingFaqs)} />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Pricing" }]}
          eyebrow="Ways to work with us"
          title={["Know what you're paying for", "before development begins."]}
          lead="Every engagement starts with a defined quotation. The figures below are starting points; your quote depends on scope, integrations and timeline."
        >
          <PrimaryCta href="/contact/request-a-quote">Request a quotation</PrimaryCta>
          <SecondaryCta href="/contact/book-a-consultation">Book a 15-min call</SecondaryCta>
        </PageHero>

        <Section kicker="Engagement models" title="Five ways to work together" tone="sand">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((m) => (
              <li key={m.name}>
                <Link
                  href={m.href}
                  className="group flex h-full flex-col justify-between gap-8 rounded-[24px] bg-[var(--paper)] p-6 transition-colors duration-300 hover:bg-[var(--ink)] hover:text-[var(--paper)] md:p-8"
                >
                  <div>
                    <p className="text-[24px] font-medium leading-tight tracking-[-0.015em]">{m.name}</p>
                    <p className="mt-2 text-[15px] leading-[1.55] opacity-70">{m.line}</p>
                    <p className="mt-4 text-[14px] opacity-70">{m.includes.join(" · ")}</p>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <p className="display-soft text-[22px] font-bold">{m.from}</p>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--flame)] text-[var(--ink)] transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section kicker="Transparent pricing" title="Every quotation sets out">
          <div className="grid gap-12 md:grid-cols-2">
            <ul className="space-y-3 text-[17px]">
              {quoteIncludes.map((q) => (
                <li key={q} className="border-t border-[var(--hair)] pt-3">
                  {q}
                </li>
              ))}
            </ul>
            <div>
              <p className="text-[18px] font-medium">Always disclosed separately</p>
              <p className="mt-1 text-[15px] text-[var(--muted)]">Hosting, subscriptions and third-party expenses are listed on their own, never bundled into our fee.</p>
              <div className="mt-5">
                <TagList items={separate} />
              </div>
            </div>
          </div>
        </Section>

        <Section kicker="Questions" title="Pricing questions" tone="sand">
          <FaqList items={pricingFaqs} />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
