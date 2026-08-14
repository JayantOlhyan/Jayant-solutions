import fs from "fs";
import path from "path";

const appDir = path.join(process.cwd(), ".next", "server", "app");

function findHtmlFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(findHtmlFiles(full));
    } else if (entry.name.endsWith(".html")) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = findHtmlFiles(appDir);
console.log(`Found ${htmlFiles.length} generated static HTML files to validate.\n`);

const schemaTypesFound = {};
let totalSchemas = 0;
let errors = [];

for (const file of htmlFiles) {
  const relPath = path.relative(appDir, file);
  const content = fs.readFileSync(file, "utf8");
  
  const matches = [...content.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const m of matches) {
    totalSchemas++;
    try {
      const parsed = JSON.parse(m[1]);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of items) {
        const type = item["@type"] || "UNKNOWN";
        schemaTypesFound[type] = (schemaTypesFound[type] || 0) + 1;

        // Security check
        const rawJson = JSON.stringify(item);
        if (rawJson.includes("undefined") || rawJson.includes("SUPABASE") || rawJson.includes("TOKEN") || rawJson.includes("SECRET")) {
          errors.push(`[${relPath}] Security violation or undefined value in schema: ${type}`);
        }

        // Context check
        if (item["@context"] !== "https://schema.org") {
          errors.push(`[${relPath}] Invalid @context in schema: ${item["@context"]}`);
        }

        // Logo check
        if (item.logo) {
          const logoUrl = typeof item.logo === "string" ? item.logo : item.logo.url;
          if (logoUrl.includes("logo.png")) {
            errors.push(`[${relPath}] Stale logo.png found in ${type} schema`);
          }
        }
      }
    } catch (err) {
      errors.push(`[${relPath}] JSON parse error: ${err.message}`);
    }
  }
}

console.log("=== SCHEMA TYPES SUMMARY ===");
console.table(schemaTypesFound);

console.log(`Total JSON-LD schemas validated: ${totalSchemas}`);
console.log(`Total Errors / Violations: ${errors.length}`);
if (errors.length > 0) {
  errors.forEach(e => console.log("ERROR:", e));
} else {
  console.log("✓ ALL SCHEMAS VALIDATED CLEANLY WITH ZERO ERRORS.");
}
