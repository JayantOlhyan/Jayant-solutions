import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Website Maintenance Retainers | Jayant Systems",
  description: "Ongoing maintenance plans including security patches, uptime monitoring, automated database backups, bug fixes, and continuous performance optimization.",
  alternates: {
    canonical: "/services/maintenance",
    languages: {
      "en-IN": "/services/maintenance",
      "hi-IN": "/hi/services/maintenance",
    },
  },
  openGraph: {
    title: "Software & Website Maintenance Retainers | Jayant Systems",
    description: "Ongoing maintenance plans including security patches, uptime monitoring, automated database backups, bug fixes, and continuous performance optimization.",
    url: "https://jayant-systems.online/services/maintenance",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Website Maintenance Retainers | Jayant Systems",
    description: "Ongoing maintenance plans including security patches, uptime monitoring, automated database backups, bug fixes, and continuous performance optimization.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
