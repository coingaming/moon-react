import React from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum SnackbarVariants {
  caution = "caution",
  info = "info",
  neutral = "neutral",
  positive = "positive",
}

type SnackbarProps = React.ComponentProps<"div"> & {
  variant?: SnackbarVariants;
  children?: string | React.ReactNode;
  className?: string;
};

const Snackbar = ({
  children,
  variant = SnackbarVariants.neutral,
  className,
}: SnackbarProps) => {
  return (
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
};

export const SnackbackAction = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={mergeClasses("moon-snackbar-action", className)}>
      {children}
    </div>
  );
};

export default Snackbar;
