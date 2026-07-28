import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern Business Website – Jayant Solutions",
  description: "Explore the Modern Business Website page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
