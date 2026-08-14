import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Jayant Web & AI Systems",
  description: "Find answers to common questions about custom AI integrations, software development timelines, project pricing, source code ownership, and ongoing support.",
  alternates: {
    canonical: "/faq",
    languages: {
      "en-IN": "/faq",
      "hi-IN": "/hi/faq",
    },
  },
  openGraph: {
    title: "Frequently Asked Questions | Jayant Web & AI Systems",
    description: "Find answers to common questions about custom AI integrations, software development timelines, project pricing, source code ownership, and ongoing support.",
    url: "https://jayant-systems.online/faq",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Jayant Web & AI Systems",
    description: "Find answers to common questions about custom AI integrations, software development timelines, project pricing, source code ownership, and ongoing support.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
