import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Development – Jayant Web & AI Systems",
  description: "Explore the Ai Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/ai-development",
    languages: {
      "en-IN": "/services/ai-development",
      "hi-IN": "/hi/services/ai-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
