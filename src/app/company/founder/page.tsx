import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import { createProfilePageSchema } from "@/lib/seo/schema";
import { pageMeta } from "@/lib/seo/page";
import { workItems } from "@/data/framework";
import { CtaBand, PageHero, PrimaryCta, Section, SecondaryCta, StudioPage, WorkGrid } from "@/components/framework/blocks";

export const metadata = pageMeta({
  title: "Meet the Founder — Jayant Olhyan",
  description:
    "Jayant Olhyan started Jayant Systems so business owners can focus on their business without getting overwhelmed by technology.",
  path: "/company/founder",
});

const facts = [
  "B.Tech in Computer Science, Maharaja Surajmal Institute of Technology (MSIT), New Delhi",
  "Online BSc (Hons) in Data Science and AI, IIT Guwahati",
  "Lead, MSIT Web Development Society",
  "Winner, Elite Hack 1.0 (FarmIQ)",
  "Presented Healthkinator at the MRIIRS International AI Conference, 2026",
  "Founder of Teacher Sathi, an AI platform for teachers",
];

export default function FounderPage() {
  return (
    <StudioPage>
      <JsonLd schema={createProfilePageSchema()} />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Founder" }]}
          eyebrow="Founder's message"
          title={["You focus on the vision.", "We handle the execution."]}
        >
          <PrimaryCta>Book a call with Jayant</PrimaryCta>
          <SecondaryCta href="/resume.pdf">Download résumé (PDF)</SecondaryCta>
        </PageHero>

        <Section tone="sand">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <figure className="lg:col-span-4">
              <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[var(--paper)]">
                <Image src="/jayant.webp" alt="Jayant Olhyan, founder of Jayant Systems" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-[15px] text-[var(--muted)]">Jayant Olhyan · Founder, Jayant Systems</figcaption>
            </figure>
            <blockquote className="display-soft text-[24px] leading-[1.35] md:text-[30px] lg:col-span-8" style={{ fontWeight: 500 }}>
              <p>
                I started Jayant Systems around a simple idea: business owners should be able to focus on their business without
                getting overwhelmed by technology.
              </p>
              <p className="mt-6">
                Whether you need a website, a custom application, an automated workflow or better digital content, my goal is to
                understand what you&apos;re trying to achieve and help you build the right solution.
              </p>
              <p className="mt-6">
                I believe in practical technology, transparent communication and building systems that genuinely serve the people
                using them.
              </p>
              <footer className="mt-8 font-sans text-[16px] font-medium not-italic">— Jayant Olhyan, Founder, Jayant Systems</footer>
            </blockquote>
          </div>
        </Section>

        <Section kicker="Background" title="Facts you can check">
          <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            {facts.map((f) => (
              <li key={f} className="border-t border-[var(--hair)] pt-4 text-[17px]">
                {f}
              </li>
            ))}
          </ul>
        </Section>

        <Section kicker="Built and shipped" title="Products Jayant has built" tone="sand">
          <WorkGrid items={workItems.slice(0, 6)} />
        </Section>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
