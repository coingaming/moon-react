import mergeClasses from "../helpers/mergeClasses";

export const CircularProgressSizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
} as const;

type CircularProgressType = {
  size?: keyof typeof CircularProgressSizes;
  value: number;
  className?: string;
};

export const CircularProgress = ({
  size = CircularProgressSizes.md,
  className,
  value,
}: CircularProgressType) => (
  <div
    data-value={value}
    className={mergeClasses(
      "moon-circular-progress",
      size !== CircularProgressSizes.md && `moon-circular-progress-${size}`,
      className
    )}
  />
);
