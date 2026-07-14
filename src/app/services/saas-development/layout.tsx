import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saas Development – Jayant Web & AI Systems",
  description: "Explore the Saas Development page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/saas-development",
    languages: {
      "en-IN": "/services/saas-development",
      "hi-IN": "/hi/services/saas-development",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
