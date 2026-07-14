import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Healthcare – Jayant Web & AI Systems",
  description: "Explore the Ai For Healthcare page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/industries/ai-for-healthcare",
    languages: {
      "en-IN": "/industries/ai-for-healthcare",
      "hi-IN": "/hi/industries/ai-for-healthcare",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
