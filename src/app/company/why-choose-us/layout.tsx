import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose JAYANT SYSTEMS | Engineering Advantage",
  description: "Discover why businesses choose JAYANT SYSTEMS: direct developer communication, fixed upfront pricing, weekly live demos, and full code ownership.",
  alternates: {
    canonical: "/company/why-choose-us",
    languages: {
      "en-IN": "/company/why-choose-us",
      "hi-IN": "/hi/company/why-choose-us",
    },
  },
  openGraph: {
    title: "Why Choose JAYANT SYSTEMS | Engineering Advantage",
    description: "Discover why businesses choose JAYANT SYSTEMS: direct developer communication, fixed upfront pricing, weekly live demos, and full code ownership.",
    url: "https://jayant-systems.online/company/why-choose-us",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose JAYANT SYSTEMS | Engineering Advantage",
    description: "Discover why businesses choose JAYANT SYSTEMS: direct developer communication, fixed upfront pricing, weekly live demos, and full code ownership.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
