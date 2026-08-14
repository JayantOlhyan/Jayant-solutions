import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & App Maintenance Retainers | Jayant Systems",
  description: "Proactive monthly and annual maintenance plans covering 24/7 uptime monitoring, critical security patches, database backups, and monthly feature updates.",
  alternates: {
    canonical: "/pricing/maintenance-plans",
    languages: {
      "en-IN": "/pricing/maintenance-plans",
      "hi-IN": "/hi/pricing/maintenance-plans",
    },
  },
  openGraph: {
    title: "Website & App Maintenance Retainers | Jayant Systems",
    description: "Proactive monthly and annual maintenance plans covering 24/7 uptime monitoring, critical security patches, database backups, and monthly feature updates.",
    url: "https://jayant-systems.online/pricing/maintenance-plans",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & App Maintenance Retainers | Jayant Systems",
    description: "Proactive monthly and annual maintenance plans covering 24/7 uptime monitoring, critical security patches, database backups, and monthly feature updates.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
