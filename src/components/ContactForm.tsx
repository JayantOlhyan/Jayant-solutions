"use client";

import React, { useState, useSyncExternalStore } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function subscribeOnline(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getOfflineSnapshot() {
  return typeof navigator !== "undefined" ? !navigator.onLine : false;
}

function getOfflineServerSnapshot() {
  return false;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    agreement: false
  });

  const isOffline = useSyncExternalStore(subscribeOnline, getOfflineSnapshot, getOfflineServerSnapshot);

  const projectTypes = [
    "AI Development",
    "Website Development",
    "Mobile App Development",
    "Custom Software",
    "Business Automation",
    "UI/UX Design",
    "Cloud Solutions",
    "Consultation",
    "Other"
  ];

  const budgets = [
    "Need help scoping / Not sure yet",
    "Under ₹50,000",
    "₹50,000 – ₹1,00,000",
    "₹1,00,000 – ₹3,00,000",
    "₹3,00,000+"
  ];

  const timelines = [
    "ASAP",
    "1 Month",
    "2–3 Months",
    "3–6 Months",
    "Flexible"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Submissions are delivered through Netlify Forms. The form is registered at
  // build time by the static file public/__forms.html (required for Next.js on Netlify).
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.agreement) {
      alert("Please fill in all required fields and accept the agreement.");
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem("bot-field") as HTMLInputElement | null)?.value ?? "";
    const body = new URLSearchParams({
      "form-name": "project-inquiry",
      "bot-field": honeypot,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      budget: formData.budget,
      timeline: formData.timeline,
      description: formData.description,
      agreement: formData.agreement ? "yes" : "no",
    });

    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const fallbackText = encodeURIComponent(
    `Hi Jayant, I'd like to discuss a project.\nName: ${formData.name}\nType: ${formData.projectType}\nBudget: ${formData.budget}\n\n${formData.description}`
  );

  if (submitted) {
    return (
      <div aria-live="polite" className="hog-card p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[480px]">
        <div className="size-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mb-6">
          <CheckCircle2 className="size-10 text-emerald-500" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-extrabold text-text-base mb-3">
          Project Inquiry Received
        </h3>
        <p className="text-xs md:text-sm text-text-muted max-w-sm mb-6 leading-relaxed">
          Thank you for sharing your project context. Jayant will review your requirements and respond directly within 12–24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              projectType: "",
              budget: "",
              timeline: "",
              description: "",
              agreement: false
            });
            setSubmitted(false);
          }}
          className="inline-flex min-h-11 items-center rounded-full bg-neutral-950 hover:bg-neutral-800 text-white px-6 text-sm font-medium cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[10px] p-6 md:p-8 text-left bg-white border border-neutral-200">
      <div className="mb-6 pb-4 border-b border-border-custom">
                <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-neutral-950">
          Tell me about your project
        </h3>
      </div>

      <form name="project-inquiry" onSubmit={handleSubmit} className="space-y-5">
        <p className="hidden" aria-hidden="true">
          <label>
            Leave this field empty
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-neutral-950 block mb-1.5">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-4 py-3 text-base sm:text-sm outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium text-neutral-950 block mb-1.5">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Company (optional)"
              className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-4 py-3 text-base sm:text-sm outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-neutral-950 block mb-1.5">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="hello@example.com"
              className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-4 py-3 text-base sm:text-sm outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-neutral-950 block mb-1.5">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-4 py-3 text-base sm:text-sm outline-none transition-colors"
            />
          </div>
        </div>

        {/* Project Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="projectType" className="text-sm font-medium text-neutral-950 block mb-1.5">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-3 py-3 text-base sm:text-sm outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Option</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="text-sm font-medium text-neutral-950 block mb-1.5">
              Budget Range *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-3 py-3 text-base sm:text-sm outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Budget</option>
              {budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="text-sm font-medium text-neutral-950 block mb-1.5">
              Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-3 py-3 text-base sm:text-sm outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select Timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Description Textarea */}
        <div>
          <label htmlFor="description" className="text-sm font-medium text-neutral-950 block mb-1.5">
            Project Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            value={formData.description}
            onChange={handleInputChange}
            placeholder="What does your business do, and what problem should this solve?"
            className="w-full bg-background-base border border-border-custom hover:border-neutral-400 focus:border-neutral-950 rounded-lg px-4 py-3 text-base sm:text-sm outline-none transition-colors resize-none"
          />
        </div>

        {/* Privacy Agreement Checkbox */}
        <div className="flex items-start gap-2.5">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            required
            checked={formData.agreement}
            onChange={handleInputChange}
            className="mt-0.5 rounded border-border-custom text-neutral-950 focus:ring-neutral-950 size-4 cursor-pointer"
          />
          <label htmlFor="agreement" className="text-[11px] text-text-muted leading-tight cursor-pointer select-none">
            I agree to the <a href="/privacy" className="underline underline-offset-2 text-neutral-950">Privacy Policy</a> and <a href="/terms" className="underline underline-offset-2 text-neutral-950">Terms & Conditions</a>.
          </label>
        </div>

        {/* Action Button */}
        <button
          type="submit"
          disabled={sending}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-full text-white text-[15px] font-medium min-h-12 transition-all duration-200 ${
            sending
              ? "bg-neutral-400 dark:bg-neutral-800 cursor-not-allowed shadow-none"
              : "bg-neutral-950 hover:bg-neutral-800"
          }`}
        >
          {sending ? "Sending…" : "Send message"} <ArrowRight className="size-3.5" />
        </button>
        {sendError && (
          <p role="alert" className="text-sm text-red-600 text-center mt-2.5 leading-relaxed">
            Your message couldn&apos;t be sent. Please{" "}
            <a className="underline font-medium" href={`https://wa.me/919667344125?text=${fallbackText}`}>send it on WhatsApp</a>{" "}
            or{" "}
            <a className="underline font-medium" href={`mailto:jayantwebaisystems@gmail.com?subject=Project%20inquiry&body=${fallbackText}`}>email it</a>.
          </p>
        )}
        {isOffline && (
          <p className="text-neutral-500 text-sm text-center mt-2.5">
            You seem to be offline. If sending fails, you can reach me on WhatsApp instead.
          </p>
        )}
      </form>
    </div>
  );
}
