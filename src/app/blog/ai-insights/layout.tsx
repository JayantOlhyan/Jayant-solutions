import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Insights – Jayant Web & AI Systems",
  description: "Explore the Ai Insights page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/ai-insights",
    languages: {
      "en-IN": "/blog/ai-insights",
      "hi-IN": "/hi/blog/ai-insights",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
