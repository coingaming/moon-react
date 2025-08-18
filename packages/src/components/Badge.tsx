import mergeClasses from "../helpers/mergeClasses";

type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Badge = ({ children, className }: BadgeProps) => (
  <span className={mergeClasses("moon-badge", className)}>{children}</span>
);

export const BadgeWrapper = ({ children, className }: BadgeProps) => (
  <div className={mergeClasses("moon-badge-wrapper", className)}>
    {children}
  </div>
);
