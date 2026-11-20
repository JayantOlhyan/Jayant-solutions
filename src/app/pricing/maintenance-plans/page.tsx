import Link from "next/link";
import { pageMeta } from "@/lib/seo/page";
import { CtaBand, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage, FaqList } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Website Maintenance & Monthly Support Plans",
  description:
    "Monthly website maintenance and support plans: updates, backups, fixes, performance checks and content changes, with response times agreed in writing.",
  path: "/pricing/maintenance-plans",
});

const plans = [
  {
    name: "Essential",
    desc: "Basic care for small business websites.",
    price: "₹2,999",
    features: ["Automated uptime monitoring", "Monthly backups", "Core and plugin updates", "Minor bug fixes", "Email support"],
  },
  {
    name: "Professional",
    desc: "For growing websites that change often.",
    price: "₹6,999",
    features: ["Everything in Essential", "Weekly backups", "Performance checks", "Security updates and patches", "Up to 5 content updates a month", "Email and chat support"],
  },
  {
    name: "Business",
    desc: "For business-critical websites and web apps.",
    price: "₹12,999",
    features: ["Everything in Professional", "Daily backups", "Performance optimisation", "Up to 15 content updates a month", "Priority bug fixes", "Monthly maintenance report"],
  },
];

const notes = [
  { q: "What response time do I get?", a: "Response times are written into your support agreement for each plan, so you know exactly what to expect. Automated monitoring runs continuously; people respond during working hours (Mon–Sat, 9:00–20:00 IST) unless agreed otherwise." },
  { q: "Are hosting and licences included?", a: "No. Hosting, domains and paid plugins are billed separately and disclosed upfront." },
  { q: "Can I cancel?", a: "Yes. Notice periods and terms are in the support agreement." },
];

export default function MaintenancePlansPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Pricing", href: "/pricing" }, { name: "Maintenance plans" }]}
          eyebrow="Monthly digital partnership"
          title={["Launch better.", "Stay optimised. Keep improving."]}
          lead="Building is only the beginning. Our maintenance plans keep your website updated, backed up and improving after launch."
        >
          <PrimaryCta href="/contact?service=seo-growth-support">Choose a plan</PrimaryCta>
          <SecondaryCta href="/services/seo-growth-support">SEO, growth & support</SecondaryCta>
        </PageHero>

        <Section kicker="Plans" title="Monthly support, priced upfront" tone="sand">
          <ul className="grid gap-4 md:grid-cols-3">
            {plans.map((p) => (
              <li key={p.name} className="flex flex-col rounded-[24px] bg-[var(--paper)] p-7">
                <p className="text-[22px] font-medium">{p.name}</p>
                <p className="mt-1 text-[15px] text-[var(--muted)]">{p.desc}</p>
                <p className="display-soft mt-6 text-[40px] font-bold leading-none">
                  {p.price}
                  <span className="ml-1 font-sans text-[15px] font-normal text-[var(--muted)]">/ month</span>
                </p>
                <ul className="mt-6 space-y-2 text-[15px]">
                  {p.features.map((f) => (
                    <li key={f} className="border-t border-[var(--hair)] pt-2">
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] text-[var(--muted)]">
            Prices exclude hosting and third-party licences. Larger applications:{" "}
            <Link href="/pricing/enterprise-plans" className="draw text-[var(--ink)]">
              end-to-end partnership
            </Link>
            .
          </p>
        </Section>

        <Section kicker="Good to know" title="Support, in writing">
          <FaqList items={notes} />
        </Section>

        <CtaBand service="seo-growth-support" />
      </main>
    </StudioPage>
  );
}
