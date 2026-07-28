import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation – Jayant Web & AI Systems",
  description: "Explore the Automation page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/automation",
    languages: {
      "en-IN": "/blog/automation",
      "hi-IN": "/hi/blog/automation",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
