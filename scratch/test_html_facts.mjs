import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), ".next", "server", "app");

function findHtml(file) {
  return fs.readFileSync(path.join(appDir, file), "utf8");
}

console.log("=== CHECKING SERVER-RENDERED FACTS IN STATIC HTML ===");

const indexHtml = findHtml("index.html");
const pricingHtml = findHtml("pricing.html");
const aboutHtml = findHtml("about.html");
const contactHtml = findHtml("contact.html");

const checks = [
  { page: "Home (index.html)", fact: "Jayant Web & AI Systems", found: indexHtml.includes("Jayant Web & AI Systems") },
  { page: "Home (index.html)", fact: "Jayant Olhyan", found: indexHtml.includes("Jayant Olhyan") },
  { page: "Pricing (pricing.html)", fact: "₹40,000", found: pricingHtml.includes("40,000") },
  { page: "Pricing (pricing.html)", fact: "₹90,000", found: pricingHtml.includes("90,000") },
  { page: "Pricing (pricing.html)", fact: "₹2,00,000", found: pricingHtml.includes("2,00,000") },
  { page: "Pricing (pricing.html)", fact: "Semantic <table> tag", found: pricingHtml.includes("<table") && pricingHtml.includes("<thead") && pricingHtml.includes("<tbody") },
  { page: "About (about.html)", fact: "Jayant Olhyan", found: aboutHtml.includes("Jayant Olhyan") },
  { page: "Contact (contact.html)", fact: "jayantwebaisystems@gmail.com", found: contactHtml.includes("jayantwebaisystems@gmail.com") },
];

console.table(checks);

const allPassed = checks.every(c => c.found);
if (allPassed) {
  console.log("\n✓ ALL CORE FACTS ARE PRESENT IN RAW SERVER-RENDERED HTML WITHOUT JS INTERACTION.");
} else {
  console.log("\n❌ SOME FACTS WERE MISSING FROM RAW STATIC HTML.");
}
