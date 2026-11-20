import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | JAYANT SYSTEMS",
  description: "Our official privacy policy explaining how JAYANT SYSTEMS collects, uses, and safeguards personal information in accordance with privacy laws.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Privacy Policy & Data Protection | JAYANT SYSTEMS",
    description: "Our official privacy policy explaining how JAYANT SYSTEMS collects, uses, and safeguards personal information in accordance with privacy laws.",
    url: "https://jayant-systems.online/privacy",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Privacy Policy & Data Protection | JAYANT SYSTEMS",
    description: "Our official privacy policy explaining how JAYANT SYSTEMS collects, uses, and safeguards personal information in accordance with privacy laws.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
