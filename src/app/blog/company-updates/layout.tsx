import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Updates – Jayant Web & AI Systems",
  description: "Explore the Company Updates page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/company-updates",
    languages: {
      "en-IN": "/blog/company-updates",
      "hi-IN": "/hi/blog/company-updates",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
