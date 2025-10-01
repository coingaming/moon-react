import React, { useState } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";
import ChevronDown from "../assets/icons/ChevronDown";

export type AccordionSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;
export type AccordionVariants = Extract<Variants, "fill" | "ghost" | "outline">;

type Props = {
  size?: AccordionSizes;
  variant?: AccordionVariants;
  className?: string;
  children: React.ReactNode;
};

type ItemProps = {
  initiallyOpen?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Item = ({ initiallyOpen = false, children, className }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const classes = mergeClasses(
    "moon-accordion-item",
    isOpen && "moon-accordion-open",
    className
  );

  return (
    <details
      className={classes}
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
}: React.ComponentProps<"summary">) => {
  const classes = mergeClasses("moon-accordion-item-header", className);

  return (
    <summary className={classes} {...props}>
      {children}
    </summary>
  );
};

const Toggle = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const classes = mergeClasses("moon-accordion-item-toggle", className);

  return (
    <div className={classes} {...props}>
      {children || <ChevronDown />}
    </div>
  );
};

const Content = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const classes = mergeClasses("moon-accordion-item-content", className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const Meta = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const classes = mergeClasses("moon-accordion-item-meta", className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const Root = ({
  size = "md",
  variant = "fill",
  className,
  children,
}: Props) => {
  const classes = mergeClasses(
    "moon-accordion",
    size !== "md" && `moon-accordion-${size}`,
    variant !== "fill" && `moon-accordion-${variant}`,
    className
  );

  return <div className={classes}>{children}</div>;
};

Root.displayName = "Accordion";
Item.displayName = "Accordion.Item";
Header.displayName = "Accordion.Header";
Toggle.displayName = "Accordion.Toggle";
Content.displayName = "Accordion.Content";
Meta.displayName = "Accordion.Meta";

const Accordion = Object.assign(Root, {
  Item,
  Header,
  Toggle,
  Content,
  Meta,
});

export default Accordion;
