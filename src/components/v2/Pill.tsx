import React from "react";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className = "", ...props }: PillProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-[#F4F3F0] text-[#6B6862] border border-[#E6E4E0] select-none ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export interface FilterPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FilterPill({
  active = false,
  children,
  className = "",
  onClick,
  ...props
}: FilterPillProps) {
  const stateClasses = active
    ? "bg-[#0B0B0C] text-white border-[#0B0B0C]"
    : "bg-transparent text-[#6B6862] border-[#E6E4E0] hover:border-[#6B6862] hover:text-[#0B0B0C]";

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex items-center justify-center min-h-[36px] px-4 rounded-full text-xs font-mono border transition-colors duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2 ${stateClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Label({
  as: Component = "span",
  children,
  className = "",
  ...props
}: LabelProps) {
  return (
    <Component
      className={`font-mono text-xs uppercase tracking-[0.08em] text-[#6B6862] select-none ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Pill;
