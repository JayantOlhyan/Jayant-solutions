import React from "react";
import { Plus } from "lucide-react";

export interface AccordionItemProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className = "",
  ...props
}: AccordionItemProps) {
  return (
    <details
      open={defaultOpen ? true : undefined}
      className={`v2-accordion group border-b border-[#E6E4E0] w-full transition-colors ${className}`}
      {...props}
    >
      <summary className="flex items-center justify-between gap-4 py-5 text-left cursor-pointer list-none select-none font-display font-medium text-lg md:text-xl text-[#0B0B0C] focus-visible:outline-2 focus-visible:outline-[#E8590C] focus-visible:outline-offset-2">
        <span>{title}</span>
        <span
          className="v2-accordion-icon inline-flex items-center justify-center size-7 rounded-full border border-[#E6E4E0] text-[#0B0B0C] shrink-0 transition-transform duration-250 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:border-[#0B0B0C]"
          aria-hidden="true"
        >
          <Plus className="size-4" />
        </span>
      </summary>
      <div className="pb-6 pt-1 text-sm md:text-base text-[#6B6862] leading-relaxed">
        {children}
      </div>
    </details>
  );
}

export interface AccordionProps {
  items: Array<{
    id?: string | number;
    title: string;
    content: React.ReactNode;
  }>;
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  return (
    <div className={`w-full divide-y-0 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={item.id ?? index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
