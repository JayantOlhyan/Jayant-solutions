import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jayant Web & AI Systems',
    short_name: 'Jayant Systems',
    description:
      'Custom AI, Web & Software Development Agency — AI-powered applications, SaaS platforms, mobile apps, and automation solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f1e',
    theme_color: '#F37021',
    orientation: 'portrait-primary',
    categories: ['business', 'technology', 'productivity'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
