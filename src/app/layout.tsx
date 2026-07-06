import type { Metadata } from "next";
import { Outfit, Instrument_Serif, DM_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

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
      <body className="min-h-full bg-bg-base text-text-base flex flex-col justify-between selection:bg-primary/10 selection:text-primary transition-colors duration-300">
        <Navbar />
        <div className="flex-1 w-full pt-16">
          {children}
        </div>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
