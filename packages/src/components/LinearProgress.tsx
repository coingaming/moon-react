import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type LinearProgressSizes = Extract<Sizes, "5xs" | "4xs" | "3xs" | "2xs">;

type LinearProgressProps = {
  children?: React.ReactNode;
  className?: string;
  size?: LinearProgressSizes;
  value: number;
};

const LinearProgress = ({
  className,
  value,
  size = "2xs",
  children,
}: LinearProgressProps) => (
  <div className={mergeClasses("moon-linear-progress-wrapper", className)}>
    {children}
    <progress
      value={String(value)}
      max="100"
      className={mergeClasses(
        "moon-linear-progress",
        size !== "2xs" && `moon-linear-progress-${size}`
      )}
    ></progress>
  </div>
);

LinearProgress.displayName = "LinearProgress";

export default LinearProgress;
