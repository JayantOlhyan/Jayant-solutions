import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development – Jayant Web & AI Systems",
  description: "Explore the Software Development page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/blog/software-development",
    languages: {
      "en-IN": "/blog/software-development",
      "hi-IN": "/hi/blog/software-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
