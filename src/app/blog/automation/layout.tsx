import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation – Jayant Web & AI Systems",
  description: "Explore the Automation page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/blog/automation",
    languages: {
      "en-IN": "/blog/automation",
      "hi-IN": "/hi/blog/automation",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
