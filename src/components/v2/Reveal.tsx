"use client";

import React, { useRef } from "react";

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// SSR-safe useLayoutEffect
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function Reveal({
  as: Component = "div",
  children,
  delay = 0,
  className = "",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 1. Check for prefers-reduced-motion: if reduced motion requested, reveal immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.setAttribute("data-revealed", "true");
      return;
    }

    // 2. If already in or above viewport (above-the-fold), mark as revealed immediately
    // to prevent any opacity flicker on first paint
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.setAttribute("data-revealed", "true");
      return;
    }

    // 3. Below the fold: observe with IntersectionObserver to trigger reveal when scrolled into view
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.setAttribute("data-revealed", "true");
              observer.unobserve(element);
            }
          });
        },
        { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    } else {
      // Fallback if IntersectionObserver not available
      element.setAttribute("data-revealed", "true");
    }
  }, []);

  const customStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <Component
      ref={ref}
      className={`v2-reveal ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
