import React, { useState } from "react";
import ChevronLeft from "../assets/icons/ChevronLeft";
import ChevronRight from "../assets/icons/ChevronRight";
import mergeClasses from "../helpers/mergeClasses";
import type { Directions } from "../types";

type PaginationProps = {
  length: number;
  className?: string;
  activePage?: number;
  hasControls?: boolean;
  onPageChange?: (page: number) => void;
  renderItem?: (index: number) => React.ReactNode;
};

type PaginationItemProps = React.ComponentProps<"li"> & {
  pageIndex: number;
  onPageChange: (page: number) => void;
  currentPage: number;
};

const Item = ({
  className,
  children,
  pageIndex,
  onPageChange,
  currentPage,
  ...props
}: PaginationItemProps) => {
  const isActive = currentPage === pageIndex;
  return (
    <li
      className={mergeClasses(
        "moon-pagination-item",
        isActive && "moon-pagination-item-active",
        className
      )}
      onClick={() => onPageChange(pageIndex)}
      {...(isActive && { "aria-current": "page" })}
      {...props}
    >
      {children}
    </li>
  );
};

const Control = ({
  direction,
  className,
  disabled,
  onClick,
  ...props
}: React.ComponentProps<"li"> & {
  direction: Directions;
  disabled?: boolean;
}) => {
  const isRTL = React.useMemo(() => {
    if (typeof document === "undefined") return false;
    const paginationElement = document.querySelector(".moon-pagination");
    return paginationElement
      ? getComputedStyle(paginationElement).direction === "rtl"
      : false;
  }, []);
  return (
    <li
      className={mergeClasses(
        "moon-pagination-control",
        disabled && "moon-pagination-control-disabled",
        className
      )}
      onClick={disabled ? undefined : onClick}
      aria-label={direction === "previous" ? "Previous" : "Next"}
      {...(disabled && { "aria-disabled": "true" })}
      {...props}
    >
      {direction === "previous" ? (
        isRTL ? (
          <ChevronRight />
        ) : (
          <ChevronLeft />
        )
      ) : isRTL ? (
        <ChevronLeft />
      ) : (
        <ChevronRight />
      )}
    </li>
  );
};

const Pagination = ({
  length,
  className,
  activePage = 0,
  hasControls = false,
  onPageChange,
  renderItem,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page);
  };
  return (
    <nav role="navigation" aria-label="pagination">
      <ul className={mergeClasses("moon-pagination", className)}>
        {hasControls && (
          <Control
            direction="previous"
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        )}
        {Array.from({ length }, (_, index) => (
          <Item
            key={index}
            pageIndex={index}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          >
            {renderItem ? renderItem(index) : index + 1}
          </Item>
        ))}
        {hasControls && (
          <Control
            direction="next"
            disabled={currentPage === length - 1}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
      </ul>
    </nav>
  );
};

Pagination.displayName = "Pagination";

export default Pagination;
