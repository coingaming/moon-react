import mergeClasses from "../helpers/mergeClasses";

export enum SnackbarVariants {
  caution = "caution",
  info = "info",
  neutral = "neutral",
  positive = "positive",
}

type SnackbarActionProps = {
  children?: React.ReactNode;
  className?: string;
};

type SnackbarProps = SnackbarActionProps &
  React.ComponentProps<"div"> & {
    variant?: SnackbarVariants;
  };

export const Snackbar = ({
  children,
  variant = SnackbarVariants.neutral,
  className,
}: SnackbarProps) => (
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

export const SnackbackAction = ({
  children,
  className,
}: SnackbarActionProps) => (
  <div className={mergeClasses("moon-snackbar-action", className)}>
    {children}
  </div>
);
