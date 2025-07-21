import clsx from "clsx";
import React from "react";

enum LoaderSize {
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

const Loader = ({ size = LoaderSize.md }: { size?: LoaderSize }) => {
  return (
    <div
      className={clsx(
        "moon-loader",
        size !== LoaderSize.md && `moon-loader-${size}`
      )}
    />
  );
};

export default Loader;
