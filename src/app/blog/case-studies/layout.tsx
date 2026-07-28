import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies – Jayant Solutions",
  description: "Explore the Case Studies page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/case-studies",
    languages: {
      "en-IN": "/blog/case-studies",
      "hi-IN": "/hi/blog/case-studies",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
