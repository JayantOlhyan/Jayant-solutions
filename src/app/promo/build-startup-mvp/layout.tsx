import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast-Track Startup MVP Development | Jayant Systems",
  description: "Ship your startup MVP fast. Full-stack engineering with modern Next.js architecture, auth, database, payment processing, and scalable deployment.",
  alternates: {
    canonical: "/promo/build-startup-mvp",
    languages: {
      "en-IN": "/promo/build-startup-mvp",
      "hi-IN": "/hi/promo/build-startup-mvp",
    },
  },
  openGraph: {
    title: "Fast-Track Startup MVP Development | Jayant Systems",
    description: "Ship your startup MVP fast. Full-stack engineering with modern Next.js architecture, auth, database, payment processing, and scalable deployment.",
    url: "https://jayant-systems.online/promo/build-startup-mvp",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast-Track Startup MVP Development | Jayant Systems",
    description: "Ship your startup MVP fast. Full-stack engineering with modern Next.js architecture, auth, database, payment processing, and scalable deployment.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
