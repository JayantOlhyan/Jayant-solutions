import React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { TintPanel, ProjectTint } from "./Media";
import { Label } from "./Pill";

export interface WorkCardProps {
  href: string;
  title: string;
  oneLiner: string;
  kind: string;
  imageSrc: ImageProps["src"];
  imageAlt: string;
  tint?: ProjectTint;
  priority?: boolean;
  className?: string;
}

export function WorkCard({
  href,
  title,
  oneLiner,
  kind,
  imageSrc,
  imageAlt,
  tint = "sathi",
  priority = false,
  className = "",
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className={`group block w-full rounded-2xl select-none transition-transform focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-4 ${className}`}
      aria-label={`${title} - ${kind}`}
    >
      <article className="flex flex-col gap-4">
        {/* Media Frame with Tint and Image */}
        <TintPanel
          tint={tint}
          className="relative aspect-[16/10] w-full p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden"
        >
          {/* Inner Screenshot Frame */}
          <div className="relative w-full h-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px)"
              priority={priority}
              className="object-cover object-top transition-transform duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] scale-100 group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
            />
          </div>

          {/* Circular Signal-Orange "View" Badge */}
          <span
            className="absolute size-14 rounded-full bg-[#E8590C] text-white flex items-center justify-center font-mono text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-250 ease-[cubic-bezier(0.2,0.7,0.2,1)] shadow-xl pointer-events-none z-10"
            aria-hidden="true"
          >
            View
          </span>
        </TintPanel>

        {/* Text Metadata */}
        <div className="flex flex-col gap-1.5 pt-1">
          <Label className="text-[11px] sm:text-xs">{kind}</Label>
          <h3 className="font-display font-medium text-xl sm:text-2xl text-[#0B0B0C] tracking-tight group-hover:text-[#0B0B0C]">
            {title}
          </h3>
          <p className="text-sm sm:text-[15px] text-[#6B6862] leading-relaxed line-clamp-2">
            {oneLiner}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default WorkCard;
