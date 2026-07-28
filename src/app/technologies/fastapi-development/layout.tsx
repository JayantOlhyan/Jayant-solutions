import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fastapi Development – Jayant Web & AI Systems",
  description: "Explore the Fastapi Development page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/technologies/fastapi-development",
    languages: {
      "en-IN": "/technologies/fastapi-development",
      "hi-IN": "/hi/technologies/fastapi-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
