import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type LoaderSizes = Extract<Sizes, "2xs" | "xs" | "sm" | "md" | "lg">;

type LoaderProps = {
  size?: LoaderSizes;
  className?: string;
};

const Loader = ({ size = "md", className }: LoaderProps) => (
  <div
    className={mergeClasses(
      "moon-loader",
      size !== "md" && `moon-loader-${size}`,
      className
    )}
  />
);

Loader.displayName = "Loader";

export default Loader;
