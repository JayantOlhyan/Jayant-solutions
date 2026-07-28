import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance – Jayant Web & AI Systems",
  description: "Explore the Maintenance page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/services/maintenance",
    languages: {
      "en-IN": "/services/maintenance",
      "hi-IN": "/hi/services/maintenance",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
