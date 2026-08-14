import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Modern Website Development & Next.js Design | Jayant",
  description: "Fast, responsive, and SEO-optimized business websites built with Next.js and Tailwind CSS to convert visitors into qualified sales opportunities.",
  alternates: {
    canonical: "/services/website-development",
    languages: {
      "en-IN": "/services/website-development",
      "hi-IN": "/hi/services/website-development",
    },
  },
  openGraph: {
    title: "Modern Website Development & Next.js Design | Jayant",
    description: "Fast, responsive, and SEO-optimized business websites built with Next.js and Tailwind CSS to convert visitors into qualified sales opportunities.",
    url: "https://jayant-systems.online/services/website-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Website Development & Next.js Design | Jayant",
    description: "Fast, responsive, and SEO-optimized business websites built with Next.js and Tailwind CSS to convert visitors into qualified sales opportunities.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={createServiceSchema({
        name: "Modern Website Development & Next.js Design Services",
        description: "Fast, responsive, and SEO-optimized business websites built with Next.js and Tailwind CSS to convert visitors into qualified sales opportunities.",
        url: "/services/website-development",
        serviceType: "Website Development"
      })} />
      {children}
    </>
  );
}
