import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table as TableComponent } from "@moondesignsystem/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof TableComponent>;

const meta: Meta<Type> = {
  title: "Content display/Table",
  parameters: {
    docs: {
      container: ({ context }: any) => (
        <LinksBlock context={context} component="Table" />
      ),
    },
  },
  argTypes: {
    size: {
      description: "Defines Table row size",
      options: ["sm", "md", "lg", "xl"],
      control: "select",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  render: ({ size, ...props }) => {
    const tableProps = {
      ...props,
      ...(size !== "md" && { size }),
    };
    const rows = new Array(5).fill("");
    const cols = new Array(3).fill("");
    return (
      <TableComponent {...tableProps}>
        <TableComponent.Head>
          <TableComponent.Row>
            {cols.map((_, index) => (
              <TableComponent.HeadCell key={index}>
                Title
              </TableComponent.HeadCell>
            ))}
          </TableComponent.Row>
        </TableComponent.Head>
        <TableComponent.Body>
          {rows.map((_, rowIndex) => (
            <TableComponent.Row key={rowIndex}>
              {cols.map((_, colIndex) => (
                <TableComponent.Cell key={colIndex}>Cell</TableComponent.Cell>
              ))}
            </TableComponent.Row>
          ))}
        </TableComponent.Body>
      </TableComponent>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const Table: Story = {
  args: { size: "md" },
  parameters: {
    docs: {
      description: {
        story:
          "Basic Table example with simple rows and columns. This shows the default Table structure with header and data cells.",
      },
    },
  },
};

const TanstackTableExample = ({ size, ...props }: Type) => {
  const tableProps = {
    ...props,
    ...(size !== "md" && { size }),
  };

  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  };

  const defaultData: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
  ];

  const columnHelper = createColumnHelper<Person>();
  const columns = [
    columnHelper.accessor((row) => row.firstName, {
      id: "firstName",
      cell: (info) => info.getValue(),
      header: () => <span>First Name</span>,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
    }),
  ];

  const [data] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableComponent {...tableProps}>
      <TableComponent.Head>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableComponent.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableComponent.HeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableComponent.HeadCell>
            ))}
          </TableComponent.Row>
        ))}
      </TableComponent.Head>
      <TableComponent.Body>
        {table.getRowModel().rows.map((row) => (
          <TableComponent.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableComponent.Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableComponent.Cell>
            ))}
          </TableComponent.Row>
        ))}
      </TableComponent.Body>
    </TableComponent>
  );
};

export const TableWithTanstackTable: Story = {
  args: { size: "md" },
  parameters: {
    docs: {
      description: {
        story: `Advanced Table example integrating with <a href="https://tanstack.com/table/latest" target="_blank">TanStack Table</a>. This story demonstrates how to use Moon Table component with TanStack Table for features like sorting, filtering, and advanced data management.`,
      },
      source: {
        code: `import { useState } from "react";
import { Table } from "@moondesignsystem/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const TableWithTanstackTable = ({ size, ...props }) => {
  const tableProps = {
    ...props,
    ...(size !== "md" && { size }),
  };

  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  };

  const defaultData: Person[] = [
    {
      firstName: "tanner",
      lastName: "linsley",
      age: 24,
      visits: 100,
      status: "In Relationship",
      progress: 50,
    },
    {
      firstName: "tandy",
      lastName: "miller",
      age: 40,
      visits: 40,
      status: "Single",
      progress: 80,
    },
    {
      firstName: "joe",
      lastName: "dirte",
      age: 45,
      visits: 20,
      status: "Complicated",
      progress: 10,
    },
  ];

  const columnHelper = createColumnHelper<Person>();
  const columns = [
    columnHelper.accessor((row) => row.firstName, {
      id: "firstName",
      cell: (info) => info.getValue(),
      header: () => <span>First Name</span>,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: "lastName",
      cell: (info) => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("age", {
      header: () => "Age",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("visits", {
      header: () => <span>Visits</span>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
    }),
    columnHelper.accessor("progress", {
      header: "Profile Progress",
    }),
  ];

  const [data] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table {...tableProps}>
      <Table.Head>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.HeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Table.HeadCell>
            ))}
          </Table.Row>
        ))}
      </Table.Head>
      <Table.Body>
        {table.getRowModel().rows.map((row) => (
          <Table.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Table.Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};`,
      },
    },
  },
  render: (args) => <TanstackTableExample {...args} />,
};
