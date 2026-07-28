import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Jayant Web & AI Systems",
  description: "Explore the Blog page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog",
    languages: {
      "en-IN": "/blog",
      "hi-IN": "/hi/blog",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
