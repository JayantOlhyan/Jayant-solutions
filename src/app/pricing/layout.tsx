import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – Jayant Web & AI Systems",
  description: "Explore the Pricing page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/pricing",
    languages: {
      "en-IN": "/pricing",
      "hi-IN": "/hi/pricing",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
