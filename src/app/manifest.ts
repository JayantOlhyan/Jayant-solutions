import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JAYANT SYSTEMS',
    short_name: 'JAYANT SYSTEMS',
    description: 'Founder-led technology studio building high-performance websites, custom software products, and practical AI-powered systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0F1D',
    theme_color: '#2563EB',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
