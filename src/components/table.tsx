import * as React from "react";
import mergeClasses from "../helpers";

export enum TableSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

function Table({
  className,
  size = TableSizes.md,
  ...props
}: React.ComponentProps<"table"> & { size?: TableSizes }) {
  return (
    <div data-slot="table-container">
      <table
        data-slot="table"
        className={mergeClasses(
          "moon-table",
          size !== TableSizes.md && `moon-table-${size}`
        )}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={className} {...props} />;
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={className} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return <tfoot data-slot="table-footer" className={className} {...props} />;
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return <tr data-slot="table-row" className={className} {...props} />;
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return <th data-slot="table-head" {...props} className={className} />;
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return <td data-slot="table-cell" {...props} className={className} />;
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return <caption data-slot="table-caption" {...props} className={className} />;
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
