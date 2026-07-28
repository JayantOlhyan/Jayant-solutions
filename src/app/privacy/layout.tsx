import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy – Jayant Web & AI Systems",
  description: "Explore the Privacy page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/privacy",
    languages: {
      "en-IN": "/privacy",
      "hi-IN": "/hi/privacy",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
