import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Liability Terms | JAYANT SYSTEMS",
  description: "Legal disclaimer and limitation of liability regarding technical consulting, educational articles, and third-party software tools on our platform.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Disclaimer & Liability Terms | JAYANT SYSTEMS",
    description: "Legal disclaimer and limitation of liability regarding technical consulting, educational articles, and third-party software tools on our platform.",
    url: "https://jayant-systems.online/disclaimer",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Disclaimer & Liability Terms | JAYANT SYSTEMS",
    description: "Legal disclaimer and limitation of liability regarding technical consulting, educational articles, and third-party software tools on our platform.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
