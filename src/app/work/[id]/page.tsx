import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo/page";
import { BASE_URL, createBreadcrumbSchema } from "@/lib/seo/schema";
import { caseStudyEntries, caseStudyHref, getCaseStudy } from "@/data/framework";
import { CtaBand, PageHero, StudioPage } from "@/components/framework/blocks";
import LoopVideo from "@/components/studio/LoopVideo";
import CaseStudyExplorer from "@/components/work/CaseStudyExplorer";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyEntries.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const e = getCaseStudy(id);
  if (!e) return {};
  return pageMeta({ title: `${e.name} Case Study`, description: `${e.study.problem} ${e.study.solution}`.slice(0, 158), path: caseStudyHref(e.id) });
}

const mobileShot = (id: string) => (fs.existsSync(path.join(process.cwd(), "public", "projects", "mobile", `${id}.webp`)) ? `/projects/mobile/${id}.webp` : undefined);
const hasLoop = (id: string) => fs.existsSync(path.join(process.cwd(), "public", "media", `${id}.webm`));

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const e = getCaseStudy(id);
  if (!e) notFound();
  const { study } = e;
  const i = caseStudyEntries.findIndex((x) => x.id === id);
  const prev = caseStudyEntries[(i - 1 + caseStudyEntries.length) % caseStudyEntries.length];
  const next = caseStudyEntries[(i + 1) % caseStudyEntries.length];
  const facts = [
    { k: "Type", v: e.kind },
    { k: "Industry", v: study.industry },
    { k: "Client", v: study.client },
    ...(study.duration ? [{ k: "Timeline", v: study.duration }] : []),
  ];

  return (
    <StudioPage>
      <JsonLd
        schema={[
          createBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Case studies", url: "/resources/case-studies" },
            { name: e.name, url: caseStudyHref(e.id) },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title,
            description: study.solution,
            url: `${BASE_URL}${caseStudyHref(e.id)}`,
            image: `${BASE_URL}${study.image}`,
            creator: { "@id": `${BASE_URL}/#organization` },
            ...(study.liveWebsite ? { sameAs: study.liveWebsite } : {}),
            keywords: study.tech.join(", "),
          },
        ]}
      />
      <main>
        <PageHero
          crumbs={[{ name: "Home", href: "/" }, { name: "Case studies", href: "/resources/case-studies" }, { name: e.name }]}
          eyebrow={`${e.group} · ${study.industry}`}
          title={[e.name, study.title.split(" — ")[1]]}
          lead={e.line}
        >
          {study.liveWebsite && (
            <a href={study.liveWebsite} target="_blank" rel="noopener noreferrer" className="btn-ink">
              Open the live site
              <span className="dot !bg-[#F7F1EA]" aria-hidden="true">
                <ArrowUpRight className="size-5" />
              </span>
            </a>
          )}
          {study.githubLink && (
            <a href={study.githubLink} target="_blank" rel="noopener noreferrer" className="btn-line">
              Source code
            </a>
          )}
        </PageHero>

        <div className="container-x grid gap-8 pb-16 md:pb-24 lg:grid-cols-12">
          <div className="overflow-hidden rounded-[24px] bg-[var(--sand)] lg:col-span-8">
            {hasLoop(e.id) ? (
              <LoopVideo name={e.id} alt={`${e.name} — live product`} className="block aspect-[16/10] w-full object-cover object-top" />
            ) : (
              <div className="relative aspect-[16/10]">
                <Image src={study.image} alt={`${e.name} — live product screenshot`} fill priority sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover object-top" />
              </div>
            )}
          </div>
          <dl className="grid content-start gap-5 lg:col-span-4">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-[var(--hair)] pt-4">
                <dt className="eyebrow text-[var(--muted)]">{f.k}</dt>
                <dd className="mt-1 text-[18px] font-medium">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <CaseStudyExplorer study={study} name={e.name} mobileImage={mobileShot(e.id)} />

        <nav aria-label="More case studies" className="container-x grid gap-4 border-t border-[var(--hair)] py-12 md:grid-cols-2">
          <Link href={caseStudyHref(prev.id)} className="group rounded-[20px] border border-[var(--hair)] p-6 transition-colors hover:border-[var(--ink)]">
            <span className="eyebrow inline-flex items-center gap-2 text-[var(--muted)]"><ArrowLeft className="size-4" aria-hidden="true" /> Previous</span>
            <span className="mt-2 block text-[22px] font-medium">{prev.name}</span>
          </Link>
          <Link href={caseStudyHref(next.id)} className="group rounded-[20px] border border-[var(--hair)] p-6 text-right transition-colors hover:border-[var(--ink)]">
            <span className="eyebrow inline-flex items-center gap-2 text-[var(--muted)]">Next <ArrowRight className="size-4" aria-hidden="true" /></span>
            <span className="mt-2 block text-[22px] font-medium">{next.name}</span>
          </Link>
        </nav>

        <CtaBand />
      </main>
    </StudioPage>
  );
}
