import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners – Jayant Web & AI Systems",
  description: "Explore the Partners page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
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
