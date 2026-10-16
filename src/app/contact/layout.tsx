import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact JAYANT SYSTEMS | Book a Strategy Call",
  description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-IN": "/contact",
      "hi-IN": "/hi/contact",
    },
  },
  openGraph: {
    title: "Contact JAYANT SYSTEMS | Book a Strategy Call",
    description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
    url: "https://jayant-systems.online/contact",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JAYANT SYSTEMS | Book a Strategy Call",
    description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
