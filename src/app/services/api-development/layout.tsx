import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Api Development – Jayant Web & AI Systems",
  description: "Explore the Api Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/api-development",
    languages: {
      "en-IN": "/services/api-development",
      "hi-IN": "/hi/services/api-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
