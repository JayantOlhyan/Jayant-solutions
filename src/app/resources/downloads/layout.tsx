import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Software Guides | Jayant Web & AI Systems",
  description: "Download software engineering checklists, AI adoption frameworks, and technical architecture guides to streamline your digital product development.",
  alternates: {
    canonical: "/resources/downloads",
    languages: {
      "en-IN": "/resources/downloads",
      "hi-IN": "/hi/resources/downloads",
    },
  },
  openGraph: {
    title: "Resources & Software Guides | Jayant Web & AI Systems",
    description: "Download software engineering checklists, AI adoption frameworks, and technical architecture guides to streamline your digital product development.",
    url: "https://jayant-systems.online/resources/downloads",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources & Software Guides | Jayant Web & AI Systems",
    description: "Download software engineering checklists, AI adoption frameworks, and technical architecture guides to streamline your digital product development.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
