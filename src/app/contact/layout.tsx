import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Jayant Web & AI Systems",
  description: "Explore the Contact Us page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-IN": "/contact",
      "hi-IN": "/hi/contact",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
