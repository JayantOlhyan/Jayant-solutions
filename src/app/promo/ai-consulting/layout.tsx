import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Consulting – Jayant Web & AI Systems",
  description: "Explore the Ai Consulting page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/promo/ai-consulting",
    languages: {
      "en-IN": "/promo/ai-consulting",
      "hi-IN": "/hi/promo/ai-consulting",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
