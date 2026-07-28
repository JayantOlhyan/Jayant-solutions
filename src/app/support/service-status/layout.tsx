import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Status – Jayant Web & AI Systems",
  description: "Explore the Service Status page of Jayant Web & AI Systems. I build custom websites, AI automation systems, and business software designed for your operational needs.",
  alternates: {
    canonical: "/support/service-status",
    languages: {
      "en-IN": "/support/service-status",
      "hi-IN": "/hi/support/service-status",
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
