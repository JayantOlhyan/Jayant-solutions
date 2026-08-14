import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve: Custom AI & Software | Jayant Systems",
  description: "Tailored software engineering and AI workflow systems designed for healthcare, education, retail, real estate, manufacturing, and early-stage startups.",
  alternates: {
    canonical: "/resources/industries-we-serve",
    languages: {
      "en-IN": "/resources/industries-we-serve",
      "hi-IN": "/hi/resources/industries-we-serve",
    },
  },
  openGraph: {
    title: "Industries We Serve: Custom AI & Software | Jayant Systems",
    description: "Tailored software engineering and AI workflow systems designed for healthcare, education, retail, real estate, manufacturing, and early-stage startups.",
    url: "https://jayant-systems.online/resources/industries-we-serve",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve: Custom AI & Software | Jayant Systems",
    description: "Tailored software engineering and AI workflow systems designed for healthcare, education, retail, real estate, manufacturing, and early-stage startups.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
