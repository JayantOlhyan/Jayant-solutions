import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Software Development & Automation | Jayant Systems",
  description: "Custom Python development for backend services, machine learning integrations, data scraping routines, and automated business process scripts.",
  alternates: {
    canonical: "/technologies/python-development",
    languages: {
      "en-IN": "/technologies/python-development",
      "hi-IN": "/hi/technologies/python-development",
    },
  },
  openGraph: {
    title: "Python Software Development & Automation | Jayant Systems",
    description: "Custom Python development for backend services, machine learning integrations, data scraping routines, and automated business process scripts.",
    url: "https://jayant-systems.online/technologies/python-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Python Software Development & Automation | Jayant Systems",
    description: "Custom Python development for backend services, machine learning integrations, data scraping routines, and automated business process scripts.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
