import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Finance – Jayant Solutions",
  description: "Explore the Ai For Finance page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/industries/ai-for-finance",
    languages: {
      "en-IN": "/industries/ai-for-finance",
      "hi-IN": "/hi/industries/ai-for-finance",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
