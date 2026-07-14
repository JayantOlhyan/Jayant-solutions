import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Automation – Jayant Web & AI Systems",
  description: "Explore the Business Automation page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
