import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparent Software & AI Pricing Plans | Jayant Systems",
  description: "Explore upfront pricing packages for custom business websites, workflow automations, and full-scale AI systems with fixed milestones and zero hidden fees.",
  alternates: {
    canonical: "/pricing",
    languages: {
      "en-IN": "/pricing",
      "hi-IN": "/hi/pricing",
    },
  },
  openGraph: {
    title: "Transparent Software & AI Pricing Plans | Jayant Systems",
    description: "Explore upfront pricing packages for custom business websites, workflow automations, and full-scale AI systems with fixed milestones and zero hidden fees.",
    url: "https://jayant-systems.online/pricing",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Software & AI Pricing Plans | Jayant Systems",
    description: "Explore upfront pricing packages for custom business websites, workflow automations, and full-scale AI systems with fixed milestones and zero hidden fees.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
