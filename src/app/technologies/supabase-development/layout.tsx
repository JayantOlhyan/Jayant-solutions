import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supabase Backend Architecture & Auth Setup | Jayant",
  description: "Accelerate product development with Supabase: real-time PostgreSQL databases, row-level security authentication, file storage, and serverless edge functions.",
  alternates: {
    canonical: "/technologies/supabase-development",
    languages: {
      "en-IN": "/technologies/supabase-development",
      "hi-IN": "/hi/technologies/supabase-development",
    },
  },
  openGraph: {
    title: "Supabase Backend Architecture & Auth Setup | Jayant",
    description: "Accelerate product development with Supabase: real-time PostgreSQL databases, row-level security authentication, file storage, and serverless edge functions.",
    url: "https://jayant-systems.online/technologies/supabase-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supabase Backend Architecture & Auth Setup | Jayant",
    description: "Accelerate product development with Supabase: real-time PostgreSQL databases, row-level security authentication, file storage, and serverless edge functions.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
