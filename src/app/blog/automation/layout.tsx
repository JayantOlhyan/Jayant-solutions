import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Process Automation Guides | Jayant Systems",
  description: "Learn how to automate manual operational bottlenecks, integrate WhatsApp Business APIs, and build continuous webhook synchronization pipelines.",
  alternates: {
    canonical: "/blog/automation",
    languages: {
      "en-IN": "/blog/automation",
      "hi-IN": "/hi/blog/automation",
    },
  },
  openGraph: {
    title: "Business Process Automation Guides | Jayant Systems",
    description: "Learn how to automate manual operational bottlenecks, integrate WhatsApp Business APIs, and build continuous webhook synchronization pipelines.",
    url: "https://jayant-systems.online/blog/automation",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation Guides | Jayant Systems",
    description: "Learn how to automate manual operational bottlenecks, integrate WhatsApp Business APIs, and build continuous webhook synchronization pipelines.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
