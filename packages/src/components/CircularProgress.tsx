import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type CircularProgressSizes = Extract<
  Sizes,
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
>;

type CircularProgressType = {
  size?: CircularProgressSizes;
  value: number;
  className?: string;
  label?: string;
};

const CircularProgress = ({
  size = "md",
  className,
  value,
  label = "moon-circular-progress",
}: CircularProgressType) => (
  <div
    data-value={value}
    role="progressbar"
    aria-label={label}
    className={mergeClasses(
      "moon-circular-progress",
      size !== "md" && `moon-circular-progress-${size}`,
      className
    )}
  />
);

CircularProgress.displayName = "CircularProgress";

export default CircularProgress;
