"use client";

import React, { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight, Check, Heart, Shield, Laptop, MessageSquare, Handshake, Users, Globe, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState("technology");
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const stats = [
    { number: "25+", label: "Active Partners" },
    { number: "10+", label: "Countries" },
    { number: "5+", label: "Partnership Types" },
    { number: "100%", label: "Shared Growth" },
  ];

  const ecosystem = [
    { title: "Technology Partners", desc: "Together with leading tech platforms to build innovative and scalable solutions.", icon: <Laptop className="size-5 text-primary" /> },
    { title: "Cloud & Infrastructure Partners", desc: "Delivering reliable, secure, and high-performance infrastructure for modern businesses.", icon: <Globe className="size-5 text-primary" /> },
    { title: "Consulting & Service Partners", desc: "Collaborating to provide end-to-end digital transformation and business consulting services.", icon: <Handshake className="size-5 text-primary" /> },
    { title: "Academic & Community Partners", desc: "Empowering the next generation through knowledge sharing and innovation programs.", icon: <Users className="size-5 text-primary" /> },
  ];

  const partners = {
    technology: [
      { name: "AWS", logo: "☁️" },
      { name: "Microsoft", logo: "💻" },
      { name: "Google Cloud", logo: "☁️" },
      { name: "MongoDB", logo: "🍃" },
      { name: "GitHub", logo: "🐙" },
      { name: "Stripe", logo: "💳" },
    ],
    cloud: [
      { name: "DigitalOcean", logo: "🐳" },
      { name: "Vercel", logo: "▲" },
      { name: "Firebase", logo: "🔥" },
      { name: "Cloudflare", logo: "☁️" },
      { name: "Docker", logo: "🐳" },
      { name: "Twilio", logo: "💬" },
    ],
    consulting: [
      { name: "TCS", logo: "👥" },
      { name: "Accenture", logo: "👥" },
      { name: "Deloitte", logo: "👥" },
      { name: "KPMG", logo: "👥" },
      { name: "Infosys", logo: "👥" },
      { name: "Wipro", logo: "👥" },
    ],
    academic: [
      { name: "Google Developer Groups", logo: "🎓" },
      { name: "Microsoft Learn", logo: "🎓" },
      { name: "NASSCOM", logo: "🎓" },
      { name: "IEEE", logo: "🎓" },
      { name: "Hack The North", logo: "🎓" },
      { name: "ACM", logo: "🎓" },
    ],
  };

  const benefits = [
    { title: "Business Growth", desc: "Expand your reach and create new revenue opportunities." },
    { title: "Co-Marketing", desc: "Joint marketing initiatives and brand visibility to accelerate growth." },
    { title: "Technical Collaboration", desc: "Work together on innovative solutions and technology integrations." },
    { title: "Dedicated Support", desc: "Get priority support and resources from our expert team." },
    { title: "Knowledge Sharing", desc: "Access training, resources, and best practices to stay ahead." },
    { title: "Trusted Network", desc: "Be part of a trusted network of leaders and innovators worldwide." },
  ];

  const partnerTestimonials = [
    {
      text: "Jayant Web & AI Systems is a reliable technology partner. Their technical expertise and commitment to quality have helped us deliver outstanding solutions to our clients.",
      author: "Abhishek Sharma",
      role: "Partner Solutions Architect, AWS",
    },
    {
      text: "Working with Jayant Web & AI Systems has been a great experience. Their team is proactive, professional, and always focused on delivering real value.",
      author: "Neha Verma",
      role: "Program Manager, Google Cloud",
    },
    {
      text: "Their passion for innovation and strong execution makes them an ideal partner for building future-ready, scalable solutions.",
      author: "Rohan Mehta",
      role: "Director – Partnerships, MongoDB",
    },
  ];

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % partnerTestimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + partnerTestimonials.length) % partnerTestimonials.length);
  };

  return (
    <PageTransition>
      <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
        <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
          
          {/* Breadcrumbs */}
          <nav className="text-xs font-mono text-text-muted flex items-center gap-2 pt-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-text-muted">Company</span>
            <span>&gt;</span>
            <span className="text-text-base">Partners</span>
          </nav>

          {/* Hero split */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-[9px] uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2.5 py-0.5 rounded-full mb-4">
                PARTNERS
              </span>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-base leading-[1.08] mb-6">
                Stronger Together.{" "}
                <span className="text-primary underline decoration-primary/40 decoration-4 underline-offset-8">
                  Greater Impact.
                </span>
              </h1>
              <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mb-8">
                We collaborate with forward-thinking technology leaders, platforms, and organizations to deliver exceptional solutions and drive meaningful impact for businesses worldwide.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover text-white px-7 py-3 text-xs font-mono font-bold transition-all shadow-md"
                >
                  <span>Become a Partner</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white hover:bg-neutral-50 dark:bg-card-bg dark:hover:bg-neutral-900 px-7 py-3 text-xs font-mono font-bold text-text-base transition-all"
                >
                  <span>Partnership Inquiries</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              {/* Stats bullets */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border-custom/50 pt-6 w-full">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-serif font-black text-primary leading-none mb-1">{stat.number}</span>
                    <span className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Handshake graphic mockup */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border border-border-custom bg-neutral-900 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <div className="z-20 text-center text-white p-6 absolute bottom-0 w-full">
                  <h4 className="font-serif text-lg font-bold">Technology Handshake</h4>
                  <p className="text-[10px] text-white/60 font-mono mt-1 uppercase tracking-widest leading-none">Shared Growth Ecosystem</p>
                </div>
              </div>
            </div>

          </section>

          {/* Our Partnership Ecosystem */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                OUR PARTNERSHIP ECOSYSTEM
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Partnership Ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {ecosystem.map((eco, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col gap-3 text-left">
                  <div className="size-9 rounded-full border border-border-custom bg-card-bg flex items-center justify-center">
                    {eco.icon}
                  </div>
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base leading-snug">{eco.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed">{eco.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Valued Partners logos */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                VALUED PARTNERS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Our Valued Partners
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {Object.keys(partners).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border capitalize ${
                    activeTab === tab
                      ? "bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-950 shadow-sm"
                      : "bg-white border-border-custom text-text-muted hover:text-text-base dark:bg-card-bg/40"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
              {partners[activeTab as keyof typeof partners].map((p, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 text-center flex flex-col gap-2 items-center justify-center">
                  <span className="text-2xl leading-none">{p.logo}</span>
                  <span className="font-serif text-xs font-bold text-text-base leading-none">{p.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                PARTNERSHIP BENEFITS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Benefits of Partnering with Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="hog-card rounded-2xl p-5 border border-border-custom bg-card-bg/40 flex flex-col justify-between min-h-[110px]">
                  <h5 className="font-serif text-xs md:text-sm font-bold text-text-base mb-1">{benefit.title}</h5>
                  <p className="text-[10px] md:text-xs text-text-muted leading-relaxed mt-2">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Our Partners Say */}
          <section className="py-8 relative border-t border-border-custom/30 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3.5 py-1 rounded-full mb-4 inline-block">
                WHAT OUR PARTNERS SAY
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text-base mt-2">
                Partner Testimonials
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-center relative px-8">
              <span className="text-6xl font-serif text-primary/10 absolute -top-8 left-0 select-none">“</span>
              <p className="font-serif text-sm md:text-base italic text-text-base leading-relaxed mb-6">
                {partnerTestimonials[testimonialIdx].text}
              </p>
              <h4 className="font-serif text-xs md:text-sm font-bold text-text-base leading-none mb-1">
                {partnerTestimonials[testimonialIdx].author}
              </h4>
              <span className="text-[10px] font-mono text-text-muted">
                {partnerTestimonials[testimonialIdx].role}
              </span>

              {/* Navigation arrows */}
              <div className="flex justify-center gap-3 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-1.5 rounded-lg border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <ChevronLeft className="size-4 text-text-base" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-1.5 rounded-lg border border-border-custom hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                >
                  <ChevronRight className="size-4 text-text-base" />
                </button>
              </div>
            </div>
          </section>

          {/* Bottom CTA split layout */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/20 bg-primary/10 px-2 py-0.5 rounded-full mb-3">
                  LET&apos;S WORK TOGETHER
                </span>
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="text-xs md:text-sm text-white/70 mb-6 leading-relaxed">
                  We are always open to exploring meaningful partnerships that create value and drive positive impact.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-6 py-2.5 text-xs font-mono font-bold text-white shadow-md transition-all duration-200"
                  >
                    <span>Become a Partner</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 hover:bg-white/5 px-6 py-2.5 text-xs font-mono font-bold text-white transition-all duration-200"
                  >
                    <span>Partnership Inquiries</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right: Key Promises */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3.5 text-white/80 text-xs">
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-primary shrink-0" /> Flexible partnership models
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-primary shrink-0" /> Collaborative go-to-market opportunities
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-primary shrink-0" /> Shared success and growth
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="size-4 text-primary shrink-0" /> Long-term strategic relationships
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>
    </PageTransition>
  );
}
