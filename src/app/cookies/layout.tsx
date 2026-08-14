import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy & Tracking Technologies | Jayant Systems",
  description: "Learn about the cookies and local storage technologies used on Jayant Web & AI Systems to ensure platform security and optimal browsing performance.",
  alternates: {
    canonical: "/cookies",
    languages: {
      "en-IN": "/cookies",
      "hi-IN": "/hi/cookies",
    },
  },
  openGraph: {
    title: "Cookie Policy & Tracking Technologies | Jayant Systems",
    description: "Learn about the cookies and local storage technologies used on Jayant Web & AI Systems to ensure platform security and optimal browsing performance.",
    url: "https://jayant-systems.online/cookies",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy & Tracking Technologies | Jayant Systems",
    description: "Learn about the cookies and local storage technologies used on Jayant Web & AI Systems to ensure platform security and optimal browsing performance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
