import React from "react";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const contactCards = [
    {
      title: "Email Address",
      value: "jayantwebaisystems@gmail.com",
      link: "mailto:jayantwebaisystems@gmail.com",
      desc: "Response Time: Within 24 Hours",
      icon: <Mail className="size-5 text-primary" />
    },
    {
      title: "WhatsApp Chat",
      value: "Quickest Way to Reach Us",
      link: "https://wa.me/919667344125?text=%F0%9F%91%8B%20Hi!%20I%27m%20interested%20in%20discussing%20a%20software%20or%20AI%20project.",
      desc: "Average Response: Within 1 Hour (Business Hours)",
      icon: <MessageSquare className="size-5 text-primary" />
    },
    {
      title: "Office Location",
      value: "New Delhi, India",
      desc: "Remote First • Serving Clients Worldwide",
      icon: <MapPin className="size-5 text-primary" />
    },
    {
      title: "Business Hours",
      value: "Mon – Fri: 9:00 AM – 7:00 PM IST",
      desc: "Saturday: 10:00 AM – 5:00 PM | Sun: Closed",
      icon: <Clock className="size-5 text-primary" />
    }
  ];

  const socials = [
    { name: "LinkedIn", href: "https://linkedin.com/company/jayant-systems" },
    { name: "GitHub", href: "https://github.com/JayantOlhyan" },
    { name: "Instagram", href: "https://www.instagram.com/jayantolhyan/" },
    { name: "YouTube", href: "https://www.youtube.com/@JayantWebAISystems" },
    { name: "Twitter / X", href: "https://x.com/JayantSystems" }
  ];

  return (
    <div className="hog-grid min-h-screen pb-20 pt-10">
      <main className="max-w-5xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs tracking-widest uppercase text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-4 inline-block">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-text-base mb-4 mt-2">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-sm md:text-base text-text-muted leading-relaxed max-w-xl mx-auto">
            Have a project idea, need AI solutions, or want to discuss custom software development? We'd love to hear from you. Fill out the form or reach out directly, and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Main Grid: Form + Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Cards + Socials info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick Contact Info Cards */}
            <div className="space-y-4">
              {contactCards.map((card) => {
                const CardWrapper = card.link ? "a" : "div";
                return (
                  <CardWrapper
                    key={card.title}
                    {...(card.link ? { href: card.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`hog-card rounded-2xl p-5 flex gap-4 text-left transition-colors select-none ${
                      card.link ? "hover:border-primary/50 cursor-pointer block" : "block"
                    }`}
                  >
                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted block mb-1">
                        {card.title}
                      </span>
                      <h4 className="font-serif font-bold text-text-base text-sm mb-1 leading-snug">
                        {card.value}
                      </h4>
                      <p className="text-[11px] text-text-muted leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Social channels card block */}
            <div className="hog-card rounded-2xl p-6">
              <h4 className="font-serif text-sm font-bold text-text-base mb-4 text-left">Connect Across Networks</h4>
              <div className="flex flex-wrap gap-2">
                {socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border-custom hover:border-primary hover:text-primary rounded-xl font-mono text-[10px] text-text-muted transition-colors"
                  >
                    <span>{soc.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="border-t border-border-custom pt-12">
          <FAQ />
        </div>

        {/* Final CTA callout */}
        <div className="border-t border-border-custom pt-4">
          <CallToAction />
        </div>
      </main>
    </div>
  );
}
