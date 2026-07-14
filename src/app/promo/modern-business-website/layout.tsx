import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Business Website – Jayant Web & AI Systems",
  description: "Explore the Modern Business Website page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/promo/modern-business-website",
    languages: {
      "en-IN": "/promo/modern-business-website",
      "hi-IN": "/hi/promo/modern-business-website",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
