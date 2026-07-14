import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer – Jayant Web & AI Systems",
  description: "Explore the Disclaimer page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/disclaimer",
    languages: {
      "en-IN": "/disclaimer",
      "hi-IN": "/hi/disclaimer",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
