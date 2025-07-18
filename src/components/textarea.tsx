import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum TextareaSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

function Textarea({
  className,
  size = TextareaSizes.md,
  error = false,
  ...props
}: React.ComponentProps<"textarea"> & {
  size?: TextareaSizes;
  error?: boolean;
}) {
  return (
    <textarea
      className={mergeClasses(
        "moon-textarea",
        size !== TextareaSizes.md && `moon-textarea-${size}`,
        { "moon-textarea-error": error },
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
