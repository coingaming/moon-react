import mergeClasses from "../helpers/mergeClasses";

export enum LoaderSizes {
  "2xs" = "2xs",
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

type LoaderProps = { size?: LoaderSizes; className?: string };

export const Loader = ({ size = LoaderSizes.md, className }: LoaderProps) => (
  <div
    className={mergeClasses(
      "moon-loader",
      size !== LoaderSizes.md && `moon-loader-${size}`,
      className
    )}
  />
);
