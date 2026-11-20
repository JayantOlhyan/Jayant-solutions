import type { Metadata } from "next";

const SITE = "JAYANT SYSTEMS";

/** "Primary keyword | Brand", using the richest brand suffix that keeps the title ≤ 60 chars. */
function brandTitle(title: string) {
  const suffixes = [" | Jayant Systems — Digital Studio, New Delhi", " | Jayant Systems, New Delhi", ` | ${SITE}`];
  return title + (suffixes.find((s) => (title + s).length <= 60) ?? suffixes[suffixes.length - 1]);
}

/** Bring short descriptions toward 140–160 chars with a real, non-filler sentence when it fits. */
function fitDescription(d: string) {
  const base = /[.!?]$/.test(d.trim()) ? d.trim() : `${d.trim()}.`;
  if (base.length >= 140) return base;
  const adds = [" Founder-led studio in New Delhi; book a 15-minute call.", " Founder-led studio in New Delhi.", " Book a 15-minute call."];
  const fit = adds.find((a) => (base + a).length <= 160);
  return fit ? base + fit : base;
}

/** Per-page metadata with canonical, Open Graph and Twitter in one place. */
export function pageMeta({
  title,
  description: rawDescription,
  path,
  ogTitle,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  noindex?: boolean;
}): Metadata {
  let description = rawDescription;
  const full = title.includes(SITE) || title.includes("Jayant Systems") ? title : brandTitle(title);
  description = fitDescription(description);
  return {
    title: full,
    description,
    alternates: { canonical: path },
    openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
      title: ogTitle ?? full,
      description,
      url: path,
      siteName: SITE,
      locale: "en_IN",
      type: "website",
    },
    twitter: { images: ["/twitter-image"],  card: "summary_large_image", title: ogTitle ?? full, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
