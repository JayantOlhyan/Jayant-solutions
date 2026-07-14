import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development – Jayant Web & AI Systems",
  description: "Explore the Web Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/blog/web-development",
    languages: {
      "en-IN": "/blog/web-development",
      "hi-IN": "/hi/blog/web-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
