import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms – Jayant Web & AI Systems",
  description: "Explore the Terms page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/terms",
    languages: {
      "en-IN": "/terms",
      "hi-IN": "/hi/terms",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
