import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Jayant Web & AI Systems",
  description: "Explore the Services page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/services",
    languages: {
      "en-IN": "/services",
      "hi-IN": "/hi/services",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
