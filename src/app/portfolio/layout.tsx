import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & AI Project Portfolio | JAYANT SYSTEMS",
  description: "Browse delivered projects and prototypes across healthcare AI, education platforms, emergency response apps, and automated business workflows.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Software & AI Project Portfolio | JAYANT SYSTEMS",
    description: "Browse delivered projects and prototypes across healthcare AI, education platforms, emergency response apps, and automated business workflows.",
    url: "https://jayant-systems.online/portfolio",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Software & AI Project Portfolio | JAYANT SYSTEMS",
    description: "Browse delivered projects and prototypes across healthcare AI, education platforms, emergency response apps, and automated business workflows.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
