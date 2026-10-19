import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function TextLink({
  href,
  arrow = false,
  children,
  className = "",
  target,
  rel,
  ...props
}: TextLinkProps) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const classes = `v2-text-link group inline-flex items-center gap-1 font-medium text-[#0B0B0C] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2 ${className}`;

  const arrowIcon = arrow ? (
    <ArrowUpRight
      className="size-3.5 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
      aria-hidden="true"
    />
  ) : null;

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
        {...props}
      >
        <span>{children}</span>
        {arrowIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      <span>{children}</span>
      {arrowIcon}
    </Link>
  );
}

export default TextLink;
