import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies We Use & Modern Stack | JAYANT SYSTEMS",
  description: "Explore our modern engineering tech stack: Next.js, React, Python, FastAPI, Flutter, PostgreSQL, Supabase, OpenAI, Google Gemini, and Docker.",
  alternates: {
    canonical: "/resources/technologies-we-use",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Technologies We Use & Modern Stack | JAYANT SYSTEMS",
    description: "Explore our modern engineering tech stack: Next.js, React, Python, FastAPI, Flutter, PostgreSQL, Supabase, OpenAI, Google Gemini, and Docker.",
    url: "https://jayant-systems.online/resources/technologies-we-use",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Technologies We Use & Modern Stack | JAYANT SYSTEMS",
    description: "Explore our modern engineering tech stack: Next.js, React, Python, FastAPI, Flutter, PostgreSQL, Supabase, OpenAI, Google Gemini, and Docker.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
