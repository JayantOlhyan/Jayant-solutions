import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio – Jayant Solutions",
  description: "Explore the Portfolio page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/portfolio",
    languages: {
      "en-IN": "/portfolio",
      "hi-IN": "/hi/portfolio",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
