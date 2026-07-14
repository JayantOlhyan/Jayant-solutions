import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Government – Jayant Web & AI Systems",
  description: "Explore the Ai For Government page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/industries/ai-for-government",
    languages: {
      "en-IN": "/industries/ai-for-government",
      "hi-IN": "/hi/industries/ai-for-government",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
