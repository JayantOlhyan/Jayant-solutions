import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI, Software & Web Engineering Insights | Jayant Systems",
  description: "In-depth engineering articles, AI adoption strategies, full-stack web development guides, and business automation tutorials by Jayant Web & AI Systems.",
  alternates: {
    canonical: "/blog",
    languages: {
      "en-IN": "/blog",
      "hi-IN": "/hi/blog",
    },
  },
  openGraph: {
    title: "AI, Software & Web Engineering Insights | Jayant Systems",
    description: "In-depth engineering articles, AI adoption strategies, full-stack web development guides, and business automation tutorials by Jayant Web & AI Systems.",
    url: "https://jayant-systems.online/blog",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Software & Web Engineering Insights | Jayant Systems",
    description: "In-depth engineering articles, AI adoption strategies, full-stack web development guides, and business automation tutorials by Jayant Web & AI Systems.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
