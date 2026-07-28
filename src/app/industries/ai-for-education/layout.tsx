import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Education – Jayant Solutions",
  description: "Explore the Ai For Education page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-education",
    languages: {
      "en-IN": "/industries/ai-for-education",
      "hi-IN": "/hi/industries/ai-for-education",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
