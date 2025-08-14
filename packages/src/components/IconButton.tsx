import React, { ReactNode } from "react";
import { Button } from "./Button";
import mergeClasses from "../helpers/mergeClasses";

export enum IconButtonSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum IconButtonVariants {
  soft = "soft",
  outline = "outline",
  fill = "fill",
  ghost = "ghost",
}

type IconButtonProps = React.ComponentProps<"button"> & {
  children: ReactNode;
  className?: string;
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
};

export const IconButton = ({
  children,
  className,
  size = IconButtonSizes.md,
  variant = IconButtonVariants.fill,
  ...props
}: IconButtonProps) => (
  <Button
    className={mergeClasses(
      "moon-icon-button",
      size !== IconButtonSizes.md && `moon-icon-button-${size}`,
      variant !== IconButtonVariants.fill && `moon-icon-button-${variant}`,
      className
    )}
    {...props}
  >
    {children}
  </Button>
);

