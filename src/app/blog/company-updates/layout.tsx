import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Updates – Jayant Web & AI Systems",
  description: "Explore the Company Updates page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/blog/company-updates",
    languages: {
      "en-IN": "/blog/company-updates",
      "hi-IN": "/hi/blog/company-updates",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
