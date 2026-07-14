import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers – Jayant Web & AI Systems",
  description: "Explore the Careers page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/company/careers",
    languages: {
      "en-IN": "/company/careers",
      "hi-IN": "/hi/company/careers",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
