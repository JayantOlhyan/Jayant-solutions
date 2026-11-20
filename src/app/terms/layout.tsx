import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Engagement | JAYANT SYSTEMS",
  description: "Commercial terms of service, engagement agreements, source code ownership clauses, and client responsibilities for JAYANT SYSTEMS projects.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Terms of Service & Engagement | JAYANT SYSTEMS",
    description: "Commercial terms of service, engagement agreements, source code ownership clauses, and client responsibilities for JAYANT SYSTEMS projects.",
    url: "https://jayant-systems.online/terms",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Terms of Service & Engagement | JAYANT SYSTEMS",
    description: "Commercial terms of service, engagement agreements, source code ownership clauses, and client responsibilities for JAYANT SYSTEMS projects.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
