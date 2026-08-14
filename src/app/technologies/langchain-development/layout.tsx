import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LangChain AI Agent & RAG Pipeline Development | Jayant",
  description: "Architect complex LLM chains, autonomous agents, and vector database retrieval systems using LangChain to connect AI models directly to your company data.",
  alternates: {
    canonical: "/technologies/langchain-development",
    languages: {
      "en-IN": "/technologies/langchain-development",
      "hi-IN": "/hi/technologies/langchain-development",
    },
  },
  openGraph: {
    title: "LangChain AI Agent & RAG Pipeline Development | Jayant",
    description: "Architect complex LLM chains, autonomous agents, and vector database retrieval systems using LangChain to connect AI models directly to your company data.",
    url: "https://jayant-systems.online/technologies/langchain-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LangChain AI Agent & RAG Pipeline Development | Jayant",
    description: "Architect complex LLM chains, autonomous agents, and vector database retrieval systems using LangChain to connect AI models directly to your company data.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
