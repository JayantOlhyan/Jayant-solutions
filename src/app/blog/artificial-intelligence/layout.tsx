import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence – Jayant Web & AI Systems",
  description: "Explore the Artificial Intelligence page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
