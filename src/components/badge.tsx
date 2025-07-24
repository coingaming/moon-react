import React, { FC } from "react";
import mergeClasses from "../helpers/mergeClasses";

export type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
};

const Badge: FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={mergeClasses("moon-badge", className)}>{children}</span>
  );
};

export const BadgeWrapper: FC<BadgeProps> = ({ children, className }) => {
  return (
    <div className={mergeClasses("moon-badge-wrapper", className)}>
      {children}
    </div>
  );
};

export default Badge;
