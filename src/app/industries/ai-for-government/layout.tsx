import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Government – Jayant Solutions",
  description: "Explore the Ai For Government page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-government",
    languages: {
      "en-IN": "/industries/ai-for-government",
      "hi-IN": "/hi/industries/ai-for-government",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
