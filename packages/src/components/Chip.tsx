import React, { useState } from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes, Variants } from "../types";

export type ChipSizes = Extract<Sizes, "sm" | "md">;
export type ChipVariants = Extract<Variants, "fill" | "soft" | "outline">;

type ChipProps = React.ComponentProps<"button"> & {
  size?: ChipSizes;
  variant?: ChipVariants;
  isActive?: boolean;
  children: React.ReactNode;
};

const Chip = ({
  size = "md",
  variant = "fill",
  isActive = false,
  onClick,
  children,
  ...props
}: ChipProps) => {
  const [active, setActive] = useState(false);
  const currentActive = isActive ?? active;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isActive === undefined) {
      setActive(!active);
    }
    onClick?.(e);
  };
  return (
    <button
      className={mergeClasses(
        "moon-chip",
        size !== "md" && `moon-chip-${size}`,
        variant !== "fill" && `moon-chip-${variant}`,
        currentActive && "moon-chip-active"
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Chip;
