import { Metadata } from "next";

export const metadata: Metadata = {
  title: "REST & GraphQL API Development Services | Jayant Systems",
  description: "Build robust, secure, and documented REST and GraphQL backend APIs with FastAPI and Node.js to power web platforms, mobile apps, and third-party sync.",
  alternates: {
    canonical: "/services/api-development",
    languages: {
      "en-IN": "/services/api-development",
      "hi-IN": "/hi/services/api-development",
    },
  },
  openGraph: {
    title: "REST & GraphQL API Development Services | Jayant Systems",
    description: "Build robust, secure, and documented REST and GraphQL backend APIs with FastAPI and Node.js to power web platforms, mobile apps, and third-party sync.",
    url: "https://jayant-systems.online/services/api-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REST & GraphQL API Development Services | Jayant Systems",
    description: "Build robust, secure, and documented REST and GraphQL backend APIs with FastAPI and Node.js to power web platforms, mobile apps, and third-party sync.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
