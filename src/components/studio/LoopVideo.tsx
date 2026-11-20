"use client";

import { useEffect, useRef } from "react";
import { useMedia } from "./useMedia";

/**
 * Muted looping product video. Plays only while on screen, never autoplays for
 * reduced-motion users (poster only), and keeps a real <img> poster so content
 * is visible without JS.
 */
export default function LoopVideo({
  name,
  alt,
  className = "",
  priority = false,
  playing,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** When set, overrides on-screen detection (used by the cursor preview). */
  playing?: boolean;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const motionOk = !useMedia("(prefers-reduced-motion: reduce)", true);

  useEffect(() => {
    const v = ref.current;
    if (!v || !motionOk) return;
    if (playing !== undefined) {
      if (playing) v.play().catch(() => {});
      else v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [motionOk, playing]);

  const poster = `/media/${name}-poster.webp`;

  if (!motionOk) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt={alt} className={className} loading={priority ? "eager" : "lazy"} decoding="async" />;
  }

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload={priority ? "auto" : "none"}
      aria-label={alt}
    >
      <source src={`/media/${name}.webm`} type="video/webm" />
      <source src={`/media/${name}.mp4`} type="video/mp4" />
    </video>
  );
}
