import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance – Jayant Web & AI Systems",
  description: "Explore the Maintenance page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/maintenance",
    languages: {
      "en-IN": "/services/maintenance",
      "hi-IN": "/hi/services/maintenance",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
