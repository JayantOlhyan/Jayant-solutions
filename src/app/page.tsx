import type { Metadata } from "next";
import Preloader from "@/components/studio/Preloader";
import StudioHeader from "@/components/studio/StudioHeader";
import Hero from "@/components/studio/Hero";
import Ribbon from "@/components/studio/Ribbon";
import Statement from "@/components/studio/Statement";
import WorkList from "@/components/studio/WorkList";
import Services from "@/components/studio/Services";
import HowWeHelp from "@/components/studio/HowWeHelp";
import IndustriesRow from "@/components/studio/IndustriesRow";
import Receipts from "@/components/studio/Receipts";
import ProcessStack from "@/components/studio/ProcessStack";
import Journey from "@/components/studio/Journey";
import StudioFAQ from "@/components/studio/StudioFAQ";
import ClosingCTA from "@/components/studio/ClosingCTA";
import StudioMotion from "@/components/studio/StudioMotion";

const title = "Jayant Systems — Web, Software, AI & Digital Agency";
const description =
  "Jayant Systems builds websites, custom software, AI automations, brands and digital content. One digital partner for your business.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Jayant Systems — You run the business. We handle the digital." }], 
    title: "JAYANT SYSTEMS — Your Business. Our Digital Execution.",
    description,
    url: "/",
    siteName: "JAYANT SYSTEMS",
    locale: "en_IN",
    type: "website",
  },
  twitter: { images: ["/twitter-image"],  card: "summary_large_image", title: "JAYANT SYSTEMS — Your Business. Our Digital Execution.", description },
};

// Homepage — v2 "studio" direction. Design rules: /DESIGN.md
export default function Home() {
  return (
    <div className="studio -mt-[72px] pt-[72px]">
      <Preloader />
      <StudioHeader />
      <main>
        <Hero />
        <Ribbon />
        <Statement />
        <Services />
        <HowWeHelp />
        <WorkList />
        <IndustriesRow />
        <ProcessStack />
        <Journey />
        <Receipts />
        <StudioFAQ />
        <ClosingCTA />
      </main>
      <StudioMotion />
    </div>
  );
}
