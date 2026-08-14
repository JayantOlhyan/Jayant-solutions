import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Platform Architecture & Development | Jayant Systems",
  description: "Design and build multi-tenant SaaS applications with subscription billing integrations, role-based access control, analytics dashboards, and modular APIs.",
  alternates: {
    canonical: "/services/saas-development",
    languages: {
      "en-IN": "/services/saas-development",
      "hi-IN": "/hi/services/saas-development",
    },
  },
  openGraph: {
    title: "SaaS Platform Architecture & Development | Jayant Systems",
    description: "Design and build multi-tenant SaaS applications with subscription billing integrations, role-based access control, analytics dashboards, and modular APIs.",
    url: "https://jayant-systems.online/services/saas-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Platform Architecture & Development | Jayant Systems",
    description: "Design and build multi-tenant SaaS applications with subscription billing integrations, role-based access control, analytics dashboards, and modular APIs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
