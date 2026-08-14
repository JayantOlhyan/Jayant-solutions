import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Strategy & Implementation Consulting | Jayant Systems",
  description: "Identify high-impact AI opportunities for your business. We audit operational bottlenecks and map custom LLM and automation implementation roadmaps.",
  alternates: {
    canonical: "/promo/ai-consulting",
    languages: {
      "en-IN": "/promo/ai-consulting",
      "hi-IN": "/hi/promo/ai-consulting",
    },
  },
  openGraph: {
    title: "AI Strategy & Implementation Consulting | Jayant Systems",
    description: "Identify high-impact AI opportunities for your business. We audit operational bottlenecks and map custom LLM and automation implementation roadmaps.",
    url: "https://jayant-systems.online/promo/ai-consulting",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Strategy & Implementation Consulting | Jayant Systems",
    description: "Identify high-impact AI opportunities for your business. We audit operational bottlenecks and map custom LLM and automation implementation roadmaps.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
