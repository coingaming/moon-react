import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

import "../../index.css";

const buttonVariants = {
  fill: "moon-button-fill",
  soft: "moon-button-soft",
  outline: "moon-button-outline",
  ghost: "moon-button-ghost",
};

const buttonSizes = {
  xs: "moon-button-xs",
  sm: "moon-button-sm",
  md: "moon-button-md",
  lg: "moon-button-lg",
  xl: "moon-button-xl",
};

function Button({
  className,
  variant = "fill",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
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
