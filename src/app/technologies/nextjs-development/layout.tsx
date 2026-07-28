import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Development – Jayant Web & AI Systems",
  description: "Explore the Nextjs Development page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/technologies/nextjs-development",
    languages: {
      "en-IN": "/technologies/nextjs-development",
      "hi-IN": "/hi/technologies/nextjs-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
