import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CivicTech & Digital Public Service Portals | Jayant",
  description: "Modernize public administration with unified civic portals, automated citizen grievance tracking, and transparent digital public service directories.",
  alternates: {
    canonical: "/industries/ai-for-government",
    languages: {
      "en-IN": "/industries/ai-for-government",
      "hi-IN": "/hi/industries/ai-for-government",
    },
  },
  openGraph: {
    title: "CivicTech & Digital Public Service Portals | Jayant",
    description: "Modernize public administration with unified civic portals, automated citizen grievance tracking, and transparent digital public service directories.",
    url: "https://jayant-systems.online/industries/ai-for-government",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CivicTech & Digital Public Service Portals | Jayant",
    description: "Modernize public administration with unified civic portals, automated citizen grievance tracking, and transparent digital public service directories.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
