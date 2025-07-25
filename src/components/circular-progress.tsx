import React, { FC } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum CircularProgressSize {
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

export type CircularProgressType = {
  size?: CircularProgressSize;
  value: number;
  className?: string;
};

const CircularProgress: FC<CircularProgressType> = ({
  size = CircularProgressSize.md,
  className,
  value,
}) => (
  <div
    data-value={value}
    className={mergeClasses(
      "moon-circular-progress",
      size !== CircularProgressSize.md && `moon-circular-progress-${size}`,
      className
    )}
  />
);

export default CircularProgress;
