import React from "react";

interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Reusable server/client component for rendering Schema.org JSON-LD scripts safely.
 */
export default function JsonLd({ schema }: JsonLdProps) {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
