import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance Plans – Jayant Solutions",
  description: "Explore the Maintenance Plans page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
