import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Engineering Roles | Jayant Web & AI Systems",
  description: "Explore opportunities to collaborate on modern software engineering, AI systems, and high-impact digital products with Jayant Web & AI Systems.",
  alternates: {
    canonical: "/company/careers",
    languages: {
      "en-IN": "/company/careers",
      "hi-IN": "/hi/company/careers",
    },
  },
  openGraph: {
    title: "Careers & Engineering Roles | Jayant Web & AI Systems",
    description: "Explore opportunities to collaborate on modern software engineering, AI systems, and high-impact digital products with Jayant Web & AI Systems.",
    url: "https://jayant-systems.online/company/careers",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Engineering Roles | Jayant Web & AI Systems",
    description: "Explore opportunities to collaborate on modern software engineering, AI systems, and high-impact digital products with Jayant Web & AI Systems.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
