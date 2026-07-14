import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Jayant Web & AI Systems",
  description: "Explore the FAQ page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/faq",
    languages: {
      "en-IN": "/faq",
      "hi-IN": "/hi/faq",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
