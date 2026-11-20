/**
 * Regenerates public/llms.txt and public/llms-full.txt from src/data/framework.ts.
 * Only confirmed (production-visible) offerings are included.
 * Run: npm run llms
 */
process.env.CONTEXT = "production";

import { writeFileSync } from "node:fs";
import { join } from "node:path";

async function main() {
  const f = await import("../src/data/framework");
  const { subServices } = await import("../src/data/subservices");
  const { CONTACT_INFO } = await import("../src/data/contact");
  const base = "https://jayant-systems.online";
  const live = f.divisions.filter(f.divisionIsLive);

  const head = [
    "# JAYANT SYSTEMS",
    "",
    `> ${f.BRAND.tagline} Founder-led digital agency in New Delhi, India: ${f.BRAND.statement} ${f.BRAND.philosophy}`,
    "",
    "## Entity",
    `- Name: JAYANT SYSTEMS (Jayant Systems)`,
    `- Founder: ${f.BRAND.founder}`,
    `- Website: ${base}`,
    `- Email: ${CONTACT_INFO.email}`,
    `- Phone / WhatsApp: ${CONTACT_INFO.phone}`,
    `- Hours: ${CONTACT_INFO.hours}`,
    `- Book a call: ${base}${CONTACT_INFO.bookingPath}`,
    "",
    "## Service divisions",
    ...live.map((d) => `- [${d.name}](${base}/services/${d.slug}): ${d.intro}`),
    "",
    "## Industries",
    ...f.industries.map((i) => `- [${i.name}](${base}/industries/${i.slug}): ${i.summary}`),
    "",
    "## Specialist services",
    ...subServices.map((s) => `- [${s.name}](${base}/services/${s.slug}): ${s.metaDescription}`),
    "",
    "## Key pages",
    ...[
      ["About", "/about", "Who Jayant Systems is: a founder-led digital studio in New Delhi and how it works with clients."],
      ["Founder — Jayant Olhyan", "/company/founder", "The founder's background, skills and the products he has shipped."],
      ["Why choose us", "/company/why-choose-us", "Commitments: written scope, transparent pricing, direct founder communication."],
      ["Verified delivery", "/company/testimonials", "Verifiable proof of delivery: live products and public repositories, no invented reviews."],
      ["Tools & platforms", "/company/partners", "The platforms and tools the studio builds with."],
      ["Careers", "/company/careers", "Working with Jayant Systems."],
      ["Process", "/process", "The 7-step project process: Discover, Define, Design, Build, Verify, Launch, Support."],
      ["Portfolio", "/portfolio", "Shipped projects with live links and source where public."],
      ["Case studies", "/resources/case-studies", "Problem, what was built and the live product for each project."],
      ["Technologies", "/resources/technologies-we-use", "The technology stack used for websites, software and AI work."],
      ["Downloads", "/resources/downloads", "Company profile and portfolio PDFs."],
      ["Pricing", "/pricing", "Engagement models and how quotations work: a defined quote before work begins."],
      ["Maintenance plans", "/pricing/maintenance-plans", "Ongoing updates, backups, monitoring and fixes."],
      ["Enterprise plans", "/pricing/enterprise-plans", "Larger, multi-workstream engagements."],
      ["FAQ", "/faq", "Straight answers on cost, timelines, ownership, support, NDAs, hosting and security."],
      ["Contact", "/contact", "Send a project brief, book a 15-minute call or reach the founder on WhatsApp or email."],
      ["Request a quote", "/contact/request-a-quote", "Ask for a written quotation for a defined scope."],
      ["Support", "/support", "Help for existing clients: report a bug, request a change, service status."],
      ["Report a bug", "/support/report-a-bug", "Report something that isn't working on a site or app we built."],
      ["Service status", "/support/service-status", "What happens when something is down and how incidents are communicated."],
      ["Privacy policy", "/privacy", "How personal data is collected, used and protected."],
      ["Terms & conditions", "/terms", "Terms governing projects and use of the website."],
      ["Refund & cancellation", "/refund-policy", "Refund and cancellation terms."],
      ["Pricing policy", "/pricing-policy", "How prices, quotations and payments work."],
      ["Cookie policy", "/cookies", "Cookies and analytics used on the website."],
      ["Disclaimer", "/disclaimer", "Legal disclaimer for website content."],
    ].map(([name, path, line]) => `- [${name}](${base}${path}): ${line}`),
    "",
    "## Live work (verifiable)",
    ...f.workItems.map((w) => `- [${w.name}](${w.href}): ${w.line} (${w.kind})`),
    "",
    "## Commercial terms",
    "- Every project starts with a defined quotation and agreed deliverables.",
    "- Ownership, source-code access and licences are defined in the project agreement.",
    "- Hosting, subscriptions and third-party costs are disclosed separately.",
    "- No guaranteed revenue, rankings, unlimited revisions, lifetime support or 100% uptime.",
    ...f.engagementModels.map((m) => `- ${m.name}: ${m.from}`),
    "",
    `- Full context: ${base}/llms-full.txt`,
    "",
  ];
  writeFileSync(join(process.cwd(), "public/llms.txt"), head.join("\n"));

  const full = [
    ...head.slice(0, -2),
    "",
    "## Offerings by division (confirmed only)",
    ...live.flatMap((d) => [
      "",
      `### ${d.num}. ${d.name}`,
      d.tagline,
      ...f.visibleOfferings(d).map((o) => `- ${o.name}: ${o.detail}`),
      ...subServices.filter((s) => s.division === d.slug).map((s) => `- Detail page: [${s.name}](${base}/services/${s.slug})`),
    ]),
    "",
    "## How we work",
    ...f.processSteps.map((s) => `${s.n}. ${s.name} — ${s.line}`),
    "",
    "## Commitments",
    ...f.commitments.map((c) => `- ${c.name}: ${c.line}`),
    "",
    "## FAQ",
    ...[...f.faqs, ...f.extraFaqs].flatMap((q) => [`### ${q.q}`, q.a, ""]),
  ];
  writeFileSync(join(process.cwd(), "public/llms-full.txt"), full.join("\n"));
  console.log("llms.txt and llms-full.txt written");
}

main();
