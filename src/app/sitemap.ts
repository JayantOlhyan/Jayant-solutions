import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jayant-solution.netlify.app";
  const appDir = path.join(process.cwd(), 'src', 'app');
  
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      priority: 1.0,
      lastModified: new Date(),
    }
  ];

  function traverseDirectory(dir: string, relativePath = "") {
    if (!fs.existsSync(dir)) return;
    
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

          routes.push({
            url: `${baseUrl}/${currentRelativePath}`,
            priority: priority,
            lastModified: new Date(),
          });
        }

        traverseDirectory(subDir, currentRelativePath);
      }
    }
  }

  traverseDirectory(appDir);
  return routes;
}
