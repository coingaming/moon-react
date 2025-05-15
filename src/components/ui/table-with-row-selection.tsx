import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import { DataTable } from "./data-table/data-table";
import type { DataTableProps } from "./dataTypes";

export function TableWithRowSelection<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return (
    <div>
      <DataTable table={table} />
    </div>
  );
}
