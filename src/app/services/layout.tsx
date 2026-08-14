import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI, Web & Software Development Services | Jayant",
  description: "Full-stack engineering services: custom AI chatbot development, SaaS platforms, business workflow automation, web apps, and secure cloud infrastructure.",
  alternates: {
    canonical: "/services",
    languages: {
      "en-IN": "/services",
      "hi-IN": "/hi/services",
    },
  },
  openGraph: {
    title: "Custom AI, Web & Software Development Services | Jayant",
    description: "Full-stack engineering services: custom AI chatbot development, SaaS platforms, business workflow automation, web apps, and secure cloud infrastructure.",
    url: "https://jayant-systems.online/services",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI, Web & Software Development Services | Jayant",
    description: "Full-stack engineering services: custom AI chatbot development, SaaS platforms, business workflow automation, web apps, and secure cloud infrastructure.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
