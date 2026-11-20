import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy & Tracking Technologies | JAYANT SYSTEMS",
  description: "Learn about the cookies and local storage technologies used on JAYANT SYSTEMS to ensure platform security and optimal browsing performance.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Cookie Policy & Tracking Technologies | JAYANT SYSTEMS",
    description: "Learn about the cookies and local storage technologies used on JAYANT SYSTEMS to ensure platform security and optimal browsing performance.",
    url: "https://jayant-systems.online/cookies",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Cookie Policy & Tracking Technologies | JAYANT SYSTEMS",
    description: "Learn about the cookies and local storage technologies used on JAYANT SYSTEMS to ensure platform security and optimal browsing performance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
