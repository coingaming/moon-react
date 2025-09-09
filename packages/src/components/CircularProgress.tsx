import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type CircularProgressSizes = Extract<
  Sizes,
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
>;

export type CircularProgressType = {
  size?: CircularProgressSizes;
  value: number;
  className?: string;
};

export const CircularProgress = ({
  size = "md",
  className,
  value,
}: CircularProgressType) => (
  <div
    data-value={value}
    className={mergeClasses(
      "moon-circular-progress",
      size !== "md" && `moon-circular-progress-${size}`,
      className
    )}
  />
);
