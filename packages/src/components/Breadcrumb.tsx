import React, { createContext, useContext, useState } from "react";
import mergeClasses from "../helpers/mergeClasses";

type BreadCrumbContext = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

type BreadcrumbProps = {
  children: React.ReactNode;
  className?: string;
  defaultCurrentPage?: number;
};

type BreadcrumpItemProps = React.ComponentProps<"li"> & {
  index: number;
};

const BreadcrumbContext = createContext<BreadCrumbContext>({
  currentPage: 1,
  setCurrentPage: (_page: number) => {},
});

const useBreadcrumbContext = () => {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error(
      "Breadcrumb components must be used within <Breadcrumb> wrapper"
    );
  }

  return context;
};

const Item = ({ className, index, ...props }: BreadcrumpItemProps) => {
  const { currentPage, setCurrentPage } = useBreadcrumbContext();
  const isCurrentItemSelected = currentPage === index;
  return (
    <li
      aria-current={isCurrentItemSelected ? "page" : undefined}
      className={mergeClasses(
        "moon-breadcrumb-item",
        isCurrentItemSelected && "moon-breadcrumb-item-active",
        className
      )}
      onClick={() => {
        setCurrentPage(index);
      }}
      {...props}
    />
  );
};

const Root = ({
  children,
  className,
  defaultCurrentPage = 1,
}: BreadcrumbProps) => {
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  return (
    <BreadcrumbContext.Provider value={{ currentPage, setCurrentPage }}>
      <nav>
        <ol className={mergeClasses("moon-breadcrumb", className)}>
          {children}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
};

Root.displayName = "Breadcrumb";
Item.displayName = "Breadcrumb.Item";

const Breadcrumb = Object.assign(Root, {
  Item,
});

export default Breadcrumb;
