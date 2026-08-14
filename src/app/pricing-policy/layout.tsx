import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Billing Policy | Jayant Web & AI Systems",
  description: "Transparent pricing and milestone payment terms: initial deposit structures, deliverable review windows, and invoice handling for software projects.",
  alternates: {
    canonical: "/pricing-policy",
    languages: {
      "en-IN": "/pricing-policy",
      "hi-IN": "/hi/pricing-policy",
    },
  },
  openGraph: {
    title: "Pricing & Billing Policy | Jayant Web & AI Systems",
    description: "Transparent pricing and milestone payment terms: initial deposit structures, deliverable review windows, and invoice handling for software projects.",
    url: "https://jayant-systems.online/pricing-policy",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Billing Policy | Jayant Web & AI Systems",
    description: "Transparent pricing and milestone payment terms: initial deposit structures, deliverable review windows, and invoice handling for software projects.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
