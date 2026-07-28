import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud And Devops – Jayant Solutions",
  description: "Explore the Cloud And Devops page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
