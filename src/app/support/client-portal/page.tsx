import { pageMeta } from "@/lib/seo/page";
import { CONTACT_INFO } from "@/data/contact";
import { CtaBand, LinkCards, PageHero, Section, StudioPage } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Client Support",
  description: "Where existing Jayant Systems clients get help: report a bug, request a change, or reach us on email and WhatsApp.",
  path: "/support/client-portal",
  noindex: true, // existing-client help hub; deliberately excluded from the sitemap
});

export default function ClientPortalPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Support", href: "/support" }, { name: "Client support" }]}
          eyebrow="For existing clients"
          title={["Need help with your project?", "Start here."]}
          lead={`Project documents, invoices and credentials are shared with you directly during the project. For anything else, use one of the options below. We reply within one working day (${CONTACT_INFO.hours}).`}
        />
        <Section kicker="Get help" title="Choose what you need" tone="sand">
          <LinkCards
            items={[
              { href: "/support/report-a-bug", title: "Report a bug", desc: "Something isn't working as expected." },
              { href: `/contact?service=seo-growth-support`, title: "Request a change", desc: "New content, a feature or an improvement." },
              { href: "/pricing/maintenance-plans", title: "Maintenance plans", desc: "Ongoing updates, backups and fixes." },
            ]}
          />
          <p className="mt-8 text-[16px] text-[var(--muted)]">
            Or email{" "}
            <a className="draw text-[var(--ink)]" href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}
            </a>{" "}
            ·{" "}
            <a className="draw text-[var(--ink)]" href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </p>
        </Section>
        <CtaBand />
      </main>
    </StudioPage>
  );
}
