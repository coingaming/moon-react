import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type ListSizes = Extract<Sizes, "sm" | "md" | "lg">;

type ListProps = React.ComponentProps<"ul"> & {
  size?: ListSizes;
  children: React.ReactNode;
};

const Item = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li"> & {
  children: React.ReactNode;
  className?: string;
}) => (
  <li className={mergeClasses("moon-list-item", className)} {...props}>
    {children}
  </li>
);

const Meta = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={mergeClasses("moon-list-item-meta", className)} {...props}>
    {children}
  </div>
);

const Root = ({ size = "md", children, className, ...props }: ListProps) => (
  <ul
    className={mergeClasses(
      "moon-list",
      size !== "md" && `moon-list-${size}`,
      className
    )}
    {...props}
  >
    {children}
  </ul>
);

Root.displayName = "List";
Item.displayName = "List.Item";
Meta.displayName = "List.Meta";

const List = Object.assign(Root, { Item, Meta });

export default List;
