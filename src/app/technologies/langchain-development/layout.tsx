import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Langchain Development – Jayant Web & AI Systems",
  description: "Explore the Langchain Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
