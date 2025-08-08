import React, { FC } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum SnackbarVariants {
  caution = "caution",
  info = "info",
  neutral = "neutral",
  positive = "positive",
}

export type SnackbarActionProps = {
  children?: React.ReactNode;
  className?: string;
};

export type SnackbarProps = SnackbarActionProps &
  React.ComponentProps<"div"> & {
    variant?: SnackbarVariants;
  };

const Snackbar: FC<SnackbarProps> = ({
  children,
  variant = SnackbarVariants.neutral,
  className,
}) => (
  <div
    className={mergeClasses(
      "moon-snackbar",
      variant !== SnackbarVariants.neutral && `moon-snackbar-${variant}`,
      className
    )}
  >
    {children}
  </div>
);

export const SnackbackAction: FC<SnackbarActionProps> = ({
  children,
  className,
}) => (
  <div className={mergeClasses("moon-snackbar-action", className)}>
    {children}
  </div>
);

export default Snackbar;
