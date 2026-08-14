import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & AI Project Portfolio | Jayant Web & AI Systems",
  description: "Browse delivered projects and prototypes across healthcare AI, education platforms, emergency response apps, and automated business workflows.",
  alternates: {
    canonical: "/portfolio",
    languages: {
      "en-IN": "/portfolio",
      "hi-IN": "/hi/portfolio",
    },
  },
  openGraph: {
    title: "Software & AI Project Portfolio | Jayant Web & AI Systems",
    description: "Browse delivered projects and prototypes across healthcare AI, education platforms, emergency response apps, and automated business workflows.",
    url: "https://jayant-systems.online/portfolio",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & AI Project Portfolio | Jayant Web & AI Systems",
    description: "Browse delivered projects and prototypes across healthcare AI, education platforms, emergency response apps, and automated business workflows.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
