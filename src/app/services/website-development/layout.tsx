import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development – Jayant Web & AI Systems",
  description: "Explore the Website Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/website-development",
    languages: {
      "en-IN": "/services/website-development",
      "hi-IN": "/hi/services/website-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
