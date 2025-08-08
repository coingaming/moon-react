import React, { FC, ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum MenuSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

export type BaseProps = {
  children: ReactNode;
  className?: string;
};

export type MenuProps = BaseProps & {
  size?: MenuSizes;
};

const Menu: FC<MenuProps> = ({ size = MenuSizes.md, children, className }) => (
  <ul
    className={mergeClasses(
      "moon-menu",
      size !== MenuSizes.md && `moon-menu-${size}`,
      className
    )}
  >
    {children}
  </ul>
);

export const MenuItem: FC<BaseProps> = ({ children, className }) => (
  <li className={className}>{children}</li>
);

export default Menu;
