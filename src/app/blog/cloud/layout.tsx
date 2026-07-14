import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud – Jayant Web & AI Systems",
  description: "Explore the Cloud page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/blog/cloud",
    languages: {
      "en-IN": "/blog/cloud",
      "hi-IN": "/hi/blog/cloud",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
