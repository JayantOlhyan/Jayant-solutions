import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Software & Property Portals | Jayant Systems",
  description: "Custom real estate platforms: interactive property directories, automated WhatsApp lead qualification funnels, and agent scheduling dashboards.",
  alternates: {
    canonical: "/industries/ai-for-real-estate",
    languages: {
      "en-IN": "/industries/ai-for-real-estate",
      "hi-IN": "/hi/industries/ai-for-real-estate",
    },
  },
  openGraph: {
    title: "Real Estate Software & Property Portals | Jayant Systems",
    description: "Custom real estate platforms: interactive property directories, automated WhatsApp lead qualification funnels, and agent scheduling dashboards.",
    url: "https://jayant-systems.online/industries/ai-for-real-estate",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Software & Property Portals | Jayant Systems",
    description: "Custom real estate platforms: interactive property directories, automated WhatsApp lead qualification funnels, and agent scheduling dashboards.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
