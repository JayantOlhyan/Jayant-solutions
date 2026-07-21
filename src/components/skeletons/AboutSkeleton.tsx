import React from "react";
import { SkeletonBlock } from "./SkeletonBlock";

export default function AboutSkeleton() {
  return (
    <div className="hog-grid min-h-screen pb-20 pt-10 text-left">
      <main className="max-w-none px-6 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-28">
        
        {/* About Hero & Desk Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          <div className="lg:col-span-6 flex flex-col items-start">
            <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
            <SkeletonBlock className="w-full h-16 md:h-24 mb-6" />
            <SkeletonBlock className="w-full max-w-xl h-24 mb-8" />
            
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <SkeletonBlock className="w-full sm:w-48 h-12 rounded-xl" />
              <SkeletonBlock className="w-full sm:w-40 h-12 rounded-xl" />
            </div>
          </div>
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <SkeletonBlock className="w-full aspect-[4/3] rounded-3xl" />
          </div>
        </section>

        {/* Stats Counter Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="hog-card rounded-2xl p-6 flex flex-col justify-between border border-border-custom bg-card-bg/50 h-[140px]">
              <SkeletonBlock className="w-16 h-10 mb-2" />
              <div>
                <SkeletonBlock className="w-3/4 h-5 mb-1" />
                <SkeletonBlock className="w-full h-4" />
              </div>
            </div>
          ))}
        </section>

        {/* Our Story */}
        <section className="py-8 relative">
          <div className="text-left mb-12">
            <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
            <SkeletonBlock className="w-64 h-12 mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <SkeletonBlock className="w-full h-24" />
              <SkeletonBlock className="w-full h-24" />
              <SkeletonBlock className="w-3/4 h-16 mt-4" />
            </div>

            <div className="lg:col-span-3 flex justify-center">
              <SkeletonBlock className="w-full max-w-[280px] aspect-[3/4] rounded-3xl" />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-border-custom/80 rounded-2xl p-5 bg-card-bg/40 h-48">
                   <SkeletonBlock className="w-1/2 h-6 mb-4" />
                   <div className="space-y-2">
                     <SkeletonBlock className="w-full h-4" />
                     <SkeletonBlock className="w-5/6 h-4" />
                     <SkeletonBlock className="w-full h-4" />
                     <SkeletonBlock className="w-4/5 h-4" />
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
             <SkeletonBlock className="w-32 h-6 rounded-full mb-4" />
             <SkeletonBlock className="w-64 h-12 mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
             {[1, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="hog-card rounded-2xl p-5 bg-card-bg/50 border border-border-custom flex flex-col justify-between h-[220px]">
                <div className="flex flex-col gap-4">
                  <SkeletonBlock className="size-11 rounded-full" />
                  <SkeletonBlock className="w-3/4 h-5" />
                  <SkeletonBlock className="w-full h-12" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
