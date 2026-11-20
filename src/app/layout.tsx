import { industries, liveDivisions } from "@/data/framework";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import SiteHeader from "@/components/v2/SiteHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
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

// Display face for the v2 "studio" direction — see DESIGN.md §3
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"], // condensed cuts for the journey titles (font-stretch 75–100%)
});

// Manrope is kept only for the proposal/admin surfaces that reference --font-manrope.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayant Systems — Web, Software, AI & Digital Agency",
  description: "Jayant Systems builds websites, custom software, AI automations, brands and digital content. One digital partner for your business.",
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
    title: "JAYANT SYSTEMS — Your Business. Our Digital Execution.",
    description: "Jayant Systems builds websites, custom software, AI automations, brands and digital content. One digital partner for your business.",
    url: "https://jayant-systems.online",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAYANT SYSTEMS",
    description: "You run the business. We handle the digital.",
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${inter.variable} ${bricolage.variable} ${manrope.variable} h-full`} suppressHydrationWarning>
      <head></head>
      <body className={`min-h-full bg-bg-base text-text-base flex flex-col justify-between transition-colors duration-300 antialiased`}>
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
          <PWAHandler />
          <SiteFooter
            services={liveDivisions().map((d) => ({ name: d.short, href: `/services/${d.slug}` }))}
            industries={industries.map((i) => ({ name: i.name, href: `/industries/${i.slug}` }))}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
