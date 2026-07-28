import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners – Jayant Solutions",
  description: "Explore the Partners page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/company/partners",
    languages: {
      "en-IN": "/company/partners",
      "hi-IN": "/hi/company/partners",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
