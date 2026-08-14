import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Development & LLM Solutions | Jayant Systems",
  description: "Develop enterprise AI applications, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow agents engineered for business operations.",
  alternates: {
    canonical: "/services/ai-development",
    languages: {
      "en-IN": "/services/ai-development",
      "hi-IN": "/hi/services/ai-development",
    },
  },
  openGraph: {
    title: "Custom AI Development & LLM Solutions | Jayant Systems",
    description: "Develop enterprise AI applications, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow agents engineered for business operations.",
    url: "https://jayant-systems.online/services/ai-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Development & LLM Solutions | Jayant Systems",
    description: "Develop enterprise AI applications, Retrieval-Augmented Generation (RAG) pipelines, and intelligent workflow agents engineered for business operations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
