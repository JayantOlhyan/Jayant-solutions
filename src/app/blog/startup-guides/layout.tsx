import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Guides – Jayant Web & AI Systems",
  description: "Explore the Startup Guides page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/startup-guides",
    languages: {
      "en-IN": "/blog/startup-guides",
      "hi-IN": "/hi/blog/startup-guides",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
