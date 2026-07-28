import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal – Jayant Solutions",
  description: "Explore the Client Portal page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
