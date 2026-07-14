const fs = require('fs');
const path = require('path');

const baseUrl = "https://jayant-solution.netlify.app";
const appDir = path.join(__dirname, 'src', 'app');
const sitemapEntries = [];

// 1. Add Homepage
sitemapEntries.push({
  url: baseUrl,
  priority: 1.0,
});

// 2. Helper function to recursively find all page.tsx files
function traverseDirectory(dir, relativePath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith(".") && !entry.name.startsWith("[")) {
      const subDir = path.join(dir, entry.name);
      const currentRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
      const pagePath = path.join(subDir, "page.tsx");

      if (fs.existsSync(pagePath)) {
        const isPriorityPage = ["about", "services", "portfolio", "blog"].some(p => currentRelativePath.startsWith(p));
        let priority = 0.5;

        if (isPriorityPage) {
          priority = 0.8;
        }

        sitemapEntries.push({
          url: `${baseUrl}/${currentRelativePath}`,
          priority: priority,
        });
      }

      traverseDirectory(subDir, currentRelativePath);
    }
  }
}

traverseDirectory(appDir);

// 3. Generate XML structure
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

sitemapEntries.forEach(entry => {
  xml += `  <url>
    <loc>${entry.url}</loc>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>
`;
});

xml += `</urlset>`;

// Write to public/sitemap.xml
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);
console.log(`Generated public/sitemap.xml successfully with ${sitemapEntries.length} pages.`);
