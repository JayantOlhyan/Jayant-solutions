import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "inverse";
export type ButtonSize = "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export type ButtonProps = ButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; target?: string; rel?: string })
  );

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0B0B0C] text-white border border-[#0B0B0C] hover:bg-white hover:text-[#0B0B0C] focus-visible:bg-white focus-visible:text-[#0B0B0C]",
  secondary:
    "bg-transparent text-[#0B0B0C] border border-[#0B0B0C] hover:bg-[#0B0B0C] hover:text-white focus-visible:bg-[#0B0B0C] focus-visible:text-white",
  inverse:
    "bg-white text-[#0B0B0C] border border-white hover:bg-transparent hover:text-white focus-visible:bg-transparent focus-visible:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-[44px] px-5 py-2.5 text-sm font-medium",
  lg: "min-h-[54px] px-7 py-3.5 text-base font-medium",
};

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full cursor-pointer select-none transition-colors duration-250 ease-[cubic-bezier(0.2,0.7,0.2,1)] focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2";
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const arrowIcon = arrow ? (
    <ArrowUpRight
      className="size-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-1 group-focus-visible:translate-x-1"
      aria-hidden="true"
    />
  ) : null;

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel, ...rest } = props;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={combinedClasses}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          <span>{children}</span>
          {arrowIcon}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <span>{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button
      type={(props as React.ButtonHTMLAttributes<HTMLButtonElement>).type || "button"}
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
      {arrowIcon}
    </button>
  );
}

export default Button;
