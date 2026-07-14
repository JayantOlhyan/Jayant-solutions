import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Jayant Web & AI Systems",
  description: "Explore the About Us page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/about",
    languages: {
      "en-IN": "/about",
      "hi-IN": "/hi/about",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
