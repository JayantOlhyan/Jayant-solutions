import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies We Use – Jayant Web & AI Systems",
  description: "Explore the Technologies We Use page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/resources/technologies-we-use",
    languages: {
      "en-IN": "/resources/technologies-we-use",
      "hi-IN": "/hi/resources/technologies-we-use",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
