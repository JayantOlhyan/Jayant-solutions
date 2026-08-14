import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cross-Platform Mobile App Development | Jayant Systems",
  description: "Build native-performance iOS and Android mobile applications using Flutter with real-time database sync, push notifications, and offline capability.",
  alternates: {
    canonical: "/services/mobile-app-development",
    languages: {
      "en-IN": "/services/mobile-app-development",
      "hi-IN": "/hi/services/mobile-app-development",
    },
  },
  openGraph: {
    title: "Cross-Platform Mobile App Development | Jayant Systems",
    description: "Build native-performance iOS and Android mobile applications using Flutter with real-time database sync, push notifications, and offline capability.",
    url: "https://jayant-systems.online/services/mobile-app-development",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Platform Mobile App Development | Jayant Systems",
    description: "Build native-performance iOS and Android mobile applications using Flutter with real-time database sync, push notifications, and offline capability.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
