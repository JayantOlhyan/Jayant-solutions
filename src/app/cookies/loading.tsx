"use client";

import React from "react";
import DelayedSkeleton from "@/components/skeletons/DelayedSkeleton";
import PolicySkeleton from "@/components/skeletons/PolicySkeleton";

export default function PolicyLoading() {
  return (
    <DelayedSkeleton delay={200}>
      <PolicySkeleton />
    </DelayedSkeleton>
  );
}
