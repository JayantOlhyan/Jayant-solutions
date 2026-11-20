import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support & Help Center | JAYANT SYSTEMS",
  description: "Access technical documentation, report system bugs, check live service status, or contact our engineering support team for active client projects.",
  alternates: {
    canonical: "/support",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Customer Support & Help Center | JAYANT SYSTEMS",
    description: "Access technical documentation, report system bugs, check live service status, or contact our engineering support team for active client projects.",
    url: "https://jayant-systems.online/support",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Customer Support & Help Center | JAYANT SYSTEMS",
    description: "Access technical documentation, report system bugs, check live service status, or contact our engineering support team for active client projects.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
