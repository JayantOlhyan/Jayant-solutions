import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Openai Integration – Jayant Solutions",
  description: "Explore the Openai Integration page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
