import clsx from "clsx";
import * as React from "react";
import "../assets/css/moon-components.css";

const sizesClasses = {
  sm: "moon-authenticator-sm",
  md: "moon-authenticator-md",
  lg: "moon-authenticator-lg",
  xl: "moon-authenticator-xl",
};

type InputProps = React.ComponentProps<"input"> & {
  error?: boolean;
  size?: keyof typeof sizesClasses;
};

function Input({ className, type, error = false, size, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={clsx("moon-input", sizesClasses[size ?? "md"], {
        "moon-input-error": error,
      })}
      {...props}
    />
  );
}

export { Input };
