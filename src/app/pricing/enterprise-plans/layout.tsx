import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Plans – Jayant Solutions",
  description: "Explore the Enterprise Plans page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/pricing/enterprise-plans",
    languages: {
      "en-IN": "/pricing/enterprise-plans",
      "hi-IN": "/hi/pricing/enterprise-plans",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
