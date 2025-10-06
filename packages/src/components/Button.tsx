import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants, Contexts } from "../types";

export type ButtonSizes = Extract<Sizes, "xs" | "sm" | "md" | "lg" | "xl">;

export type ButtonVariants = Variants;

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  context?: Contexts;
  className?: string;
  isFullWidth?: boolean;
};

const Button = ({
  className,
  variant = "fill",
  size = "md",
  context = "brand",
  isFullWidth,
  ...props
}: ButtonProps) => (
  <button
    className={mergeClasses(
      "moon-button",
      variant !== "fill" && `moon-button-${variant}`,
      size !== "md" && `moon-button-${size}`,
      context !== "brand" && `moon-button-${context}`,
      isFullWidth && `moon-button-full-width`,
      className
    )}
    {...props}
  />
);

Button.displayName = "Button";

export default Button;
