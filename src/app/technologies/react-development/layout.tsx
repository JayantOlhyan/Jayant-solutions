import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React.js Frontend Development & UI Systems | Jayant",
  description: "Create dynamic, component-driven user interfaces with React, TypeScript, and modern state management for seamless web and desktop experiences.",
  alternates: {
    canonical: "/technologies/react-development",
    languages: {
      "en-IN": "/technologies/react-development",
      "hi-IN": "/hi/technologies/react-development",
    },
  },
  openGraph: {
    title: "React.js Frontend Development & UI Systems | Jayant",
    description: "Create dynamic, component-driven user interfaces with React, TypeScript, and modern state management for seamless web and desktop experiences.",
    url: "https://jayant-systems.online/technologies/react-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React.js Frontend Development & UI Systems | Jayant",
    description: "Create dynamic, component-driven user interfaces with React, TypeScript, and modern state management for seamless web and desktop experiences.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
