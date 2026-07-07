import type { Metadata } from "next";
import { Geist, Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayant Web & AI Systems | We Build Revenue Systems. Not Just Websites.",
  description: "We help businesses generate more leads, automate operations, and scale with custom websites, AI systems, and business software.",
  metadataBase: new URL("https://jayantolhyan.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jayant Web & AI Systems | We Build Revenue Systems. Not Just Websites.",
    description: "We build custom systems for business growth, automated workflows, and custom dashboards.",
    url: "https://jayantolhyan.in",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayant Web & AI Systems | Operational Systems & AI Automation",
    description: "We build custom systems for business growth, automated workflows, and custom dashboards.",
    creator: "@jayantolhyan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geist.variable} ${inter.variable} ${instrumentSerif.variable} ${ibmMono.variable} min-h-full bg-bg-base text-text-base flex flex-col justify-between selection:bg-primary/10 selection:text-primary transition-colors duration-300 antialiased`}>
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
