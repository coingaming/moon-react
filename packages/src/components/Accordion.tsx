import React, { useState, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type AccordionSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type AccordionVariants = Extract<Variants, "fill" | "ghost" | "outline">;

export type AccordionProps = {
  size?: AccordionSizes;
  variant?: AccordionVariants;
  arrow?: boolean;
  initiallyOpen?: boolean;
  className?: string;
  children: ReactNode;
};

export const Accordion = ({
  size = "md",
  variant = "fill",
  className,
  children,
}: AccordionProps) => (
  <div
    className={mergeClasses(
      "moon-accordion",
      size !== "md" && `moon-accordion-${size}`,
      variant !== "fill" && `moon-accordion-${variant}`,
      className
    )}
  >
    {children}
  </div>
);

export const AccordionItem = ({
  arrow = true,
  initiallyOpen = false,
  children,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
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
  );
};

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
