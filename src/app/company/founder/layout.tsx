import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder – Jayant Web & AI Systems",
  description: "Explore the Founder page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
