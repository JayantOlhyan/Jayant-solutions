import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Status – Jayant Solutions",
  description: "Explore the Service Status page of Jayant Solutions. I build custom websites, AI automation systems, and business software designed for your operational needs.",
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
