"use client";

import React, { useState, useId, useRef, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Mail, Loader2, AlertCircle } from "lucide-react";
import { CONTACT_INFO } from "@/data/contact";
import { trackContactFormSubmit } from "@/lib/analytics/gtag";
import {
  InquiryFormData,
  initialInquiryData,
  validateInquiry,
  getWhatsAppFallbackUrl,
  getEmailFallbackUrl,
  submitInquiry,
} from "@/lib/inquiry";

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

const projectTypes = [
  "Websites & e-commerce",
  "Custom software",
  "AI & automation",
  "Design & branding",
  "SEO, growth & support",
  "Not sure yet",
  "Other",
];

const budgets = [
  "Need help scoping / Not sure yet",
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
];

const timelines = [
  "ASAP (Within 2 weeks)",
  "1 Month",
  "2–3 Months",
  "Flexible",
];

export default function ContactForm({ presetType }: { presetType?: string }) {
  const idPrefix = useId();
  const nameId = `${idPrefix}-name`;
  const emailId = `${idPrefix}-email`;
  const descriptionId = `${idPrefix}-description`;
  const agreementId = `${idPrefix}-agreement`;
  const companyId = `${idPrefix}-company`;
  const phoneId = `${idPrefix}-phone`;
  const projectTypeId = `${idPrefix}-projectType`;
  const budgetId = `${idPrefix}-budget`;
  const timelineId = `${idPrefix}-timeline`;

  const [formData, setFormData] = useState<InquiryFormData>(() =>
    presetType && projectTypes.includes(presetType) ? { ...initialInquiryData, projectType: presetType } : initialInquiryData,
  );
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState<{ type: "timeout" | "network" | "http"; message: string } | null>(null);

  const isSubmittingRef = useRef(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const isOffline = useSyncExternalStore(subscribeOnline, getOfflineSnapshot, getOfflineServerSnapshot);

  useEffect(() => {
    if (submitted && successHeadingRef.current) {
      successHeadingRef.current.focus();
    }
  }, [submitted]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? checked : value,
    }));

    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof InquiryFormData];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmittingRef.current || sending) return;

    // Validate required fields
    const validationErrors = validateInquiry(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first invalid element
      const fieldOrder: (keyof InquiryFormData)[] = ["name", "email", "description", "agreement"];
      const idMap: Record<string, string> = {
        name: nameId,
        email: emailId,
        description: descriptionId,
        agreement: agreementId,
      };

      for (const field of fieldOrder) {
        if (validationErrors[field]) {
          const el = document.getElementById(idMap[field]);
          if (el) {
            el.focus();
          }
          break;
        }
      }
      return;
    }

    setErrors({});
    const honeypot = (e.currentTarget.elements.namedItem("bot-field") as HTMLInputElement | null)?.value ?? "";

    isSubmittingRef.current = true;
    setSending(true);
    setSendError(null);

    try {
      const result = await submitInquiry(formData, { honeypot });

      if (result.ok) {
        trackContactFormSubmit(formData.projectType || "general"); // GA4 conversion
        setSubmitted(true);
      } else {
        setSendError({
          type: result.errorType ?? "network",
          message:
            result.message ??
            "Your message couldn't be submitted. Your entered information is preserved below.",
        });
      }
    } finally {
      isSubmittingRef.current = false;
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="rounded-[24px] p-6 sm:p-10 text-center flex flex-col items-center justify-center min-h-[440px] bg-[#FBF8F4] border border-[#E2D7CA]"
      >
        <div className="size-14 rounded-full bg-[#F37021]/15 border border-[#F37021]/40 flex items-center justify-center mb-5 text-[#B8430A]">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </div>
        <h3
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-medium tracking-tight text-[#161310] mb-2 focus:outline-none"
        >
          Project inquiry submitted
        </h3>
        <p className="text-sm text-[#6B625A] max-w-md mb-6 leading-relaxed">
          Thank you for sharing your project details. Jayant typically reviews inquiries and replies within 12–24 business hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setFormData(initialInquiryData);
              setErrors({});
              setSendError(null);
              setSubmitted(false);
            }}
            className="inline-flex min-h-11 items-center rounded-full bg-[#161310] hover:bg-[#2B241E] text-white px-6 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
          >
            Send another inquiry
          </button>
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#E2D7CA] px-5 text-sm font-medium text-[#161310] hover:border-[#161310] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
          >
            <MessageCircle className="size-4 text-[#B8430A]" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] p-6 md:p-8 text-left bg-[#FBF8F4] border border-[#E2D7CA]">
      <div className="mb-6 pb-4 border-b border-[#E2D7CA]">
        <h2 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-[#161310]">
          Send a written project brief
        </h2>
        <p className="mt-1 text-sm text-[#6B625A] leading-relaxed">
          Provide your project context or requirements. I review inquiries personally and typically reply within 12–24 business hours.
        </p>
      </div>

      <form
        name="project-inquiry"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="project-inquiry" />
        <p className="hidden" aria-hidden="true">
          <label>
            Leave this field empty
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        {/* Offline indicator */}
        {isOffline && (
          <div
            role="status"
            className="rounded-lg border border-amber-200 bg-amber-50/80 p-3 text-xs text-amber-900 leading-relaxed"
          >
            You appear to be offline. Your entered details are preserved below. When back online, you can submit or message Jayant directly on WhatsApp.
          </div>
        )}

        {/* Submission Error Banner with direct recovery fallbacks */}
        {sendError && (
          <div
            role="alert"
            aria-live="assertive"
            className="rounded-lg border border-red-200 bg-red-50/90 p-4 text-sm text-red-950 flex flex-col gap-3"
          >
            <div className="flex items-start gap-2.5">
              <AlertCircle className="size-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-medium text-red-900">
                  {sendError.type === "timeout" ? "Request timed out" : "Submission could not complete"}
                </p>
                <p className="mt-1 text-red-800 leading-relaxed text-[13px]">
                  {sendError.message}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-red-200/60">
              <span className="text-xs text-red-900 font-medium mr-1">Direct fallback:</span>
              <a
                href={getWhatsAppFallbackUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-[#161310] hover:bg-[#2B241E] text-white px-3.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
              >
                <MessageCircle className="size-3.5" aria-hidden="true" />
                <span>Send on WhatsApp</span>
              </a>
              <a
                href={getEmailFallbackUrl(formData)}
                className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-red-300 bg-white hover:bg-red-50 text-red-950 px-3.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                <span>Send by Email</span>
              </a>
            </div>
          </div>
        )}

        {/* Core Required Fields: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={nameId} className="text-sm font-medium text-[#161310] block mb-1.5">
              Full Name <span className="text-[#6B625A] font-normal">*</span>
            </label>
            <input
              id={nameId}
              type="text"
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              value={formData.name}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${nameId}-error` : undefined}
              placeholder="e.g. Rahul Sharma"
              className={`w-full bg-[#F7F1EA] border ${
                errors.name ? "border-red-500 focus:border-red-600" : "border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310]"
              } rounded-xl px-4.5 py-2.5 text-sm outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]`}
            />
            {errors.name && (
              <p id={`${nameId}-error`} role="alert" className="mt-1 text-xs text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={emailId} className="text-sm font-medium text-[#161310] block mb-1.5">
              Email Address <span className="text-[#6B625A] font-normal">*</span>
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              required
              maxLength={254}
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${emailId}-error` : undefined}
              placeholder="rahul@company.com"
              className={`w-full bg-[#F7F1EA] border ${
                errors.email ? "border-red-500 focus:border-red-600" : "border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310]"
              } rounded-xl px-4.5 py-2.5 text-sm outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]`}
            />
            {errors.email && (
              <p id={`${emailId}-error`} role="alert" className="mt-1 text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Core Required Field: Project Description */}
        <div>
          <label htmlFor={descriptionId} className="text-sm font-medium text-[#161310] block mb-1.5">
            Project Description <span className="text-[#6B625A] font-normal">*</span>
          </label>
          <textarea
            id={descriptionId}
            name="description"
            required
            rows={4}
            maxLength={3000}
            value={formData.description}
            onChange={handleInputChange}
            aria-required="true"
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? `${descriptionId}-error` : undefined}
            placeholder="What does your business do, and what problem should this project solve?"
            className={`w-full bg-[#F7F1EA] border ${
              errors.description ? "border-red-500 focus:border-red-600" : "border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310]"
            } rounded-xl px-4.5 py-2.5 text-sm outline-none transition-colors resize-y min-h-[100px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]`}
          />
          {errors.description && (
            <p id={`${descriptionId}-error`} role="alert" className="mt-1 text-xs text-red-600">
              {errors.description}
            </p>
          )}
        </div>

        {/* Optional Qualification Details in Accessible Disclosure */}
        <details className="group rounded-lg border border-[#E2D7CA] bg-[#EFE5DA]/60 p-4 transition-colors open:bg-[#EFE5DA]">
          <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-[#161310] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021] list-none [&::-webkit-details-marker]:hidden">
            <span>Additional project details (optional)</span>
            <span className="font-mono text-xs text-[#6B625A] group-open:hidden">+ Add details</span>
            <span className="font-mono text-xs text-[#6B625A] hidden group-open:inline">– Hide details</span>
          </summary>
          <div className="mt-4 space-y-4 pt-3 border-t border-[#E2D7CA]/60">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={companyId} className="text-sm font-medium text-[#161310] block mb-1">
                  Company Name <span className="text-[#6B625A] font-normal">(optional)</span>
                </label>
                <input
                  id={companyId}
                  type="text"
                  name="company"
                  maxLength={120}
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Acme Studio"
                  className="w-full bg-[#F7F1EA] border border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310] rounded-xl px-4.5 py-2 text-sm outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
                />
              </div>

              <div>
                <label htmlFor={phoneId} className="text-sm font-medium text-[#161310] block mb-1">
                  Phone Number <span className="text-[#6B625A] font-normal">(optional)</span>
                </label>
                <input
                  id={phoneId}
                  type="tel"
                  name="phone"
                  maxLength={30}
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#F7F1EA] border border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310] rounded-xl px-4.5 py-2 text-sm outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor={projectTypeId} className="text-sm font-medium text-[#161310] block mb-1">
                  Project Type <span className="text-[#6B625A] font-normal">(optional)</span>
                </label>
                <select
                  id={projectTypeId}
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full bg-[#F7F1EA] border border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310] rounded-xl px-4 py-2 text-sm outline-none transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
                >
                  <option value="">Select type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor={budgetId} className="text-sm font-medium text-[#161310] block mb-1">
                  Budget Range <span className="text-[#6B625A] font-normal">(optional)</span>
                </label>
                <select
                  id={budgetId}
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full bg-[#F7F1EA] border border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310] rounded-xl px-4 py-2 text-sm outline-none transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
                >
                  <option value="">Select budget</option>
                  {budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor={timelineId} className="text-sm font-medium text-[#161310] block mb-1">
                  Timeline <span className="text-[#6B625A] font-normal">(optional)</span>
                </label>
                <select
                  id={timelineId}
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-[#F7F1EA] border border-[#E2D7CA] hover:border-[#6B625A] focus:border-[#161310] rounded-xl px-4 py-2 text-sm outline-none transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </details>

        {/* Privacy Agreement Checkbox */}
        <div className="pt-1">
          <div className="flex items-start gap-2.5">
            <input
              type="checkbox"
              name="agreement"
              id={agreementId}
              required
              checked={formData.agreement}
              onChange={handleInputChange}
              aria-required="true"
              aria-invalid={!!errors.agreement}
              aria-describedby={errors.agreement ? `${agreementId}-error` : undefined}
              className="mt-0.5 rounded border-[#E2D7CA] text-[#161310] focus:ring-neutral-950 size-4 cursor-pointer"
            />
            <label htmlFor={agreementId} className="text-xs text-[#6B625A] leading-snug cursor-pointer select-none">
              I agree to the{" "}
              <Link href="/privacy" className="underline underline-offset-2 text-[#161310] hover:text-[#3D352E]">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline underline-offset-2 text-[#161310] hover:text-[#3D352E]">
                Terms & Conditions
              </Link>
              .
            </label>
          </div>
          {errors.agreement && (
            <p id={`${agreementId}-error`} role="alert" className="mt-1 text-xs text-red-600">
              {errors.agreement}
            </p>
          )}
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full text-white text-[15px] font-medium min-h-12 transition-all duration-200 bg-[#161310] hover:bg-[#2B241E] disabled:bg-[#8A8077] disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F37021]"
          >
            {sending ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                <span>Submitting inquiry…</span>
              </>
            ) : (
              <>
                <span>Send project brief</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
