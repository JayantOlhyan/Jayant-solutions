import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Jayant Web & AI Systems",
  description: "Explore the FAQ page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/faq",
    languages: {
      "en-IN": "/faq",
      "hi-IN": "/hi/faq",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
