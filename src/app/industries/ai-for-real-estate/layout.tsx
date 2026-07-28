import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Real Estate – Jayant Web & AI Systems",
  description: "Explore the Ai For Real Estate page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-real-estate",
    languages: {
      "en-IN": "/industries/ai-for-real-estate",
      "hi-IN": "/hi/industries/ai-for-real-estate",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
