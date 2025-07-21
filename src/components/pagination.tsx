import React, { createContext, useContext } from "react";
import { MoreHorizontalIcon } from "lucide-react";
import ArrowLeft from "../assets/icons/ArrowLeftIcon";
import ArrowRight from "../assets/icons/ArrowRightIcon";
import mergeClasses from "../helpers/mergeClasses";

type PaginationContextType = {
  page: number;
  setPage: (page: number) => void;
};

const PaginationContext = createContext<PaginationContextType>({
  page: 0,
  setPage: () => {},
});

function Pagination({
  children,
  page,
  setPage,
}: React.ComponentProps<"nav"> & {
  page: number;
  setPage: (page: number) => void;
}) {
  return (
    <PaginationContext.Provider value={{ page, setPage }}>
      {children}
    </PaginationContext.Provider>
  );
}

function PaginationContent({
  className,
  children,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      {...props}
    >
      <ul className="moon-pagination" {...props}>
        {children}
      </ul>
    </nav>
  );
}

function PaginationItem({
  index,
  className,
  ...props
}: React.ComponentProps<"li"> & { index: number }) {
  const { page, setPage } = useContext(PaginationContext);
  return (
    <li
      onClick={(e) => {
        e.preventDefault();
        setPage(index);
      }}
      className={mergeClasses(
        "moon-pagination-item",
        { "moon-pagination-item-active": page === index },
        className
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: { className?: string }) {
  return (
    <PaginationItem aria-label="Go to previous page" {...props} index={-1}>
      <ArrowLeft />
      <span>Previous</span>
    </PaginationItem>
  );
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationItem>) {
  return (
    <PaginationItem aria-label="Go to next page" {...props} index={-1}>
      <span>Next</span>
      <ArrowRight />
    </PaginationItem>
  );
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span aria-hidden {...props}>
      <MoreHorizontalIcon />
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
