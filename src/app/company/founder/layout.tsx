import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder – Jayant Solutions",
  description: "Explore the Founder page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/company/founder",
    languages: {
      "en-IN": "/company/founder",
      "hi-IN": "/hi/company/founder",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
