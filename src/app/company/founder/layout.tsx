import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Founder & Lead Engineer Jayant Olhyan | Jayant Systems",
  description: "Learn about Jayant Olhyan, full-stack software engineer and founder of Jayant Web & AI Systems, specializing in AI solutions, web apps, and automation.",
  alternates: {
    canonical: "/company/founder",
    languages: {
      "en-IN": "/company/founder",
      "hi-IN": "/hi/company/founder",
    },
  },
  openGraph: {
    title: "Meet Founder & Lead Engineer Jayant Olhyan | Jayant Systems",
    description: "Learn about Jayant Olhyan, full-stack software engineer and founder of Jayant Web & AI Systems, specializing in AI solutions, web apps, and automation.",
    url: "https://jayant-systems.online/company/founder",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Founder & Lead Engineer Jayant Olhyan | Jayant Systems",
    description: "Learn about Jayant Olhyan, full-stack software engineer and founder of Jayant Web & AI Systems, specializing in AI solutions, web apps, and automation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
