import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting – Jayant Web & AI Systems",
  description: "Explore the Technology Consulting page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/technology-consulting",
    languages: {
      "en-IN": "/services/technology-consulting",
      "hi-IN": "/hi/services/technology-consulting",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
