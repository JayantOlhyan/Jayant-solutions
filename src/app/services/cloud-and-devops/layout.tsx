import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud And Devops – Jayant Web & AI Systems",
  description: "Explore the Cloud And Devops page of Jayant Web & AI Systems. We provide custom AI, Web & Software Development solutions tailored for your business needs.",
  alternates: {
    canonical: "/services/cloud-and-devops",
    languages: {
      "en-IN": "/services/cloud-and-devops",
      "hi-IN": "/hi/services/cloud-and-devops",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
