import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type MenuSizes = Extract<Sizes, "sm" | "md" | "lg">;

export type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

export type MenuProps = BaseProps & {
  size?: MenuSizes;
};

export const Menu = ({ size = "md", children, className }: MenuProps) => (
  <ul
    className={mergeClasses(
      "moon-menu",
      size !== "md" && `moon-menu-${size}`,
      className
    )}
  >
    {children}
  </ul>
);

export const MenuItem = ({ children, className }: BaseProps) => (
  <li className={className}>{children}</li>
);
