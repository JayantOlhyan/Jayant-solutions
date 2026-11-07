import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import WorkGrid from "@/components/home/WorkGrid";
import ProofRow from "@/components/home/ProofRow";
import ServicesList from "@/components/home/ServicesList";
import Engagement from "@/components/home/Engagement";
import ProcessSteps from "@/components/home/ProcessSteps";
import Founder from "@/components/home/Founder";
import HomeFAQ from "@/components/home/HomeFAQ";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex w-full flex-col bg-white text-neutral-950">
      <HomeHero />
      <ProofRow />
      <WorkGrid />
      <ServicesList />
      <Engagement />
      <ProcessSteps />
      <Founder />
      <HomeFAQ />
      <HomeContact />
    </main>
  );
}
