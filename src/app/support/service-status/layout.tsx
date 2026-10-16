import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live System & Service Uptime Status | JAYANT SYSTEMS",
  description: "Monitor real-time system performance, cloud hosting uptime metrics, database latency, and API operational status across all deployed services.",
  alternates: {
    canonical: "/support/service-status",
    languages: {
      "en-IN": "/support/service-status",
      "hi-IN": "/hi/support/service-status",
    },
  },
  openGraph: {
    title: "Live System & Service Uptime Status | JAYANT SYSTEMS",
    description: "Monitor real-time system performance, cloud hosting uptime metrics, database latency, and API operational status across all deployed services.",
    url: "https://jayant-systems.online/support/service-status",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live System & Service Uptime Status | JAYANT SYSTEMS",
    description: "Monitor real-time system performance, cloud hosting uptime metrics, database latency, and API operational status across all deployed services.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
