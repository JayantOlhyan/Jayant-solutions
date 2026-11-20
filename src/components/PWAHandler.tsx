"use client";

import React, { useEffect, useRef, useState } from "react";
import { Wifi, WifiOff, X } from "lucide-react";

/** How long the browser must stay offline before we tell the visitor (filters brief false "offline" blips). */
const OFFLINE_CONFIRM_MS = 2000;
/** How long the "You're back online" confirmation stays up. */
const BACK_ONLINE_MS = 4000;

export default function PWAHandler() {
  // Starts hidden on server and client alike (no hydration mismatch); the effect below decides.
  const [status, setStatus] = useState<"online" | "offline" | null>(null);
  const shownOffline = useRef(false); // true while the "You're offline" toast is (or was last) showing

  useEffect(() => {
    // 1. Service Worker Registration
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        // On localhost development, unregister service workers to avoid stale cached bundles
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
        caches.keys().then((keys) => {
          keys.forEach((key) => caches.delete(key));
        });
        return;
      }

      const handleLoad = () => {
        // Register the service worker pointing to public/sw.js
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("[PWA] Service Worker registered with scope:", registration.scope);
            
            // Check for updates
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker == null) return;
              
              installingWorker.onstatechange = () => {
                if (installingWorker.state === "installed") {
                  if (navigator.serviceWorker.controller) {
                    console.log("[PWA] New content is available; please refresh.");
                  } else {
                    console.log("[PWA] Content is cached for offline use.");
                  }
                }
              };
            };
          })
          .catch((error) => {
            console.error("[PWA] Service Worker registration failed:", error);
          });
      };

      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 2. Online/Offline: only warn after the browser has STAYED offline for a moment,
    //    re-checking navigator.onLine, and clear the warning as soon as we're back.
    let confirmTimer: number | undefined;
    let backTimer: number | undefined;

    const confirmOffline = () => {
      window.clearTimeout(confirmTimer);
      confirmTimer = window.setTimeout(() => {
        if (!navigator.onLine) {
          window.clearTimeout(backTimer);
          shownOffline.current = true;
          setStatus("offline");
        }
      }, OFFLINE_CONFIRM_MS);
    };

    const handleOnline = () => {
      window.clearTimeout(confirmTimer); // a blip that recovered never shows anything
      if (!shownOffline.current) return;
      shownOffline.current = false;
      setStatus("online");
      window.clearTimeout(backTimer);
      backTimer = window.setTimeout(() => setStatus(null), BACK_ONLINE_MS);
    };

    // Safety net: if a warning is up but the browser says we're online (missed "online" event), clear it.
    const recheck = () => {
      if (navigator.onLine) handleOnline();
      else confirmOffline();
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", confirmOffline);
    window.addEventListener("focus", recheck);
    document.addEventListener("visibilitychange", recheck);
    if (!navigator.onLine) confirmOffline(); // genuinely opened while offline

    // 3. No install prompt: the site doesn't offer "Install Web App". Calling
    //    preventDefault also stops Chrome's own mini-infobar from appearing.
    const suppressInstallPrompt = (e: Event) => e.preventDefault();
    window.addEventListener("beforeinstallprompt", suppressInstallPrompt);

    return () => {
      window.clearTimeout(confirmTimer);
      window.clearTimeout(backTimer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", confirmOffline);
      window.removeEventListener("focus", recheck);
      document.removeEventListener("visibilitychange", recheck);
      window.removeEventListener("beforeinstallprompt", suppressInstallPrompt);
    };
  }, []);

  const handleCloseToast = () => {
    setStatus(null);
  };

  if (!status) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 max-w-sm w-[calc(100%-48px)] sm:w-80 font-sans pointer-events-auto"
      role="alert"
      aria-live="assertive"
    >
      {/* Network Status Toast */}
      {status && (
        <div
          className={`flex items-center justify-between gap-4 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border animate-slide-in transition-all duration-300 ${
            status === "offline"
              ? "bg-red-500/10 border-red-500/20 text-red-500"
              : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
          }`}
        >
          <div className="flex items-center gap-3">
            {status === "offline" ? (
              <WifiOff className="size-5 shrink-0" />
            ) : (
              <Wifi className="size-5 shrink-0" />
            )}
            <div className="flex flex-col gap-0.5 text-left">
              <span className="text-xs font-bold">
                {status === "offline" ? "You're offline" : "You're back online"}
              </span>
              <span className="text-[10px] opacity-90 leading-tight">
                {status === "offline"
                  ? "Some features may be temporarily unavailable."
                  : "All website features are now active."}
              </span>
            </div>
          </div>
          <button
            onClick={handleCloseToast}
            aria-label="Close connection notice"
            className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg opacity-85 hover:opacity-100 transition-all cursor-pointer"
          >
            <X className="size-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
