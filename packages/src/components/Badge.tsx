import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Variants, Contexts } from "../types";

export type BadgeVariants = Extract<Variants, "fill" | "soft" | "outline">;

type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: BadgeVariants;
  context?: Contexts;
};

const Badge = ({
  children,
  className,
  variant = "fill",
  context = "brand",
}: BadgeProps) => (
  <span
    className={mergeClasses(
      "moon-badge",
      variant !== "fill" && `moon-badge-${variant}`,
      context !== "brand" && `moon-badge-${context}`,
      className
    )}
  >
    {children}
  </span>
);

Badge.displayName = "Badge";

export default Badge;
