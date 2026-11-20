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
