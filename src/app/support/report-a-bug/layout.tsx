import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report an Issue or Software Bug | JAYANT SYSTEMS",
  description: "Submit a technical bug report or software issue directly to our engineering team for rapid ticket triage, root-cause debugging, and resolution.",
  alternates: {
    canonical: "/support/report-a-bug",
  },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "Report an Issue or Software Bug | JAYANT SYSTEMS",
    description: "Submit a technical bug report or software issue directly to our engineering team for rapid ticket triage, root-cause debugging, and resolution.",
    url: "https://jayant-systems.online/support/report-a-bug",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"], 
    card: "summary_large_image",
    title: "Report an Issue or Software Bug | JAYANT SYSTEMS",
    description: "Submit a technical bug report or software issue directly to our engineering team for rapid ticket triage, root-cause debugging, and resolution.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
