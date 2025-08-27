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
};

export const Badge = ({
  children,
  className,
  variant = BadgeVariants.fill,
}: BadgeProps) => (
  <span
    className={mergeClasses("moon-badge", className, `moon-badge-${variant}`)}
  >
    {children}
  </span>
);

export const BadgeWrapper = ({ children, className }: BadgeProps) => (
  <div className={mergeClasses("moon-badge-wrapper", className)}>
    {children}
  </div>
);
