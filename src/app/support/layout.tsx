import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Support & Help Center | Jayant Web & AI Systems",
  description: "Access technical documentation, report system bugs, check live service status, or contact our engineering support team for active client projects.",
  alternates: {
    canonical: "/support",
    languages: {
      "en-IN": "/support",
      "hi-IN": "/hi/support",
    },
  },
  openGraph: {
    title: "Customer Support & Help Center | Jayant Web & AI Systems",
    description: "Access technical documentation, report system bugs, check live service status, or contact our engineering support team for active client projects.",
    url: "https://jayant-systems.online/support",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support & Help Center | Jayant Web & AI Systems",
    description: "Access technical documentation, report system bugs, check live service status, or contact our engineering support team for active client projects.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
