import mergeClasses from "../helpers/mergeClasses";

export enum MenuSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type MenuProps = BaseProps & {
  size?: MenuSizes;
};

export const Menu = ({
  size = MenuSizes.md,
  children,
  className,
}: MenuProps) => (
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

export const MenuItem = ({ children, className }: BaseProps) => (
  <li className={className}>{children}</li>
);
