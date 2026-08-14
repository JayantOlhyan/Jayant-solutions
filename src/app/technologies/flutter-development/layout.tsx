import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flutter Cross-Platform App Development | Jayant Systems",
  description: "Deliver seamless iOS and Android mobile experiences from a single Flutter codebase with native performance, custom UI design, and cloud backend sync.",
  alternates: {
    canonical: "/technologies/flutter-development",
    languages: {
      "en-IN": "/technologies/flutter-development",
      "hi-IN": "/hi/technologies/flutter-development",
    },
  },
  openGraph: {
    title: "Flutter Cross-Platform App Development | Jayant Systems",
    description: "Deliver seamless iOS and Android mobile experiences from a single Flutter codebase with native performance, custom UI design, and cloud backend sync.",
    url: "https://jayant-systems.online/technologies/flutter-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter Cross-Platform App Development | Jayant Systems",
    description: "Deliver seamless iOS and Android mobile experiences from a single Flutter codebase with native performance, custom UI design, and cloud backend sync.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
