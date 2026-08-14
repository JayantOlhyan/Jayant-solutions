import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Software Engineering for Startups | Jayant",
  description: "Technical partner for early-stage founders: rapid MVP prototyping, scalable cloud backends, AI feature integration, and investor-ready architectures.",
  alternates: {
    canonical: "/industries/ai-for-startups",
    languages: {
      "en-IN": "/industries/ai-for-startups",
      "hi-IN": "/hi/industries/ai-for-startups",
    },
  },
  openGraph: {
    title: "Full-Stack Software Engineering for Startups | Jayant",
    description: "Technical partner for early-stage founders: rapid MVP prototyping, scalable cloud backends, AI feature integration, and investor-ready architectures.",
    url: "https://jayant-systems.online/industries/ai-for-startups",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Software Engineering for Startups | Jayant",
    description: "Technical partner for early-stage founders: rapid MVP prototyping, scalable cloud backends, AI feature integration, and investor-ready architectures.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
