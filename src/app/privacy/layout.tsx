import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | JAYANT SYSTEMS",
  description: "Our official privacy policy explaining how JAYANT SYSTEMS collects, uses, and safeguards personal information in accordance with privacy laws.",
  alternates: {
    canonical: "/privacy",
    languages: {
      "en-IN": "/privacy",
      "hi-IN": "/hi/privacy",
    },
  },
  openGraph: {
    title: "Privacy Policy & Data Protection | JAYANT SYSTEMS",
    description: "Our official privacy policy explaining how JAYANT SYSTEMS collects, uses, and safeguards personal information in accordance with privacy laws.",
    url: "https://jayant-systems.online/privacy",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Data Protection | JAYANT SYSTEMS",
    description: "Our official privacy policy explaining how JAYANT SYSTEMS collects, uses, and safeguards personal information in accordance with privacy laws.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
