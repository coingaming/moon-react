import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type MenuSizes = Extract<Sizes, "sm" | "md" | "lg">;

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type MenuProps = BaseProps & {
  size?: MenuSizes;
};

const Item = ({ children, className }: BaseProps) => (
  <li className={mergeClasses("moon-menu-item", className)}>{children}</li>
);

const Meta = ({ children, className }: BaseProps) => (
  <div className={mergeClasses("moon-menu-item-meta", className)}>
    {children}
  </div>
);

const Root = ({ size = "md", children, className }: MenuProps) => (
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

Root.displayName = "Menu";
Item.displayName = "Menu.Item";
Meta.displayName = "Menu.Meta";

const Menu = Object.assign(Root, { Item, Meta });

export default Menu;
