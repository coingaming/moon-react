import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@heathmont/moon-react";
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
      <Table {...tableProps}>
        <Table.Head>
          <Table.Row>
            {cols.map((_, index) => (
              <Table.HeadCell key={index}>Title</Table.HeadCell>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((_, rowIndex) => (
            <Table.Row key={rowIndex}>
              {cols.map((_, colIndex) => (
                <Table.Cell key={colIndex}>Cell</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export default meta;

type Story = StoryObj<Type>;

export const TableStory: Story = { args: { size: "md" } };
