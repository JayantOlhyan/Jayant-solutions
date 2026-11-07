import { CONTACT_INFO } from "@/data/contact";

export interface InquiryFormData {
  name: string;
  email: string;
  description: string;
  agreement: boolean;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
}

export const initialInquiryData: InquiryFormData = {
  name: "",
  email: "",
  description: "",
  agreement: false,
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
};

export type InquiryErrors = Partial<Record<keyof InquiryFormData, string>>;

export function validateInquiry(data: InquiryFormData): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!data.name || !data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.email || !data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address (e.g. name@example.com).";
  }

  if (!data.description || !data.description.trim()) {
    errors.description = "Please share a brief description of your project.";
  }

  if (!data.agreement) {
    errors.agreement = "Please confirm your agreement to continue.";
  }

  return errors;
}

export function buildInquiryPayload(data: InquiryFormData, honeypot = ""): URLSearchParams {
  return new URLSearchParams({
    "form-name": "project-inquiry",
    "bot-field": honeypot,
    name: data.name.trim(),
    company: data.company.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    projectType: data.projectType,
    budget: data.budget,
    timeline: data.timeline,
    description: data.description.trim(),
    agreement: data.agreement ? "yes" : "no",
  });
}

export function buildFallbackMessage(data: InquiryFormData): string {
  const parts: string[] = [
    "Hi Jayant, I would like to discuss a project inquiry.",
    "",
    `Name: ${data.name.trim() || "Not specified"}`,
    `Email: ${data.email.trim() || "Not specified"}`,
  ];

  if (data.company.trim()) parts.push(`Company: ${data.company.trim()}`);
  if (data.phone.trim()) parts.push(`Phone: ${data.phone.trim()}`);
  if (data.projectType) parts.push(`Project Type: ${data.projectType}`);
  if (data.budget) parts.push(`Budget: ${data.budget}`);
  if (data.timeline) parts.push(`Timeline: ${data.timeline}`);

  parts.push("");
  parts.push("Project Details:");
  parts.push(data.description.trim() || "None provided");

  return parts.join("\n");
}

export function getWhatsAppFallbackUrl(data: InquiryFormData): string {
  const msg = buildFallbackMessage(data);
  try {
    const url = new URL(CONTACT_INFO.whatsappUrl);
    url.searchParams.set("text", msg);
    return url.toString();
  } catch {
    return `https://wa.me/919667344125?text=${encodeURIComponent(msg)}`;
  }
}

export function getEmailFallbackUrl(data: InquiryFormData): string {
  const msg = buildFallbackMessage(data);
  const subject = data.name.trim()
    ? `Project Inquiry from ${data.name.trim()}`
    : "Project Inquiry";
  return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
}

export interface SubmitInquiryResult {
  ok: boolean;
  errorType?: "timeout" | "network" | "http";
  status?: number;
  message?: string;
}

export async function submitInquiry(
  data: InquiryFormData,
  options?: {
    honeypot?: string;
    timeoutMs?: number;
    endpoint?: string;
    fetchImpl?: typeof fetch;
  }
): Promise<SubmitInquiryResult> {
  const honeypot = options?.honeypot ?? "";
  if (honeypot) {
    // Spam honeypot triggered: simulate completion without sending
    return { ok: true };
  }

  const endpoint = options?.endpoint ?? "/__forms.html";
  const timeoutMs = options?.timeoutMs ?? 10000;
  const fetchFn = options?.fetchImpl ?? (typeof fetch !== "undefined" ? fetch : undefined);

  if (!fetchFn) {
    throw new Error("No fetch implementation available");
  }

  const body = buildInquiryPayload(data, honeypot);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetchFn(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!res.ok) {
      return {
        ok: false,
        errorType: "http",
        status: res.status,
        message: `Submission failed with status ${res.status}. Your entered details are preserved below. You can try submitting again, or send your brief directly via WhatsApp or email.`,
      };
    }

    return { ok: true };
  } catch (err: unknown) {
    clearTimeout(timer);
    if (err instanceof Error && err.name === "AbortError") {
      return {
        ok: false,
        errorType: "timeout",
        message:
          "We could not confirm receipt of your inquiry within 10 seconds. The request may have reached us already, or network conditions may have delayed it. Your entered details are preserved below—you can submit again or message Jayant directly on WhatsApp or email.",
      };
    }
    return {
      ok: false,
      errorType: "network",
      message:
        "Your message couldn't be submitted due to a connection or server error. Your entered information is preserved below. You can retry, or send your brief directly via WhatsApp or email.",
    };
  }
}

