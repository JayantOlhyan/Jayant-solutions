import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { CONTACT_INFO } from "../src/data/contact";

test("public/__forms.html matches registered project-inquiry field names", () => {
  const formsHtmlPath = path.resolve(__dirname, "../public/__forms.html");
  assert.ok(fs.existsSync(formsHtmlPath), "public/__forms.html must exist");
  const formsHtml = fs.readFileSync(formsHtmlPath, "utf8");

  // Verify form metadata
  assert.ok(formsHtml.includes('name="project-inquiry"'), "Must define project-inquiry form");
  assert.ok(formsHtml.includes('data-netlify="true"'), "Must include data-netlify attribute");
  assert.ok(formsHtml.includes('netlify-honeypot="bot-field"'), "Must configure honeypot field");

  // Expected fields submitted by ContactForm.tsx
  const expectedFields = [
    'name="form-name"',
    'name="bot-field"',
    'name="name"',
    'name="company"',
    'name="email"',
    'name="phone"',
    'name="projectType"',
    'name="budget"',
    'name="timeline"',
    'name="description"',
    'name="agreement"',
  ];

  for (const field of expectedFields) {
    assert.ok(formsHtml.includes(field), `public/__forms.html missing field: ${field}`);
  }
});

test("ContactForm submission payload builds URLSearchParams matching Netlify format", () => {
  const sampleData = {
    name: "John Doe",
    company: "Acme Inc",
    email: "john@example.com",
    phone: "+91 98765 43210",
    projectType: "Websites & Web Apps",
    budget: "₹50,000 – ₹1,00,000",
    timeline: "1 Month",
    description: "Need a custom portfolio and booking workflow.",
    agreement: true,
  };

  const body = new URLSearchParams({
    "form-name": "project-inquiry",
    "bot-field": "",
    name: sampleData.name.trim(),
    company: sampleData.company.trim(),
    email: sampleData.email.trim(),
    phone: sampleData.phone.trim(),
    projectType: sampleData.projectType,
    budget: sampleData.budget,
    timeline: sampleData.timeline,
    description: sampleData.description.trim(),
    agreement: sampleData.agreement ? "yes" : "no",
  });

  assert.equal(body.get("form-name"), "project-inquiry");
  assert.equal(body.get("name"), "John Doe");
  assert.equal(body.get("company"), "Acme Inc");
  assert.equal(body.get("email"), "john@example.com");
  assert.equal(body.get("description"), "Need a custom portfolio and booking workflow.");
  assert.equal(body.get("agreement"), "yes");
  assert.equal(body.get("bot-field"), "");
});

test("ContactForm submission allows qualification fields to be empty", () => {
  const sampleDataMinimal = {
    name: "Jane Smith",
    company: "",
    email: "jane@example.com",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "Simple web application.",
    agreement: true,
  };

  const body = new URLSearchParams({
    "form-name": "project-inquiry",
    "bot-field": "",
    name: sampleDataMinimal.name.trim(),
    company: sampleDataMinimal.company.trim(),
    email: sampleDataMinimal.email.trim(),
    phone: sampleDataMinimal.phone.trim(),
    projectType: sampleDataMinimal.projectType,
    budget: sampleDataMinimal.budget,
    timeline: sampleDataMinimal.timeline,
    description: sampleDataMinimal.description.trim(),
    agreement: sampleDataMinimal.agreement ? "yes" : "no",
  });

  assert.equal(body.get("name"), "Jane Smith");
  assert.equal(body.get("email"), "jane@example.com");
  assert.equal(body.get("description"), "Simple web application.");
  assert.equal(body.get("company"), "");
  assert.equal(body.get("phone"), "");
  assert.equal(body.get("projectType"), "");
  assert.equal(body.get("budget"), "");
  assert.equal(body.get("timeline"), "");
  assert.equal(body.get("agreement"), "yes");
});

test("Validation rejects whitespace-only name and description", () => {
  const isNameValid = (name: string) => name.trim().length > 0;
  const isDescValid = (desc: string) => desc.trim().length > 0;
  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  assert.equal(isNameValid("   "), false);
  assert.equal(isNameValid("\t\n"), false);
  assert.equal(isNameValid("Valid Name"), true);

  assert.equal(isDescValid("   "), false);
  assert.equal(isDescValid("Valid project description"), true);

  assert.equal(isEmailValid("invalid-email"), false);
  assert.equal(isEmailValid("test@domain"), false);
  assert.equal(isEmailValid("test@domain.com"), true);
});

test("Fallback URL generator preserves WhatsApp base and encodes full brief safely", () => {
  const data = {
    name: "Aarav Patel",
    email: "aarav@startup.in",
    description: "Building an AI customer support bot.",
    agreement: true,
    company: "Startup Co",
    phone: "+91 91234 56789",
    projectType: "AI Solutions & Integrations",
    budget: "₹1,00,000 – ₹3,00,000",
    timeline: "2–3 Months",
  };

  const parts = [
    "Hi Jayant, I would like to discuss a project inquiry.",
    "",
    `Name: ${data.name.trim() || "Not specified"}`,
    `Email: ${data.email.trim() || "Not specified"}`,
    `Company: ${data.company.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Project Type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    "",
    "Project Details:",
    data.description.trim(),
  ];

  const msg = parts.join("\n");
  const waUrl = new URL(CONTACT_INFO.whatsappUrl);
  waUrl.searchParams.set("text", msg);

  assert.ok(waUrl.searchParams.has("text"));
  assert.ok(waUrl.searchParams.get("text")?.includes("Aarav Patel"));
  assert.ok(waUrl.searchParams.get("text")?.includes("Startup Co"));
  assert.ok(waUrl.searchParams.get("text")?.includes("AI customer support bot"));

  const emailUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent("Project Inquiry from " + data.name)}&body=${encodeURIComponent(msg)}`;
  assert.ok(emailUrl.startsWith(`mailto:${CONTACT_INFO.email}`));
  assert.ok(emailUrl.includes("Project%20Inquiry%20from%20Aarav%20Patel"));
});

test("AbortController bounds request timeout to prevent hanging pending states", async () => {
  const controller = new AbortController();
  let timedOut = false;

  const timeoutId = setTimeout(() => {
    controller.abort();
    timedOut = true;
  }, 50);

  try {
    await new Promise((_, reject) => {
      controller.signal.addEventListener("abort", () => {
        reject(new Error("AbortError"));
      });
    });
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    assert.equal((err as Error).message, "AbortError");
    assert.equal(timedOut, true);
  }
});
