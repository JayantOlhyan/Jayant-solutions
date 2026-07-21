"use client";

import React from "react";
import DelayedSkeleton from "@/components/skeletons/DelayedSkeleton";
import GenericGridSkeleton from "@/components/skeletons/GenericGridSkeleton";

export default function PortfolioLoading() {
  return (
    <DelayedSkeleton delay={200}>
      <GenericGridSkeleton />
    </DelayedSkeleton>
  );
}
