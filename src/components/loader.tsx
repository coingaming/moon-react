import React, { FC } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum LoaderSize {
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

export type LoaderProps = { size?: LoaderSize; className?: string };

const Loader: FC<LoaderProps> = ({ size = LoaderSize.md, className }) => (
  <div
    className={mergeClasses(
      "moon-loader",
      size !== LoaderSize.md && `moon-loader-${size}`,
      className
    )}
  />
);

export default Loader;
