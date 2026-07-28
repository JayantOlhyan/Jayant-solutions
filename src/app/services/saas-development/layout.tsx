import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saas Development – Jayant Solutions",
  description: "Explore the Saas Development page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
