import React from "react";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Brain, Code, Globe, Smartphone, Zap, Cloud } from "lucide-react";

export default function Home() {
  const homeServices = [
    {
      title: "AI Development",
      description: "Custom AI solutions, LLM integrations, chatbots, and intelligent automation.",
      icon: <Brain className="size-6 text-primary" />,
    },
    {
      title: "Custom Software",
      description: "Scalable, secure, and high-performance software tailored to your needs.",
      icon: <Code className="size-6 text-primary" />,
    },
    {
      title: "Website Development",
      description: "Modern, responsive, and SEO-friendly websites that convert visitors into customers.",
      icon: <Globe className="size-6 text-primary" />,
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile apps for iOS and Android that deliver exceptional experiences.",
      icon: <Smartphone className="size-6 text-primary" />,
    },
    {
      title: "Automation",
      description: "Automate workflows, integrate tools, and eliminate repetitive tasks to save time.",
      icon: <Zap className="size-6 text-primary" />,
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, deployment pipelines, monitoring, and scalability done right.",
      icon: <Cloud className="size-6 text-primary" />,
    },
  ];

  return (
    <div className="hog-grid min-h-screen pb-16 md:pb-28">
      <main className="flex-1 w-full max-w-none px-6 md:px-12 lg:px-16 pt-12 md:pt-20 flex flex-col gap-16 md:gap-28 overflow-x-hidden">
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Proof Strip (Trusted Logos) */}
        <ProofStrip />

        {/* 3. Services Section ("End-to-End Digital Solutions") */}
        <section id="services" className="py-12 relative text-left">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mb-4 mt-2">
              End-to-End Digital Solutions
            </h2>
            <p className="text-sm md:text-base text-text-muted">
              From idea to deployment — we deliver scalable, secure, and high-performance solutions tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, idx) => (
              <div
                key={idx}
                className="hog-card rounded-3xl p-6 md:p-8 bg-white dark:bg-card-bg/60 backdrop-blur-sm flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="size-12 rounded-full border border-border-custom bg-card-bg flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-text-base leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#C25E00] dark:text-primary hover:underline mt-6"
                  aria-label={`Learn more about ${service.title} services`}
                >
                  <span>Learn more</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 text-xs font-mono font-bold text-text-base transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

        {/* 4. Process Section */}
        <section id="process">
          <Process />
        </section>

        {/* 5. Case Studies Section */}
        <section id="portfolio">
          <CaseStudies />
        </section>

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Ready to Build CTA Banner */}
        <CallToAction />

      </main>
    </div>
  );
}
