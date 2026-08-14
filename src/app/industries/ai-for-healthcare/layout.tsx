import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Healthcare Solutions & Clinic Portals | Jayant Systems",
  description: "Engineer intelligent medical symptom checkers, automated clinic appointment booking systems, and electronic health records management platforms.",
  alternates: {
    canonical: "/industries/ai-for-healthcare",
    languages: {
      "en-IN": "/industries/ai-for-healthcare",
      "hi-IN": "/hi/industries/ai-for-healthcare",
    },
  },
  openGraph: {
    title: "AI Healthcare Solutions & Clinic Portals | Jayant Systems",
    description: "Engineer intelligent medical symptom checkers, automated clinic appointment booking systems, and electronic health records management platforms.",
    url: "https://jayant-systems.online/industries/ai-for-healthcare",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Healthcare Solutions & Clinic Portals | Jayant Systems",
    description: "Engineer intelligent medical symptom checkers, automated clinic appointment booking systems, and electronic health records management platforms.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
