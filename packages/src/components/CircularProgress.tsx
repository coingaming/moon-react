import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type CircularProgressSizes = Extract<
  Sizes,
  "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
>;

type CircularProgressType = React.ComponentProps<"div"> & {
  size?: CircularProgressSizes;
  className?: string;
  value?: number;
};

const CircularProgress = ({
  size = "md",
  className,
  value = 0,
  ...props
}: CircularProgressType) => (
  <div
    className={mergeClasses(
      "moon-circular-progress",
      size !== "md" && `moon-circular-progress-${size}`,
      className
    )}
    data-value={value}
    {...props}
  />
);

CircularProgress.displayName = "CircularProgress";

export default CircularProgress;
