import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://app.cal.com https://*.ingest.sentry.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https://images.unsplash.com https://*.supabase.co; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.supabase.co https://api.razorpay.com https://cal.com https://*.ingest.sentry.io; frame-src 'self' https://api.razorpay.com https://cal.com;",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  
  async redirects() {
    return [
      {
        source: '/promo/ai-consulting',
        destination: '/services/technology-consulting',
        permanent: true,
      },
      {
        source: '/promo/business-automation-solutions',
        destination: '/services/business-automation',
        permanent: true,
      },
      {
        source: '/promo/build-startup-mvp',
        destination: '/services/mvp-development',
        permanent: true,
      },
      {
        source: '/promo/build-ai-chatbot',
        destination: '/services/ai-chatbot-development',
        permanent: true,
      },
      {
        source: '/promo/modern-business-website',
        destination: '/services/website-development',
        permanent: true,
      },

      {
        source: '/technologies/openai-integration',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/technologies/nextjs-development',
        destination: '/services/website-development',
        permanent: true,
      },
      {
        source: '/technologies/langchain-development',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/technologies/google-gemini-development',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/technologies/postgresql-development',
        destination: '/services/api-development',
        permanent: true,
      },
      {
        source: '/technologies/supabase-development',
        destination: '/services/cloud-and-devops',
        permanent: true,
      },
      {
        source: '/technologies/fastapi-development',
        destination: '/services/api-development',
        permanent: true,
      },
      {
        source: '/technologies/flutter-development',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/technologies/react-development',
        destination: '/services/website-development',
        permanent: true,
      },
      {
        source: '/technologies/python-development',
        destination: '/services/custom-software-development',
        permanent: true,
      },

      {
        source: '/industries/ai-for-real-estate',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-government',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-manufacturing',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-agriculture',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-retail',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-finance',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-healthcare',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-education',
        destination: '/services/ai-development',
        permanent: true,
      },
      {
        source: '/industries/ai-for-startups',
        destination: '/services/ai-development',
        permanent: true,
      },

      {
        source: '/services/maintenance',
        destination: '/services',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG || "jayant-systems",
  project: process.env.SENTRY_PROJECT || "agency-portfolio",
  silent: !process.env.CI,
  widenClientFileUpload: true,
});
