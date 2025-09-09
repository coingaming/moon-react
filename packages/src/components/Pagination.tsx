import React, { createContext, useContext, useState } from "react";
import ArrowLeft from "../assets/icons/ArrowLeftIcon";
import ArrowRight from "../assets/icons/ArrowRightIcon";
import mergeClasses from "../helpers/mergeClasses";

export type PaginationContextType = {
  page: number;
  setPage: (page: number | ((page: number) => number)) => void;
  length: number;
};

export type PaginationProps = {
  children: React.ReactNode;
  className?: string;
  defaultPage?: number;
  length: number;
};

export type PaginationItemProps = React.ComponentProps<"li"> & {
  index: number;
  isActive?: boolean;
};

export type PaginationArrowsProps = React.ComponentProps<"span">;

const PaginationContext = createContext<PaginationContextType>({
  page: 0,
  setPage: () => {},
  length: 0,
});

export const Pagination = ({
  children,
  className,
  defaultPage = 0,
  length,
}: PaginationProps) => {
  const [page, setPage] = useState(defaultPage);

  return (
    <PaginationContext.Provider value={{ page, setPage, length }}>
      <nav role="navigation" aria-label="pagination">
        <ul className={mergeClasses("moon-pagination", className)}>
          {children}
        </ul>
      </nav>
    </PaginationContext.Provider>
  );
};

function usePaginationContext() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "Pagination components must be used within <Pagination> wrapper"
    );
  }
  return context;
}

export const PaginationItem = ({
  index,
  isActive,
  className,
  ...props
}: PaginationItemProps) => {
  const { page, setPage } = usePaginationContext();
  return (
    <li
      className={mergeClasses(
        "moon-pagination-item",
        page === index && "moon-pagination-item-active",
        className
      )}
      onClick={() => {
        setPage(index);
      }}
      {...props}
    />
  );
};

export const PaginationPrevious = ({ ...props }: PaginationArrowsProps) => {
  const { setPage } = usePaginationContext();

  return (
    <span
      onClick={() => {
        setPage((prevPage: number) => (prevPage > 0 ? prevPage - 1 : prevPage));
      }}
      {...props}
    >
      <ArrowLeft />
    </span>
  );
};

export const PaginationNext = ({ ...props }: PaginationArrowsProps) => {
  const { setPage, length } = usePaginationContext();

  return (
    <span
      onClick={() => {
        setPage((prevPage: number) =>
          prevPage < length - 1 ? prevPage + 1 : prevPage
        );
      }}
      {...props}
    >
      <ArrowRight />
    </span>
  );
};
