import { pageMeta } from "@/lib/seo/page";
import { CONTACT_INFO } from "@/data/contact";
import { CtaBand, FaqList, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage } from "@/components/framework/blocks";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQSchema } from "@/lib/seo/schema";

export const metadata = pageMeta({
  title: "Service Status & Incident Reporting",
  description: "How to report an outage or incident on a website or application maintained by Jayant Systems, and what happens next.",
  path: "/support/service-status",
});

const steps = [
  { q: "Something is down. What should I do?", a: `Report it through the bug form or WhatsApp (${CONTACT_INFO.whatsappNumber}) with the URL, what you expected and a screenshot if possible.` },
  { q: "How fast will you respond?", a: "Response times are set in your support agreement. Automated monitoring alerts us to outages on sites under a maintenance plan; people respond during working hours unless your agreement says otherwise." },
  { q: "Will you tell us what happened?", a: "Yes. For incidents on maintained sites we send a short written note: what broke, what we fixed and what we changed to prevent a repeat." },
];

export default function ServiceStatusPage() {
  return (
    <StudioPage>
      <JsonLd schema={createFAQSchema(steps)} />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Support", href: "/support" }, { name: "Service status" }]}
          eyebrow="Service status"
          title={["Report an incident.", "We'll take it from there."]}
          lead="We don't run a public status dashboard. If a site or app we maintain isn't working, report it and we'll respond under the terms of your support plan."
        >
          <PrimaryCta href="/support/report-a-bug">Report an issue</PrimaryCta>
          <SecondaryCta href={CONTACT_INFO.whatsappUrl}>WhatsApp us</SecondaryCta>
        </PageHero>
        <Section kicker="How incidents work" title="What happens next" tone="sand">
          <FaqList items={steps} />
        </Section>
        <CtaBand />
      </main>
    </StudioPage>
  );
}
