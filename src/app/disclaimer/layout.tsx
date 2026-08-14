import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Liability Terms | Jayant Web & AI Systems",
  description: "Legal disclaimer and limitation of liability regarding technical consulting, educational articles, and third-party software tools on our platform.",
  alternates: {
    canonical: "/disclaimer",
    languages: {
      "en-IN": "/disclaimer",
      "hi-IN": "/hi/disclaimer",
    },
  },
  openGraph: {
    title: "Disclaimer & Liability Terms | Jayant Web & AI Systems",
    description: "Legal disclaimer and limitation of liability regarding technical consulting, educational articles, and third-party software tools on our platform.",
    url: "https://jayant-systems.online/disclaimer",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer & Liability Terms | Jayant Web & AI Systems",
    description: "Legal disclaimer and limitation of liability regarding technical consulting, educational articles, and third-party software tools on our platform.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
