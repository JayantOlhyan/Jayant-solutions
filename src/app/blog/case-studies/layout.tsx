import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies – Jayant Web & AI Systems",
  description: "Explore the Case Studies page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/blog/case-studies",
    languages: {
      "en-IN": "/blog/case-studies",
      "hi-IN": "/hi/blog/case-studies",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
