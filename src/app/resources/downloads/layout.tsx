import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Software Guides | JAYANT SYSTEMS",
  description: "Download software engineering checklists, AI adoption frameworks, and technical architecture guides to streamline your digital product development.",
  alternates: {
    canonical: "/resources/downloads",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Resources & Software Guides | JAYANT SYSTEMS",
    description: "Download software engineering checklists, AI adoption frameworks, and technical architecture guides to streamline your digital product development.",
    url: "https://jayant-systems.online/resources/downloads",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Resources & Software Guides | JAYANT SYSTEMS",
    description: "Download software engineering checklists, AI adoption frameworks, and technical architecture guides to streamline your digital product development.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
