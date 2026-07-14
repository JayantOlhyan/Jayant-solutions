import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation Solutions – Jayant Web & AI Systems",
  description: "Explore the Business Automation Solutions page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
