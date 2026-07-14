import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mvp Development – Jayant Web & AI Systems",
  description: "Explore the Mvp Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/mvp-development",
    languages: {
      "en-IN": "/services/mvp-development",
      "hi-IN": "/hi/services/mvp-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
