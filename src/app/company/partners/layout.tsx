import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Partners & Agency Collaborations | Jayant",
  description: "Partner with Jayant Web & AI Systems for white-label development, technical co-founding, and dedicated software engineering support for agencies.",
  alternates: {
    canonical: "/company/partners",
    languages: {
      "en-IN": "/company/partners",
      "hi-IN": "/hi/company/partners",
    },
  },
  openGraph: {
    title: "Technology Partners & Agency Collaborations | Jayant",
    description: "Partner with Jayant Web & AI Systems for white-label development, technical co-founding, and dedicated software engineering support for agencies.",
    url: "https://jayant-systems.online/company/partners",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Partners & Agency Collaborations | Jayant",
    description: "Partner with Jayant Web & AI Systems for white-label development, technical co-founding, and dedicated software engineering support for agencies.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
