import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact JAYANT SYSTEMS | Book a Strategy Call",
  description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Contact JAYANT SYSTEMS | Book a Strategy Call",
    description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
    url: "https://jayant-systems.online/contact",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Contact JAYANT SYSTEMS | Book a Strategy Call",
    description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
