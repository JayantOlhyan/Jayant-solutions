import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JAYANT SYSTEMS | Full-Stack AI Engineer",
  description: "Learn about JAYANT SYSTEMS, founded by Jayant Olhyan. We build custom AI agents, scalable web platforms, and software for growing modern businesses.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-IN": "/about",
      "hi-IN": "/hi/about",
    },
  },
  openGraph: {
    title: "About JAYANT SYSTEMS | Full-Stack AI Engineer",
    description: "Learn about JAYANT SYSTEMS, founded by Jayant Olhyan. We build custom AI agents, scalable web platforms, and software for growing modern businesses.",
    url: "https://jayant-systems.online/about",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About JAYANT SYSTEMS | Full-Stack AI Engineer",
    description: "Learn about JAYANT SYSTEMS, founded by Jayant Olhyan. We build custom AI agents, scalable web platforms, and software for growing modern businesses.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
