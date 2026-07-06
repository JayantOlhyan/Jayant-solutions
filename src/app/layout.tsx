import type { Metadata } from "next";
import { Outfit, Instrument_Serif, DM_Mono } from "next/font/google";
import "./globals.css";

// 1. Configure the three distinct families for the UI hierarchy
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400", // Instrument Serif comes as regular (400) and italic
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// 2. Set up high-converting SEO metadata based on WRD v1.1
export const metadata: Metadata = {
  title: "Jayant's Studio | Websites That Win Customers. AI Systems That Save Time.",
  description: "I design websites, AI chatbots, WhatsApp automation, and custom CRM systems for Indian businesses to get more leads and save time.",
  metadataBase: new URL("https://jayantolhyan.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jayant's Studio | Websites That Win Customers. AI Systems That Save Time.",
    description: "I build high-converting websites and AI automation systems that help businesses grow and eliminate manual busywork.",
    url: "https://jayantolhyan.in",
    siteName: "Jayant's Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayant's Studio | High-Converting Web & AI Automation",
    description: "I build high-converting websites and AI automation systems that help businesses operate more efficiently.",
    creator: "@jayantolhyan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg-base text-text-base selection:bg-primary/10 selection:text-primary transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
