import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve: Custom AI & Software | JAYANT SYSTEMS",
  description: "Tailored software engineering and AI workflow systems designed for healthcare, education, retail, real estate, manufacturing, and early-stage startups.",
  alternates: {
    canonical: "/resources/industries-we-serve",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Industries We Serve: Custom AI & Software | JAYANT SYSTEMS",
    description: "Tailored software engineering and AI workflow systems designed for healthcare, education, retail, real estate, manufacturing, and early-stage startups.",
    url: "https://jayant-systems.online/resources/industries-we-serve",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Industries We Serve: Custom AI & Software | JAYANT SYSTEMS",
    description: "Tailored software engineering and AI workflow systems designed for healthcare, education, retail, real estate, manufacturing, and early-stage startups.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
