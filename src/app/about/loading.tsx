"use client";

import React from "react";
import DelayedSkeleton from "@/components/skeletons/DelayedSkeleton";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";

export default function AboutLoading() {
  return (
    <DelayedSkeleton delay={200}>
      <AboutSkeleton />
    </DelayedSkeleton>
  );
}
