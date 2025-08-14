import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum InputSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export type InputProps = React.ComponentProps<"input"> & {
  error?: boolean;
  size?: InputSizes;
};

const Input: React.FC<InputProps> = ({
  className,
  type,
  error = false,
  size,
  ...props
}) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={mergeClasses(
        "moon-input",
        size !== "md" && `moon-input-${size}`,
        error && "moon-input-error"
      )}
      {...props}
    />
  );
};

export { Input };
