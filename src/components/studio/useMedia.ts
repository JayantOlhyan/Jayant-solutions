"use client";

import { useSyncExternalStore } from "react";

/** Subscribe to a CSS media query. Returns `serverValue` during SSR and hydration. */
export function useMedia(query: string, serverValue = false) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}
