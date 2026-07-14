import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Retail – Jayant Web & AI Systems",
  description: "Explore the Ai For Retail page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/industries/ai-for-retail",
    languages: {
      "en-IN": "/industries/ai-for-retail",
      "hi-IN": "/hi/industries/ai-for-retail",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
