import type { Metadata } from "next";
import { Geist, Inter, Instrument_Serif, IBM_Plex_Mono, DM_Serif_Display, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOLinks from "@/components/SEOLinks";
import Footer from "@/components/Footer";
import PWAHandler from "@/components/PWAHandler";
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

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayant Web & AI Systems | Custom AI, Web & Software Development",
  description: "Jayant Web & AI Systems builds AI-powered applications, custom software, websites, SaaS platforms, mobile apps, and automation solutions for startups, businesses, and enterprises. Transform your ideas into scalable digital products.",
  metadataBase: new URL("https://jayant-systems.online"),
  alternates: {
    canonical: "/",
  },

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
  authors: [{ name: "Jayant Web & AI Systems" }],
  applicationName: "Jayant Web & AI Systems",
  appleWebApp: {
    title: "Jayant Web & AI Systems",
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
    title: "Jayant Web & AI Systems | AI Solutions & Software Development",
    description: "I build intelligent AI applications, scalable software, business automation systems, modern websites, and cloud solutions that help businesses innovate and grow.",
    url: "https://jayant-systems.online",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayant Web & AI Systems",
    description: "Custom AI, Software Development, Websites, SaaS Platforms & Business Automation.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jayant Web & AI Systems",
    "url": "https://jayant-systems.online",
    "logo": "https://jayant-systems.online/logo.png",
    "sameAs": [
      "https://github.com/JayantOlhyan",
      "https://linkedin.com/company/jayant-systems",
      "https://www.instagram.com/jayantolhyan/",
      "https://www.youtube.com/@JayantWebAISystems",
      "https://x.com/JayantSystems"
    ],
    "email": "jayantwebaisystems@gmail.com"
  };

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head></head>
      <body className={`${geist.variable} ${inter.variable} ${instrumentSerif.variable} ${ibmMono.variable} ${dmSerifDisplay.variable} ${manrope.variable} min-h-full bg-bg-base text-text-base flex flex-col justify-between selection:bg-primary/10 selection:text-primary transition-colors duration-300 antialiased`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div id="main-content" className="flex-1 w-full pt-16">
          <Breadcrumbs />
          {children}
        </div>
        <SEOLinks />
        <FloatingWhatsApp />
        <PWAHandler />
        <Footer />
      </body>
    </html>
  );
}
