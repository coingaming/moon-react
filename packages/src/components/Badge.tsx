import { Contexts } from "../constants/contexts";
import mergeClasses from "../helpers/mergeClasses";

export enum BadgeVariants {
  fill = "fill",
  soft = "soft",
  outline = "outline",
}

type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: BadgeVariants;
  context?: Contexts;
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
