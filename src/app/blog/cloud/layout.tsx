import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Engineering & DevOps Articles | Jayant Systems",
  description: "Guides on cloud architecture, Docker containerization, CI/CD automated deployment pipelines, Supabase configurations, and server performance monitoring.",
  alternates: {
    canonical: "/blog/cloud",
    languages: {
      "en-IN": "/blog/cloud",
      "hi-IN": "/hi/blog/cloud",
    },
  },
  openGraph: {
    title: "Cloud Engineering & DevOps Articles | Jayant Systems",
    description: "Guides on cloud architecture, Docker containerization, CI/CD automated deployment pipelines, Supabase configurations, and server performance monitoring.",
    url: "https://jayant-systems.online/blog/cloud",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Engineering & DevOps Articles | Jayant Systems",
    description: "Guides on cloud architecture, Docker containerization, CI/CD automated deployment pipelines, Supabase configurations, and server performance monitoring.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
