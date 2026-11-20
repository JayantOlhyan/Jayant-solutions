import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export function Container({
  as: Component = "div",
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 w-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
