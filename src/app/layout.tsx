import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import SiteHeader from "@/components/v2/SiteHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOLinks from "@/components/SEOLinks";
import SiteFooter from "@/components/v2/SiteFooter";
import SmoothScroll from "@/components/v2/motion/SmoothScroll";
import PWAHandler from "@/components/PWAHandler";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { createOrganizationSchema, createWebSiteSchema } from "@/lib/seo/schema";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// Manrope is kept only for the proposal/admin surfaces that reference --font-manrope.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAYANT SYSTEMS | Websites, Custom Software & AI Systems",
  description: "JAYANT SYSTEMS designs and builds high-performance websites, custom software products, and practical AI-powered workflows for real-world businesses.",
  metadataBase: new URL("https://jayant-systems.online"),

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#F37021",
      },
    ],
  },
  authors: [{ name: "Jayant Olhyan — JAYANT SYSTEMS" }],
  applicationName: "JAYANT SYSTEMS",
  appleWebApp: {
    title: "JAYANT SYSTEMS",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#111111",
    "msapplication-config": "/browserconfig.xml",
  },
  robots: "index,follow",
  openGraph: {
    title: "JAYANT SYSTEMS | Building Digital Systems for Real-World Businesses",
    description: "Founder-led technology studio designing and building websites, custom software products, and practical AI-powered workflows.",
    url: "https://jayant-systems.online",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYANT SYSTEMS",
    description: "Building Digital Systems for Real-World Businesses — Websites, Custom Software, and AI Workflows.",
  },
  verification: {
    google: "-a0wyjaTybF3gldEtwwHLwq_ChLau7TLls8Q1KFF7lE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${inter.variable} ${manrope.variable} h-full`} suppressHydrationWarning>
      <head></head>
      <body className={`min-h-full bg-bg-base text-text-base flex flex-col justify-between selection:bg-primary/10 selection:text-primary transition-colors duration-300 antialiased`}>
        <SmoothScroll>
          <GoogleAnalytics />
          <a className="skip-link" href="#main-content">Skip to main content</a>
          <JsonLd schema={[createOrganizationSchema(), createWebSiteSchema()]} />
          <SiteHeader />
          <div id="main-content" className="flex-1 w-full pt-[72px]">
            <Breadcrumbs />
            {children}
          </div>
          <SEOLinks />
          <FloatingWhatsApp />
          <PWAHandler />
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
