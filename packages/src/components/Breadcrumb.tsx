import React from "react";
import mergeClasses from "../helpers/mergeClasses";

type BreadcrumbProps = {
  children: React.ReactNode;
  className?: string;
};

type BreadcrumpItemProps = React.ComponentProps<"li"> & {
  isActive?: boolean;
};

const Item = ({ className, isActive, ...props }: BreadcrumpItemProps) => {
  return (
    <li
      className={mergeClasses(
        "moon-breadcrumb-item",
        isActive && "moon-breadcrumb-item-active",
        className
      )}
      {...props}
    />
  );
};

const Root = ({ children, className }: BreadcrumbProps) => (
  <nav>
    <ol className={mergeClasses("moon-breadcrumb", className)}>{children}</ol>
  </nav>
);

Root.displayName = "Breadcrumb";
Item.displayName = "Breadcrumb.Item";

const Breadcrumb = Object.assign(Root, {
  Item,
});

export default Breadcrumb;
