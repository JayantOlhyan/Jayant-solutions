import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions for Agriculture & AgTech | Jayant Systems",
  description: "Build custom AgTech solutions: AI crop diagnostics, soil health monitoring tools, automated weather advisory systems, and farm management dashboards.",
  alternates: {
    canonical: "/industries/ai-for-agriculture",
    languages: {
      "en-IN": "/industries/ai-for-agriculture",
      "hi-IN": "/hi/industries/ai-for-agriculture",
    },
  },
  openGraph: {
    title: "AI Solutions for Agriculture & AgTech | Jayant Systems",
    description: "Build custom AgTech solutions: AI crop diagnostics, soil health monitoring tools, automated weather advisory systems, and farm management dashboards.",
    url: "https://jayant-systems.online/industries/ai-for-agriculture",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions for Agriculture & AgTech | Jayant Systems",
    description: "Build custom AgTech solutions: AI crop diagnostics, soil health monitoring tools, automated weather advisory systems, and farm management dashboards.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
