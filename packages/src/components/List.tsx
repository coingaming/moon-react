import React, { ReactNode } from "react";
import mergeClasses from "../helpers/mergeClasses";

export enum ListSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

type Props = React.ComponentProps<"ul"> & {
  size?: ListSizes;
  children: ReactNode;
};

export const List = ({ size = ListSizes.md, children, ...props }: Props) => (
  <ul
    className={mergeClasses(
      "moon-list",
      size !== ListSizes.md && `moon-list-${size}`
    )}
    {...props}
  >
    {children}
  </ul>
);

export const ListItem = ({
  children,
  ...props
}: React.ComponentProps<"li"> & { children: ReactNode | string }) => (
  <li {...props}>{children}</li>
);

export default List;
