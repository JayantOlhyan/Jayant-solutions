import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence – Jayant Solutions",
  description: "Explore the Artificial Intelligence page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/artificial-intelligence",
    languages: {
      "en-IN": "/blog/artificial-intelligence",
      "hi-IN": "/hi/blog/artificial-intelligence",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
