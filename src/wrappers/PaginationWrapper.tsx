import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/pagination";

const PaginationWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3];

  return (
    <Pagination>
      <PaginationContent>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
              }}
              className={
                currentPage === page ? "moon-pagination-item-active" : ""
              }
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWrapper;
