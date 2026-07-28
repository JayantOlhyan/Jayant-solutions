import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Policy – Jayant Solutions",
  description: "Explore the Pricing Policy page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/pricing-policy",
    languages: {
      "en-IN": "/pricing-policy",
      "hi-IN": "/hi/pricing-policy",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
