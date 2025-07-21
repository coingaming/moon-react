import clsx from "clsx";
import React, { ReactNode } from "react";

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

const Tag = ({ size, variant, children }: TagProps) => {
  return (
    <div
      className={clsx(
        "moon-tag",
        size !== TagSizes.xs && `moon-tag-${size}`,
        variant !== TagVariants.outline && `moon-tag-${variant}`
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
