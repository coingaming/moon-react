import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHead,
  TableBody,
  TableHeadCell,
  TableCell,
  TableRow,
  TableSizes,
} from "@heathmont/moon-react";
import LinksBlock from "../shared/LinksBlock";

type Type = React.ComponentProps<typeof Table>;

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
      options: Object.values(TableSizes),
      control: "select",
      table: {
        defaultValue: { summary: TableSizes.md },
      },
    },
  },
  render: ({ size, ...props }) => {
    const tableProps = {
      ...props,
      ...(size !== TableSizes.md && { size }),
    };
    const rows = new Array(5).fill("");
    const cols = new Array(3).fill("");
    return (
      <Table {...tableProps}>
        <TableHead>
          <TableRow>
            {cols.map((_, index) => (
              <TableHeadCell key={index}>Title</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {cols.map((_, colIndex) => (
                <TableCell key={colIndex}>Cell</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TableStory: Story = { args: { size: TableSizes.md } };
