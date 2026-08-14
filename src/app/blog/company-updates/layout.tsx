import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Announcements & Milestones | Jayant Systems",
  description: "Official news, release notes, engineering milestone updates, and technology announcements from the development desk of Jayant Web & AI Systems.",
  alternates: {
    canonical: "/blog/company-updates",
    languages: {
      "en-IN": "/blog/company-updates",
      "hi-IN": "/hi/blog/company-updates",
    },
  },
  openGraph: {
    title: "Company Announcements & Milestones | Jayant Systems",
    description: "Official news, release notes, engineering milestone updates, and technology announcements from the development desk of Jayant Web & AI Systems.",
    url: "https://jayant-systems.online/blog/company-updates",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Announcements & Milestones | Jayant Systems",
    description: "Official news, release notes, engineering milestone updates, and technology announcements from the development desk of Jayant Web & AI Systems.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
