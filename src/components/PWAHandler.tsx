"use client";

import React, { useEffect, useState } from "react";
import { Wifi, WifiOff, X, Download } from "lucide-react";

export default function PWAHandler() {
  const [status, setStatus] = useState<"online" | "offline" | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    // 1. Service Worker Registration
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
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

    // 2. Online/Offline events listeners
    const handleOnline = () => {
      setStatus("online");
      const timer = setTimeout(() => {
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    };

    const handleOffline = () => {
      setStatus("offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Initial check
    if (!navigator.onLine) {
      setStatus("offline");
    }

    // 3. PWA Installability event listener
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      // Store the event so it can be triggered later
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`[PWA] User response to the install prompt: ${outcome}`);
    // Clear deferred prompt and hide button
    setDeferredPrompt(null);
    setShowInstallBtn(false);
  };

  const handleCloseToast = () => {
    setStatus(null);
  };

  if (!status && !showInstallBtn) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 max-w-sm w-[calc(100%-48px)] sm:w-80 font-sans pointer-events-auto"
      role="alert"
      aria-live="assertive"
    >
      {/* PWA Install Toast */}
      {showInstallBtn && deferredPrompt && (
        <div className="flex items-center justify-between gap-4 p-4 bg-card-bg border border-border-custom text-text-base rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] animate-slide-in">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Download className="size-5" />
            </div>
            <div className="flex flex-col gap-0.5 text-left">
              <span className="text-xs font-bold">Install Web App</span>
              <span className="text-[10px] text-text-muted leading-tight">
                Add to your home screen for quick, offline access.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="bg-primary hover:bg-primary-hover text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl transition-all duration-250 cursor-pointer shadow-sm hover:shadow"
            >
              Install
            </button>
            <button
              onClick={() => setShowInstallBtn(false)}
              aria-label="Dismiss install offer"
              className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg text-text-muted transition-colors cursor-pointer"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}

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
