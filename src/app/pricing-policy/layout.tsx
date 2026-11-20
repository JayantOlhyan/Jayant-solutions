import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Billing Policy | JAYANT SYSTEMS",
  description: "Transparent pricing and milestone payment terms: initial deposit structures, deliverable review windows, and invoice handling for software projects.",
  alternates: {
    canonical: "/pricing-policy",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Pricing & Billing Policy | JAYANT SYSTEMS",
    description: "Transparent pricing and milestone payment terms: initial deposit structures, deliverable review windows, and invoice handling for software projects.",
    url: "https://jayant-systems.online/pricing-policy",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Pricing & Billing Policy | JAYANT SYSTEMS",
    description: "Transparent pricing and milestone payment terms: initial deposit structures, deliverable review windows, and invoice handling for software projects.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
