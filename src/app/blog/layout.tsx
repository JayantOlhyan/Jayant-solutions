import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI, Software & Web Engineering Insights | JAYANT SYSTEMS",
  description: "In-depth engineering articles, AI adoption strategies, full-stack web development guides, and business automation tutorials by JAYANT SYSTEMS.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "AI, Software & Web Engineering Insights | JAYANT SYSTEMS",
    description: "In-depth engineering articles, AI adoption strategies, full-stack web development guides, and business automation tutorials by JAYANT SYSTEMS.",
    url: "https://jayant-systems.online/blog",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "AI, Software & Web Engineering Insights | JAYANT SYSTEMS",
    description: "In-depth engineering articles, AI adoption strategies, full-stack web development guides, and business automation tutorials by JAYANT SYSTEMS.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
