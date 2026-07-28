import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Development – Jayant Web & AI Systems",
  description: "Explore the Python Development page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/technologies/python-development",
    languages: {
      "en-IN": "/technologies/python-development",
      "hi-IN": "/hi/technologies/python-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
