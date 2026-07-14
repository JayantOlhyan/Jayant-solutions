import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve – Jayant Web & AI Systems",
  description: "Explore the Industries We Serve page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/resources/industries-we-serve",
    languages: {
      "en-IN": "/resources/industries-we-serve",
      "hi-IN": "/hi/resources/industries-we-serve",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
