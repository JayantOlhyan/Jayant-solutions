import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Container,
  Section,
  Button,
  TextLink,
  Pill,
  FilterPill,
  Label,
  Accordion,
  TintPanel,
  LaptopFrame,
  PhoneFrame,
  TiltedScreen,
  WorkCard,
  Reveal,
} from "@/components/v2";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Style Guide — Redesign Phase 1 Foundations | JAYANT SYSTEMS",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StyleGuidePage() {
  // Only accessible in development, or in production if NEXT_PUBLIC_SHOW_STYLEGUIDE=1
  if (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_SHOW_STYLEGUIDE !== "1"
  ) {
    notFound();
  }

  const coreColors = [
    { name: "ink", hex: "#0B0B0C", desc: "Text, primary buttons", bg: "bg-[#0B0B0C]", text: "text-white" },
    { name: "paper", hex: "#FFFFFF", desc: "Page background", bg: "bg-[#FFFFFF] border border-[#E6E4E0]", text: "text-[#0B0B0C]" },
    { name: "stone", hex: "#F4F3F0", desc: "Alt sections", bg: "bg-[#F4F3F0] border border-[#E6E4E0]", text: "text-[#0B0B0C]" },
    { name: "hairline", hex: "#E6E4E0", desc: "Dividers, hair-borders", bg: "bg-[#E6E4E0]", text: "text-[#0B0B0C]" },
    { name: "graphite", hex: "#6B6862", desc: "Secondary text (5.4:1 AA)", bg: "bg-[#6B6862]", text: "text-white" },
    { name: "body-muted", hex: "#3D3B37", desc: "Subtle body copy", bg: "bg-[#3D3B37]", text: "text-white" },
    { name: "signal", hex: "#E8590C", desc: "Focus ring, live dot, View badge only", bg: "bg-[#E8590C]", text: "text-white" },
  ];

  const projectTints = [
    { name: "sathi", hex: "#DDE9DF", bg: "bg-[#DDE9DF]" },
    { name: "health", hex: "#DCE5F2", bg: "bg-[#DCE5F2]" },
    { name: "khel", hex: "#E4EBC9", bg: "bg-[#E4EBC9]" },
    { name: "farm", hex: "#F1E7CF", bg: "bg-[#F1E7CF]" },
    { name: "sentinel", hex: "#E6E0F5", bg: "bg-[#E6E0F5]" },
    { name: "civic", hex: "#EEDFD7", bg: "bg-[#EEDFD7]" },
    { name: "msit", hex: "#E1E5EC", bg: "bg-[#E1E5EC]" },
    { name: "showcase-green", hex: "#1E3A2B", bg: "bg-[#1E3A2B]" },
  ];

  const accordionDemoItems = [
    {
      id: "1",
      title: "How does the architecture phase work?",
      content:
        "Every engagement begins with a 3–5 day discovery sprint to map data models, define third-party API contracts, and establish a fixed-timeline delivery plan before writing frontend code.",
    },
    {
      id: "2",
      title: "What is your approach to source-code ownership?",
      content:
        "You retain 100% intellectual property and full access to private GitHub repositories, CI/CD deployment pipelines, and architecture documentation from day one.",
    },
    {
      id: "3",
      title: "How do you guarantee performance and Core Web Vitals?",
      content:
        "We build exclusively with modern Next.js App Router, automated image optimization to WebP, self-hosted variable fonts without layout shift, and clean semantic HTML without heavy third-party UI dependencies.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#0B0B0C] min-h-screen py-16">
      <Container>
        
        {/* Style Guide Header */}
        <Reveal>
          <div className="pb-12 border-b border-[#E6E4E0] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#E8590C]" />
              <Label>Internal System &bull; Redesign Phase 1: Foundations</Label>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-[#0B0B0C]">
              Design System Style Guide
            </h1>
            <p className="text-base text-[#6B6862] max-w-2xl">
              This internal reference page renders and verifies every token, font, reusable primitive, and motion utility.
              Excluded from public indexing (robots: noindex).
            </p>
          </div>
        </Reveal>

        {/* 1. Colour Tokens */}
        <Section spacing="compact" className="border-b border-[#E6E4E0]">
          <div className="flex flex-col gap-6">
            <div>
              <Label>Tokens / 01</Label>
              <h2 className="font-display text-2xl font-medium mt-1">Core Color Palette</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {coreColors.map((color) => (
                <div key={color.name} className="flex flex-col gap-2">
                  <div
                    className={`h-24 rounded-xl flex items-end p-2.5 shadow-sm transition-transform hover:scale-[1.02] ${color.bg}`}
                  >
                    <span className={`font-mono text-xs font-semibold ${color.text}`}>
                      {color.hex}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold block text-[#0B0B0C]">
                      {color.name}
                    </span>
                    <span className="text-[11px] text-[#6B6862] leading-tight block">
                      {color.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Label>Tokens / 02</Label>
              <h3 className="font-display text-xl font-medium mt-1 mb-4">Project Tints (Media Frames Only)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                {projectTints.map((tint) => (
                  <div key={tint.name} className="flex flex-col gap-1.5">
                    <div
                      className={`h-16 rounded-xl border border-black/5 flex items-end p-2 ${tint.bg}`}
                    >
                      <span className="font-mono text-[10px] text-[#0B0B0C] opacity-80">
                        {tint.hex}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#0B0B0C]">{tint.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Typography Scale */}
        <Section spacing="compact" className="border-b border-[#E6E4E0]">
          <div className="flex flex-col gap-8">
            <div>
              <Label>Tokens / 03</Label>
              <h2 className="font-display text-2xl font-medium mt-1">
                Fluid Typographic Scale (Clamp 390px &rarr; 1440px)
              </h2>
              <p className="text-xs font-mono text-[#6B6862] mt-1">
                Display: Inter (opsz 32, weight 500, tracking -0.035em) &bull; Body: Geist &bull; Labels: Geist Mono
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">D1 (104px / 46px)</span>
                <p className="type-d1">Systems Built Right.</p>
              </div>

              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">D2 (80px / 48px)</span>
                <p className="type-d2">Engineered with Precision.</p>
              </div>

              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">H1 (56px / 40px)</span>
                <h1 className="type-h1">High-Performance Web Platforms</h1>
              </div>

              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">H2 (40px / 30px)</span>
                <h2 className="type-h2">Architected for Speed and Reliability</h2>
              </div>

              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">H3 (22px / 20px)</span>
                <h3 className="type-h3">Autonomous AI Workflows and Microservices</h3>
              </div>

              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">Body-L (19px / 17px)</span>
                <p className="type-body-l">
                  We design and build bespoke software applications, custom digital systems, and AI workflows for growing businesses that demand engineering accountability.
                </p>
              </div>

              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">Body (16px / 15px)</span>
                <p className="type-body">
                  Every project is backed by clean code, complete documentation, zero layout shift, and direct communication with senior engineers who understand your domain.
                </p>
              </div>

              <div className="border-b border-[#E6E4E0] pb-4">
                <span className="font-mono text-xs text-[#6B6862] block mb-1">Small (14px)</span>
                <p className="type-small text-[#6B6862]">
                  WCAG AA compliant contrast ratio of 5.4:1 ensures optimal readability across both high-density mobile screens and desktop monitors.
                </p>
              </div>

              <div>
                <span className="font-mono text-xs text-[#6B6862] block mb-1">Label (13px / 12px)</span>
                <Label>DEPLOYMENT READY &bull; ZERO DEBT &bull; NEXT.JS APPS</Label>
              </div>
            </div>
          </div>
        </Section>

        {/* 3. Buttons & Interactive Links */}
        <Section spacing="compact" className="border-b border-[#E6E4E0]">
          <div className="flex flex-col gap-8">
            <div>
              <Label>Primitives / 01</Label>
              <h2 className="font-display text-2xl font-medium mt-1">Button Variants &amp; Sizes</h2>
            </div>

            {/* Light Background Variants */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-[#6B6862]">Light Surface (Primary &amp; Secondary)</span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md">
                  Primary Button (md)
                </Button>
                <Button variant="primary" size="md" arrow>
                  Primary with Arrow (md)
                </Button>
                <Button variant="primary" size="lg">
                  Primary Button (lg)
                </Button>
                <Button variant="primary" size="lg" arrow>
                  Primary with Arrow (lg)
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Button variant="secondary" size="md">
                  Secondary Button (md)
                </Button>
                <Button variant="secondary" size="md" arrow>
                  Secondary with Arrow (md)
                </Button>
                <Button variant="secondary" size="lg">
                  Secondary Button (lg)
                </Button>
                <Button variant="secondary" size="lg" arrow>
                  Secondary with Arrow (lg)
                </Button>
              </div>
            </div>

            {/* Dark Section (Inverse Variant) */}
            <div className="bg-[#0B0B0C] p-6 sm:p-8 rounded-2xl flex flex-col gap-4 text-white">
              <span className="font-mono text-xs text-[#6B6862]">Dark Surface (Inverse Variant)</span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="inverse" size="md">
                  Inverse Button (md)
                </Button>
                <Button variant="inverse" size="md" arrow>
                  Inverse with Arrow (md)
                </Button>
                <Button variant="inverse" size="lg">
                  Inverse Button (lg)
                </Button>
                <Button variant="inverse" size="lg" arrow>
                  Inverse with Arrow (lg)
                </Button>
              </div>
            </div>

            {/* TextLink Demo */}
            <div className="flex flex-col gap-3">
              <Label>Primitives / 02</Label>
              <h3 className="font-display text-xl font-medium">TextLink (Left &rarr; Right Sweep Underline)</h3>
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <TextLink href="/portfolio">Explore our portfolio</TextLink>
                <TextLink href="/services" arrow>
                  View all services
                </TextLink>
                <TextLink href="https://github.com/JayantOlhyan" target="_blank" arrow>
                  External GitHub repository
                </TextLink>
              </div>
            </div>

            {/* Pills & FilterPills */}
            <div className="flex flex-col gap-3">
              <Label>Primitives / 03</Label>
              <h3 className="font-display text-xl font-medium">Pills &amp; Filter Pills</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Pill>Static Badge</Pill>
                <Pill>Next.js 16</Pill>
                <Pill>TypeScript</Pill>
                <FilterPill active>Active Filter (aria-pressed=true)</FilterPill>
                <FilterPill active={false}>Inactive Filter</FilterPill>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Native Accordion */}
        <Section spacing="compact" className="border-b border-[#E6E4E0]">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div>
              <Label>Primitives / 04</Label>
              <h2 className="font-display text-2xl font-medium mt-1">
                Native Accordion (Works with JavaScript Disabled)
              </h2>
              <p className="text-xs text-[#6B6862] font-mono mt-1">
                Built on &lt;details&gt; and &lt;summary&gt; with 45&deg; rotating icon
              </p>
            </div>

            <Accordion items={accordionDemoItems} />
          </div>
        </Section>

        {/* 5. Media Primitives */}
        <Section spacing="compact" className="border-b border-[#E6E4E0]">
          <div className="flex flex-col gap-8">
            <div>
              <Label>Primitives / 05</Label>
              <h2 className="font-display text-2xl font-medium mt-1">
                Media Primitives: LaptopFrame, PhoneFrame &amp; TiltedScreen
              </h2>
              <p className="text-xs text-[#6B6862] font-mono mt-1">
                CSS-drawn devices without external PSD mockups &bull; Next.js WebP Image support
              </p>
            </div>

            {/* Laptop Frame */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-[#6B6862]">LaptopFrame in TintPanel (&lsquo;sathi&rsquo; tint)</span>
              <TintPanel tint="sathi">
                <LaptopFrame
                  src="/projects/teachersathi.webp"
                  alt="Teacher Sathi platform demo in CSS laptop frame"
                />
              </TintPanel>
            </div>

            {/* Phone Frame and Tilted Screen Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-[#6B6862]">PhoneFrame in TintPanel (&lsquo;health&rsquo; tint)</span>
                <TintPanel tint="health" className="h-full">
                  <PhoneFrame
                    src="/projects/healthkinator.webp"
                    alt="HealthKinator mobile interface in CSS phone frame"
                  />
                </TintPanel>
              </div>

              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-[#6B6862]">TiltedScreen (Hover straightens perspective)</span>
                <TintPanel tint="khel" className="h-full py-12">
                  <TiltedScreen
                    src="/projects/khelclan.webp"
                    alt="KhelClan perspective interface"
                  />
                </TintPanel>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. WorkCard Primitive */}
        <Section spacing="compact" className="border-b border-[#E6E4E0]">
          <div className="flex flex-col gap-8">
            <div>
              <Label>Primitives / 06</Label>
              <h2 className="font-display text-2xl font-medium mt-1">WorkCard Primitive</h2>
              <p className="text-xs text-[#6B6862] font-mono mt-1">
                TintPanel + screenshot + title + one-liner + kind label &bull; Image scales &le;1.035 on hover &bull; Signal-orange &lsquo;View&rsquo; badge fades in
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <WorkCard
                href="/portfolio"
                title="Teacher Sathi"
                oneLiner="AI-powered lesson planning and assessment platform deployed for Indian K-12 educators."
                kind="Custom Web Application"
                imageSrc="/projects/teachersathi.webp"
                imageAlt="Teacher Sathi AI application interface screenshot"
                tint="sathi"
              />

              <WorkCard
                href="/portfolio"
                title="CivicSetu"
                oneLiner="Municipal grievance redressal and public infrastructure monitoring portal."
                kind="Civic Tech Platform"
                imageSrc="/projects/civicsetu.webp"
                imageAlt="CivicSetu municipal dashboard screenshot"
                tint="civic"
              />

              <WorkCard
                href="/portfolio"
                title="FarmIQ"
                oneLiner="Agritech intelligence dashboard delivering crop yield forecasts and real-time soil telemetry."
                kind="Agritech SaaS Platform"
                imageSrc="/projects/farmiq.webp"
                imageAlt="FarmIQ crop yield dashboard interface screenshot"
                tint="farm"
              />
            </div>
          </div>
        </Section>

        {/* 7. CSS-First Scroll Reveal */}
        <Section spacing="compact">
          <div className="flex flex-col gap-6">
            <div>
              <Label>Primitives / 07</Label>
              <h2 className="font-display text-2xl font-medium mt-1">
                Reveal: CSS-First Scroll Reveal
              </h2>
              <p className="text-xs text-[#6B6862] font-mono mt-1">
                Server HTML is 100% visible (opacity: 1) if JS is disabled or fails. Scroll-reveal activates only after client hydration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Reveal delay={0}>
                <div className="p-6 rounded-2xl bg-[#F4F3F0] border border-[#E6E4E0] flex flex-col gap-2">
                  <Label>Reveal 01</Label>
                  <h4 className="font-display text-lg font-medium">Immediate Reveal</h4>
                  <p className="text-xs text-[#6B6862]">Reveals smoothly as soon as it intersects the viewport.</p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="p-6 rounded-2xl bg-[#F4F3F0] border border-[#E6E4E0] flex flex-col gap-2">
                  <Label>Reveal 02</Label>
                  <h4 className="font-display text-lg font-medium">150ms Stagger</h4>
                  <p className="text-xs text-[#6B6862]">Cascaded entrance for multi-column grids.</p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="p-6 rounded-2xl bg-[#F4F3F0] border border-[#E6E4E0] flex flex-col gap-2">
                  <Label>Reveal 03</Label>
                  <h4 className="font-display text-lg font-medium">300ms Stagger</h4>
                  <p className="text-xs text-[#6B6862]">Smooth deceleration curve (cubic-bezier(.2,.7,.2,1)).</p>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* 8. Lenis Smooth Scroll & Scroll Isolation */}
        <Section spacing="compact">
          <div className="flex flex-col gap-6">
            <div>
              <Label>Motion / 08</Label>
              <h2 className="font-display text-2xl font-medium mt-1">
                Lenis Smooth Scroll &amp; Scroll Isolation (<code className="text-sm font-mono bg-[#E6E4E0] px-1.5 py-0.5 rounded">data-lenis-prevent</code>)
              </h2>
              <p className="text-xs text-[#6B6862] font-mono mt-1">
                Any scrollable overlay, dialog, or scroll container with <code className="text-xs font-mono">overflow-y: auto/scroll</code> MUST include the <code className="text-xs font-mono font-bold">data-lenis-prevent</code> attribute to prevent Lenis from intercepting mouse wheel/touch gestures and scrolling the background page.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4F3F0] border border-[#E6E4E0] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#0B0B0C]">Interactive Scroll Isolation Demo</span>
                <span className="text-xs font-mono text-[#6B6862]">data-lenis-prevent active</span>
              </div>
              <div
                data-lenis-prevent
                tabIndex={0}
                aria-label="Demo scrollable container with data-lenis-prevent"
                className="h-36 overflow-y-auto p-4 rounded-xl bg-white border border-[#E6E4E0] text-xs text-[#3D3B37] space-y-2 focus:outline-2 focus:outline-[#E8590C]"
              >
                <p>Scroll inside this box. Because <code className="font-mono bg-[#F4F3F0] px-1 py-0.5 rounded">data-lenis-prevent</code> is present, mouse wheel and touch gestures stay contained inside this container and do not move the background page.</p>
                <p>Item 1: Smooth scrolling is bypassed on this element.</p>
                <p>Item 2: Overscroll behavior is automatically contained by Lenis.</p>
                <p>Item 3: Used in full-screen mobile overlays, modal drawers, and code blocks.</p>
                <p>Item 4: End of isolated scroll content.</p>
              </div>
            </div>
          </div>
        </Section>

      </Container>
    </div>
  );
}
