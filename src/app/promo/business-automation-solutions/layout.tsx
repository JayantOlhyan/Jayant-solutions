import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation Solutions – Jayant Solutions",
  description: "Explore the Business Automation Solutions page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/promo/business-automation-solutions",
    languages: {
      "en-IN": "/promo/business-automation-solutions",
      "hi-IN": "/hi/promo/business-automation-solutions",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
