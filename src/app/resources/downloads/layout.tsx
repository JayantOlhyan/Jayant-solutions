import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads – Jayant Web & AI Systems",
  description: "Explore the Downloads page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/resources/downloads",
    languages: {
      "en-IN": "/resources/downloads",
      "hi-IN": "/hi/resources/downloads",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
