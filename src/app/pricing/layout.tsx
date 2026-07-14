import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – Jayant Web & AI Systems",
  description: "Explore the Pricing page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/pricing",
    languages: {
      "en-IN": "/pricing",
      "hi-IN": "/hi/pricing",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
