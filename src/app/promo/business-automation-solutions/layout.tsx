import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Business Process Automation | Jayant Systems",
  description: "Save 20+ hours weekly by automating manual data entry, customer invoice routing, and CRM sync using tailored API webhooks and WhatsApp automations.",
  alternates: {
    canonical: "/promo/business-automation-solutions",
    languages: {
      "en-IN": "/promo/business-automation-solutions",
      "hi-IN": "/hi/promo/business-automation-solutions",
    },
  },
  openGraph: {
    title: "Custom Business Process Automation | Jayant Systems",
    description: "Save 20+ hours weekly by automating manual data entry, customer invoice routing, and CRM sync using tailored API webhooks and WhatsApp automations.",
    url: "https://jayant-systems.online/promo/business-automation-solutions",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Business Process Automation | Jayant Systems",
    description: "Save 20+ hours weekly by automating manual data entry, customer invoice routing, and CRM sync using tailored API webhooks and WhatsApp automations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
