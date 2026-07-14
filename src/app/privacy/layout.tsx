import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy – Jayant Web & AI Systems",
  description: "Explore the Privacy page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/privacy",
    languages: {
      "en-IN": "/privacy",
      "hi-IN": "/hi/privacy",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
