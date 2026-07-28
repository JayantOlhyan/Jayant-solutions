import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Manufacturing – Jayant Web & AI Systems",
  description: "Explore the Ai For Manufacturing page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-manufacturing",
    languages: {
      "en-IN": "/industries/ai-for-manufacturing",
      "hi-IN": "/hi/industries/ai-for-manufacturing",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
