import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Converting Business Website Design | Jayant Systems",
  description: "Get a custom, lightning-fast business website engineered for search rankings and lead conversion with responsive layouts and sub-second load times.",
  alternates: {
    canonical: "/promo/modern-business-website",
    languages: {
      "en-IN": "/promo/modern-business-website",
      "hi-IN": "/hi/promo/modern-business-website",
    },
  },
  openGraph: {
    title: "High-Converting Business Website Design | Jayant Systems",
    description: "Get a custom, lightning-fast business website engineered for search rankings and lead conversion with responsive layouts and sub-second load times.",
    url: "https://jayant-systems.online/promo/modern-business-website",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Converting Business Website Design | Jayant Systems",
    description: "Get a custom, lightning-fast business website engineered for search rankings and lead conversion with responsive layouts and sub-second load times.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
