import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Technology & MVP Guides | Jayant Web & AI Systems",
  description: "Actionable technology advice for founders: building Minimum Viable Products, selecting tech stacks, managing technical debt, and scaling engineering teams.",
  alternates: {
    canonical: "/blog/startup-guides",
    languages: {
      "en-IN": "/blog/startup-guides",
      "hi-IN": "/hi/blog/startup-guides",
    },
  },
  openGraph: {
    title: "Startup Technology & MVP Guides | Jayant Web & AI Systems",
    description: "Actionable technology advice for founders: building Minimum Viable Products, selecting tech stacks, managing technical debt, and scaling engineering teams.",
    url: "https://jayant-systems.online/blog/startup-guides",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Technology & MVP Guides | Jayant Web & AI Systems",
    description: "Actionable technology advice for founders: building Minimum Viable Products, selecting tech stacks, managing technical debt, and scaling engineering teams.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
