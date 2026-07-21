import React from "react";
import { SkeletonBlock } from "./SkeletonBlock";

export default function HomeSkeleton() {
  return (
    <div className="hog-grid min-h-screen pb-16 md:pb-28">
      <main className="flex-1 w-full max-w-none px-6 md:px-12 lg:px-16 pt-12 md:pt-20 flex flex-col gap-16 md:gap-28 overflow-x-hidden">
        
        {/* 1. Hero Section Skeleton */}
        <section className="flex flex-col items-center justify-center pt-10 md:pt-20 text-center relative z-10 w-full min-h-[50vh]">
          <SkeletonBlock className="w-48 h-6 rounded-full mb-6" />
          <SkeletonBlock className="w-full max-w-4xl h-16 md:h-24 mb-6" />
          <SkeletonBlock className="w-3/4 max-w-2xl h-6 mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SkeletonBlock className="w-40 h-12 rounded-xl" />
            <SkeletonBlock className="w-40 h-12 rounded-xl" />
          </div>
        </section>

        {/* 2. Proof Strip Skeleton */}
        <section className="py-8 border-y border-border-custom/50 bg-card-bg/30">
          <div className="flex justify-center gap-12 overflow-hidden opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <SkeletonBlock key={i} className="w-24 h-8" />
            ))}
          </div>
        </section>

        {/* 3. Services Section Skeleton */}
        <section className="py-12 relative text-left">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
            <SkeletonBlock className="w-3/4 h-12 mb-4" />
            <SkeletonBlock className="w-full h-16" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="hog-card rounded-3xl p-6 md:p-8 bg-white dark:bg-card-bg/60 border border-border-custom flex flex-col justify-between h-[280px]">
                <div className="flex flex-col gap-4">
                  <SkeletonBlock className="size-12 rounded-full" />
                  <SkeletonBlock className="w-3/4 h-6" />
                  <SkeletonBlock className="w-full h-16" />
                </div>
                <SkeletonBlock className="w-24 h-4 mt-6" />
              </div>
            ))}
          </div>
        </section>

        {/* 4. Process Section Skeleton */}
        <section className="py-12">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
            <SkeletonBlock className="w-3/4 h-12 mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <SkeletonBlock key={idx} className="h-64 rounded-3xl" />
            ))}
          </div>
        </section>

        {/* 5. Case Studies Section Skeleton */}
        <section className="py-12">
           <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
            <SkeletonBlock className="w-3/4 h-12 mb-4" />
          </div>
          <div className="flex flex-col gap-12">
            {[1, 2].map((idx) => (
              <SkeletonBlock key={idx} className="h-[400px] rounded-3xl" />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
