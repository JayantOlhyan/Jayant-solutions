import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinTech Software & AI Financial Systems | Jayant Systems",
  description: "Develop secure financial dashboards, automated invoice processing pipelines, transaction fraud detection, and compliance-ready fintech platforms.",
  alternates: {
    canonical: "/industries/ai-for-finance",
    languages: {
      "en-IN": "/industries/ai-for-finance",
      "hi-IN": "/hi/industries/ai-for-finance",
    },
  },
  openGraph: {
    title: "FinTech Software & AI Financial Systems | Jayant Systems",
    description: "Develop secure financial dashboards, automated invoice processing pipelines, transaction fraud detection, and compliance-ready fintech platforms.",
    url: "https://jayant-systems.online/industries/ai-for-finance",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech Software & AI Financial Systems | Jayant Systems",
    description: "Develop secure financial dashboards, automated invoice processing pipelines, transaction fraud detection, and compliance-ready fintech platforms.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
