import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Articles | Jayant Systems",
  description: "Explore best practices in backend architecture, database engineering, API design, and scalable full-stack software development for modern engineering teams.",
  alternates: {
    canonical: "/blog/software-development",
    languages: {
      "en-IN": "/blog/software-development",
      "hi-IN": "/hi/blog/software-development",
    },
  },
  openGraph: {
    title: "Custom Software Development Articles | Jayant Systems",
    description: "Explore best practices in backend architecture, database engineering, API design, and scalable full-stack software development for modern engineering teams.",
    url: "https://jayant-systems.online/blog/software-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Articles | Jayant Systems",
    description: "Explore best practices in backend architecture, database engineering, API design, and scalable full-stack software development for modern engineering teams.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
