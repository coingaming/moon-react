import React from "react";
import mergeClasses from "../helpers/mergeClasses";
import type { Sizes } from "../types";

export type TableSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;

type TableProps = React.ComponentProps<"table"> & {
  size?: TableSizes;
};

const Head = ({ className, ...props }: React.ComponentProps<"thead">) => (
  <thead className={className} {...props} />
);

const Body = ({ className, ...props }: React.ComponentProps<"tbody">) => (
  <tbody className={className} {...props} />
);

const Foot = ({ className, ...props }: React.ComponentProps<"tfoot">) => (
  <tfoot className={className} {...props} />
);

const Row = ({ className, ...props }: React.ComponentProps<"tr">) => (
  <tr className={className} {...props} />
);

const HeadCell = ({ className, ...props }: React.ComponentProps<"th">) => (
  <th {...props} className={className} />
);

const Cell = ({ className, ...props }: React.ComponentProps<"td">) => (
  <td {...props} className={className} />
);

const Caption = ({ className, ...props }: React.ComponentProps<"caption">) => (
  <caption {...props} className={className} />
);

const Root = ({ className, size = "md", ...props }: TableProps) => (
  <table
    className={mergeClasses(
      "moon-table",
      size !== "md" && `moon-table-${size}`
    )}
    {...props}
  />
);

Root.displayName = "Table";
Head.displayName = "Table.Head";
Body.displayName = "Table.Body";
Foot.displayName = "Table.Foot";
Row.displayName = "Table.Row";
HeadCell.displayName = "Table.HeadCell";
Cell.displayName = "Table.Cell";
Caption.displayName = "Table.Caption";

const Table = Object.assign(Root, {
  Head,
  Body,
  Foot,
  Row,
  HeadCell,
  Cell,
  Caption,
});

export default Table;
