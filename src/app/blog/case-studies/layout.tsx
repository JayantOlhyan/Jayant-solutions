import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Case Studies & Insights | Jayant Systems",
  description: "In-depth technical case studies and architectural teardowns of AI applications, web systems, and automation platforms built for real-world operations.",
  alternates: {
    canonical: "/blog/case-studies",
    languages: {
      "en-IN": "/blog/case-studies",
      "hi-IN": "/hi/blog/case-studies",
    },
  },
  openGraph: {
    title: "Engineering Case Studies & Insights | Jayant Systems",
    description: "In-depth technical case studies and architectural teardowns of AI applications, web systems, and automation platforms built for real-world operations.",
    url: "https://jayant-systems.online/blog/case-studies",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Case Studies & Insights | Jayant Systems",
    description: "In-depth technical case studies and architectural teardowns of AI applications, web systems, and automation platforms built for real-world operations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
