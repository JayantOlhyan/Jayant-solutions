import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud – Jayant Solutions",
  description: "Explore the Cloud page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/cloud",
    languages: {
      "en-IN": "/blog/cloud",
      "hi-IN": "/hi/blog/cloud",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
