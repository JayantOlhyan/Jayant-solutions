import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies – Jayant Web & AI Systems",
  description: "Explore the Cookies page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/cookies",
    languages: {
      "en-IN": "/cookies",
      "hi-IN": "/hi/cookies",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
