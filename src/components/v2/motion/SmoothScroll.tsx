"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export type LenisScrollToOptions = Parameters<Lenis["scrollTo"]>[1];

export interface LenisContextValue {
  readonly lenis: Lenis | null;
  start: () => void;
  stop: () => void;
  scrollTo: (target: string | HTMLElement | number, options?: LenisScrollToOptions) => void;
}

export const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  start: () => {},
  stop: () => {},
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

// Development instance counter to verify singleton behavior across client navigations
declare global {
  interface Window {
    __LENIS_INSTANCE_COUNT__?: number;
  }
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Single Lenis instance lifecycle: created once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fine-pointer desktop only (disabled on mobile touch devices)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (isFinePointer) {
      const lenis = new Lenis({
        autoRaf: true,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        respectReducedMotion: true,
        anchors: {
          offset: -72,
        },
      });

      lenisRef.current = lenis;

      if (process.env.NODE_ENV !== "production") {
        window.__LENIS_INSTANCE_COUNT__ = (window.__LENIS_INSTANCE_COUNT__ || 0) + 1;
      }

      // If initially on excluded route, stop immediately
      const initialPath = window.location.pathname;
      if (initialPath.startsWith("/admin") || initialPath.startsWith("/proposal")) {
        lenis.stop();
      }

      return () => {
        lenis.destroy();
        lenisRef.current = null;
        if (process.env.NODE_ENV !== "production") {
          window.__LENIS_INSTANCE_COUNT__ = Math.max(0, (window.__LENIS_INSTANCE_COUNT__ || 1) - 1);
        }
      };
    }
  }, []); // Run once on mount

  // Control start/stop based on route without recreating the instance
  useEffect(() => {
    if (!lenisRef.current) return;

    const isExcluded = pathname?.startsWith("/admin") || pathname?.startsWith("/proposal");
    if (isExcluded) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [pathname]);

  // Set html[data-reveal-ready] once from a single place after initial elements are mounted
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      document.documentElement.setAttribute("data-reveal-ready", "true");
    });
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const scrollTo = useCallback(
    (target: string | HTMLElement | number, options?: LenisScrollToOptions) => {
      lenisRef.current?.scrollTo(target, options);
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      get lenis() {
        return lenisRef.current;
      },
      start,
      stop,
      scrollTo,
    }),
    [start, stop, scrollTo]
  );

  return (
    <LenisContext.Provider value={contextValue}>
      {children}
    </LenisContext.Provider>
  );
}

export default SmoothScroll;
