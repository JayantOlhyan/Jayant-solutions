import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials – Jayant Web & AI Systems",
  description: "Explore the Testimonials page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/company/testimonials",
    languages: {
      "en-IN": "/company/testimonials",
      "hi-IN": "/hi/company/testimonials",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
