import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation – Jayant Solutions",
  description: "Explore the Business Automation page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/services/business-automation",
    languages: {
      "en-IN": "/services/business-automation",
      "hi-IN": "/hi/services/business-automation",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
