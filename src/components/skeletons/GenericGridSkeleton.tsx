import React from "react";
import { SkeletonBlock } from "./SkeletonBlock";

export default function GenericGridSkeleton() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
      <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
        
        {/* Hero split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          <div className="lg:col-span-7 flex flex-col items-start">
            <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
            <SkeletonBlock className="w-full h-20 md:h-24 mb-6" />
            <SkeletonBlock className="w-full max-w-xl h-24 mb-8" />

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <SkeletonBlock className="w-full sm:w-56 h-12 rounded-xl" />
              <SkeletonBlock className="w-full sm:w-48 h-12 rounded-xl" />
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 border-t border-border-custom/50 pt-6 w-full">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <SkeletonBlock className="w-4 h-4 rounded-full" />
                  <SkeletonBlock className="w-24 h-4" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 w-full flex justify-center">
            <SkeletonBlock className="w-full max-w-[400px] aspect-square rounded-full" />
          </div>
        </section>

        {/* Full Grid */}
        <section className="py-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
            <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
            <SkeletonBlock className="w-64 h-12 mb-4 mt-2" />
            <SkeletonBlock className="w-3/4 h-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <div key={idx} className="hog-card rounded-2xl p-6 bg-card-bg/60 border border-border-custom flex flex-col justify-between h-[280px]">
                <div className="flex flex-col gap-4">
                  <SkeletonBlock className="size-11 rounded-full" />
                  <SkeletonBlock className="w-3/4 h-6" />
                  <SkeletonBlock className="w-full h-16" />
                </div>
                <SkeletonBlock className="w-24 h-4 mt-6" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
