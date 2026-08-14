import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Principles & Case Studies | Jayant Systems",
  description: "Explore modern digital product design: user journey mapping, design systems, interactive prototypes, and UX optimization for higher lead conversion.",
  alternates: {
    canonical: "/blog/ui-ux",
    languages: {
      "en-IN": "/blog/ui-ux",
      "hi-IN": "/hi/blog/ui-ux",
    },
  },
  openGraph: {
    title: "UI/UX Design Principles & Case Studies | Jayant Systems",
    description: "Explore modern digital product design: user journey mapping, design systems, interactive prototypes, and UX optimization for higher lead conversion.",
    url: "https://jayant-systems.online/blog/ui-ux",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Principles & Case Studies | Jayant Systems",
    description: "Explore modern digital product design: user journey mapping, design systems, interactive prototypes, and UX optimization for higher lead conversion.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
