import React, { ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum ChipSizes {
  sm = "sm",
  md = "md",
}

export enum ChipVariants {
  fill = "fill",
  outline = "outline",
}

const Chip = ({
  size = ChipSizes.md,
  selected = false,
  variant = ChipVariants.fill,
  children,
}: {
  size?: ChipSizes;
  variant?: ChipVariants;
  selected?: boolean;
  children: ReactNode;
}) => {
  return (
    <button
      className={mergeClasses(
        "moon-chip",
        size !== ChipSizes.md && `moon-chip-${size}`,
        variant !== ChipVariants.fill && `moon-chip-${variant}`,
        selected && `moon-chip-selected`
      )}
    >
      {children}
    </button>
  );
};

export default Chip;
