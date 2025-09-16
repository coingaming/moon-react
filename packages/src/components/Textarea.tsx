import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type TextareaSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type TextareaVariants = Extract<Variants, "fill" | "outline">;

type TextareaProps = React.ComponentProps<"textarea"> & {
  size?: TextareaSizes;
  variant?: TextareaVariants;
  error?: boolean;
};

const Textarea = ({
  className,
  size = "md",
  variant = "fill",
  error = false,
  ...props
}: TextareaProps) => (
  <textarea
    className={mergeClasses(
      "moon-textarea",
      size !== "md" && `moon-textarea-${size}`,
      variant !== "fill" && `moon-textarea-${variant}`,
      error && "moon-textarea-error",
      className
    )}
    {...props}
  />
);

Textarea.displayName = "Textarea";

export default Textarea;
