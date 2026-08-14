import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Rapid Startup MVP Development Services | Jayant Systems",
  description: "Turn startup ideas into launch-ready Minimum Viable Products in 2 to 6 weeks with modern web frameworks, user authentication, and secure databases.",
  alternates: {
    canonical: "/services/mvp-development",
    languages: {
      "en-IN": "/services/mvp-development",
      "hi-IN": "/hi/services/mvp-development",
    },
  },
  openGraph: {
    title: "Rapid Startup MVP Development Services | Jayant Systems",
    description: "Turn startup ideas into launch-ready Minimum Viable Products in 2 to 6 weeks with modern web frameworks, user authentication, and secure databases.",
    url: "https://jayant-systems.online/services/mvp-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Startup MVP Development Services | Jayant Systems",
    description: "Turn startup ideas into launch-ready Minimum Viable Products in 2 to 6 weeks with modern web frameworks, user authentication, and secure databases.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={createServiceSchema({
        name: "Rapid Startup MVP Development Services",
        description: "Turn startup ideas into launch-ready Minimum Viable Products in 2 to 6 weeks with modern web frameworks, user authentication, and secure databases.",
        url: "/services/mvp-development",
        serviceType: "MVP Development"
      })} />
      {children}
    </>
  );
}
