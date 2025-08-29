import mergeClasses from "../helpers/mergeClasses";

export enum ListSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

type Props = React.ComponentProps<"ul"> & {
  size?: ListSizes;
  children: React.ReactNode;
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
}: React.ComponentProps<"li"> & { children: React.ReactNode | string }) => (
  <li {...props}>{children}</li>
);
