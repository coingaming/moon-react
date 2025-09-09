import mergeClasses from "../helpers/mergeClasses";

export const ChipSizes = {
  sm: "sm",
  md: "md",
} as const;

export const ChipVariants = {
  fill: "fill",
  soft: "soft",
  outline: "outline",
} as const;

type ChipProps = {
  size?: keyof typeof ChipSizes;
  variant?: keyof typeof ChipVariants;
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
