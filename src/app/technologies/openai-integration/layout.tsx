import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openai Integration – Jayant Web & AI Systems",
  description: "Explore the Openai Integration page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/technologies/openai-integration",
    languages: {
      "en-IN": "/technologies/openai-integration",
      "hi-IN": "/hi/technologies/openai-integration",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
