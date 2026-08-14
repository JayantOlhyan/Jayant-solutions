import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting & Software Architecture | Jayant",
  description: "Expert technical advisory for startups and businesses. We audit architectures, recommend modern tech stacks, and structure scalable engineering roadmaps.",
  alternates: {
    canonical: "/services/technology-consulting",
    languages: {
      "en-IN": "/services/technology-consulting",
      "hi-IN": "/hi/services/technology-consulting",
    },
  },
  openGraph: {
    title: "Technology Consulting & Software Architecture | Jayant",
    description: "Expert technical advisory for startups and businesses. We audit architectures, recommend modern tech stacks, and structure scalable engineering roadmaps.",
    url: "https://jayant-systems.online/services/technology-consulting",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Consulting & Software Architecture | Jayant",
    description: "Expert technical advisory for startups and businesses. We audit architectures, recommend modern tech stacks, and structure scalable engineering roadmaps.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
