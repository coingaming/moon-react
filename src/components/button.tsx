import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import "../assets/css/moon-components.css";

const buttonVariants = {
  fill: "moon-button-fill",
  soft: "moon-button-soft",
  outline: "moon-button-outline",
  ghost: "moon-button-ghost",
} as const;

const buttonSizes = {
  xs: "moon-button-xs",
  sm: "moon-button-sm",
  md: "moon-button-md",
  lg: "moon-button-lg",
  xl: "moon-button-xl",
} as const;

function Button({
  className,
  variant = "fill",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
} & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={clsx(
        "moon-button",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
