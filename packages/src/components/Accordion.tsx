import React, { useState, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";
import ChevronDown from "../assets/icons/ChevronDown";

export type AccordionSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type AccordionVariants = Extract<Variants, "fill" | "ghost" | "outline">;

type Props = {
  size?: AccordionSizes;
  variant?: AccordionVariants;
  arrow?: boolean;
  initiallyOpen?: boolean;
  className?: string;
  children: ReactNode;
};

const Item = ({ arrow = true, initiallyOpen = false, children }: Props) => {
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

const Header = ({
  children,
  className,
  ...props
}: React.ComponentProps<"summary"> & {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <summary
      className={mergeClasses("moon-accordion-item-header", className)}
      {...props}
    >
      {children}
    </summary>
  );
};

const Toggle = ({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <button
    className={mergeClasses("moon-accordion-item-toggle", className)}
    {...props}
  >
    {children ? children : <ChevronDown />}
  </button>
);

const Content = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={mergeClasses("moon-accordion-item-content", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Meta = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={mergeClasses("moon-accordion-item-meta", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const Root = ({
  size = "md",
  variant = "fill",
  className,
  children,
}: Props) => (
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
Root.displayName = "Accordion";
Item.displayName = "Accordion.Item";
Content.displayName = "Accordion.Content";
Header.displayName = "Accordion.Header";
Toggle.displayName = "Accordion.Toggle";
Meta.displayName = "Accordion.Meta";

const Accordion = Object.assign(Root, {
  Item,
  Header,
  Content,
  Toggle,
  Meta,
});

export default Accordion;
