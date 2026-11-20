"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export type ScrollDirection = "up" | "down" | null;

export interface UseScrollDirectionOptions {
  threshold?: number;
  initialDirection?: ScrollDirection;
}

export function useScrollDirection(options: UseScrollDirectionOptions = {}) {
  const { threshold = 10, initialDirection = null } = options;
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(initialDirection);
  const [scrollY, setScrollY] = useState(0);
  const prevScrollY = useRef(0);
  const rafId = useRef<number | null>(null);
  const suppressUntil = useRef(0);

  const forceShowHeader = useCallback((durationMs = 800) => {
    suppressUntil.current = Date.now() + durationMs;
    setScrollDirection("up");
  }, []);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // If within suppression period (e.g. after anchor click / hashchange),
      // lock direction to "up" and keep prevScrollY aligned
      if (Date.now() < suppressUntil.current) {
        setScrollDirection("up");
        prevScrollY.current = currentScrollY;
        if (rafId.current !== null) {
          window.cancelAnimationFrame(rafId.current);
          rafId.current = null;
        }
        return;
      }

      if (rafId.current !== null) return;

      rafId.current = window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY;
        setScrollY(scrollPos);

        if (Date.now() < suppressUntil.current) {
          setScrollDirection("up");
          prevScrollY.current = scrollPos;
          rafId.current = null;
          return;
        }

        const diff = scrollPos - prevScrollY.current;

        // If at the very top of page, consider it scrolling up
        if (scrollPos <= 0) {
          setScrollDirection("up");
          prevScrollY.current = 0;
        } else if (Math.abs(diff) >= threshold) {
          const newDirection: ScrollDirection = diff > 0 ? "down" : "up";
          setScrollDirection(newDirection);
          prevScrollY.current = scrollPos;
        }

        rafId.current = null;
      });
    };

    // When an anchor link is clicked or hash changes, reveal header and suppress hide for 800ms
    const handleHashChange = () => {
      suppressUntil.current = Date.now() + 800;
      setScrollDirection("up");
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      if (href.startsWith("#") || href.startsWith("/#") || href.includes("#")) {
        try {
          const targetUrl = new URL(anchor.href, window.location.href);
          if (
            targetUrl.origin === window.location.origin &&
            targetUrl.pathname === window.location.pathname &&
            targetUrl.hash
          ) {
            suppressUntil.current = Date.now() + 800;
            setScrollDirection("up");
          }
        } catch {
          // ignore invalid URLs
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [threshold]);

  return { scrollDirection, scrollY, isAtTop: scrollY <= 20, forceShowHeader };
}

export default useScrollDirection;
