import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Custom Project Scope & Quote | Jayant Systems",
  description: "Submit your project details to receive a fixed-scope technical proposal, deliverable breakdown, and transparent milestone quote within 24 business hours.",
  alternates: {
    canonical: "/contact/request-a-quote",
    languages: {
      "en-IN": "/contact/request-a-quote",
      "hi-IN": "/hi/contact/request-a-quote",
    },
  },
  openGraph: {
    title: "Request a Custom Project Scope & Quote | Jayant Systems",
    description: "Submit your project details to receive a fixed-scope technical proposal, deliverable breakdown, and transparent milestone quote within 24 business hours.",
    url: "https://jayant-systems.online/contact/request-a-quote",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Custom Project Scope & Quote | Jayant Systems",
    description: "Submit your project details to receive a fixed-scope technical proposal, deliverable breakdown, and transparent milestone quote within 24 business hours.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
