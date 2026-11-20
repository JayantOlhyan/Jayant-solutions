"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID, trackPageView, detectAndTrackAIRef, trackStrategyCallClick, trackEvent } from "@/lib/analytics/gtag";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    trackPageView(pathname);
    detectAndTrackAIRef();
  }, [pathname]);

  // Conversion clicks, tracked site-wide by delegation: booking a call (primary),
  // WhatsApp / email / phone contact (secondary). GA4 → mark these as key events.
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const where = a.closest("header") ? "header" : a.closest("footer") ? "footer" : "page";
      if (href.includes("/contact/book-a-consultation") || href.includes("cal.com/")) trackStrategyCallClick(window.location.pathname, where);
      else if (href.includes("wa.me/")) trackEvent("whatsapp_click", { source_page: window.location.pathname, trigger_location: where });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { source_page: window.location.pathname, trigger_location: where });
      else if (href.startsWith("tel:")) trackEvent("phone_click", { source_page: window.location.pathname, trigger_location: where });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Default Google Consent Mode (Privacy-first: No ad tracking)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'granted'
            });

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              restricted_data_processing: true
            });
          `,
        }}
      />
    </>
  );
}
