import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants, Contexts } from "../types";

export type TagSizes = Extract<Sizes, "2xs" | "xs">;

export type TagVariants = Variants;

type TagProps = React.ComponentProps<"div"> & {
  size?: TagSizes;
  variant?: TagVariants;
  context?: Contexts;
  className?: string;
  children: React.ReactNode;
};

const Tag = ({
  size = "xs",
  variant = "fill",
  context = "brand",
  children,
  className,
}: TagProps) => (
  <div
    className={mergeClasses(
      "moon-tag",
      size !== "xs" && `moon-tag-${size}`,
      variant !== "fill" && `moon-tag-${variant}`,
      context !== "brand" && `moon-tag-${context}`,
      className
    )}
  >
    {children}
  </div>
);

Tag.displayName = "Tag";

export default Tag;
