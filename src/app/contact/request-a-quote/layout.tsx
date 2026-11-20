import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Custom Project Scope & Quote | JAYANT SYSTEMS",
  description: "Submit your project details to receive a fixed-scope technical proposal, deliverable breakdown, and transparent milestone quote within 24 business hours.",
  alternates: {
    canonical: "/contact/request-a-quote",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Request a Custom Project Scope & Quote | JAYANT SYSTEMS",
    description: "Submit your project details to receive a fixed-scope technical proposal, deliverable breakdown, and transparent milestone quote within 24 business hours.",
    url: "https://jayant-systems.online/contact/request-a-quote",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Request a Custom Project Scope & Quote | JAYANT SYSTEMS",
    description: "Submit your project details to receive a fixed-scope technical proposal, deliverable breakdown, and transparent milestone quote within 24 business hours.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
