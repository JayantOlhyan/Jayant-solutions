import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Healthcare – Jayant Solutions",
  description: "Explore the Ai For Healthcare page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-healthcare",
    languages: {
      "en-IN": "/industries/ai-for-healthcare",
      "hi-IN": "/hi/industries/ai-for-healthcare",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
