import React from "react";
import { SkeletonBlock } from "./SkeletonBlock";

export default function PolicySkeleton() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
      <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 pt-8">
          <SkeletonBlock className="w-12 h-4" />
          <SkeletonBlock className="w-2 h-4" />
          <SkeletonBlock className="w-12 h-4" />
          <SkeletonBlock className="w-2 h-4" />
          <SkeletonBlock className="w-24 h-4" />
        </div>

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <SkeletonBlock className="w-3/4 h-16 md:h-20 mb-6" />
            <SkeletonBlock className="w-full max-w-xl h-24 mb-6" />
            <div className="flex flex-wrap gap-4">
              <SkeletonBlock className="w-32 h-4" />
              <SkeletonBlock className="w-32 h-4" />
            </div>
          </div>
          <div className="lg:col-span-5 w-full flex justify-center">
            <SkeletonBlock className="w-full max-w-[420px] aspect-[4/3] rounded-[24px]" />
          </div>
        </section>

        {/* Policy navigation & text split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8 border-t border-border-custom/20 pt-16">
          
          {/* Left sidebar nav */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left w-full sticky top-28">
            <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-4">
              <SkeletonBlock className="w-32 h-6 border-b border-border-custom pb-2" />
              <div className="flex flex-col gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <SkeletonBlock key={i} className="w-full h-8 rounded-xl" />
                ))}
              </div>
            </div>

            <div className="hog-card rounded-3xl p-6 bg-card-bg/60 border border-border-custom flex flex-col gap-3">
              <SkeletonBlock className="w-24 h-6 mb-2" />
              <SkeletonBlock className="w-full h-10" />
              <SkeletonBlock className="w-full h-8 rounded-lg mt-2" />
            </div>
          </div>

          {/* Right text details */}
          <div className="lg:col-span-8 flex flex-col gap-10 text-left w-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="border-b border-border-custom/30 pb-8">
                <SkeletonBlock className="w-1/2 h-8 mb-4" />
                <div className="space-y-3">
                  <SkeletonBlock className="w-full h-4" />
                  <SkeletonBlock className="w-11/12 h-4" />
                  <SkeletonBlock className="w-full h-4" />
                  <SkeletonBlock className="w-4/5 h-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
