import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Plans – Jayant Web & AI Systems",
  description: "Explore the Enterprise Plans page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
