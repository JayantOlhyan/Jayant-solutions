import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js & React Web Application Development | Jayant",
  description: "Build high-performance, SEO-optimized web applications with Next.js App Router, React Server Components, and responsive Tailwind UI architectures.",
  alternates: {
    canonical: "/technologies/nextjs-development",
    languages: {
      "en-IN": "/technologies/nextjs-development",
      "hi-IN": "/hi/technologies/nextjs-development",
    },
  },
  openGraph: {
    title: "Next.js & React Web Application Development | Jayant",
    description: "Build high-performance, SEO-optimized web applications with Next.js App Router, React Server Components, and responsive Tailwind UI architectures.",
    url: "https://jayant-systems.online/technologies/nextjs-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js & React Web Application Development | Jayant",
    description: "Build high-performance, SEO-optimized web applications with Next.js App Router, React Server Components, and responsive Tailwind UI architectures.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
