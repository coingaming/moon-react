import { useState, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export const AccordionSizes = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;

export const AccordionVariants = {
  fill: "fill",
  ghost: "ghost",
  outline: "outline",
} as const;

type Props = {
  size?: keyof typeof AccordionSizes;
  variant?: keyof typeof AccordionVariants;
  arrow?: boolean;
  initiallyOpen?: boolean;
  className?: string;
  children: ReactNode;
};

export const Accordion = ({
  size = AccordionSizes.md,
  variant = AccordionVariants.fill,
  className,
  children,
}: Props) => (
  <div
    className={mergeClasses(
      "moon-accordion",
      size !== AccordionSizes.md && `moon-accordion-${size}`,
      variant !== AccordionVariants.fill && `moon-accordion-${variant}`,
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
}: Props) => {
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
