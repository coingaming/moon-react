import mergeClasses from "../helpers/mergeClasses";

export enum CircularProgressSizes {
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

type CircularProgressType = {
  size?: CircularProgressSizes;
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
