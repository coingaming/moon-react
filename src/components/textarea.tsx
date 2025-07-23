import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum TextareaSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export type TextareaProps = React.ComponentProps<"textarea"> & {
  size?: TextareaSizes;
  error?: boolean;
};

function Textarea({
  className,
  size = TextareaSizes.md,
  error = false,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={mergeClasses(
        "moon-textarea",
        size !== TextareaSizes.md && `moon-textarea-${size}`,
        error && "moon-textarea-error",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
