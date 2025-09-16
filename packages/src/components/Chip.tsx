import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type ChipSizes = Extract<Sizes, "sm" | "md">;

export type ChipVariants = Extract<Variants, "fill" | "soft" | "outline">;

type ChipProps = {
  size?: ChipSizes;
  variant?: ChipVariants;
  selected?: boolean;
  children: React.ReactNode;
};

const Chip = ({
  size = "md",
  selected = false,
  variant = "fill",
  children,
}: ChipProps) => (
  <button
    className={mergeClasses(
      "moon-chip",
      size !== "md" && `moon-chip-${size}`,
      variant !== "fill" && `moon-chip-${variant}`,
      selected && `moon-chip-selected`
    )}
  >
    {children}
  </button>
);

Chip.displayName = "Chip";

export default Chip;
