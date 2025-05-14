import * as React from "react";

import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

const sizesClasses = {
  sm: "moon-authenticator-sm",
  md: "moon-authenticator-md",
  lg: "moon-authenticator-lg",
  xl: "moon-authenticator-xl",
};

function Input({
  className,
  type,
  error = false,
  size = "md",
  ...props
}: React.ComponentProps<"input"> & { error?: boolean; size?: Size }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("moon-input", sizesClasses[size], {
        "moon-input-error": error,
      })}
      {...props}
    />
  );
}

export { Input };
