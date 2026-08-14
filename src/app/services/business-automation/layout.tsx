import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Business Process & Workflow Automation | Jayant Systems",
  description: "Automate manual business processes, spreadsheet entries, and customer communications using WhatsApp API, custom webhook pipelines, and CRM integrations.",
  alternates: {
    canonical: "/services/business-automation",
    languages: {
      "en-IN": "/services/business-automation",
      "hi-IN": "/hi/services/business-automation",
    },
  },
  openGraph: {
    title: "Business Process & Workflow Automation | Jayant Systems",
    description: "Automate manual business processes, spreadsheet entries, and customer communications using WhatsApp API, custom webhook pipelines, and CRM integrations.",
    url: "https://jayant-systems.online/services/business-automation",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process & Workflow Automation | Jayant Systems",
    description: "Automate manual business processes, spreadsheet entries, and customer communications using WhatsApp API, custom webhook pipelines, and CRM integrations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={createServiceSchema({
        name: "Business Process & Workflow Automation Services",
        description: "Automate manual business processes, spreadsheet entries, and customer communications using WhatsApp API, custom webhook pipelines, and CRM integrations.",
        url: "/services/business-automation",
        serviceType: "Business Automation"
      })} />
      {children}
    </>
  );
}
