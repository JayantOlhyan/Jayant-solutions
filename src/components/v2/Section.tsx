import React from "react";

export type SectionSpacing = "default" | "compact" | "tight" | "none";
export type SectionBg = "paper" | "stone" | "ink" | "transparent";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: SectionSpacing;
  bg?: SectionBg;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-[clamp(96px,72.23px+6.095vw,160px)]",
  compact: "py-16 sm:py-20 lg:py-24",
  tight: "py-10 sm:py-12 lg:py-16",
  none: "py-0",
};

const bgClasses: Record<SectionBg, string> = {
  paper: "bg-[#FFFFFF] text-[#0B0B0C]",
  stone: "bg-[#F4F3F0] text-[#0B0B0C]",
  ink: "bg-[#0B0B0C] text-[#FFFFFF]",
  transparent: "bg-transparent",
};

export function Section({
  as: Component = "section",
  spacing = "default",
  bg = "transparent",
  children,
  className = "",
  id,
  ...props
}: SectionProps) {
  const spacingClass = spacingClasses[spacing] || spacingClasses.default;
  const bgClass = bgClasses[bg] || bgClasses.transparent;

  return (
    <Component
      id={id}
      className={`relative w-full ${spacingClass} ${bgClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;
