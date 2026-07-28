import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Retail – Jayant Solutions",
  description: "Explore the Ai For Retail page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-retail",
    languages: {
      "en-IN": "/industries/ai-for-retail",
      "hi-IN": "/hi/industries/ai-for-retail",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
