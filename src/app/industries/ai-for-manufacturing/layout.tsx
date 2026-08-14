import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Operations & Inventory Software | Jayant",
  description: "Custom production tracking dashboards, automated inventory alerts, supply chain management software, and real-time operational metrics for manufacturers.",
  alternates: {
    canonical: "/industries/ai-for-manufacturing",
    languages: {
      "en-IN": "/industries/ai-for-manufacturing",
      "hi-IN": "/hi/industries/ai-for-manufacturing",
    },
  },
  openGraph: {
    title: "Manufacturing Operations & Inventory Software | Jayant",
    description: "Custom production tracking dashboards, automated inventory alerts, supply chain management software, and real-time operational metrics for manufacturers.",
    url: "https://jayant-systems.online/industries/ai-for-manufacturing",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Operations & Inventory Software | Jayant",
    description: "Custom production tracking dashboards, automated inventory alerts, supply chain management software, and real-time operational metrics for manufacturers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
