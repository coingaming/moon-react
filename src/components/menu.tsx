import React, { ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum MenuSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

type MenuProps = {
  size?: MenuSizes;
  children: ReactNode;
  className?: string;
};

const Menu = ({ size = MenuSizes.md, children, className }: MenuProps) => {
  return (
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
};

export const MenuItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <li className={className}>{children}</li>;
};

export default Menu;
