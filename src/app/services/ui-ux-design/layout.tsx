import { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "UI/UX & Product Interface Design | JAYANT SYSTEMS",
  description: "Design intuitive web and mobile user experiences with interactive wireframes, design systems, and responsive Figma prototypes built for conversion.",
  alternates: {
    canonical: "/services/ui-ux-design",
    languages: {
      "en-IN": "/services/ui-ux-design",
      "hi-IN": "/hi/services/ui-ux-design",
    },
  },
  openGraph: {
    title: "UI/UX & Product Interface Design | JAYANT SYSTEMS",
    description: "Design intuitive web and mobile user experiences with interactive wireframes, design systems, and responsive Figma prototypes built for conversion.",
    url: "https://jayant-systems.online/services/ui-ux-design",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX & Product Interface Design | JAYANT SYSTEMS",
    description: "Design intuitive web and mobile user experiences with interactive wireframes, design systems, and responsive Figma prototypes built for conversion.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd schema={createServiceSchema({
        name: "UI/UX & Product Interface Design Services",
        description: "Design intuitive web and mobile user experiences with interactive wireframes, design systems, and responsive Figma prototypes built for conversion.",
        url: "/services/ui-ux-design",
        serviceType: "UI/UX Design"
      })} />
      {children}
    </>
  );
}
