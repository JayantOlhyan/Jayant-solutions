import React from "react";
import Image, { ImageProps } from "next/image";

export type ProjectTint =
  | "sathi"
  | "health"
  | "khel"
  | "farm"
  | "sentinel"
  | "civic"
  | "msit"
  | "showcase-green"
  | string;

const tintClasses: Record<string, string> = {
  sathi: "bg-[#DDE9DF]",
  health: "bg-[#DCE5F2]",
  khel: "bg-[#E4EBC9]",
  farm: "bg-[#F1E7CF]",
  sentinel: "bg-[#E6E0F5]",
  civic: "bg-[#EEDFD7]",
  msit: "bg-[#E1E5EC]",
  "showcase-green": "bg-[#1E3A2B]",
};

export interface TintPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  tint?: ProjectTint;
  children?: React.ReactNode;
  className?: string;
}

export function TintPanel({
  tint = "sathi",
  children,
  className = "",
  style,
  ...props
}: TintPanelProps) {
  const isPredefined = tint in tintClasses;
  const bgClass = isPredefined ? tintClasses[tint] : "";
  const customStyle = !isPredefined ? { backgroundColor: tint, ...style } : style;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10 flex items-center justify-center ${bgClass} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export interface LaptopFrameProps {
  src: ImageProps["src"];
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
}

export function LaptopFrame({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 800px",
  className = "",
  imageClassName = "",
}: LaptopFrameProps) {
  return (
    <div className={`w-full max-w-[840px] mx-auto select-none ${className}`}>
      {/* Screen Lid */}
      <div className="relative bg-[#18181B] rounded-t-xl p-2 sm:p-3 pb-0 border border-[#27272A] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
        {/* Camera Dot */}
        <div className="size-1.5 rounded-full bg-[#3F3F46] mx-auto mb-1.5" aria-hidden="true" />
        {/* Screen Display */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-sm bg-[#0B0B0C] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover object-top ${imageClassName}`}
          />
        </div>
      </div>
      {/* Laptop Base & Hinge */}
      <div className="h-3 sm:h-3.5 bg-[#27272A] rounded-b-md relative flex items-center justify-center border-t border-[#3F3F46] shadow-sm">
        {/* Center Thumb Groove */}
        <div className="w-14 sm:w-16 h-1 bg-[#18181B] rounded-b-sm" aria-hidden="true" />
      </div>
    </div>
  );
}

export interface PhoneFrameProps {
  src: ImageProps["src"];
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
}

export function PhoneFrame({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 360px",
  className = "",
  imageClassName = "",
}: PhoneFrameProps) {
  return (
    <div className={`relative w-full max-w-[280px] sm:max-w-[320px] mx-auto select-none ${className}`}>
      {/* Phone Shell */}
      <div className="relative p-2.5 sm:p-3 bg-[#18181B] rounded-[36px] border border-[#27272A] shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
        {/* Dynamic Island Pill */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10 flex items-center justify-end pr-2 pointer-events-none"
          aria-hidden="true"
        >
          <div className="size-2 rounded-full bg-[#18181B]" />
        </div>
        {/* Screen Display */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[28px] bg-black w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover object-top ${imageClassName}`}
          />
        </div>
      </div>
    </div>
  );
}

export interface TiltedScreenProps {
  src?: ImageProps["src"];
  alt?: string;
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
  className?: string;
}

export function TiltedScreen({
  src,
  alt = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 600px",
  children,
  className = "",
}: TiltedScreenProps) {
  return (
    <div className={`[perspective:1200px] group w-full ${className}`}>
      <div className="v2-tilted-screen transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] [transform:rotateX(10deg)_rotateY(-10deg)_rotateZ(2deg)] group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_rotateZ(0deg)]">
        {src ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#0B0B0C] border border-[#27272A] shadow-2xl">
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              className="object-cover object-top"
            />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
