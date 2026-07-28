import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Langchain Development – Jayant Solutions",
  description: "Explore the Langchain Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/technologies/langchain-development",
    languages: {
      "en-IN": "/technologies/langchain-development",
      "hi-IN": "/hi/technologies/langchain-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
