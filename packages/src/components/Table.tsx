import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type TableSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

export type TableProps = React.ComponentProps<"table"> & {
  size?: TableSizes;
};

export const Table = ({ className, size = "md", ...props }: TableProps) => (
  <table
    data-slot="table"
    className={mergeClasses(
      "moon-table",
      size !== "md" && `moon-table-${size}`
    )}
    {...props}
  />
);

export const TableHead = ({
  className,
  ...props
}: React.ComponentProps<"thead">) => (
  <thead data-slot="table-head" className={className} {...props} />
);

export const TableBody = ({
  className,
  ...props
}: React.ComponentProps<"tbody">) => (
  <tbody data-slot="table-body" className={className} {...props} />
);

export const TableFoot = ({
  className,
  ...props
}: React.ComponentProps<"tfoot">) => (
  <tfoot data-slot="table-foot" className={className} {...props} />
);

export const TableRow = ({
  className,
  ...props
}: React.ComponentProps<"tr">) => (
  <tr data-slot="table-row" className={className} {...props} />
);

export const TableHeadCell = ({
  className,
  ...props
}: React.ComponentProps<"th">) => (
  <th data-slot="table-head-cell" {...props} className={className} />
);

export const TableCell = ({
  className,
  ...props
}: React.ComponentProps<"td">) => (
  <td data-slot="table-cell" {...props} className={className} />
);

export const TableCaption = ({
  className,
  ...props
}: React.ComponentProps<"caption">) => (
  <caption data-slot="table-caption" {...props} className={className} />
);
