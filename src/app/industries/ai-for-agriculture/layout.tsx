import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Agriculture – Jayant Solutions",
  description: "Explore the Ai For Agriculture page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-agriculture",
    languages: {
      "en-IN": "/industries/ai-for-agriculture",
      "hi-IN": "/hi/industries/ai-for-agriculture",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
