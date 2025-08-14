import React, { useState, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum AccordionSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export type AccordionProps = {
  size?: AccordionSize;
  arrow?: boolean;
  initiallyOpen?: boolean;
  className?: string;
  children: ReactNode;
};

export default function Accordion({
  size = AccordionSize.md,
  arrow = true,
  initiallyOpen = false,
  className,
  children,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div
      className={mergeClasses(
        "moon-accordion",
        size !== AccordionSize.md && `moon-accordion-${size}`,
        className
      )}
    >
      <details
        className={mergeClasses(
          "moon-accordion-item",
          arrow && "moon-accordion-arrow",
          isOpen && "moon-accordion-open"
        )}
        open={isOpen}
        onToggle={(e) => setIsOpen(e.currentTarget.open)}
      >
        {children}
      </details>
    </div>
  );
}

export const AccordionTitle = ({
  children,
  className,
  ...props
}: React.ComponentProps<"summary"> & {
  children: React.ReactNode | string;
  className?: string;
}) => {
  return (
    <summary
      className={mergeClasses("moon-accordion-title", className)}
      {...props}
    >
      {children}
    </summary>
  );
};

export const AccordionContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children: React.ReactNode | string;
  className?: string;
}) => {
  return (
    <div
      className={mergeClasses("moon-accordion-content", className)}
      {...props}
    >
      {children}
    </div>
  );
};
