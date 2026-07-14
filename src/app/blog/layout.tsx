import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Jayant Web & AI Systems",
  description: "Explore the Blog page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/blog",
    languages: {
      "en-IN": "/blog",
      "hi-IN": "/hi/blog",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
