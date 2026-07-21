"use client";

import React from "react";
import DelayedSkeleton from "@/components/skeletons/DelayedSkeleton";
import HomeSkeleton from "@/components/skeletons/HomeSkeleton";

export default function Loading() {
  return (
    <DelayedSkeleton delay={200}>
      <HomeSkeleton />
    </DelayedSkeleton>
  );
}
