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
};

const CircularProgress = ({
  size = "md",
  className,
  value,
}: CircularProgressType) => (
  <div
    data-value={value}
    role="progressbar"
    className={mergeClasses(
      "moon-circular-progress",
      size !== "md" && `moon-circular-progress-${size}`,
      className
    )}
  />
);

CircularProgress.displayName = "CircularProgress";

export default CircularProgress;
