import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our 6-Step Software Development Process | Jayant Systems",
  description: "Discover how we build software from discovery and UI/UX design to development, rigorous QA testing, cloud deployment, and long-term maintenance retainers.",
  alternates: {
    canonical: "/process",
    languages: {
      "en-IN": "/process",
      "hi-IN": "/hi/process",
    },
  },
  openGraph: {
    title: "Our 6-Step Software Development Process | Jayant Systems",
    description: "Discover how we build software from discovery and UI/UX design to development, rigorous QA testing, cloud deployment, and long-term maintenance retainers.",
    url: "https://jayant-systems.online/process",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our 6-Step Software Development Process | Jayant Systems",
    description: "Discover how we build software from discovery and UI/UX design to development, rigorous QA testing, cloud deployment, and long-term maintenance retainers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
