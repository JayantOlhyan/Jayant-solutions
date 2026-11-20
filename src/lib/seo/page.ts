import type { Metadata } from "next";

const SITE = "JAYANT SYSTEMS";

/** Per-page metadata with canonical, Open Graph and Twitter in one place. */
export function pageMeta({
  title,
  description,
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
  const full = title.includes(SITE) || title.includes("Jayant Systems") ? title : `${title} | ${SITE}`;
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
