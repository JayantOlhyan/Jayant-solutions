"use client";

import React, { useState, useEffect } from "react";

interface DelayedSkeletonProps {
  children: React.ReactNode;
  delay?: number;
}

export default function DelayedSkeleton({ children, delay = 200 }: DelayedSkeletonProps) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkeleton(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!showSkeleton) return null;

  return (
    <div aria-busy="true" aria-live="polite" className="w-full">
      <span className="sr-only">Loading content...</span>
      {children}
    </div>
  );
}
