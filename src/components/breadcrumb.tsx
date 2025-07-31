import React, { createContext, FC, ReactNode, useContext } from "react";
import mergeClasses from "../helpers/mergeClasses";

export type BreadCrumbContext = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export type BreadcrumbProps = BreadCrumbContext & {
  children: ReactNode;
};

export type BreadcrumbListProps = React.ComponentProps<"ol">;

export type BreadcrumpItemProps = React.ComponentProps<"li"> & {
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

const Breadcrumb: FC<BreadcrumbProps> = ({
  children,
  currentPage,
  setCurrentPage,
}) => (
  <BreadcrumbContext.Provider value={{ currentPage, setCurrentPage }}>
    {children}
  </BreadcrumbContext.Provider>
);

const BreadcrumbList: FC<BreadcrumbListProps> = ({ className, ...props }) => (
  <nav>
    <ol className={mergeClasses("moon-breadcrumb", className)} {...props} />
  </nav>
);

const BreadcrumbItem: FC<BreadcrumpItemProps> = ({
  className,
  index,
  ...props
}) => {
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

export { Breadcrumb, BreadcrumbList, BreadcrumbItem };
