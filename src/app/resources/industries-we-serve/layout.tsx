import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve – Jayant Solutions",
  description: "Explore the Industries We Serve page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/resources/industries-we-serve",
    languages: {
      "en-IN": "/resources/industries-we-serve",
      "hi-IN": "/hi/resources/industries-we-serve",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
