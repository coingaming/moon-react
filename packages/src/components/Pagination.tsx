import React, { createContext, useContext, useState } from "react";
import ArrowLeft from "../assets/icons/ArrowLeft";
import ArrowRight from "../assets/icons/ArrowRight";
import mergeClasses from "../helpers/mergeClasses";

type PaginationContextType = {
  page: number;
  setPage: (page: number | ((page: number) => number)) => void;
  length: number;
};

type PaginationProps = {
  children: React.ReactNode;
  className?: string;
  defaultPage?: number;
  length: number;
};

type PaginationItemProps = React.ComponentProps<"li"> & {
  index: number;
  isActive?: boolean;
};

type PaginationArrowsProps = React.ComponentProps<"span">;

const PaginationContext = createContext<PaginationContextType>({
  page: 0,
  setPage: () => {},
  length: 0,
});

function usePaginationContext() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "Pagination components must be used within <Pagination> wrapper"
    );
  }
  return context;
}

const Item = ({
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

const Previous = ({ ...props }: PaginationArrowsProps) => {
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

const Next = ({ ...props }: PaginationArrowsProps) => {
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

const Root = ({
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

Root.displayName = "Pagination";
Item.displayName = "Pagination.Item";
Previous.displayName = "Pagination.Previous";
Next.displayName = "Pagination.Next";

const Pagination = Object.assign(Root, { Item, Previous, Next });

export default Pagination;
