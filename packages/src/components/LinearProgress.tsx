import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type LinearProgressSizes = Extract<Sizes, "5xs" | "4xs" | "3xs" | "2xs">;

type LinearProgressProps = {
  label?: string;
  className?: string;
  size?: LinearProgressSizes;
  value: number;
};

const LinearProgress = ({
  className,
  value = 0,
  size = "2xs",
  label,
}: LinearProgressProps) => {
  if (label) {
    return (
      <label className={className}>
        <progress
          value={String(value)}
          max="100"
          className={mergeClasses(
            "moon-linear-progress",
            size !== "2xs" && `moon-linear-progress-${size}`
          )}
        ></progress>
        <span>{label}</span>
      </label>
    );
  }
  return (
    <progress
      value={String(value)}
      max="100"
      className={mergeClasses(
        "moon-linear-progress",
        size !== "2xs" && `moon-linear-progress-${size}`,
        className
      )}
    ></progress>
  );
};

LinearProgress.displayName = "LinearProgress";

export default LinearProgress;
