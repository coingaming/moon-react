import clsx from "clsx";
import * as React from "react";
import "../../assets/css/moon-components.css";

const sizesClasses = {
  sm: "moon-authenticator-sm",
  md: "moon-authenticator-md",
  lg: "moon-authenticator-lg",
  xl: "moon-authenticator-xl",
} as const;

function Input({
  className,
  type,
  size = "md",
  error = false,
  ...props
}: React.ComponentProps<"input"> & {
  error?: boolean;
  size?: keyof typeof sizesClasses;
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={clsx("moon-input", sizesClasses[size], {
        "moon-input-error": error,
      })}
      {...props}
    />
  );
}

export { Input };
