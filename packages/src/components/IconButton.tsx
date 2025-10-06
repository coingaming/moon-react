import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants, Contexts } from "../types";

export type IconButtonSizes = Extract<Sizes, "xs" | "sm" | "md" | "lg" | "xl">;

export type IconButtonVariants = Variants;

type IconButtonProps = React.ComponentProps<"button"> & {
  className?: string;
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  context?: Contexts;
  isRounded?: boolean;
};

const IconButton = ({
  className,
  variant = "fill",
  size = "md",
  context = "brand",
  isRounded,
  ...props
}: IconButtonProps) => (
  <button
    className={mergeClasses(
      "moon-icon-button",
      variant !== "fill" && `moon-icon-button-${variant}`,
      size !== "md" && `moon-icon-button-${size}`,
      context !== "brand" && `moon-icon-button-${context}`,
      isRounded && "moon-icon-button-rounded",
      className
    )}
    {...props}
  />
);

IconButton.displayName = "IconButton";

export default IconButton;
