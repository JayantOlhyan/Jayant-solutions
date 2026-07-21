import React from "react";

interface SkeletonBlockProps {
  className?: string;
}

export function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
  return (
    <div
      className={`animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-2xl ${className}`}
    />
  );
}
