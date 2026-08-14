import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies & Project Results | Jayant Systems",
  description: "Explore verified software engineering case studies, AI system architectures, and client project results across healthcare, edtech, SaaS, and automation.",
  alternates: {
    canonical: "/resources/case-studies",
    languages: {
      "en-IN": "/resources/case-studies",
      "hi-IN": "/hi/resources/case-studies",
    },
  },
  openGraph: {
    title: "Client Case Studies & Project Results | Jayant Systems",
    description: "Explore verified software engineering case studies, AI system architectures, and client project results across healthcare, edtech, SaaS, and automation.",
    url: "https://jayant-systems.online/resources/case-studies",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Project Results | Jayant Systems",
    description: "Explore verified software engineering case studies, AI system architectures, and client project results across healthcare, edtech, SaaS, and automation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
