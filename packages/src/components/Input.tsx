import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type InputSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type InputVariants = Extract<Variants, "fill" | "outline">;

export type InputProps = Omit<React.ComponentProps<"input">, "size"> & {
  size?: InputSizes;
  variant?: InputVariants;
  error?: boolean;
};

export const Input = ({
  className,
  type,
  error = false,
  size = "md",
  variant = "fill",
  ...props
}: InputProps) => (
  <input
    type={type}
    data-slot="input"
    className={mergeClasses(
      "moon-input",
      size !== "md" && `moon-input-${size}`,
      variant !== "fill" && `moon-input-${variant}`,
      error && "moon-input-error",
      className
    )}
    {...props}
  />
);
