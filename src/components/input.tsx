import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum InputSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

type InputProps = React.ComponentProps<"input"> & {
  error?: boolean;
  size?: InputSizes;
};

function Input({ className, type, error = false, size, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={mergeClasses(
        "moon-input",
        size !== "md" && `moon-input-${size}`,
        {
          "moon-input-error": error,
        }
      )}
      {...props}
    />
  );
}

export { Input };
