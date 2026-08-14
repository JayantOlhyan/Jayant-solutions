import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | Jayant Web & AI Systems",
  description: "Our official privacy policy explaining how Jayant Web & AI Systems collects, uses, and safeguards personal information in accordance with privacy laws.",
  alternates: {
    canonical: "/privacy",
    languages: {
      "en-IN": "/privacy",
      "hi-IN": "/hi/privacy",
    },
  },
  openGraph: {
    title: "Privacy Policy & Data Protection | Jayant Web & AI Systems",
    description: "Our official privacy policy explaining how Jayant Web & AI Systems collects, uses, and safeguards personal information in accordance with privacy laws.",
    url: "https://jayant-systems.online/privacy",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Data Protection | Jayant Web & AI Systems",
    description: "Our official privacy policy explaining how Jayant Web & AI Systems collects, uses, and safeguards personal information in accordance with privacy laws.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
