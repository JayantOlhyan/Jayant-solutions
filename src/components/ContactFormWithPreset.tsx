"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

const W = "Websites & e-commerce", C = "Custom software", A = "AI & automation", D = "Design & branding", G = "SEO, growth & support";

/** ?service=<division or sub-service slug> → project type. Keep in sync with src/data/framework.ts. */
const TYPE_BY_SLUG: Record<string, string> = {
  "websites-ecommerce": W, "website-development": W,
  "custom-software": C, "custom-software-development": C, "saas-development": C, "mvp-development": C, "api-development": C, "mobile-app-development": C,
  "ai-automation": A, "ai-development": A, "ai-chatbot-development": A, "business-automation": A, "technology-consulting": A,
  "design-branding": D, "ui-ux-design": D,
  "seo-growth-support": G, "cloud-and-devops": G,
};

function Preset() {
  const params = useSearchParams();
  const preset = TYPE_BY_SLUG[params.get("service") ?? ""];
  return <ContactForm key={preset ?? "none"} presetType={preset} />;
}

export default function ContactFormWithPreset() {
  return (
    <Suspense fallback={<ContactForm />}>
      <Preset />
    </Suspense>
  );
}
