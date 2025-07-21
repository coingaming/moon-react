import React, { createContext, ReactNode, useContext } from "react";
import mergeClasses from "../helpers/mergeClasses";

type BreadCrumbContext = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

type BreadcrumbProps = BreadCrumbContext & {
  children: ReactNode;
};

const BreadcrumbContext = createContext<BreadCrumbContext>({
  currentPage: 1,
  setCurrentPage: (_page: number) => {},
});

function useBreadcrumbContext() {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    throw new Error(
      "Breadcrumb components must be used within <Breadcrumb> wrapper"
    );
  }

  return context;
}

function Breadcrumb({
  children,
  currentPage,
  setCurrentPage,
}: BreadcrumbProps) {
  return (
    <BreadcrumbContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

function BreadcrumbList({
  className,
  ...props
}: React.ComponentProps<"ol"> & { dataTestId?: string }) {
  return (
    <nav>
      <ol className={mergeClasses("moon-breadcrumb", className)} {...props} />
    </nav>
  );
}

function BreadcrumbItem({
  className,
  index,
  ...props
}: React.ComponentProps<"li"> & {
  index: number;
  dataTestId?: string;
}) {
  const { currentPage, setCurrentPage } = useBreadcrumbContext();
  const isCurrentItemSelected = currentPage === index;

  return (
    <li
      {...(isCurrentItemSelected ? { "aria-current": "page" } : {})}
      className={mergeClasses("moon-breadcrumb-item", className, {
        "moon-breadcrumb-item-active": isCurrentItemSelected,
      })}
      onClick={() => {
        setCurrentPage(index);
      }}
      {...props}
    />
  );
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem };
