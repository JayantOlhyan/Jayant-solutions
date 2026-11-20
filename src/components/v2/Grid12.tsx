import React from "react";

export interface Grid12Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Grid12({
  as: Component = "div",
  children,
  className = "",
  ...props
}: Grid12Props) {
  return (
    <Component
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 w-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Grid12;
