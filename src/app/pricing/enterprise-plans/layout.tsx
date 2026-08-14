import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Enterprise Software Plans | Jayant Web & AI Systems",
  description: "Dedicated engineering capacity, custom multi-tier AI architectures, custom SLA support retainers, and full intellectual property transfer for enterprises.",
  alternates: {
    canonical: "/pricing/enterprise-plans",
    languages: {
      "en-IN": "/pricing/enterprise-plans",
      "hi-IN": "/hi/pricing/enterprise-plans",
    },
  },
  openGraph: {
    title: "Custom Enterprise Software Plans | Jayant Web & AI Systems",
    description: "Dedicated engineering capacity, custom multi-tier AI architectures, custom SLA support retainers, and full intellectual property transfer for enterprises.",
    url: "https://jayant-systems.online/pricing/enterprise-plans",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Enterprise Software Plans | Jayant Web & AI Systems",
    description: "Dedicated engineering capacity, custom multi-tier AI architectures, custom SLA support retainers, and full intellectual property transfer for enterprises.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
