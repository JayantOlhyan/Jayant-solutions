import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Jayant Web & AI Systems",
  description: "Read authentic client reviews and feedback on our custom software engineering, AI chatbot deployments, web development, and support engagements.",
  alternates: {
    canonical: "/company/testimonials",
    languages: {
      "en-IN": "/company/testimonials",
      "hi-IN": "/hi/company/testimonials",
    },
  },
  openGraph: {
    title: "Client Testimonials & Reviews | Jayant Web & AI Systems",
    description: "Read authentic client reviews and feedback on our custom software engineering, AI chatbot deployments, web development, and support engagements.",
    url: "https://jayant-systems.online/company/testimonials",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials & Reviews | Jayant Web & AI Systems",
    description: "Read authentic client reviews and feedback on our custom software engineering, AI chatbot deployments, web development, and support engagements.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
