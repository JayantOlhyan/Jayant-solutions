import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Agriculture – Jayant Web & AI Systems",
  description: "Explore the Ai For Agriculture page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/industries/ai-for-agriculture",
    languages: {
      "en-IN": "/industries/ai-for-agriculture",
      "hi-IN": "/hi/industries/ai-for-agriculture",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
