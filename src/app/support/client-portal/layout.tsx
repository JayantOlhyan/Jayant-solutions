import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal – Jayant Web & AI Systems",
  description: "Explore the Client Portal page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/support/client-portal",
    languages: {
      "en-IN": "/support/client-portal",
      "hi-IN": "/hi/support/client-portal",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
