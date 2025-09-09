import { Contexts } from "../constants/contexts";
import mergeClasses from "../helpers/mergeClasses";

export const BadgeVariants = {
  fill: "fill",
  soft: "soft",
  outline: "outline",
} as const;

type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: keyof typeof BadgeVariants;
  context?: keyof typeof Contexts;
};

export const Badge = ({
  children,
  className,
  variant = BadgeVariants.fill,
  context = Contexts.brand,
}: BadgeProps) => (
  <span
    className={mergeClasses(
      "moon-badge",
      variant !== BadgeVariants.fill && `moon-badge-${variant}`,
      context !== Contexts.brand && `moon-badge-${context}`,
      className
    )}
  >
    {children}
  </span>
);

export const BadgeWrapper = ({ children, className }: BadgeProps) => (
  <div className={mergeClasses("moon-badge-wrapper", className)}>
    {children}
  </div>
);
