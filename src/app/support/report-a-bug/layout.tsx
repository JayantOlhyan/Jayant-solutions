import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report an Issue or Software Bug | Jayant Web & AI Systems",
  description: "Submit a technical bug report or software issue directly to our engineering team for rapid ticket triage, root-cause debugging, and resolution.",
  alternates: {
    canonical: "/support/report-a-bug",
    languages: {
      "en-IN": "/support/report-a-bug",
      "hi-IN": "/hi/support/report-a-bug",
    },
  },
  openGraph: {
    title: "Report an Issue or Software Bug | Jayant Web & AI Systems",
    description: "Submit a technical bug report or software issue directly to our engineering team for rapid ticket triage, root-cause debugging, and resolution.",
    url: "https://jayant-systems.online/support/report-a-bug",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Report an Issue or Software Bug | Jayant Web & AI Systems",
    description: "Submit a technical bug report or software issue directly to our engineering team for rapid ticket triage, root-cause debugging, and resolution.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
