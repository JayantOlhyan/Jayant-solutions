import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support – Jayant Web & AI Systems",
  description: "Explore the Support page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/support",
    languages: {
      "en-IN": "/support",
      "hi-IN": "/hi/support",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
