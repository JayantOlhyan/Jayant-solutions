import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verified Delivery Evidence & Proof of Work | JAYANT SYSTEMS",
  description: "Inspect verified project deliveries, live deployments, public source repositories, and engineering evaluation standards at JAYANT SYSTEMS.",
  alternates: {
    canonical: "/company/testimonials",
    languages: {
      "en-IN": "/company/testimonials",
      "hi-IN": "/hi/company/testimonials",
    },
  },
  openGraph: {
    title: "Verified Delivery Evidence & Proof of Work | JAYANT SYSTEMS",
    description: "Inspect verified project deliveries, live deployments, public source repositories, and engineering evaluation standards at JAYANT SYSTEMS.",
    url: "https://jayant-systems.online/company/testimonials",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Delivery Evidence & Proof of Work | JAYANT SYSTEMS",
    description: "Inspect verified project deliveries, live deployments, public source repositories, and engineering evaluation standards at JAYANT SYSTEMS.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
