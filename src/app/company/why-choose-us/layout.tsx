import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us – Jayant Web & AI Systems",
  description: "Explore the Why Choose Us page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/company/why-choose-us",
    languages: {
      "en-IN": "/company/why-choose-us",
      "hi-IN": "/hi/company/why-choose-us",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
