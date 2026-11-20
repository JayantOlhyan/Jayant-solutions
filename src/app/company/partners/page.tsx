import { pageMeta } from "@/lib/seo/page";
import { CtaBand, PageHero, PrimaryCta, Section, StudioPage, TagList } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Tools & Platforms We Work With",
  description: "The frameworks, platforms and AI providers Jayant Systems builds with, chosen per project rather than forced on every client.",
  path: "/company/partners",
});

const groups = [
  { name: "Web and apps", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "FastAPI"] },
  { name: "Data", items: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Redis"] },
  { name: "AI", items: ["OpenAI", "Google Gemini", "Anthropic Claude", "Open-source models"] },
  { name: "Automation and integrations", items: ["n8n", "WhatsApp Business API", "Razorpay", "Cal.com", "Google Workspace"] },
  { name: "Hosting", items: ["Vercel", "Netlify", "AWS", "Google Cloud"] },
];

export default function PartnersPage() {
  return (
    <StudioPage>
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Tools & platforms" }]}
          eyebrow="Tools and platforms"
          title={["Technology that works for you.", "Not the other way around."]}
          lead="We pick tools for each project based on cost, fit and who will maintain it. These are the ones we use most. We're not a reseller and don't take referral fees for recommending them."
        >
          <PrimaryCta>Discuss your stack</PrimaryCta>
        </PageHero>
        <Section kicker="Our stack" title="What we build with" tone="sand">
          <div className="grid gap-10 md:grid-cols-2">
            {groups.map((g) => (
              <div key={g.name}>
                <p className="mb-4 text-[18px] font-medium">{g.name}</p>
                <TagList items={g.items} />
              </div>
            ))}
          </div>
          <a href="/resources/technologies-we-use" className="draw mt-10 inline-block text-[16px] font-medium">
            Full technology list
          </a>
        </Section>
        <Section kicker="Agencies and freelancers" title="Want to collaborate?">
          <p className="max-w-[62ch] text-[17px] leading-[1.6] text-[var(--muted)]">
            We occasionally work alongside other studios on specific projects. If you think there&apos;s a fit, get in touch with a
            short note about your work.
          </p>
        </Section>
        <CtaBand />
      </main>
    </StudioPage>
  );
}
