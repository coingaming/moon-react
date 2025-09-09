import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type ListSizes = Extract<Sizes, "sm" | "md" | "lg">;

export type ListProps = React.ComponentProps<"ul"> & {
  size?: ListSizes;
  children: React.ReactNode;
};

export const List = ({ size = "md", children, ...props }: ListProps) => (
  <ul
    className={mergeClasses("moon-list", size !== "md" && `moon-list-${size}`)}
    {...props}
  >
    {children}
  </ul>
);

export const ListItem = ({
  children,
  ...props
}: React.ComponentProps<"li"> & { children: React.ReactNode | string }) => (
  <li {...props}>{children}</li>
);
