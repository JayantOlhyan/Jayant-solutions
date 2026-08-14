import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Guides & Tutorials | Jayant Web & AI",
  description: "In-depth web development guides covering Next.js, React, Tailwind CSS, performance optimization, and high-converting responsive web architectures.",
  alternates: {
    canonical: "/blog/web-development",
    languages: {
      "en-IN": "/blog/web-development",
      "hi-IN": "/hi/blog/web-development",
    },
  },
  openGraph: {
    title: "Web Development Guides & Tutorials | Jayant Web & AI",
    description: "In-depth web development guides covering Next.js, React, Tailwind CSS, performance optimization, and high-converting responsive web architectures.",
    url: "https://jayant-systems.online/blog/web-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Guides & Tutorials | Jayant Web & AI",
    description: "In-depth web development guides covering Next.js, React, Tailwind CSS, performance optimization, and high-converting responsive web architectures.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
