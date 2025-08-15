import mergeClasses from "../helpers/mergeClasses";

export enum ChipSizes {
  sm = "sm",
  md = "md",
}

export enum ChipVariants {
  fill = "fill",
  outline = "outline",
}

type ChipProps = {
  size?: ChipSizes;
  variant?: ChipVariants;
  selected?: boolean;
  children: React.ReactNode;
};

export const Chip = ({
  size = ChipSizes.md,
  selected = false,
  variant = ChipVariants.fill,
  children,
}: ChipProps) => (
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
