import React, { FC, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum TagSizes {
  "2xs" = "2xs",
  xs = "xs",
}

export enum TagVariants {
  fill = "fill",
  outline = "outline",
}

export type TagProps = React.ComponentProps<"div"> & {
  size?: TagSizes;
  variant?: TagVariants;
  className?: string;
  children: ReactNode;
};

const Tag: FC<TagProps> = ({ size, variant, children, className }) => {
  return (
    <div
      className={mergeClasses(
        "moon-tag",
        size !== TagSizes.xs && `moon-tag-${size}`,
        variant !== TagVariants.outline && `moon-tag-${variant}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
