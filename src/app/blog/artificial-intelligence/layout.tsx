import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering & Large Language Models | Jayant Systems",
  description: "Explore the mechanics of Large Language Models, prompt engineering, RAG databases, and practical business implementations of artificial intelligence.",
  alternates: {
    canonical: "/blog/artificial-intelligence",
    languages: {
      "en-IN": "/blog/artificial-intelligence",
      "hi-IN": "/hi/blog/artificial-intelligence",
    },
  },
  openGraph: {
    title: "AI Engineering & Large Language Models | Jayant Systems",
    description: "Explore the mechanics of Large Language Models, prompt engineering, RAG databases, and practical business implementations of artificial intelligence.",
    url: "https://jayant-systems.online/blog/artificial-intelligence",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineering & Large Language Models | Jayant Systems",
    description: "Explore the mechanics of Large Language Models, prompt engineering, RAG databases, and practical business implementations of artificial intelligence.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
