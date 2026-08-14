import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy & Tech Consultation | Jayant Systems",
  description: "Schedule a 1-on-1 strategy call with lead engineer Jayant Olhyan to map technical requirements, project timelines, and custom software architecture.",
  alternates: {
    canonical: "/contact/book-a-consultation",
    languages: {
      "en-IN": "/contact/book-a-consultation",
      "hi-IN": "/hi/contact/book-a-consultation",
    },
  },
  openGraph: {
    title: "Book a Strategy & Tech Consultation | Jayant Systems",
    description: "Schedule a 1-on-1 strategy call with lead engineer Jayant Olhyan to map technical requirements, project timelines, and custom software architecture.",
    url: "https://jayant-systems.online/contact/book-a-consultation",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Strategy & Tech Consultation | Jayant Systems",
    description: "Schedule a 1-on-1 strategy call with lead engineer Jayant Olhyan to map technical requirements, project timelines, and custom software architecture.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
