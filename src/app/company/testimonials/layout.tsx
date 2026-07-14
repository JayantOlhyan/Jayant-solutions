import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials – Jayant Web & AI Systems",
  description: "Explore the Testimonials page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
