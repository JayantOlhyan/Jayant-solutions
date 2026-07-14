import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai For Finance – Jayant Web & AI Systems",
  description: "Explore the Ai For Finance page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/industries/ai-for-finance",
    languages: {
      "en-IN": "/industries/ai-for-finance",
      "hi-IN": "/hi/industries/ai-for-finance",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
