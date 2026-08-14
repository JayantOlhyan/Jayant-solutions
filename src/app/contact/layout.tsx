import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Jayant Web & AI Systems | Book a Strategy Call",
  description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-IN": "/contact",
      "hi-IN": "/hi/contact",
    },
  },
  openGraph: {
    title: "Contact Jayant Web & AI Systems | Book a Strategy Call",
    description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
    url: "https://jayant-systems.online/contact",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jayant Web & AI Systems | Book a Strategy Call",
    description: "Get in touch with lead engineer Jayant Olhyan. Discuss your software project requirements, schedule a technical consultation, or request a custom proposal.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
