import React, { createContext, FC, useContext } from "react";
import ArrowLeft from "../assets/icons/ArrowLeftIcon";
import ArrowRight from "../assets/icons/ArrowRightIcon";
import mergeClasses from "../helpers/mergeClasses";

export type PaginationContextType = {
  page: number;
  setPage: (page: number | ((page: number) => number)) => void;
  length: number;
};

export type PaginationProps = React.ComponentProps<"nav"> &
  PaginationContextType;

export type PaginationContentProps = React.ComponentProps<"ul">;

export type PaginationItemProps = React.ComponentProps<"li"> & {
  index: number;
  isActive: boolean;
};

export type PaginationArrowsProps = React.ComponentProps<"span">;

const PaginationContext = createContext<PaginationContextType>({
  page: 0,
  setPage: () => {},
  length: 0,
});

const Pagination: FC<PaginationProps> = ({
  children,
  page,
  setPage,
  length,
}) => (
  <PaginationContext.Provider value={{ page, setPage, length }}>
    {children}
  </PaginationContext.Provider>
);

function usePaginationContext() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "Pagination components must be used within <Pagination> wrapper"
    );
  }
  return context;
}

const PaginationContent: FC<PaginationContentProps> = ({
  className,
  children,
  ...props
}) => (
  <nav role="navigation" aria-label="pagination" {...props}>
    <ul className="moon-pagination" {...props}>
      {children}
    </ul>
  </nav>
);

const PaginationItem: FC<PaginationItemProps> = ({
  index,
  isActive,
  className,
  ...props
}) => {
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

const PaginationPrevious: FC<PaginationArrowsProps> = (props) => {
  const { setPage } = usePaginationContext();

  return (
    <span
      onClick={() => {
        setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
      }}
      {...props}
    >
      <ArrowLeft />
    </span>
  );
};

const PaginationNext: FC<PaginationArrowsProps> = (props) => {
  const { setPage, length } = usePaginationContext();

  return (
    <span
      onClick={() => {
        setPage((prevPage) =>
          prevPage < length - 1 ? prevPage + 1 : prevPage
        );
      }}
      {...props}
    >
      <ArrowRight />
    </span>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
};
