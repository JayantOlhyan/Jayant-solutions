import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jayant Web & AI Systems | Full-Stack AI Engineer",
  description: "Learn about Jayant Web & AI Systems, founded by Jayant Olhyan. We build custom AI agents, scalable web platforms, and software for growing modern businesses.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-IN": "/about",
      "hi-IN": "/hi/about",
    },
  },
  openGraph: {
    title: "About Jayant Web & AI Systems | Full-Stack AI Engineer",
    description: "Learn about Jayant Web & AI Systems, founded by Jayant Olhyan. We build custom AI agents, scalable web platforms, and software for growing modern businesses.",
    url: "https://jayant-systems.online/about",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jayant Web & AI Systems | Full-Stack AI Engineer",
    description: "Learn about Jayant Web & AI Systems, founded by Jayant Olhyan. We build custom AI agents, scalable web platforms, and software for growing modern businesses.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
