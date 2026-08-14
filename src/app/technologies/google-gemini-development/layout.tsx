import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Gemini AI Development & LLM Systems | Jayant",
  description: "Harness Google Gemini LLMs for multimodal AI applications, long-context document analysis, retrieval-augmented generation, and automated business agents.",
  alternates: {
    canonical: "/technologies/google-gemini-development",
    languages: {
      "en-IN": "/technologies/google-gemini-development",
      "hi-IN": "/hi/technologies/google-gemini-development",
    },
  },
  openGraph: {
    title: "Google Gemini AI Development & LLM Systems | Jayant",
    description: "Harness Google Gemini LLMs for multimodal AI applications, long-context document analysis, retrieval-augmented generation, and automated business agents.",
    url: "https://jayant-systems.online/technologies/google-gemini-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Gemini AI Development & LLM Systems | Jayant",
    description: "Harness Google Gemini LLMs for multimodal AI applications, long-context document analysis, retrieval-augmented generation, and automated business agents.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
