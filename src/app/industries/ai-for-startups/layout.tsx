import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Startups – Jayant Web & AI Systems",
  description: "Explore the Ai For Startups page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-startups",
    languages: {
      "en-IN": "/industries/ai-for-startups",
      "hi-IN": "/hi/industries/ai-for-startups",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
