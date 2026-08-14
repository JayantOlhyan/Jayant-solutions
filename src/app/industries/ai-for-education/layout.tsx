import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Portals & EdTech Software Development | Jayant Web & AI",
  description: "Create intelligent learning management systems, teacher workspaces, automated grading workflows, and interactive parent notification hubs for schools.",
  alternates: {
    canonical: "/industries/ai-for-education",
    languages: {
      "en-IN": "/industries/ai-for-education",
      "hi-IN": "/hi/industries/ai-for-education",
    },
  },
  openGraph: {
    title: "AI Portals & EdTech Software Development | Jayant Web & AI",
    description: "Create intelligent learning management systems, teacher workspaces, automated grading workflows, and interactive parent notification hubs for schools.",
    url: "https://jayant-systems.online/industries/ai-for-education",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Portals & EdTech Software Development | Jayant Web & AI",
    description: "Create intelligent learning management systems, teacher workspaces, automated grading workflows, and interactive parent notification hubs for schools.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
