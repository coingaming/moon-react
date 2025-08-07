import * as React from "react";
import mergeClasses from "../helpers/mergeClasses";

enum ButtonSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

enum ButtonVariants {
  soft = "soft",
  outline = "outline",
  fill = "fill",
  ghost = "ghost",
}

function Button({
  className,
  variant = ButtonVariants.fill,
  size = ButtonSizes.md,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
}) {
  return (
    <button
      data-slot="button"
      className={mergeClasses(
        "moon-button",
        variant !== ButtonVariants.fill && `moon-button-${variant}`,
        size !== ButtonSizes.md && `moon-button-${size}`,
        className
      )}
      {...props}
    />
  );
}

export { Button, ButtonVariants, ButtonSizes };
