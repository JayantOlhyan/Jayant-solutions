import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies We Use & Modern Stack | Jayant Systems",
  description: "Explore our modern engineering tech stack: Next.js, React, Python, FastAPI, Flutter, PostgreSQL, Supabase, OpenAI, Google Gemini, and Docker.",
  alternates: {
    canonical: "/resources/technologies-we-use",
    languages: {
      "en-IN": "/resources/technologies-we-use",
      "hi-IN": "/hi/resources/technologies-we-use",
    },
  },
  openGraph: {
    title: "Technologies We Use & Modern Stack | Jayant Systems",
    description: "Explore our modern engineering tech stack: Next.js, React, Python, FastAPI, Flutter, PostgreSQL, Supabase, OpenAI, Google Gemini, and Docker.",
    url: "https://jayant-systems.online/resources/technologies-we-use",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies We Use & Modern Stack | Jayant Systems",
    description: "Explore our modern engineering tech stack: Next.js, React, Python, FastAPI, Flutter, PostgreSQL, Supabase, OpenAI, Google Gemini, and Docker.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
