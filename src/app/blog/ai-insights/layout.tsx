import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence Insights & Guides | Jayant Web & AI",
  description: "Practical analysis and implementation guides on generative AI, Large Language Models, autonomous agents, and enterprise AI transformation strategies.",
  alternates: {
    canonical: "/blog/ai-insights",
    languages: {
      "en-IN": "/blog/ai-insights",
      "hi-IN": "/hi/blog/ai-insights",
    },
  },
  openGraph: {
    title: "Artificial Intelligence Insights & Guides | Jayant Web & AI",
    description: "Practical analysis and implementation guides on generative AI, Large Language Models, autonomous agents, and enterprise AI transformation strategies.",
    url: "https://jayant-systems.online/blog/ai-insights",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Intelligence Insights & Guides | Jayant Web & AI",
    description: "Practical analysis and implementation guides on generative AI, Large Language Models, autonomous agents, and enterprise AI transformation strategies.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
