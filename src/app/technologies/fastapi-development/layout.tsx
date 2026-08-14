import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastAPI & Python Backend Development | Jayant Systems",
  description: "High-performance Python backend engineering using FastAPI. Build lightning-fast asynchronous REST APIs, AI agent pipelines, and database integrations.",
  alternates: {
    canonical: "/technologies/fastapi-development",
    languages: {
      "en-IN": "/technologies/fastapi-development",
      "hi-IN": "/hi/technologies/fastapi-development",
    },
  },
  openGraph: {
    title: "FastAPI & Python Backend Development | Jayant Systems",
    description: "High-performance Python backend engineering using FastAPI. Build lightning-fast asynchronous REST APIs, AI agent pipelines, and database integrations.",
    url: "https://jayant-systems.online/technologies/fastapi-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FastAPI & Python Backend Development | Jayant Systems",
    description: "High-performance Python backend engineering using FastAPI. Build lightning-fast asynchronous REST APIs, AI agent pipelines, and database integrations.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
