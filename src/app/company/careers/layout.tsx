import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Engineering Roles | JAYANT SYSTEMS",
  description: "Explore opportunities to collaborate on modern software engineering, AI systems, and high-impact digital products with JAYANT SYSTEMS.",
  alternates: {
    canonical: "/company/careers",
    languages: {
      "en-IN": "/company/careers",
      "hi-IN": "/hi/company/careers",
    },
  },
  openGraph: {
    title: "Careers & Engineering Roles | JAYANT SYSTEMS",
    description: "Explore opportunities to collaborate on modern software engineering, AI systems, and high-impact digital products with JAYANT SYSTEMS.",
    url: "https://jayant-systems.online/company/careers",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Engineering Roles | JAYANT SYSTEMS",
    description: "Explore opportunities to collaborate on modern software engineering, AI systems, and high-impact digital products with JAYANT SYSTEMS.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
