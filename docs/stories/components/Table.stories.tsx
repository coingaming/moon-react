import type { Meta, StoryObj } from "@storybook/react";
import { Table as TableComponent } from "@heathmont/moon-react";
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

export const Table: Story = { args: { size: "md" } };
