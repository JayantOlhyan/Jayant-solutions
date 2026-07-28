import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development – Jayant Solutions",
  description: "Explore the Web Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
