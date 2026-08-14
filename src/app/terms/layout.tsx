import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Engagement | Jayant Web & AI Systems",
  description: "Commercial terms of service, engagement agreements, source code ownership clauses, and client responsibilities for Jayant Web & AI Systems projects.",
  alternates: {
    canonical: "/terms",
    languages: {
      "en-IN": "/terms",
      "hi-IN": "/hi/terms",
    },
  },
  openGraph: {
    title: "Terms of Service & Engagement | Jayant Web & AI Systems",
    description: "Commercial terms of service, engagement agreements, source code ownership clauses, and client responsibilities for Jayant Web & AI Systems projects.",
    url: "https://jayant-systems.online/terms",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Engagement | Jayant Web & AI Systems",
    description: "Commercial terms of service, engagement agreements, source code ownership clauses, and client responsibilities for Jayant Web & AI Systems projects.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
