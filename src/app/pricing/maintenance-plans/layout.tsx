import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance Plans – Jayant Web & AI Systems",
  description: "Explore the Maintenance Plans page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/pricing/maintenance-plans",
    languages: {
      "en-IN": "/pricing/maintenance-plans",
      "hi-IN": "/hi/pricing/maintenance-plans",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
