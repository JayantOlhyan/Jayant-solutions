<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:image-optimization-rules -->
# Image Optimization Guidelines
Every time a new image is uploaded, added, or modified in the project:
1. It must automatically be converted to the `.webp` format (excluding SVG/ICO vectors where appropriate).
2. It must be compressed (e.g. using `cwebp -q 85` or another optimization utility) to reduce file size.
3. Update all code references in components to point to the newly optimized `.webp` asset.
<!-- END:image-optimization-rules -->
