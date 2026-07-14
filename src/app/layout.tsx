import type { Metadata } from "next";
import { Geist, Inter, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOLinks from "@/components/SEOLinks";
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
  title: "Jayant Web & AI Systems | Custom AI, Web & Software Development Agency",
  description: "Jayant Web & AI Systems builds AI-powered applications, custom software, websites, SaaS platforms, mobile apps, and automation solutions for startups, businesses, and enterprises. Transform your ideas into scalable digital products.",
  metadataBase: new URL("https://jayant-solution.netlify.app"),
  alternates: {
    canonical: "/",
  },

  authors: [{ name: "Jayant Web & AI Systems" }],
  applicationName: "Jayant Web & AI Systems",
  appleWebApp: {
    title: "Jayant Web & AI Systems",
  },
  formatDetection: {
    telephone: false,
  },
  robots: "index,follow",
  openGraph: {
    title: "Jayant Web & AI Systems | AI Solutions & Software Development",
    description: "We build intelligent AI applications, scalable software, business automation systems, modern websites, and cloud solutions that help businesses innovate and grow.",
    url: "https://jayant-solution.netlify.app",
    siteName: "Jayant Web & AI Systems",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Building AI Solutions That Automate, Scale & Transform Businesses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayant Web & AI Systems",
    description: "Custom AI, Software Development, Websites, SaaS Platforms & Business Automation.",
    images: ["/twitter-image.png"],
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
    "url": "https://jayant-solution.netlify.app",
    "logo": "https://jayant-solution.netlify.app/logo.png",
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
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>
      <body className={`${geist.variable} ${inter.variable} ${instrumentSerif.variable} ${ibmMono.variable} min-h-full bg-bg-base text-text-base flex flex-col justify-between selection:bg-primary/10 selection:text-primary transition-colors duration-300 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="flex-1 w-full pt-16">
          <Breadcrumbs />
          {children}
        </div>
        <SEOLinks />
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
