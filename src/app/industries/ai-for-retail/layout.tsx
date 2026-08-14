import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & E-Commerce Automation Systems | Jayant Systems",
  description: "Scale your retail operations with custom e-commerce web applications, WhatsApp order confirmation triggers, and centralized multi-channel inventory sync.",
  alternates: {
    canonical: "/industries/ai-for-retail",
    languages: {
      "en-IN": "/industries/ai-for-retail",
      "hi-IN": "/hi/industries/ai-for-retail",
    },
  },
  openGraph: {
    title: "Retail & E-Commerce Automation Systems | Jayant Systems",
    description: "Scale your retail operations with custom e-commerce web applications, WhatsApp order confirmation triggers, and centralized multi-channel inventory sync.",
    url: "https://jayant-systems.online/industries/ai-for-retail",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & E-Commerce Automation Systems | Jayant Systems",
    description: "Scale your retail operations with custom e-commerce web applications, WhatsApp order confirmation triggers, and centralized multi-channel inventory sync.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
